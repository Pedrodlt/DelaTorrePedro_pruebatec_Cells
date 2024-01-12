import { html, LitElement } from "lit";
import { productFormStyle } from "./ProductForm.style";

export class ProductForm extends LitElement {

    static properties = {
        name: { type: String },
        image: { type: String },
        description: { type: String },
        price: { type: Number }

    }

    constructor() {
        super();
        this.name = '';
        this.image = '';
        this.description = '';
        this.price = 0
    }

    static styles = productFormStyle;

    //Creamos un evento personalizado para cada dato del formulario
    __eventNameInput(event) {
        this.name = event.target.value;
    }

    __eventImageInput(event) {
        this.image = event.target.value;
    }

    __eventDescriptionInput(event) {
        this.description = event.target.value;
    }

    __eventPriceInput(event) {
        this.price = parseFloat(event.target.value);
    }

    __eventSubmit(event) {

        //Detenemos el comportamiento predeterminado el submit del formulario
        event.preventDefault();

        // Creamos un nuevo producto con los datos que nos manda el formulario
        const newProduct = {
            name: this.name,
            image: this.image,
            description: this.description,
            price: this.price
        };

        // Agregar el nuevo producto a localStorage, que será un array y lo pusheamos en este, y lo seteamos en localstorage
        let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        storedProducts.push(newProduct);
        localStorage.setItem('products', JSON.stringify(storedProducts));

        //Limpiamos el formulario una vez enviado los datos
        this.name = '';
        this.image = '';
        this.description = '';
        this.price = 0
    }

    //Renderizamos el formulario, añadimos los eventos a cada input y conseguimos el valor de cada uno que enviaremos al array del localStorage
    render() {
        return html`
            <section>
                <h1>Introduce los datos del Producto</h1>
                <form @submit="${this.__eventSubmit}">
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" placeholder="Introduce el nombre" .value="${this.name}" @input="${this.__eventNameInput}" required >

                    <label for="image">Imagen URL:</label>
                    <input type="text" id="image" placeholder="Introduce la URL de la imagen" .value="${this.image}" @input="${this.__eventImageInput}" required >

                    <label for="description">Descripción:</label>
                    <textarea id="description" placeholder="Introduce la descripción" .value="${this.description}" @input="${this.__eventDescriptionInput}" required ></textarea>

                    <label for="price">Precio:</label>
                    <input type="number" id="price" .value="${this.price}" @input="${this.__eventPriceInput}" required >

                    <button type="submit">Crear Producto</button>
                </form >
            </section>
        `;
    }
}