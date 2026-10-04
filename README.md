# Estructura del proyecto

El proyecto está organizado en diferentes carpetas con el objetivo de mantener el código estructurado

# Frontend

Contiene los archivos correspondientes a las funcionalidades dinámicas de las diferentes interfaces del sitio web.

# Common

Contiene funciones reutilizables que son utilizadas en diferentes apartados como Inicio, Noticias y Favoritos.

# Funciones principales

`VerMas`: crea el botón "Ver más" para las noticias y permite mostrar el contenido adicional correspondiente a cada noticia mediante su id.

`Favoritos`: crea la funcionalidad necesaria para agregar noticias a la sección de favoritos.

`BtnEliminacionFavoritos`: crea el botón utilizado para eliminar noticias de la sección de favoritos.

`EliminacionFavoritos`: obtiene las noticias almacenadas en LocalStorage y permite eliminar una noticia utilizando su id. Posteriormente, actualiza el arreglo sin la noticia eliminada.

`LocalStorageFavoritos`: almacena las noticias seleccionadas por el usuario en LocalStorage para posteriormente utilizarlas en el apartado de favoritos.

# Pages

Contiene los archivos que implementan la lógica específica de cada página y utilizan las funciones reutilizables de `Common`.

# Contactanos

Se encarga de obtener los datos ingresados en los campos del formulario HTML y realizar las validaciones correspondientes.

Nota: La información se almacena únicamente en `LocalStorage` y se valida que el usuario no registre más de una petición.

# Favoritos

Contiene la lógica necesaria para mostrar las noticias almacenadas como favoritas. Utiliza las funciones:

`BtnEliminacionFavoritos`
`EliminacionFavoritos`
`VerMas`

Estas funciones permiten mostrar las tarjetas de noticias, visualizar información adicional y eliminar noticias de favoritos.

# Inicio

Contiene la lógica encargada de mostrar las tarjetas de noticias en la página principal y utiliza la función `VerMas` para permitir visualizar información adicional de cada noticia.

# Noticias

Contiene la lógica encargada de mostrar las diferentes tarjetas de noticias y utiliza las funciones `Favoritos` y `VerMas`, permitiendo al usuario consultar la información y agregar noticias a favoritos.

# IMG

Contiene las imágenes utilizadas en el proyecto, incluyendo:

* Imágenes de las noticias.
* Iconos para agregar noticias a favoritos.
* Iconos para eliminar noticias de favoritos.
* Imágenes utilizadas en el footer.

# JSON

Contiene los archivos JSON utilizados como fuente de información para generar dinámicamente las noticias.

`CardsGeneralNoticias`

Contiene las noticias que se muestran en el apartado de Noticias.

`CardsNoticias`

Contiene las noticias que se muestran en el apartado de Inicio, funcionando como una vista previa del contenido disponible en el sitio.

# Maquetación

Contiene los archivos HTML y CSS utilizados para construir y diseñar las diferentes interfaces del proyecto.

Los archivos HTML permiten establecer la estructura de las páginas, mientras que CSS se encarga de definir los estilos y el diseño visual.

# Funcionalidades principales

El proyecto cuenta con las siguientes funcionalidades:

* Función *Ver más* para consultar información adicional.
* Agregar noticias a favoritos.
* Visualización de noticias favoritas.
* Eliminación de noticias de favoritos.
* Almacenamiento de favoritos mediante `LocalStorage`.
* Formulario de contacto.
* Validación de la información ingresada.
* Generación dinámica de tarjetas a partir de archivos JSON.

*Repositorio*
https://github.com/Molina2005/Web-de-noticias
