import React, { forwardRef, Fragment, useEffect, useState } from "react";

//import core-ui
import { GlobalStyle as StyleAll } from '../../../core-ui/GlobalStyle';

//import styled components
import { Container, Section, Heading, Card, Title } from './search-content-styled';

function SearchContent(props) {

    const handleLink = (id, title) => {
        const regexTitle = title.replace(/\s+/g, "-").toLowerCase();
        const newLink = "/posts/" + id + "/" + regexTitle;

        return newLink;
    };


    return (
        <Fragment>
            <StyleAll />
            <Container ref={props.refSearch}>
                <Section>
                    <Heading>Search Results for "{props.searchValue}"</Heading>
                    {props.dataResult.map(data => {
                        return (
                            <Card to={handleLink(data.id, data.title)}>
                                <Title>{data.title}</Title>
                            </Card>
                        );
                    })}

                </Section>
            </Container>
        </Fragment>
    );
};

export default forwardRef(SearchContent);