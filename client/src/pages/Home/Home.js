import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

//Import Ui Components
import Navbar from '../../components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import EditorPick from './components/Editor_Pick/Editor-Pick';
import Trending from './components/Trending/Trending';
import Footer from '../../components/Footer/Footer';

// import Core-Ui
import { GlobalStyle as StyleAll } from '../../components/core-ui/GlobalStyle';

import { authenticationService } from '../../services/Authentication-Service';


function Home(props) {
    const [statusAdmin, setStatusAdmin] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    const user = JSON.parse(localStorage.getItem("currentUser"));


    useEffect(() => {
        if (authenticationService.currentUserValue) {
            setStatusAdmin(true);
        }
    }, []);

    //handle search button
    const handleClickSearch = () => {
        setIsSearch(!isSearch);
    };

    return (
        <React.Fragment>
            <StyleAll />
            <Helmet>
                <title>Loka: Best Programming Blog</title>
            </Helmet>

            <Navbar
                searchClick={handleClickSearch}
                isSearch={isSearch}
                isAlertStatus={statusAdmin}
                alertUsername={statusAdmin ? user.username : null}
            />
            <Hero />
            <EditorPick />
            <Trending />
            <Footer />
        </React.Fragment>
    );

};

export default Home;