# HTML

## Estructura del documento

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title</title>
  </head>
  <body></body>
</html>
```

```html
<!DOCTYPE html>
Indica al navegador que se trata de un documento HTML 5

<html lang="es"></html>
Inicio del documento (la propiedad lang nos dice el language del sitio)

<head></head>
Contiene los datos visibles para el navegador e invisibles para el usuario

<meta charset="UTF-8" />
Etiqueta para caracteres especiales (como la ñ o acentos)

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
Escala del sitio web inicial será de 1

<title></title>
Título o nombre que tendrá la página en la pestaña o ventana del navegador

<body></body>
Etiqueta que contendrá el desarrollo del sitio web, todo su contenido será
visible para el usuario

<p></p>
Etiqueta para párrafos
```

## Etiquetas para títulos y párrafos

```html
<h1></h1>
Etiqueta para título de primer nivel

<h2></h2>
Etiqueta para título de segundo nivel

<h3></h3>
Etiqueta para título de tercer nivel

<h4></h4>
Etiqueta para título de cuarto nivel

<h5></h5>
Etiqueta para título de quinto nivel Se recomienda hacer uso de solo una
etiqueta h1 por sitio web, de lo contrario podría generar problemas al indexarse
al buscador

<br />
Salto de línea (no necesita cierre)

<hr />
Crea un salto de línea y una línea horizontal (no necesita cierre)

<strong></strong> / <b></b>
Para el texto en negritas

<em></em> / <s></s>
Para el texto en cursiva

<span></span>
Para agregarle estilos posteriormente en CSS
```

## Etiquetas para listas

```html
<ol>
  <li></li>
  <li></li>
</ol>

<ul>
  <li></li>
  <li></li>
</ul>

<ol></ol>
Lista ordenada

<ol></ol>
Lista desordenada

<li></li>
Elemento de la lista

<dl>
  <dt></dt>
  <dd></dd>
</dl>

<dl></dl>
Definitin list

<dt></dt>
Término a definir

<dd></dd>
Definición del término
```

## Etiquetas para imágenes

```html
<img src="..." alt="..." title="..." width="..." height="..." />
```

Donde **_“src”_** es la ruta de la imagen (esta puede ser de la carpeta del proyecto o de otra página web), **_“alt”_** es el nombre que nos mostrará en caso de que no cargue la imagen, **_“title”_** será el nombre que aparezca al colocar el cursor sobre la imagen.

**_“width”_** y **_“height”_** son para el ancho y el alto de una imagen, con esto se ajustará a un tamaño estricto dado en pixeles, se puede dar solo un dato y el otro se ajustará manteniendo las proporciones originales de la imagen.

### SVG

Para poder incrustar imagenes en formato svg se tiene que hacer de la siguiente manera:

```html
<svg class="feature__icon">
  <use xlink:href="img/sprite.svg#icon-lock"></use>
</svg>

Donde la referencia va a apuntar al archivo que contiene todos los iconos en
formato svg, se usara el # para poder acceder de manera particular a un ícono
especifico.
```

## Etiquetas para tablas

```html
<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td colspan="3">Atributo para usar un número de 3 columnas</td>
    </tr>
  </tbody>
  <tfoot></tfoot>
</table>

<table></table>
Apertura y cierre de la tabla

<thead></thead>
Cabecera de la tabla

<tbody></tbody>
Cuerpo de la tabla

<tfoot></tfoot>
Pie de la tabla

<tr></tr>
Representa una fila de celdas en la tabla

<th></th>
Representa una celda encabezado en una tabla
```

## Etiquetas para formularios

```html
<form>
  <fieldset>
    <legend></legend>
    <label for="nombre"></label>
    <input type="text" name="nombre" id="nombre" placeholder="..." />
  </fieldset>
</form>

<form></form>
Apretura y cierre del formulario

<fieldset></fieldset>
Para colocar el formulario en un cuadro

<legend></legend>
Titulo del formulario

<label for="nombre"></label>
Dato que se solicita(en este caso el nombre)

<input type="text" name="nombre" id="nombre" placeholder="..." />
Dato que se ingresa al formulario (en este caso el nombre)
```

## Etiquetas para enlaces

```html
<a href="...">Texto del enlace</a>
Se le pueden agregar atributos a esta etiqueta, como target=”_blank” para abrir
en enlace en una nueva pestaña. También se puede dirigir en una siglepage a un
título de una sección desde el menú

<a href="#quehacemos">Que hacemos</a>
Lo que redirigirá a:
<h2 id="quehacemos">Que hacemos</h2>

Se pueden incrustar enlaces en imágenes y descargar las mismas desde un enlace.

<a href="enlace"> <img src="..." alt="..." /> </a>
<p><a href="enlace" download="enlace">Descargar imagen</a></p>
```

## Etiquetas semánticas

Estas ayudan a mejorar la indexación a los buscadores describiendo cada apartado de la página de manera más especifica

```html
<header></header>
Para la cabecera del sitio

<section></section>
Para dividir el sitio en secciones

<article></article>
Para artículos o entradas (en blogs)

<nav></nav>
Para el menú de navegación (generalmente va en el header)

<aside></aside>
Para contenidos laterales (generalmente en blogs)

<footer></footer>
Para el pie de página

<main></main>
Contenido principal de la página
```

## Etiquetas multimedia

```html
<audio src="..." controls></audio>

<video controls>
  <source src="..." type="video/mp4" />
</video>

<iframe src="..." width="..." height="..." frameborder="0"></iframe>

<audio></audio>
Para agregar audio y mostrar el control del reproductor. Solo soporta archivos
.mp3 .ogg y .wav

<video controls></video>
Para agregar video con su respectivo reproductor, se pueden agregar más
atributos después de controls como width o height. Soporta archivos mp4, webM,
ogg

<iframe></iframe>
Sirve para insertar o incrustar contenido de otros sitios web o servidores a
nuestra página como videos de youtube o alguna otra plataforma.
```
