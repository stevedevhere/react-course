import { css } from 'emotion';

const container = () => css`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 55px;
`;

const header = () => css`
  padding-top: 20px;
`;

const title = () => css`
  padding: 20px;
  font-weight: 900;
  font-size: 1.4rem;
`;

const content = () => css`
  margin: 5px auto;
  padding: 20px;
  width: 100%;
  border-radius: 4px;
  color: #000;
  padding-bottom: 20px;  
`;

const links = () => css`
  
`;


export default ({
  container,
  title,
  links,
  header,
  content,
});
