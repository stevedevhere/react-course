import { css } from 'emotion';

const postEditContainer = () => css`
  display: flex;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
`;

const postEdit = () => css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  width: 600px;
  min-height: 300px;
  max-height: 410px;
  padding: 20px;
  background-color: #140b27;
  border-radius: 4px;

  display: flex;
  flex-flow: column;

  input {
    width: 100%;
    color: #fff;
    margin-bottom: 15px;
  }

  textarea {
    color: #fff;
    height: 220px;
    width: 100%;
    resize: vertical;
    margin-bottom: 10px;
  }

  button {
    width: 90%;
    margin: 5px auto;
  }
`;


export default ({
  postEditContainer,
  postEdit,
});
