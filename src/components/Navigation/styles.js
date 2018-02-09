import { css } from 'emotion';

const navigationContainer = () => css`
  margin-bottom: 6px;
  display: table;
  width: 100%;
  height: auto;
`;

const navItem = () => css`
  display: inline-block;
  margin-right: 6px;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

const navLink = () => css`
  padding: 10px 35px;
  border-radius: 4px;    
  background-color: #000;
  color: #fff;    
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default ({
  navigationContainer,
  navItem,
  navLink,
});
