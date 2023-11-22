import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderAppStyle = styled.div`
/* background-color: transparent; */
background-color: ${({ theme }) => theme.colors.backgraund};
position: relative;
top: 10;
left: 0;
z-index: 1000;
height: 100px;
padding: 50px;
display: flex;
align-items: center;
justify-content: space-between;

`;

export const MainLink = styled(NavLink)`
text-decoration: none;
font-size: 42px;
font-weight: 200;
margin: 0;
margin-top: 16px;
color:${({ theme }) => theme.colors.header};

`;
