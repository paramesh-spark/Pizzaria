import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {FaPizzaSlice} from 'react-icons/fa';

export const Nav = styled.nav`
background: transparent;
height:80px;
display:flex;
justify-content: center;
font-weight:700;
color: white;
`;

export const NavLink = styled(Link)`
color = white ;
font-size:2rem;
display:flex;
align-items:center;
text-decoration: none;
cursor:pointer;
padding-left:400px;


@media screen and (max-width:400px) {
    position:absolute;
    top:10px;
    left:25px;
}
`;

export const NavIcon = styled.div`
display:block;
position:absolute;
top:0;
right:0;
cursor:pointer;
color: white;


p{
    transform:translate(-175%, 100%);
    font-weight:bold
    color:white;
    
}
`;

export const Bars = styled(FaPizzaSlice)`
font-slice:2rem;
transform:translate(-50%,15%);
padding-left:100px;
color:white;`
