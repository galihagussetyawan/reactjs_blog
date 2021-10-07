import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

//import styled components
import { AdminContainer, SidebarContainer, LogoContainer, LogoSection, Logo, MenuContainer, MenuSection, MenuItem, MenuList, MenuLink, DashboardContainer } from './Admin-Styled';
import { GlobalStyle as StyleAll } from '../../components/core-ui/GlobalStyle';

//import components
import Dashboard from './components/Dasboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import TextEditor from '../../components/Text-Editor/Text-Editor';
import Profile from '../Admin/components/Profile/Profile';
import Visitor from './components/Visitor Area/Visitor';

//import icons
import { UserIcon, SettingIcon, DraftIcon, PostIcon, NotificationIcon, VisitorIcon } from './components/icons/icons'

//import service
import { userService } from '../../services/User-Service';

// import helpers
import { history } from '../../helpers/History';

function Admin(props) {
    const [currentMenu, setCurrentMenu] = useState(0);
    const [username, setUsername] = useState();

    const currentUrl = window.location.pathname;

    const handleMenu = event => {
        setCurrentMenu(Number(event.target.id));
    };

    useEffect(() => {

        if (currentUrl === "/admin" || currentUrl === "/admin/") {
            setCurrentMenu(0);
        } else if (currentUrl === "/admin/profile") {
            setCurrentMenu(1);
        } else if (currentUrl === "/admin/post" || currentUrl === "/admin/post/edit/") {
            setCurrentMenu(2);
        } else if (currentUrl === "/admin/draft") {
            setCurrentMenu(3);
        } else if (currentUrl === "/admin/visitor") {
            setCurrentMenu(4);
        } else if (currentUrl === "/admin/notification") {
            setCurrentMenu(5);
        } else if (currentUrl === "/admin/setting") {
            setCurrentMenu(6);
        }

    }, [currentUrl]);


    return (
        <Router history={history} basename="/admin">
            <React.Fragment>
                <Helmet>
                    <title>Admin Dashboard</title>
                </Helmet>

                <StyleAll />
                <AdminContainer>
                    <SidebarContainer>
                        <LogoContainer>
                            <LogoSection>
                                <Logo >Loka</Logo>
                            </LogoSection>
                        </LogoContainer>

                        <MenuContainer>
                            <MenuSection>
                                <MenuItem>
                                    <MenuList>
                                        <MenuLink id="1" onClick={handleMenu} background={currentMenu === 1} color={currentMenu === 1} disable={true} to="/profile"><UserIcon /> Profile</MenuLink>
                                    </MenuList>
                                </MenuItem>
                                <MenuItem>
                                    <MenuList>
                                        <MenuLink id="2" onClick={handleMenu} background={currentMenu === 2} color={currentMenu === 2} disable={true} to="/post" ><PostIcon /> Post</MenuLink>
                                    </MenuList>
                                </MenuItem>
                                <MenuItem>
                                    <MenuList>
                                        <MenuLink id="3" onClick={handleMenu} background={currentMenu === 3} color={currentMenu === 3} disable={true} to="/draft" ><DraftIcon /> Draft</MenuLink>
                                    </MenuList>
                                </MenuItem>
                                <MenuItem>
                                    <MenuList>
                                        <MenuLink id="4" onClick={handleMenu} background={currentMenu === 4} color={currentMenu === 4} disable={true} to="/visitor" ><VisitorIcon /> Visitor Area</MenuLink>
                                    </MenuList>
                                </MenuItem>
                                <MenuItem>
                                    <MenuList>
                                        <MenuLink id="5" onClick={handleMenu} background={currentMenu === 5} color={currentMenu === 5} disable={true} to="/notification" ><NotificationIcon /> Notification</MenuLink>
                                    </MenuList>
                                </MenuItem>
                                <MenuItem>
                                    <MenuList>
                                        <MenuLink id="6" onClick={handleMenu} background={currentMenu === 6} color={currentMenu === 6} disable={true} to="/setting" ><SettingIcon /> Setting</MenuLink>
                                    </MenuList>
                                </MenuItem>

                            </MenuSection>
                        </MenuContainer>
                    </SidebarContainer>


                    <DashboardContainer>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/post" component={TextEditor} />
                            <Route exact path="/post/edit/:id" component={TextEditor} />
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/visitor" component={Visitor} />
                        </Switch>
                    </DashboardContainer>


                </AdminContainer>
            </React.Fragment>
        </Router>
    );
};

export default Admin;