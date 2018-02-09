import { css } from 'emotion';

const posts = () => css`
  display: flex;
  flex-flow: column;
`;

const error = () => css`
  color: #b4d3f4;
  font-size: 19px;
  text-align: center;
  margin-top: 55px;
`;


export default ({
  posts,
  error,
});
