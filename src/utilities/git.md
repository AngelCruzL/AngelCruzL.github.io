# Git

Es un software de control de versiones, su propósito es llevar registro de los cambios en archivos de computadora y coordinar el trabajo que varias personas realizan sobre archivos compartidos.

Existe la posibilidad de trabajar de forma remota y una opción es GitHub.

Git nos funciona para poder crear sistemas de versiones de programas y así poder regresar a estas de ser necesario.

Al usar -- es seguido de una palabra y la usar - son comandos independientes

## Configuración básica

Para identificarse en git:

```bash
git config --global user.email langelcruzlara@gmail.com
git config --global user.name "Ángel Cruz"
```

## Comandos Basicos

```bash
git config --global -e
  Permite abrir en el editor de texto las configuraciones globales de git

git init
  Inicia el repositorio local, este crea una carpeta oculta .git

git status
  Muestra lo que hay en el folder (en rojo los que no están registrados
  o recibieron algún cambio del ultimo commit a la fecha, en verde los que sí)

git commit -m "Primer commit"
  Sacar una fotografía del proyecto con el título primer commit

git checkout -- .
  Deshace los cambios de todos los archivos desde el último commit realizado

git checkout -- sass/_footer.scss
  Deshace los cambios del archivo _footer.scss en la carpeta scss
  desde el último commit

git add “file name”
  Sirve para añadir archivos

git add *.png
  Sirve para añadir archivos con extensión .png

git add css/
  Sirve para añadir archivos de la carpeta css

git add -A
  Sirve para añadir todos los archivos no guardados de todo el proyecto

git add .
  Sirve para añadir todos los archivos no guardados del directorio
  en el que te encuentras

git reset *.xml
  Sirve para excluir del stage a todos los archivos con extension xml

git add “*.txt”
  Sirve para añadir todos los archivos txt de todo el proyecto

git add *.txt
  Sirve para añadir todos los archivos txt de del directorio actual

git add -all
  Agrega todos los archivos que se hayan modificado

git add 	css/*.pdf
  Sirve para añadir archivos de la carpeta css con extensión .pdf
```

## Commits

```bash
git log
  Muestra los commits de los más recientes a los más antiguos
    Head: ultimo commit de la rama actual

git log --oneline
  Muestra los commits de manera más reducida

git log --oneline --decorate --all --graph
  All: información referente a las diferentes ramas
  Decorate-graph: muestra de manera más grafica las ramificaciones del árbol

git status -s
  Nos muestra en modo silenciado los archivos modificados y en stage

git status -s -b
  Nos muestra en modo silenciado los archivos y la rama de estos

git diff
  Muestra los cambios entre el commit anterior y el periodo actual

git diff steged
  Muestra los cambios entre el commit anterior y el periodo actual
  de los archivos que se encuentren en el staged.

git rm --cached index.html
  Remove from the stage index.html

git reset HEAD readme.md
  Quita del staged el archive readme.md.

git checkout -- readme.md
  Revertir los cambios del archivo readme desde el ultimo commit.

git commit --amend -m "Actualizamos el readme"
  Con esto modificamos el mensaje del último commit.

git commit
  Añade lo del staged y nos permite introducir un mensaje multilínea,
  para salir se usa la combinación de teclas:
  esc, w(write, para guardar),q.
```

::: details Alias

```bash
git config --global alias.lg "log --oneline --decorate --all --graph"
  Con este comando creamos el alias, el cual será lg,
  al ejecutarse mostrará lo mismo que si se ejecutaran los
  comandos entre comillas.

git config --global alias.s "status -s -b"

Desacer commits:
git config --global alias.undo 'reset --soft HEAD^'
```

:::

## Edición de commits

```bash
git reset --mixed e6dca05
  Quita los archivos del staged que estén arriba de e6dca05.

git reset --hard e6dca05
  Elimina los archivos y modificaciones realizados desde el commit e6dca05.

git reflog
  Sirve para ver los registros del repositorio, incluyendo los de los archivos borrados.


Para restaurar archivos borrados se usa el comando “git reset --hard …”,
con lo que a la dirección … que usemos será a la que regresaremos los archivos.

git mv destruir-mundo.txt salvar-mundo.txt
  Con este comando renombramos desde la terminal de git el archivo destruir mundo
  a salvar mundo, con esto el archivo, aunque cambie de nombre
  mantiene el historial de cambios en el repositorio.

git rm salvar-mundo.txt
  Con este comando borramos o removemos el archivo salvar mundo,
  después de esto al hacer un git s, podremos observar que el archivo
  posee una letra D en verde, lo cual hará que el archivo aun no esté
  eliminado definitivamente (pues se encuentra en el staged), para eliminarlo
  definitivamente debemos hacer un commit, siempre podremos volver a el con el
  uso de los saltos en el tiempo.

git add -u
  Sirve para actualizar todos los ficheros, ya sean renombrados o eliminados
  fuera de la terminal de git, después de esto se tiene que hacer un git add -A
  y posteriormente un commit para que git reconozca los cambios en los archivos.


Para poder ignorar algún archivo o carpetas que se encuentren dentro
del repositorio de git tenemos que crear un archivo llamado “.gitignore”
en el cual dentro por línea debemos de escribir el nombre del archivo o carpeta
que se desea ignorar por parte del repositorio, a partir de ahí se debe ejecutar:
git add -A y luego un commit para que el repositorio este consciente
de los archivos a ignorar.

git checkout -- .
  Con este comando se reestablece el contenido que estaba en el último commit
```

