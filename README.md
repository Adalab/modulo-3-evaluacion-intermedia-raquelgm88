# Buscador de frases de la serie Friends

¡Hola! esta aplicación web es el resultado del ejercicio de evaluación intermedia del módulo tres del **bootcamp de Programación Web** de **Adalab**, de la promoción **Salas**.

## En qué consiste

Vamos a recordar la serie de televisión "Friends", y vamos a hacer una aplicación que nos permita gestionar la frases de los personajes de esta serie, y lo vamos a hacer con React.

## Requisitos

1. Pintar el listado de frases

Para empezar el ejercicio queremos:
  1. Pintar una cabecera con un título que ponga Frases de Friends.
  2. Pintar el listado de frases inicial. Para ello utilizaremos un API que facilitaremos.

Primero hay que copiar el contenido del API y pegarlo en un fichero json del proyecto. Utilizar ese fichero para "simular" que ya tenemos los datos sin traerlos del servidor. De momento lo importarlo en el componente App y lo guardarlo en el estado.

Más adelante  hay que encargarse del fetch(). Este paso es opcional, y lo que se desea es que hacer la petición a la API con un fetch desde React.
Después, generar el HTML de la página con los datos que se han importado del json.

2. Filtrar el listado de frases

A continuación queremos filtrar por la frase y por personaje. Intenta hacer uno de los dos y, cuando lo tengas controlado, implementa el restante. Para ello:

Para filtrar por frase:

  1. Añade un recuadro sobre el listado de frases donde el usuario pueda escribir texto.
  2. Añade la funcionalidad para que, cuando la usuaria escriba en ese **<input>**, el listado de frases se repinte mostrando solo las que incluyan el texto que ha escrito el usuario (aplicando también el filtrado por personaje, si ya lo tuvieras implementado).

Para filtrar por personaje:
  
  1. Añade un select a la cabecera que tenga las siguientes opciones:
    - Todos
    - Ross
    - Monica
    - Joey
    - Phoebe
    - Chandler
    - Rachel
 
  2. Añade la funcionalidad para que cuando el usuario cambie este select el listado de frases se repinte mostrando solo los que coincidan con la opción seleccionada.

3. Añadir una nueva frase (BONUS)

A continuación queremos añadir un nueva frase. Para ello:

  1. Crear un formulario con los campos:
    - Frase
    - Personaje
    - Un botón para **Añadir la nueva frase**.
    
  2. Cuando el usuario pulse en el botón hay que añadir la frase al listado de frases para que este aparezca en el listado.
  
## Herramientas utilizadas

- HTML5
- CSS3, SCSS
- React JS
- npm
- NodeJS
- Gulp
- Git
- API:
  - https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json

## Cómo arrancar el proyecto

Necesitas tener instalado [Node JS](https://nodejs.org/en) para poder arrancar este proyecto.

1. Instala las dependecias locales ejecutando en la terminal el comando:

```
npm install
```

2. Instala el paquete para SASS:

```
npm install node-sass
```

5. Arranca el proyecto ejecutando a continuación en la terminal:

```
npm start
```

Se abrirá [http://localhost:3000 ](http://localhost:3000)para ver el proyecto en el navegador en modo desarrollo.
