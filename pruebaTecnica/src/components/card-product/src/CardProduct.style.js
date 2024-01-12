import { css } from "lit";

export const cardProductStyle = css`

  .card {
    max-width: 300px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    margin: 20px;
  }

  .card img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
  }

  .card h1,
  .card p {
    padding: 10px;
    margin: 0;
  }

  .card h1 {
    font-size: 1.5rem;
    color: #333;
    border-bottom: 1px solid #ddd;
  }

  .card p {
    font-size: 1rem;
    color: #666;
  }

  .card button {
    background-color: red;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 8px;
    bottom: 20px; 
    left: 50%;
    margin-bottom: 10px; 
  }

  .card button:hover {
    background-color: #ca5353;
  }

`;