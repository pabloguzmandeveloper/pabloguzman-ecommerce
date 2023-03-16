# ¡¡¡ Binvenidos a nuestro E-Commerce E-COMOSANO !!!

Una variedad de productos comestibles y bebidas para todo tipo de gusto, con el toque típico de venezuela, atendido por su dueño con el cálido espiritu fraternal de siempre.

Es un desarrollo piloto construido con la biblioteca REACT JS, dispuesto a la promoción simple y sencilla de los productos con la opción de compra por carrito sin pago via el recurso de Whatsapp a implementar a futuro.

La app la crearemos firt mobile.

La experiencia de usuario que hemos logrado es la de indintificar claramente una lista de categorías de productos en los cuales poder navegar con un menú desplegable por cada categoría observando cada producto con una breve información, e interesado en alguno ser redirigidos con un click dentro del área de su card a un detalle mas amplio con la opción de elegir la cantidad a comprar.

Luego de navegar por distintas categorías y productos en el caso que hemos agregado productos a nuestro carrito, la cantidad de productos se verá reflejada en un ícono con un número que reside en el componente CartWidget.

Este CartWidget es un Link a un detalle de todos los productos acumulados con el precio individual, los subtotales y el total acumulado en pesos. También los botones individuales para cada producto a quitar del carrito completamente.

El CartWidget redirige a un componente CartCheck que es el componente del que hablamos en el parrafo anterior, una vez chequeada la compra por el usuario se visualizan dos botones para aceptar la compra y volver al home a seguir comprando.

El menú hamburguesa cuenta con un efecto de estilo para ser desplegado de forma oculta con css que contiene una lista de 4 links, uno para navegar a el carrito para la futura compra por Whatsapp, otro para la lista de productos que es el home de la app, otro para las sucursales del negocio y finalmente uno para el componente About con historia e info del negocio.

## Bibliotecas usadas:

- [x] ["react": "^18.2.0"](https://es.reactjs.org/) : Biblioteca base para todo el proyecto en base a una experiencia de usuario con los recursos de SPA.

- [x] ["@fortawesome/fontawesome-svg-core": "^6.2.1","@fortawesome/free-solid-svg-icons": "^6.2.1","@fortawesome/react-fontawesome": "^0.2.0"](https://fontawesome.com/v5/docs/web/use-with/react) : Recurso utilizado par el ícono del CartWidget, de fácil uso e implemetación.

- [X] ["react-bootstrap": "^2.7.2"](https://react-bootstrap.github.io/) : Biblioteca practica para lograr de forma rápida estilos en algunos componentes, me trajo dificultades que consumieron gran cantidad de tiempo en solucionar algunos errores de vista. La he usado por ser una de las primera bibliotecas a las que le tengo mas conocimiento y uso. En un futuro usaré solo css o Material UI.

- [x] ["react-router-dom": "^6.8.1"](https://reactrouter.com/en/main) : De indispensable uso para el ruteo de todas las conexiones entre componentes y data sobre las mismas (rutas parametrizadas) ayudó mucho los recursos Link, useParams, useNavigate, entre otros.

- [x] ["firebase": "^9.17.1"](https://firebase.google.com) : Biblioteca donde asentamos la pequeña base de datos con el recurso de Firestore, base de datos para la lista de los productos con sus categorías y otra base de datos con las ordenes de compra. También usamos Firestore para subir un archivo json con código Javascript sin tener que usar la creación de cada producto desde la consola de Firestore.
 
- [x] ["sweetalert2": "^11.7.3","sweetalert2-react-content": "^5.0.7"](https://sweetalert2.github.io/) : Recurso para alertas muy visibles de fácil resultado responsivo y de agradable diseño para implementarlas rápidamente, hubo que configurar ciertas personalizaciones con botones y funciones afectadas a una alerta perteneciente a la confirmación de la compra. El punto negativo es que en todo momento el proyecto al instalar las dependencias en la consola refleja warnings que son de nula solución desde mi experiencia e impide el deployado al menos en Netlify.


