import { LitElement, html } from "lit";
import { cardProductStyle } from "./CardProduct.style";

export class CardProduct extends LitElement {

    static properties = {
        name: { type: String },
        image: { type: String },
        description: { type: String },
        price: { type: Number }
    }

    static styles = cardProductStyle;

    constructor() {
        super();
        this.name = '';
        this.image = '';
        this.description = '';
        this.price = 0
    }

    //Creamos un evento para eliminar la cardProduct
    __onClickDelete() {

        //Creamos un nuevo objeto con los datos del producto
        const productToDelete = {
            name: this.name,
            image: this.image,
            description: this.description,
            price: this.price,
        };

        // Enviamos el evento a landingHome para indicar que el producto debe eliminarse
        this.dispatchEvent(new CustomEvent('delete-product', {
            bubbles: true,
            composed: true,
            detail: {
                product: productToDelete,
            },
        }));
    }

    //Renderizamos las cards, aplicandole los estilos y además el evento sobre el button para que nos de los datos una vez lo pulsemos
    render() {
        return html`
            <article>
                <header class="card">
                    <img src=${this.image}>
                    <h1>${this.name}</h1>
                    <p>${this.description}</p>
                    <p><b>Precio:</b> ${this.price} €</p>
                    <button @click="${this.__onClickDelete}">Eliminar</button>
                </header>
            </article>
        `;
    }
}
