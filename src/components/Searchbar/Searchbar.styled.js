import styled from 'styled-components';

export const SearchbarHeader = styled.header`
top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: gray;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;


export const SearchForm = styled.form`
display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' id='Outline' viewBox='0 0 24 24' width='512' height='512'%3E%3Cpath d='M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z'/%3E%3C/svg%3E");
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;


export const SearchFormButtonLabel = styled.span`position: absolute;
width: 1px;
height: 1px;
padding: 0;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
clip-path: inset(50%);
border: 0;`


export const SearchFormInput = styled.input`display: inline-block;
width: 100%;
font: inherit;
font-size: 20px;
border: none;
outline: none;
padding-left: 4px;
padding-right: 4px;
&::placeholder {
    font: inherit;
  font-size: 18px;
}`