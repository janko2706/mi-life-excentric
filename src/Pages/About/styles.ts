import styled from 'styled-components';

export const Container = styled.div`
  * {
    user-select: text !important ;
  }
  *::selection {
    color: white;
    background: var(--eggplant);
  }

  & li {
    margin-bottom: 1vmin;
  }
  & ol {
    list-style-type: inherit;
  }

  .firstText {
    position: fixed;
    color: white;
    font-weight: lighter;
    top: 30vmin;
    left: 3%;
    font-size: 6vmin;
    background-color: rgba(56, 43, 51, 0.5);
    padding: 0.3em;
    z-index: 22;
  }

  .secondText {
    background-color: rgba(89, 66, 80, 0.7);
    padding: 0.3em;
    position: fixed;
    color: white;
    font-weight: lighter;
    top: 39vmin;
    left: 20%;
    font-size: 8vmin;
    z-index: 22;
  }
  @media (max-width: 800px) {
    .firstText,
    .secondText {
      display: none;
    }
    .textCont {
      width: 100vw !important;
      border: 1px solid red;
      text-align: right;
      margin: 0 0 !important;
    }
  }
  .secondText span,
  .firstText span {
    font-weight: 300;
    font-family: 'Sacramento', cursive;
    letter-spacing: 0.3vmin;
  }
  .textCont {
    width: 40%;
    overflow: hidden;
    z-index: 100;
    display: flex;
    flex-direction: column;
    padding-top: 20vmin;
    text-align: left;
    margin: auto 55%;
    gap: 4vmin;
  }
  .title {
    overflow: hidden;
    font-size: 8vmin;
    width: fit-content;
    font-weight: 300;
  }
  .text {
    font-weight: 300;

    font-size: 4vmin;
    letter-spacing: 0.1vmin;
    width: 100%;
  }
  .text > a {
    text-decoration: none !important;
    color: black;
    display: flex;
    align-items: center;
    text-align: center;
    gap: 0.3em;
    transition: all 0.5s ease-in-out;
  }
  .text > a:first-child:hover {
    color: #4267b2;
  }
  .text > a:last-child:hover {
    color: #4f5bd5;
  }
`;
