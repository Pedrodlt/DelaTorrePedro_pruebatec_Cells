import { css } from "lit";

/**
 * Es recomendable utilizar selector :host{display: none} para evitar problemas futuros
 */
export const navigationMenuStyle = css`

    .navbar {
      background-color: #333;
      padding: 15px;
      color: white;
      display: flex;
      align-items: center;
    }

    .navbar a {
      color: white;
      text-decoration: none;
      margin: 0 15px;
      font-size: 18px;
    }

    .navbar a:hover {
      text-decoration: underline;
    }

    .logo {
      width: 60px; 
      height: auto;
      border-radius: 5px;
    }
`