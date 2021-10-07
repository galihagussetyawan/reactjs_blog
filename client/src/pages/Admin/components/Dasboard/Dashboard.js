//import styled components
import React, { useState, useEffect } from 'react';

import { DashboardContainer, InformationPostSection, ColumnSection, TitleColumn, CreationDateColumn, LastUpdateColumn, CategoryColumn, ActionsColumn } from './Dashboard-Styled';

// import components
import WelcomeDashboard from './components/WelcomeDasboard/WelcomeDashboard';
import StatusDashboard from './components/StatusDashboard/StatusDashboard';
import ContentList from './components/ContentList/ContentList';

//import services
import contentServices from '../../../../services/Content-Services';
import visitorServices from '../../../../services/Visitor-Service';
import { imageServices } from '../../../../services/Image-Services';

// import helper
import { convertDate } from '../../../../helpers/ConvertDate';

//import Core-Ui
import Pagination from '../../../../components/core-ui/Pagination/Pagination';

function Dashboard() {
    const [post, setPost] = useState([]);
    const [totalPost, setTotalPost] = useState();
    const [visitor, setVisitor] = useState();

    // pages
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);


    const pages = [];
    for (let i = 1; i <= Math.ceil(totalPost / itemsPerPage); i++) {
        pages.push(i - 1);
    }


    const handleClick = event => {
        setCurrentPage(Number(event.target.id));
    };

    const handleNextButton = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            return null;
        }
    };

    const handlePrevButton = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else {
            return null;
        }
    };


    useEffect(() => {
        contentServices.getAllPostPage(itemsPerPage, currentPage)
            .then(response => {
                setPost(response.contents);
                setTotalPost(response.totalItems);
            })

    }, [currentPage]);

    useEffect(() => {
        visitorServices.getAllVisitor(1, 1)
            .then(response => setVisitor(response.data.totalItems))
    }, []);


    //action handle delete post
    const handleDeletePost = (imageId, postId) => {
        return () => {
            imageServices.deleteImage(imageId)
                .then(response => console.log(response))
            contentServices.deletePost(postId)
                .then(response => console.log(response))
        };
    };

    return (
        <DashboardContainer>
            <InformationPostSection>

                {/* components */}
                <WelcomeDashboard />

                {/* Status Dashboard */}
                <StatusDashboard
                    postLength={totalPost}
                    draftLength={totalPost}
                    visitedLength={visitor}
                />


                {/* Content List */}
                <ColumnSection>
                    <TitleColumn>CONTENT TITLE AND DESCRIPTION</TitleColumn>
                    <CreationDateColumn>CREATION DATE</CreationDateColumn>
                    <LastUpdateColumn>LAST UPDATE</LastUpdateColumn>
                    <CategoryColumn>CATEGORY</CategoryColumn>
                    <ActionsColumn>ACTIONS</ActionsColumn>
                </ColumnSection>

                {post.map(data => {
                    return (
                        <ContentList
                            to={"/post/edit/" + data.id}
                            key={data.id}
                            titleContent={data.title}
                            creationDate={convertDate(data.createdAt)}
                            lastUpdate={convertDate(data.updatedAt)}
                            category={data.category.category_name}
                            deleteButton={handleDeletePost(data.images[0].id, data.id)}
                        />
                    );
                })}

                <Pagination
                    pageAll={pages}
                    buttonClick={handleClick}
                    prevButton={handlePrevButton}
                    nextButton={handleNextButton}
                    currentNumber={currentPage}
                    disabledPrevButton={currentPage === pages[0] ? true : false}
                    disabledNextButton={currentPage === pages[pages.length - 1] ? true : false}
                />


            </InformationPostSection>

        </DashboardContainer>
    );
};

export default Dashboard;