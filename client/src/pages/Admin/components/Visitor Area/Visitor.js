import React, { Fragment, useState, useEffect } from "react";

//import styled components
import { Container, VisitorContainer, HeadingTitle, ColumnSection, InnerSection, IPColumn, CountryCodeColumn, CountryNameColumn, CityColumn, StateColumn, PageColumn, OSColumn } from './Visitor-Styled';
import { GlobalStyle as StyleAll } from '../../../../components/core-ui/GlobalStyle';

//imoprt components
import VisitorList from './components/Visitor-List';

//import services
import visitorServices from '../../../../services/Visitor-Service';

//import core-ui
import Pagination from "../../../../components/core-ui/Pagination/Pagination";

function Visitor(props) {
    const [visitorList, setVisitorList] = useState([]);
    const [totalPost, setTotalPost] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);


    const pages = [];
    for (let i = 1; i <= Math.ceil(totalPost / itemsPerPage); i++) {
        pages.push(i - 1);
    }

    useEffect(() => {
        visitorServices.getAllVisitor(itemsPerPage, currentPage)
            .then(response => {
                setVisitorList(response.data.contents);
                setTotalPost(response.data.totalItems);
            })

    }, [currentPage]);


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


    return (
        <Fragment>
            <StyleAll />
            <Container>
                <VisitorContainer>
                    <HeadingTitle>Visitor Area</HeadingTitle>

                    {/* head table list */}
                    <ColumnSection>
                        <IPColumn>
                            <InnerSection>IP ADDRESS</InnerSection>
                        </IPColumn>
                        <CountryCodeColumn>
                            <InnerSection>COUNTRY CODE</InnerSection>
                        </CountryCodeColumn>
                        <CountryNameColumn>
                            <InnerSection>COUNTRY NAME</InnerSection>
                        </CountryNameColumn>
                        <CityColumn>
                            <InnerSection>CITY</InnerSection>
                        </CityColumn>
                        <StateColumn>
                            <InnerSection>STATE</InnerSection>
                        </StateColumn>
                        <PageColumn>
                            <InnerSection>PAGE</InnerSection>
                        </PageColumn>
                        <OSColumn>
                            <InnerSection>OS</InnerSection>
                        </OSColumn>
                    </ColumnSection>

                    {/* visitor list */}
                    {visitorList.map((data, index) => {
                        return (
                            <VisitorList
                                background={index % 2 == 0 ? true : false}
                                ipAddress={data.ip_address}
                                countryCode={data.country_code}
                                countryName={data.country_name}
                                city={data.city}
                                state={data.state}
                                page={data.page}
                                os={data.os}
                            />
                        );
                    })}

                    <ColumnSection>
                        <Pagination
                            pageAll={pages}
                            buttonClick={handleClick}
                            prevButton={handlePrevButton}
                            nextButton={handleNextButton}
                            currentNumber={currentPage}
                            disabledPrevButton={currentPage === pages[0] ? true : false}
                            disabledNextButton={currentPage === pages[pages.length - 1] ? true : false}
                        />
                    </ColumnSection>

                </VisitorContainer>
            </Container>
        </Fragment>
    );
};

export default Visitor;