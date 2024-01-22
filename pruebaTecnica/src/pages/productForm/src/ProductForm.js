import { html, LitElement } from "lit";
import { Router } from '@vaadin/router';
import { productFormStyle } from "./ProductForm.style";

/**
 * Si no utilizamos las propiedades para nada más que almacenar el valor y mandarlo al sesion
 * No hace falta tener declaradas las propiedades.
 */
export class ProductForm extends LitElement {
    static styles = productFormStyle;

    //Creamos un evento personalizado para cada dato del formulario
    /**
     * 
     * Muy buena iniciativa pero desde el callback del submit podemos rescatar todos los valores
     * Gracias a https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
     * new FormData(form)
     */
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

    /**
     * 
     * Muy bien!!! utilizas el evento submit 😊
     */
    __eventSubmit(event) {

        //Detenemos el comportamiento predeterminado el submit del formulario
        /**
         * Utilizando formData podemos captar los valores del input
         */
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        // Creamos un nuevo producto con los datos que nos manda el formulario
        const newProduct = {
            name: formData.get('name'),
            image: formData.get('image'),
            description: formData.get('description'),
            price: formData.get('price')
        };

        // Agregar el nuevo producto a localStorage, que será un array y lo pusheamos en este, y lo seteamos en localstorage
        let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        storedProducts.push(newProduct);
        localStorage.setItem('products', JSON.stringify(storedProducts));

        Router.go('/home')
    }

    //Renderizamos el formulario, añadimos los eventos a cada input y conseguimos el valor de cada uno que enviaremos al array del localStorage
    render() {
        return html`
            <section>
                <h1>Introduce los datos del Producto</h1>
                <form @submit="${this.__eventSubmit}">
                    <label for="name">Nombre:</label>
                    <input name="name" type="text" id="name" placeholder="Introduce el nombre" required >

                    <label for="image">Imagen URL:</label>
                    <input name="image" type="text" id="image" placeholder="Introduce la URL de la imagen" required >

                    <label for="description">Descripción:</label>
                    <textarea name="description" id="description" placeholder="Introduce la descripción"  required ></textarea>

                    <label for="price">Precio:</label>
                    <input name="price" type="number" id="price" required >

                    <button type="submit">Crear Producto</button>
                </form >
            </section>
        `;
    }
}