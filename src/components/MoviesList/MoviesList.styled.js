import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledMoviesList = styled.ul`
list-style:none;
padding: 0;
margin: 0;
`

export const MovieLink = styled(NavLink)`
color: №333;
display: inline-block;
margin-bottom:16px;

`

export const TrendingTitle = styled.h2`
text-transform:uppercase;
font-size:32px`

