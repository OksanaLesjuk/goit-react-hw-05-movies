import styled from "styled-components";

export const CastList = styled.ul`
list-style:none;
display: flex;
flex-wrap: wrap;
gap:20px;
padding-top:20px;
`

export const CastListItem = styled.li`
display: flex;
flex-direction: column;
justify-content:start;

gap:8px;
width:120px;
border: 1px solid white;
padding: 4px;
font-size: 12px;
`

export const CastListItemImgWrap = styled.div`
display: block;
width: 100%;
height: 180px;
object-fit:cover;
background-color: gray;

`