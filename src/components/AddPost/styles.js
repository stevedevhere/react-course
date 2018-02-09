import { css } from 'emotion';

const addPost = () => css`
  padding: 20px;
  background-color: #191b17;
  margin-bottom: 20px;
  color: #eee;
  border-radius: 4px;
  margin-bottom: 120px;

  h3 {
    margin-bottom: 20px;
  }

  form {
    width: 100%;
    display: flex;
    flex-flow: column;
    * {
      transition: 0.2s;
      &:not(button) {
        color: #eee;
      }
    }

    input {
      padding: 7px 13px;
      width: 100%;
      border: none;
      border-bottom: solid 3px $accent;
      background-color: transparent;
      margin-bottom: 15px;
      &:focus {
        border-color: #333;
      }
    }

    textarea {
      resize: vertical;
      padding: 7px 13px;
      width: 100%;
      border: none;
      background-color: transparent;
      border-bottom: solid 3px $accent;
      &:focus {
        border-color: #333;
      }
    }
    button {
      margin-top: 15px;
      width: 90%;
      padding: 10px;  
      margin: 25px auto 0;    
    }
  }
`;

export default ({
  addPost,
});
