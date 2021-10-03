import React, { Fragment, useEffect, useRef, useState } from 'react';

//import styled-components
import { NavbarContainer, Logo, Navigation, NavbarNav, NavbarMobile, NavItem, NavLink, NavIcon, Backdrop } from './Navbar-Styles';

//import components
import AlertStatus from '../../pages/Home/components/Status_User/Status-User';

//import icons
import { Facebook, Twitter, Instagram, Behance, Dribble, Search, List, DropdownIcon } from '../core-ui/Icons/Icons';

//import core-ui
import Dropdown from '../core-ui/Dropdown/Dropdown';

//import Core-Ui
import { BurgerIcon } from '../core-ui/Icons/Icons';
import SearchComponent from '../core-ui/Search/Search';
import SearchContent from '../core-ui/Search/components/search-content';

//import services
import categoryService from '../../services/category-service';
import ContentServices from '../../services/Content-Services';


function Navbar(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState([]);
    const [scrollNav, setScrollNav] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    //search bar
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState(null);


    // make open and close burger menu on mobile version
    const [mobileNav, setMobileNav] = useState(false);
    const toggleMobileNav = () => setMobileNav(!mobileNav);


    const toggle = () => setIsOpen(!isOpen);


    //fetching data
    useEffect(() => {
        categoryService.getCategoryList()
            .then(res => setCategory(res.data))
    }, []);

    //close action
    useEffect(() => {

        const pageClickEvent = () => {
            if (isOpen) {
                setIsOpen(!isOpen);
            }
        };

        // //close dropdown list by scroll
        window.onscroll = function () {
            setIsOpen(false);
        };

        //close dropdown list by click
        if (isOpen) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => window.removeEventListener('click', pageClickEvent);
    });



    // scroll position for change navbar bg-color
    useEffect(() => {

        const handleScroll = () => {
            const position = window.pageYOffset;

            if (position < 50) {
                setScrollNav(false)
            } else if (position > 50) {
                setScrollNav(true)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);


    //function handle search bar
    const searchContentRef = useRef(null);

    const handleFocus = () => {
        setFocused(!focused);
    };
    const handleChangeSearch = event => {
        setValue(event.target.value);
    };

    useEffect(() => {
        if (props.isSearch === false) {
            setValue(null);
        }
    }, [props.isSearch]);

    useEffect(() => {
        if (focused) {
            function handleClickOutside(event) {
                if (searchContentRef.current && !searchContentRef.current.contains(event.target)) {
                    setFocused(false);
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }

    }, [searchContentRef, focused]);


    //search result
    useEffect(() => {
        const valueSearch = value === "" ? null : value;

        ContentServices.getSearchPost(valueSearch)
            .then(response => setSearchResult(response.data));
    }, [value]);

    return (
        <Fragment>
            <Backdrop visibility={isOpen || focused} />

            {/* alert status if success login */}
            {props.isAlertStatus &&
                <AlertStatus username={props.alertUsername} />
            }

            <NavbarContainer scroll={scrollNav}>
                <Navigation width="10%">
                    <Logo scroll={scrollNav}>Loka</Logo>
                </Navigation>

                {props.isSearch &&
                    <Navigation width="80%">
                        <SearchComponent
                            value={value}
                            onChange={handleChangeSearch}
                            onFocus={handleFocus}
                        />

                        {focused &&
                            <SearchContent
                                refSearch={searchContentRef}
                                dataResult={searchResult}
                                searchValue={value}
                            />
                        }
                    </Navigation>
                }

                {props.isSearch
                    ? null
                    : <Navigation width="50%">
                        {/* mobile version navbar */}
                        <NavbarMobile onClick={toggleMobileNav}>
                            <BurgerIcon />
                        </NavbarMobile>


                        {/* dekstop version navbar */}
                        <NavbarNav
                            displayMobile={mobileNav.toString()}
                            scroll={scrollNav}
                        >
                            <NavItem>
                                <NavLink scroll={scrollNav}>Home</NavLink>
                            </NavItem>
                            <NavItem onClick={toggle}>
                                <NavLink scroll={scrollNav}>Learning {<DropdownIcon />}</NavLink>
                                <Dropdown visibility={isOpen} children={category.map(item => item)} />
                            </NavItem>
                            <NavItem >
                                <NavLink scroll={scrollNav}>Lifestyle</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink scroll={scrollNav}>Inspiration</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink scroll={scrollNav}>Contact</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Navigation>
                }


                {props.isSearch
                    ? null
                    : <Navigation width="30%">
                        <NavbarNav float="left">
                            <NavIcon scroll={scrollNav}><Facebook /></NavIcon>
                            <NavIcon scroll={scrollNav}><Twitter /></NavIcon>
                            <NavIcon scroll={scrollNav}><Instagram /></NavIcon>
                            <NavIcon scroll={scrollNav}><Behance /></NavIcon>
                            <NavIcon scroll={scrollNav}><Dribble /></NavIcon>
                        </NavbarNav>
                    </Navigation>
                }


                <Navigation width="10%">
                    <NavbarNav float="right">
                        <NavIcon scroll={scrollNav} onClick={props.searchClick}><Search /></NavIcon>
                        <NavIcon scroll={scrollNav}><List /></NavIcon>
                    </NavbarNav>
                </Navigation>
            </NavbarContainer>

        </Fragment>
    );
};

export default Navbar;