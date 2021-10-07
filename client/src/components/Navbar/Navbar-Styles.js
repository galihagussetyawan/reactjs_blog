import styled from "styled-components";

export const NavbarContainer = styled.div`
	width: 70%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	position: sticky;
	top: 0;
	border-radius: 0 0 8px 8px;
	z-index: 3;
	background-color: ${props => props.scroll === true ? "#FF033E" : "ghostwhite"};
	

	// animasi transisi
	-webkit-transition: background-color 200ms linear;
    -moz-transition: background-color 200ms linear;
    -o-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;

	@media screen and (max-width: 768px) {
		max-width: 100vw;
		width: 100%;
		height: 50px;
		display: flex;
		position: sticky;
		background: red;
	}
`;

export const Logo = styled.h2`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 0;
	margin: 0;
	color: ${props => props.scroll ? "ghostwhite" : "#F54748"};

	@media screen and (max-width: 768px) {
		float: right;
		width: 50%;
		color: white;
	}
`;

export const Navigation = styled.div`
	width: ${props => props.width};

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const NavbarMobile = styled.ul`
	display: none;

	@media screen and (max-width: 768px) {
		width: 90%;
		font-size: 20px;
		color: white;
		display: flex;
		padding: 0;
		margin: 0;
		justify-content: flex-end;
	}
`;

export const NavbarNav = styled.ul`
	display: flex;
	float: ${(props) => props.float};
	padding: 0;
	color: ${props => props.scroll === true ? "white" : "black"};

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 500px;
		display: ${props => props.displayMobile === "true" ? "flex" : "none"};
		flex-direction: column;
		padding: 0;
		margin: 0;
		position: absolute;
		background: sandybrown;
	}
`;

export const NavItem = styled.li`
	display: inline-block;
	position: relative;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		left: 0;
	}

`;

export const NavLink = styled.a`
	padding: 10px;
	text-decoration: none;

	&:hover {
		color: ${props => props.scroll ? "yellow" : "red"};
	}
`;

export const NavIcon = styled.li`
	cursor: pointer;
	padding: 8px;
	list-style: none;
	display: inline;
	color: ${props => props.scroll ? "ghostwhite" : "black"};

	&:hover {
		color: ${props => props.scroll ? "yellow" : "red"};
	}
`;

export const Backdrop = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	opacity: 0.9;
	background: black;

	//animation
	visibility: ${props => props.visibility === true ? "visible" : "hidden"};
	opacity: ${props => props.visibility === true ? "0.9" : "0"};
	transition:visibility 0.2s linear,opacity 0.2s linear;
`;