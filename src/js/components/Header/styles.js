import { css } from 'emotion';

const header = () => css`
  margin-bottom: 20px;
`;

const title = () => css`
  margin: auto;
  margin-bottom: 250px;
  font-variant: small-caps;
  text-transform: lowercase;
  font-size: 2.3rem;
  text-align: center;
  padding: 20px 50px;

  display: table;
  background: rgba(0, 0, 0, 0.070);
  color: #3a3ac1;
  border-radius: 0 0 7px 7px;
`;

export default ({
  header,
  title,
});
