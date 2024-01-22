import { LitElement, html } from 'lit';
import { RouterMixin } from './router/RouterMixin';
import './components/navigation-menu'

import { routes } from './router/routes.js';

//Constante con un Array para las rutas de las páginas (se pdría hacer de otra forma, pero lo he hecho así por seguir lo dado en clase)
const MENU_ITEMS = [
  {
    name: 'Home',
    href: '/#!home'
  },

  {
    name: 'Product Form',
    href: '/productForm'
  }
]

export class LandingMarketplace extends RouterMixin(LitElement) {

  static properties = {
    routes: { type: Array },
  }

  constructor() {
    super();
    this.routes = routes;
  }

  //Evento para escuchar el click de los enlaces enviados desde navigation-menu
  /**
   * 
   * Muy bien!! 💪💪💪 La responsabilidad de navegar es del componente LandingMarketPlace
   * Una mejora ya que tenemos la función de router que navega, podemos aprovechar esta función
   */
  __onClickMenuItem(event) {
    this.navigation(event.detail.href);
  }

  //Renderizamos la pagina, y añadimos la navbar con los enlaces a la home y a la productForm
  render() {
    return html`
      <section>
        <header>
          <navigation-menu @onClickMenuItem="${this.__onClickMenuItem}" .menuItems="${MENU_ITEMS}"></navigation-menu>
        </header>
        <main id="outlet">
        </main>
        <footer>
        </footer>
      </section>  
    `;
  }

}

window.customElements.define('landing-market-place', LandingMarketplace);
