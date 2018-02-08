import { css } from 'emotion';

const container = () => css`
  background-color: $darkAccent;
  padding-bottom: 20px;
`;

const header = () => css`
  padding-top: 20px;
`;

const title = () => css`
  margin-left: 0;
`;

const content = () => css`
  margin: 5px auto;
  padding: 20px;
  width: 100%;
  border-radius: 4px;
  color: #eee;
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
