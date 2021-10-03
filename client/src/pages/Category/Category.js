import React, { Fragment, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

//import core-ui
import { GlobalStyle as StyleAll } from '../../components/core-ui/GlobalStyle';

//import components
import Header from '../../pages/Post/components/Header/Header';
import Footer from '../../components/Footer/Footer';

//import styled-components
import { Container, Section, CardSection, Card, Image, Label, Date, Title, Text } from './Category-Styled';

//import services
import ContentServices from '../../services/Content-Services';

//import helpers
import { convertDate } from '../../helpers/ConvertDate';
import { textMaxLength } from '../../helpers/Text-MaxLength';

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

function Category(props) {
    const { id } = useParams();

    const [content, setContent] = useState([]);

    useEffect(() => {
        ContentServices.getPostByCategory(id)
            .then(contents => {
                setContent(contents);
            })
    }, []);

    const handleLink = (id, title) => {
        const regexTitle = title.replace(/\s+/g, "-").toLowerCase();
        const newLink = "/posts/" + id + "/" + regexTitle;

        return newLink;
    };


    return (
        <Fragment>
            <StyleAll />
            <Header />
            <Container>
                <Section>
                    <CardSection>
                        {content.map(data => {
                            return (
                                <Card key={data.id} to={handleLink(data.id, data.title)}>
                                    <Image url={"http://localhost:5000/api/images?id=" + data.images[0].id}></Image>
                                    <Label>Javascript</Label>
                                    <Date>{convertDate(data.createdAt)}</Date>
                                    <Title>{data.title}</Title>
                                    <Text>{textMaxLength(text, 100)}</Text>
                                </Card>
                            );
                        })}


                    </CardSection>

                </Section>

            </Container>
            <Footer />
        </Fragment>
    );
};

export default Category;