import { css } from 'emotion';

const root = () => css`
  min-height: 100vh;
  background: linear-gradient(-85deg, #261142, #3838b1);
  background-size: 100% 100%;
`;

const wrapper = () => css`
  margin: auto;
  width: 80%;
  display: table;
`;

export default ({
  root,
  wrapper,
});
