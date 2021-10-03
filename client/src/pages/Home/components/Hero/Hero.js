import React, { useEffect, useState } from 'react';

//import styled-components
import { Container, NewestPost, PopularRecent, ImagePost, Title, Date, Label, BorderSection, ButtonSection, Card, CardImage, Image, CardBody, CardTitle, CardDate } from './Hero-Styles';

//import components
import Button from '../../../../components/core-ui/Buttons/Buttons';

// import services
import contentServices from '../../../../services/Content-Services';

// import helpers
import { convertDate } from '../../../../helpers/ConvertDate';

function Hero(props) {

    const [activeTab, setActiveTab] = useState(0);
    const [landingPost, setLandingPost] = useState([]);
    const [popularPost, setPopularPost] = useState([]);
    const [post, setPost] = useState([]);

    const limit = 4;
    useEffect(() => {

        contentServices.getLatestPost(limit)
            .then(content => {
                const randomNumber = Math.floor(Math.random() * content.data.length);

                setPopularPost(content.data);

                setLandingPost([{
                    id: content.data[randomNumber].id,
                    title: content.data[randomNumber].title,
                    category: content.data[randomNumber].category.category_name,
                    imagesId: content.data[randomNumber].images[0].id,
                    createdAt: content.data[randomNumber].createdAt
                }])
            })
            .catch(error => error);


        // all contentpost
        contentServices.getContentAll(limit)
            .then(response => setPost(response.data))
    }, []);


    const toggleTab = index => {
        setActiveTab(index);
    };

    const renderTab = () => {
        return activeTab === 0 ? popularPost : post;
    };

    const handleLink = (id, title) => {
        const regexTitle = title.replace(/\s+/g, "-").toLowerCase();
        const newLink = "/posts/" + id + "/" + regexTitle;

        return newLink;
    };

    return (
        <Container>
            <NewestPost>
                {landingPost.map(data => {
                    return (
                        <ImagePost to={handleLink(data.id, data.title)} url={"http://localhost:5000/api/images?id=" + data.imagesId} key={data.id}>
                            <Label>{data.category}</Label>
                            <Title>{data.title}</Title>
                            <Date>{convertDate(data.createdAt)}</Date>
                        </ImagePost>
                    );
                })}

            </NewestPost>

            <PopularRecent>
                <BorderSection>
                    <ButtonSection>
                        <Button theme={activeTab === 0 ? "main" : "secondary"} text="Popular" onClick={() => toggleTab(0)} />
                        <Button theme={activeTab === 1 ? "main" : "secondary"} text="Recent" onClick={() => toggleTab(1)} />
                    </ButtonSection>


                    {renderTab().map((data, index) => {
                        return (
                            <Card to={handleLink(data.id, data.title)} key={index}>
                                <CardImage>
                                    <Image url={"http://localhost:5000/api/images?id=" + data.images[0].id}></Image>
                                </CardImage>
                                <CardBody>
                                    <CardTitle>{data.title}</CardTitle>
                                    <CardDate>{convertDate(data.createdAt)}</CardDate>
                                </CardBody>
                            </Card>
                        );
                    })}


                </BorderSection>
            </PopularRecent>
        </Container>
    );
};

export default Hero;