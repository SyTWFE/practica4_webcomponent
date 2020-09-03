# Práctica4
## Web component

### 1. Pre requisitos

Dado que en esta práctica nos enfocamos únicamente en un webcomponent, no hay pre requisitos. Si se utilizaran las técnologias vistas anteriormente y ya instaladas.

### 2. Proyecto base

Se ha utilizado un proyecto básico de jekyll, se ha dejado predeterminado su header y footer. Lo unico que ha sido modificado ha sido el body.

![proy](webComponent/img/proy.png)

### 3. Elementos 

Los elemntos a selecionar para probar el webComponent se han definido dentro de la carpeta *"_character"* todos cuentan con los mismos atributos y se llaman dentro del código HTML con un for que recorre toda la colección.

![pages](webComponent/img/pages.png)

![pagesfor](webComponent/img/pagesfor.png)

### 4. Web Component

El webcomponent se crea dentro de un fichero *".js"*, dentro de el, crearemos una clase que nos definira nuestro elemento personalizado

![class](webComponent/img/class.png)

Dentro de esta clase a su vez, definimos un *"callback"* que su fin es ejecutarse dentro del ciclo de vida de un elemento. Para este caso utilizaremos el *"connectedCallback"* que se invoca cada vez que se añade un elemento a un documento.

![callback](webComponent/img/callback.png)

Dentro del **CallBack** tenemos:

- La declaración de las variables donde obtendremos los datos de un objeto

![vars](webComponent/img/vars.png)

- La creación de un div que permitirá seleccionar el objeto

![divvars](webComponent/img/divvars.png)

Por otro lado, también tendremos que definir nuestra elemento personalizado que nos permitirá obtener la información del objeto

![custom](webComponent/img/custom.png)

Y crear la función para seleccionar y obtener dicho objeto

![select](webComponent/img/select.png)

### 5. Resultado

![res1](webComponent/img/res1.png)

![res2](webComponent/img/res2.png)

![res3](webComponent/img/res3.png)