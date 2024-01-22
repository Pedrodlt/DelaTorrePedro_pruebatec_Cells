import { LitElement, html } from "lit";
import { navigationMenuStyle } from "./NavigationMenu.style";

export class NavigationMenu extends LitElement {

  static properties = {
    menuItems: { type: Array }
  }

  static styles = navigationMenuStyle;

  constructor() {
    super();
    this.menuItems = []
  }

  //Creamos un evento para el click sobre cada enlace, que mandaremos y escucharemos en la landingHome
  /**
   * 
   * Si no utilizamos param event, podemos borrarlo
   */
  __onEventClick(href) {
    this.dispatchEvent(new CustomEvent('onClickMenuItem', {
      bubbles: true,
      composed: true,
      detail: {
        href
      },
    }));
  }

  //Renderizamos la navbar, mapeamos el array menuItems que contendrá las rutas de los enlaces
  //(se podría hacer de otra forma, pero lo he hecho así por seguir lo dado en clase)
  render() {
    return html`
           <nav class="navbar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Softtek.gif/1199px-Softtek.gif" alt="Logo" class="logo">
            ${this.menuItems.map(({ href, name }) => {
      return html`
                  <a @click="${() => this.__onEventClick(href)}" href="${href}">${name}</a>
                `;
    })}     
          </nav>
        `;
  }
}

