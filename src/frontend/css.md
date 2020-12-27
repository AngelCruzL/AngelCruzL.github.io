# CSS

## Basicos

El CSS3 se compone de un selector y de las propiedades que se le aplican a este.

```css
h1 {
  font-size: 18px;
}
```

Adicionalmente a esto existen selectores de atributos, por ejemplo:

```css
a[title]{...}
  Este aplica estilos a todas las etiquetas a que contengan una propiedad title

a[href$="html"]{...}
  Aplica a todas las etiquetas a con propiedad href que terminen con html

a[href^="pagina"]{...}
  Aplica a todos los que comiencen con la palabra página

a[title~="dos"]{...}
  Aplica a todas las etiquetas title que contengan el valor “dos”
  separado por espacios

a[title|="social"]{...}
  Aplica a los que contienen social separados por un guion

a[href*="pagina"]{...}
  Aplica a todas las etiquetas a que tengan la propiedad href
  y un valor página sin importar si este está separado
  por espacios o guiones
```

De la misma manera existen selectores más avanzados, algunos ejemplos de estos son:

```css
*{…}
  Selector universal: Todos los elementos

h1 + h2{…}
  Selector adyacente: Elemento precedido por otro elemento

h1 ~ h2{…}
  Selector de hermanos: Elemento hermano de otro elemento
  sin necesidad de estar precedido por él

section p{…}
  Selector descendente: Aplica a elementos contenidos por el otro elemento indicado
  sin ser estrictamente hijo directo

section > p{…}
  Selector de hijo directo: Aplica la propiedad al hijo directo
```

Además de esto CSS cuenta con pseudoclases y pseudoelementos.

Las **_pseudoclases_** son palabras clave que se le añaden a los selectores y que especifican un estado especial del elemento seleccionado.

```css
a:hover {
  ...;
}
```

Los **_pseudoelementos_** añaden características solo a una parte especificada por el selector.

```css
a::first-line {
  ...;
}
```

Para evitar un estilo general a todos los selectores estos pueden hacer uso de un id, el cual al ser único permite que cada etiqueta (o selector) tenga un diseño más personalizable.

```html
<p id="titulo"></p>
```

```css
#titulo {
  ...;
}
```

También se puede hacer uso de estilos para clases, lo que permitirá aplicar CSS a distintos elementos simultáneamente.

```html
<p class="text"></p>
<h2 class="text"></h2>
```

```css
.text {
  ...;
}
```

::: details SVG
Para poder cambiar el color del icono svg se tiene que hacer uso del siguiente método:

```html
Teniendo en el HTML:

<svg class="feature__icon">
  <use xlink:href="img/sprite.svg#icon-lock"></use>
</svg>
```

En SASS se realiza lo siguiente:

```scss
.feature {
  &__icon {
    fill: $color-primary;
    width: 4.5rem;
    height: 4.5rem;
  }
}
```

:::

## Flexbox

Para poder aplicar la propiedad de flexbox es necesario que el padre del elemento al cual le quieres aplicar esta propiedad contenga la propiedad de `display: flex;` el cual tomará toda la fila del contenedor, mientras que si el padre utiliza la propiedad `display: inline-flex;` tomará solo el ancho del espacio disponible.

La propiedad de flex-direction tiene cuatro posibles valores; row, row-reverse, column, column-reverse. El valor por defecto que tiene esta propiedad es row

El eje cruzado va perpendicular al eje principal, por lo tanto si flex-direction es row o row reverse el eje cruzado ira por las columnas, si el eje principal es column o column reverse entonces el eje cruzado corre a lo largo de las filas
