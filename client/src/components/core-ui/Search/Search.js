import React from "react";

//import styled
import { Container, SearchInput } from './Search-Styled';

function Search(props) {
    return (
        <Container>
            <SearchInput
                placeholder="Search..."
                onChange={props.onChange}
                value={props.value}
                onFocus={props.onFocus}
            />
        </Container>
    );
};

export default Search;