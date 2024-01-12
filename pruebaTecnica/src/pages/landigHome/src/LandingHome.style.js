import { css } from "lit";

export const landingHomeStyle = css`

  h1{
    padding-left:25px;
  }

  .cardsGeneral {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .cards {
    width: calc(25% - 10px); 
    margin-bottom: 20px; 
    box-sizing: border-box; 
  }
`