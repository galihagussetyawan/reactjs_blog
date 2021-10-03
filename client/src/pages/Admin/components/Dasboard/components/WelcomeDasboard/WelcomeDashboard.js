import React, { useEffect, useState } from 'react';

// import styled components
import { WelcomeSection, Title, Description } from './WelcomeDashboard-Styled';

function WelcomeDashboard() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("currentUser"));

        setFirstname(data.firstname);
        setLastname(data.lastname);

    }, []);

    return (

        <WelcomeSection>
            <Title>Welcome back {firstname.charAt(0).toUpperCase() + firstname.slice(1)} {lastname.charAt(0).toUpperCase() + lastname.slice(1)}</Title>
            <Description>You've learned 80% of your goal this week! Keep it up and improve your results!</Description>
        </WelcomeSection>

    );
};

export default WelcomeDashboard;