## Ramas (branches)

En git existe el concepto de las ramas (branch) y de las uniones (merge),
las primeras consisten en distintos “caminos” los cuales guardan los cambios.
En cuanto a las uniones existen de tres tipos, las cuales son:

::: details Fast Forward
En estas los cambios se realizan en una rama alterna pero la rama principal
no tiene commits, por lo que git automáticamente “junta” estas dos ramas
:::

```bash
git branch rama-villanos
  Sirve para crear la rama “rama-villanos”

git branch
  Ver la rama en la que nos encontramos

git checkout rama-villanos
  Cambiar a la rama “rama-villanos”

git diff rama-villanos master
  Que diferencias hay entre la rama principal y rama-villanos,
  (en rojo mostrará mejor estos detalles)

Para unir las ramas debemos estar en la que nosotros queremos fusionar algo

git merge rama-villanos
  Estando en la rama principal fusiona rama villanos con la principal

git branch -d rama-villanos
  Borra la rama “rama-villanos”

git checkout -b rama-villano
  Crea y nos desplaza a “rama-villano”
```

## Tags

Un tag hace referencia a un commit y a todo el estado del proyecto en ese momento en especifico

```bash
git tag superRelase
  Crea una etiqueta llamada “superRelase” en el lugar donde apunta el header

git tag
  Muestra todas las etiquetas creadas

git tag -d superRelase
  Elimina la etiqueta “superRelase”

git tag -a v1.0.0 -m "Versión 1.0.0"
  Crea un tag con la nota “v1.0.0”, mensaje "Versión 1.0.0" a donde apunta el head

git tag -a v0.1.0 345d7de -m "Version alpha del código"
  Crea un tag con la nota “v0.1.0”, mensaje "Versión alpha del código"
  a donde apunta 345d7de

git show v0.1.0
  Muestra los detalles del tag v0.1.0
```

::: details Versionado
Las etiquetas se utilizan para el versionado del proyecto, el incremento
semantico de las versiones se divide en cuatro lanzamientos principales

First release | 1.0.0 | Start with 1.0.0

Patch release | 1.0.1 | Increment the third digit

Minor release | 1.1.0 | Increment the middle digit and reset last digit to zero

Major release | 2.0.0 | Increment the first digit and reset middle and last digits to zero
:::

## Stash

El stash nos sirve para tomar algunos archivos y colocarlos en una línea temporal

```bash
git stash / git stash save
  Crea un stash

git stash apply
  Restaura el ultimo registro en el stash

git stash list
  Muestra el registro del stash

git stash drop
  Elimina el ultimo stash (posición 0)

git stash pop
  Restaura la ultima entrada del stash y la borra

git stash save --keep-index
  keep index: Guarda todos los archivos menos los que están en el stage

git stash save --include-untracked
  Include-untracked: Incluye todos los archivos, junto a los que git
  no les da seguimiento

git stash list –stat
  Mas información de cada entrada del stash

git show stash
  Muestra de manera detallada cada stash

git stash save “…”
  Agrega el mensaje … a la entrada actual del stash

git stash clear
  Borra de manera irrecuperable todas las entradas del stash
```

## Rebase

```bash
git rebase master
  Crea un área temporal para reorganizar la información

git rebase -i HEAD~4
  Crea un rebase interactivo con el cual puedes realizar múltiples tareas,
  entre ellas squash (s), la cuál une los dos últimos commits

Reword sirve para modificar el mensaje

git checkout misiones.md
  Elimina los cambios del archivo misiones.md desde el último commit

git reset HEAD^
  Deshace el último commit sin revertir los cambios que se guardaron de este,
  antes debimos acceder desde el edit del commit

Para terminar el rebase se ejecuta el siguiente comando
git rebase --continue
```

## GitHub

:::details Básicos

```bash
git push
  Sube los cambios del repositorio al servidor

git pull
  Descarga los cambios del servidor

git remote -v
  Muestra de donde se descargan y cargan los archivos del repositorio

git push --tags
  Subir los tags a github

git clone https…
  Nos permite clonar el repositorio de la web https…

git fetch
  Sirve para mostrar si hay cambios en el repositorio en línea respecto al local


Se recomienda hacer un git fetch en vez de un pull ya que el pull es
destructivo al hacer el merge de manera automática,
de aquí se realiza el pull y luego un push
```

:::
