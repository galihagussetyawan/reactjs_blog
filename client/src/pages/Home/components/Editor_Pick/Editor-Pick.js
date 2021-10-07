import React, { useEffect, useState } from 'react';

// import styled components
import { Container, EditorPickContainer, Title, EditorBorder, PopularSection, ImagePopular, InfoPopular, TitlePopular, TextPopular, CollectionSection, Card, CardImage, Image, CardBody, TitleCard, DateCard, SideSection, InfoWebSection, InfoWebLogo, InfoWebText, BorderInfoWeb, CategoryTopicSection, BorderCategory, CategoryHeading, CategoryList, List } from './Editor-Pick-Styles';

// imoprt services
import categoryServices from '../../../../services/category-service';
import contentServices from '../../../../services/Content-Services';

//import helpers
import { convertDate } from '../../../../helpers/ConvertDate';

function EditorPick(props) {

    const [categoryTopics, setCategoryTopics] = useState([]);

    //content
    const [content, setContent] = useState([]);
    const [limit, setLimit] = useState(6);

    useEffect(() => {
        categoryServices.getCategoryList()
            .then(response => setCategoryTopics(response.data))
    }, []);


    //content
    useEffect(() => {
        contentServices.getLatestPost(limit)
            .then(content => {
                setContent(content.data);
            })

    }, []);


    const handleLink = (id, title) => {
        const regexTitle = title.replace(/\s+/g, "-").toLowerCase();
        const newLink = "/posts/" + id + "/" + regexTitle;

        return newLink;
    };

    return (
        <Container>
            <EditorPickContainer>
                <Title>Editor's Pick</Title>
                <EditorBorder>

                    {content.slice(0, 1).map(data => {
                        return (
                            <PopularSection to={handleLink(data.id, data.title)}>
                                <ImagePopular url={"http://localhost:5000/api/images?id=" + data.images[0].id}></ImagePopular>
                                <InfoPopular>{convertDate(data.createdAt)}</InfoPopular>
                                <TitlePopular>{data.title}</TitlePopular>
                                <TextPopular>Far far away, behind the word mountains, far from the countries Vokalia and Conctantia</TextPopular>
                            </PopularSection>
                        );
                    })}

                    <CollectionSection>
                        {content.slice(1, content.length - 1).map(data => {
                            return (
                                <Card to={handleLink(data.id, data.title)}>
                                    <CardImage>
                                        <Image url={"http://localhost:5000/api/images?id=" + data.images[0].id}></Image>
                                    </CardImage>
                                    <CardBody>
                                        <TitleCard>{data.title}</TitleCard>
                                        <DateCard>{convertDate(data.createdAt)}</DateCard>
                                    </CardBody>
                                </Card>

                            );
                        })}


                    </CollectionSection>
                </EditorBorder>
            </EditorPickContainer>



            {/* side section */}
            <SideSection>

                {/* info web section side */}
                <InfoWebSection>
                    <BorderInfoWeb>
                        <InfoWebLogo>Loka</InfoWebLogo>
                        <InfoWebText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque</InfoWebText>
                    </BorderInfoWeb>
                </InfoWebSection>

                {/* Category section side */}
                <CategoryTopicSection>
                    <BorderCategory>
                        <CategoryHeading>Explore Topics</CategoryHeading>
                        <CategoryList>
                            {categoryTopics.map(data => {
                                return (
                                    <List key={data.id}>{data.category_name}</List>
                                )
                            })}
                        </CategoryList>

                    </BorderCategory>
                </CategoryTopicSection>

            </SideSection>

        </Container>
    );
};

export default EditorPick;