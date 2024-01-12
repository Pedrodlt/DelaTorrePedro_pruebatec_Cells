# DelaTorrePedro_pruebatec_Cells
Dado el escafolding base, tendremos una aplicación marketPlace, la cual constara de dos páginas.
- Home 
- CreateProducts
Adicionalmente, tendremos dos componentes que utilizaremos en nuestra aplicación.
- Componente Menu: Encargado de renderizar las dos opciones de menu para navegar entre nuestras páginas.
- Componente CardProduct: Encargado de representar nuestro producto. Constará de título, imagen, descripción, precio y un botón para eliminarlo.

## Pasos para ejecutar la aplicación:
- Clonar el repositorio.
- Ejecutar en un IDE preferido para Java.
- Realizar en la terminal del proyecto "npm install" para instalar todos los paquetes necesarios.
- En la terminal del proyecto, realizar un "npm run start" para arrancar la aplicación en el navegador.

## Tecnologías utilizadas:
- Para el desarrollo de esta app, se ha utilizado Lit-Element y Javascript, para el desarrollo de la lógica, así como sus eventos para enviar y escuchar la información en cada caso.
- Los datos enviados del formulario de producto se han almacenado en el LocalStorage, teniendo acceso a los datos en toda la app y no perdiendo información.
- Se ha utlizado HTML para renderizar las diferentes páginas y componentes.
- Los estilos de la Navbar, Cards de Productos y Formulario se han realizado utilizando CSS.

## Uso de la aplicación: 
- Una vez arrancada la app, se nos abrirá la página Home, con un mensaje de bienvenida y nos indicará que nos dirijamos al **Product Form** para crear un nuevo producto.
- En el Product Form, introducir los datos del Nuevo Producto y pulsar el botón **Crear Producto**.
- Ahora podemos regresar a la página **Home**, donde nuestro Nuevo Producto se habrá creado. A medida que vayamos creando productos se irán añadiendo a continuación del último.
- Cada Card de Producto tiene un botón **Eliminar**, al pulsar este botón podremos eliminar la card deseada.

