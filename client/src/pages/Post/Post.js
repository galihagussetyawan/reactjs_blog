import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import HTMLParse from 'html-react-parser';

//import styled components
import { PostContainer, PostSection, TitlePost, DatePost, ImagePost, ContentPost } from './Post-Styled';

//import global style
import { GlobalStyle as StyleAll } from '../../components/core-ui/GlobalStyle';

//import components
import Header from './components/Header/Header';
import Footer from '../../components/Footer/Footer';

//import services
import contentServices from '../../services/Content-Services';
import IPAddressService from '../../services/IPAddress-Service';
import visitorService from '../../services/Visitor-Service';

//import helper
import { convertDate } from '../../helpers/ConvertDate';

function Post() {
    let { id, title } = useParams();

    const [content, setContent] = useState([]);

    useEffect(() => {

        contentServices.getContent(id)
            .then(response => setContent([response.data]));

    }, []);

    useEffect(() => {
        const page = "post";
        const postId = id;

        const timer = setTimeout(() => {

            IPAddressService.getIPAddress()
                .then(dataIp => {

                    visitorService.createVisitor(dataIp.IPv4, dataIp.country_code, dataIp.country_name, dataIp.city, dataIp.state, "Linux", page, postId)
                });

            visitorService.updateVisitorPost(postId)

        }, 6000);

        return () => clearTimeout(timer);

    }, []);


    return (
        <React.Fragment>
            <StyleAll />
            <Header />
            <PostContainer>

                {content.slice(0).map(data => {
                    return (
                        <PostSection key={data.id}>
                            <TitlePost>{data.title}</TitlePost>
                            <DatePost>{convertDate(data.createdAt)}</DatePost>
                            <ImagePost src={"http://localhost:5000/api/images?id=" + data.images[0].id} />
                            <ContentPost>{HTMLParse(`${data.content}`)}</ContentPost>
                        </PostSection>
                    );
                })}


            </PostContainer>
            <Footer />
        </React.Fragment>
    );
};

export default Post;