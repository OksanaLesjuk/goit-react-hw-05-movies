import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledMoviesList = styled.ul`
list-style:none;
padding: 0;
margin: 0;
padding-top:20px;
`

export const MovieLink = styled(NavLink)`

display: block;
margin-bottom:16px;
border: 1px solid white; 
  border-radius: 10px; 
  padding: 20px;
  font-size: 20px;
font-weight:500;
`

export const TrendingTitle = styled.h2`
text-transform:uppercase;
font-size:32px`

