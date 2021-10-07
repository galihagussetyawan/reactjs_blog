import React from 'react';

// import styled components
import { StatusSection, PostStatus, CountStatus, InformationTitle, VisitedStatus, DraftStatus } from './StatusDashboard-Styled';


function StatusDashboard(props) {

    return (
        <StatusSection>
            <PostStatus>
                <CountStatus>{props.postLength}</CountStatus>
                <InformationTitle>Jumlah Post</InformationTitle>
            </PostStatus>

            <DraftStatus>
                <CountStatus>{props.draftLength}</CountStatus>
                <InformationTitle>Jumlah Draft</InformationTitle>
            </DraftStatus>

            <VisitedStatus>
                <CountStatus>{props.visitedLength}</CountStatus>
                <InformationTitle>Jumlah Kunjungan</InformationTitle>
            </VisitedStatus>
        </StatusSection>

    );
};

export default StatusDashboard;