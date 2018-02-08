import { css } from 'emotion';

const container = () => css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 350px;
`;

const content = () => css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 350px;
  display: table;
  font-size: 38px;
  text-align: center;
  font-weight: bold;
  p {
    display: table-cell;
    vertical-align: middle;
    text-transform: uppercase;
    color: white;
  }
`;

export default ({
  container,
  content
});
