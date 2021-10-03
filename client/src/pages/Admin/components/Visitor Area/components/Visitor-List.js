import React from "react";

//import styled components
import { ColumnSection, InnerSection, IPColumn, CountryCodeColumn, CountryNameColumn, CityColumn, StateColumn, PageColumn, OSColumn } from './Visitor-List-Styled';

function VisitorList(props) {
    return (
        <ColumnSection background={props.background}>
            <IPColumn>
                <InnerSection>{props.ipAddress}</InnerSection>
            </IPColumn>
            <CountryCodeColumn>
                <InnerSection>{props.countryCode}</InnerSection>
            </CountryCodeColumn>
            <CountryNameColumn>
                <InnerSection>{props.countryName}</InnerSection>
            </CountryNameColumn>
            <CityColumn>
                <InnerSection>{props.city}</InnerSection>
            </CityColumn>
            <StateColumn>
                <InnerSection>{props.state}</InnerSection>
            </StateColumn>
            <PageColumn>
                <InnerSection>{props.page}</InnerSection>
            </PageColumn>
            <OSColumn>
                <InnerSection>{props.os}</InnerSection>
            </OSColumn>
        </ColumnSection>
    );
};

export default VisitorList;