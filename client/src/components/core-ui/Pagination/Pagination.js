import React from 'react';

// import styled components
import { Container, Section, Button } from './Pagination-Styled';

function Pagination(props) {
    return (
        <Container>
            <Section>
                <Button
                    onClick={props.prevButton}
                    disabled={props.disabledPrevButton}
                >
                    Prev
                </Button>

                {props.pageAll.map((data, index) => {
                    return (
                        <Button
                            key={index}
                            id={index}
                            ref={props.ref}
                            onClick={props.buttonClick}
                            background={index === props.currentNumber ? true : false}
                        >
                            {index + 1}
                        </Button>
                    );
                })}
                <Button
                    onClick={props.nextButton}
                    disabled={props.disabledNextButton}
                >
                    Next
                </Button>
            </Section>
        </Container>
    );
};

export default Pagination;