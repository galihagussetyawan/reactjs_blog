import React from 'react';

//import styled components
import { SectionContent, ContentCard, TitleDescriptionSection, Icon, IconText, TitleContent, CreationDate, LastUpdate, Category, Actions, InnerSection, DeleteButton, EditButton } from './ContentList-Styled';

function ContentLIst(props) {
    return (
        <SectionContent>
            <ContentCard>

                <TitleDescriptionSection>
                    <Icon>
                        <IconText>JS</IconText>
                    </Icon>
                    <InnerSection>
                        <TitleContent>{props.titleContent}</TitleContent>
                    </InnerSection>
                </TitleDescriptionSection>

                <CreationDate>{props.creationDate}</CreationDate>
                <LastUpdate>{props.lastUpdate}</LastUpdate>
                <Category>{props.category}</Category>
                <Actions>
                    <DeleteButton onClick={props.deleteButton} >Delete</DeleteButton>
                    <EditButton to={props.to}>Edit</EditButton>
                </Actions>

            </ContentCard>
        </SectionContent>

    );
};

export default ContentLIst;