import { html, LitElement } from 'lit';
import { landingHomeStyle } from './LandingHome.style';
import '../../../components/card-product'

/**
 * Recuerda que para que una propiedad sea reactiva debemos declararla en static properties, así no tienes que hacer requestUpdate
 */
export class LandingHome extends LitElement {

  static properties = {
    products: { type: Array },
  }

  constructor() {
    super();
    this.products = JSON.parse(localStorage.getItem('products')) || [];;
  }


  static styles = landingHomeStyle;

  //Hacemos un evento para eliminar el producto
  /**
   * 
   * Utilizando el operador spread podemos cambiar de posición de memoria la propiedad y Lit detecta el cambio
   */
  __onClickDeleteProduct(event) {

    //Guardamos en una constante el product enviado con el evento desde CardProduct
    const productToDelete = event.detail.product;

    // Utilizamos filter para filtrar el array del localStorage y crear uno nuevo con los productos que sean diferentes al producto que queremos eliminar
    // OJO solo para propiedades complejas Array y Objeto
    this.products = [
      ...this.products.filter(product => (
        product.name !== productToDelete.name ||
        product.image !== productToDelete.image ||
        product.description !== productToDelete.description ||
        product.price !== productToDelete.price
      )),
    ];

    // Actualizamos la localStorage con el nuevo array
    localStorage.setItem('products', JSON.stringify(this.products));

  }

  //Renderizamos el mensaje de bienvenida o el de listado de productos, segun corresponda, las cards y añadimos el evento de eliminar card
  render() {
    return html`
        <section>
          ${this.products.length === 0 ? html`<h1>Bienvenid@!! Para introducir un Nuevo Producto, dirígete a la Product Form</h1>` : html`<h1>Listado de Productos:</h1>`}
          <div class='cardsGeneral'>
            ${this.products.map((product) => {
      return html`
                <div class='cards'>
                  <card-product
                    .name="${product.name}"
                    .image="${product.image}"
                    .description="${product.description}"
                    .price="${product.price}"
                    @delete-product="${this.__onClickDeleteProduct}"
                  ></card-product>
                </div>
              `;
    })}
          </div>
        </section>
    `;
  }
}
