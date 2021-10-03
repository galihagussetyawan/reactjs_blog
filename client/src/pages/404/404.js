import React from 'react';

import { Container, Section, HeadingText, MessageText, Button } from './404-Styled';

// import core-ui
import { GlobalStyle as StyleAll } from '../../components/core-ui/GlobalStyle';

// import helpers
import { history } from '../../helpers/History';

function PageNotFound() {
    const handleClick = () => {
        history.push("/");
        window.location.reload(true);
    };

    return (
        <React.Fragment>
            <StyleAll />
            <Container>
                <Section>
                    <HeadingText>404</HeadingText>
                    <MessageText>WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</MessageText>
                    <Button onClick={handleClick} >GO HOME</Button>
                </Section>
            </Container>
        </React.Fragment>
    );
};

export default PageNotFound;