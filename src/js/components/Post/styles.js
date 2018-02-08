import { css } from 'emotion';

const postContainer = toggler => css`
  margin: 15px auto;
  background: ${toggler ? '#fff' : '#302578'};
  transition: 0.1s;
  text-decoration: none;
  display: block;
  min-height: 130px;
  padding: ${toggler ? '30px 20px 30px' : ' 20px 20px 20px'};
  width: 100%;
  min-height: 170px;
  p {
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    line-height: 19px;
    color: ${toggler ? '#000' : '#eee'};
    margin-left: 20px;
  }
`;

const title = () => css`
  margin-bottom: 10px;
  color: #e7e6f1;
  text-transform: uppercase;
  background-color: #271d65;
  padding: 15px 85px 15px 50px;
  margin-left: -20px;
  position: relative;
  display: table;
  line-height: 20px;
  
  &::before {
    content: "";
    position: absolute;
    left: -28px;
    top: -7px;
    border-bottom: solid 56px transparent;
    border-top: solid 90px transparent;
    border-right: solid 28px #271d65;
    display: inline-table;
  }

  &::after {
    content: "";
    right: -30px;
    top: 0;
    position: absolute;
    display: inline-block;
    border-top: transparent 25px solid;
    border-bottom: transparent 25px solid;
    border-left: #271d65 solid 30px;
  }
`;

const linksContainer = () => css`
  margin-left: 45px;
`;

const link = () => css`
  margin: 5px 0;
  a {
    color: #165fbf;
    &:hover {
      text-decoration: none;
    }
  }
`;

const buttonsContainer = () => css`
  float: right;
  button {
    margin-left: 8px;
  }
`;


export default ({
  postContainer,
  linksContainer,
  buttonsContainer,
  link,
  title,
});
