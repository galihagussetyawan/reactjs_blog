import React, { useState, useEffect } from 'react';

// import styled components
import { Container, TrendingContainer, Title, TrendingBorder, MainTrendingSection, MainTrendingCard, MainImage, MainDate, MainTitle, MainDescription, SubTrendingSection, SubTrendingCard, MiniImage, MiniTitle, SideTrendingConteiner, NewsLetterSection, NewsLetterBorder, CelebrationSection, CelebrationBorder } from './Trending-Styled';

//import service
import contentServices from '../../../../services/Content-Services';

//import helper
import { convertDate } from '../../../../helpers/ConvertDate';

function Trending() {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        contentServices.getTrendingContent()
            .then(response => setTrending(response))
    }, []);

    const handleLink = (id, title) => {
        const regexTitle = title.replace(/\s+/g, "-").toLowerCase();
        const newLink = "/posts/" + id + "/" + regexTitle;

        return newLink;
    };


    return (
        <Container>
            <TrendingContainer>
                <Title>Trending</Title>
                <TrendingBorder>
                    <MainTrendingSection>

                        {trending.slice(0, 2).map(data => {
                            return (
                                <MainTrendingCard to={handleLink(data.post.id, data.post.title)}>
                                    <MainImage url={"http://localhost:5000/api/images?id=" + data.post.images[0].id}></MainImage>
                                    <MainDate>{convertDate(data.post.createdAt)}</MainDate>
                                    <MainTitle>{data.post.title}</MainTitle>
                                    <MainDescription>For far away, behind find world mmountains, far from the coutries Volkas and Consonantia</MainDescription>
                                </MainTrendingCard>
                            );
                        })}

                    </MainTrendingSection>


                    <SubTrendingSection>
                        {trending.slice(2, trending.length).map(data => {
                            return (
                                <SubTrendingCard to={handleLink(data.post.id, data.post.title)}>
                                    <MiniImage url={"http://localhost:5000/api/images?id=" + data.post.images[0].id}></MiniImage>
                                    <MiniTitle>{data.post.title}</MiniTitle>
                                </SubTrendingCard>
                            );
                        })}



                    </SubTrendingSection>
                </TrendingBorder>

            </TrendingContainer>


            {/* side ternding section */}
            <SideTrendingConteiner>
                <NewsLetterSection>
                    <NewsLetterBorder>
                    </NewsLetterBorder>
                </NewsLetterSection>

                <CelebrationSection>
                    <CelebrationBorder>
                    </CelebrationBorder>
                </CelebrationSection>
            </SideTrendingConteiner>

        </Container>
    );
};

export default Trending;