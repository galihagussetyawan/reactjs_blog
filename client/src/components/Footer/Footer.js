import React from 'react';

// import styled components
import { Container, FooterSection, FooterLogo, Logo, Text, FooterColumn, FooterHeader, FooterList, List } from './Footer-Styled';

function Footer() {
    return (
        <Container>
            <FooterSection>
                <FooterLogo>
                    <Logo>Loka</Logo>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </FooterLogo>

                <FooterColumn>
                    <FooterHeader>Features</FooterHeader>
                    <FooterList>
                        <List>Overview</List>
                        <List>Design</List>
                        <List>Content</List>
                        <List>Store</List>
                        <List>Hosting</List>
                        <List>SEO</List>
                        <List>Videos</List>
                    </FooterList>
                </FooterColumn>

                <FooterColumn>
                    <FooterHeader>Designers</FooterHeader>
                    <FooterList>
                        <List>Overview</List>
                        <List>Flexibility</List>
                        <List>Profit</List>
                        <List>Rewards</List>
                        <List>Stories</List>
                    </FooterList>
                </FooterColumn>

                <FooterColumn>
                    <FooterHeader>Resources</FooterHeader>
                    <FooterList>
                        <List>Support</List>
                        <List>FAQ</List>
                        <List>Forum</List>
                        <List>TOS</List>
                        <List>Privacy Policy</List>
                    </FooterList>
                </FooterColumn>

                <FooterColumn>
                    <FooterHeader>Updates</FooterHeader>
                    <FooterList>
                        <List>Blog</List>
                        <List>Twitter</List>
                        <List>Facebook</List>
                        <List>Status</List>
                    </FooterList>
                </FooterColumn>
            </FooterSection>
        </Container>
    );
};

export default Footer;