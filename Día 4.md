### Organización
He llegado a un punto en API testing (portswigger) que me cuesta visualizar cómo funcionan por detrás los ataques porque debería tener más contexto de las tecnologías presentes en la web, voy a intentar aprender un poco node.js para ver como funcionan mejor los framework.

### Teoría
*Conceptos nuevos*

**Node.js**
>   Entorno de tiempo de ejecución de JavaScript que permite ejecutar código JavaScript fuera del navegador web, posibilitando su uso en servidores, herramientas de línea de comandos, aplicaciones de escritorio y otros contextos de desarrollo de software.

**Motor V8**
>   El motor V8 es un motor de ejecución de JavaScript de código abierto desarrollado por Google para su navegador web Google Chrome. Es conocido por su velocidad y eficiencia, y es el motor subyacente utilizado por Node.js para ejecutar código JavaScript fuera del navegador, optimizando su rendimiento al compilar el código en código de máquina directamente ejecutable.

**Patrón de diseño - Modulos**
>   Consiste en separar nuestro código en diferentes ficheros y los vamos a poder importar y exportar para que ese código se reutilice.

**Common JS**
>   CommonJS es una especificación de módulos en JavaScript, utilizada principalmente en entornos de servidor como Node.js, que permite la organización modular y la reutilización de código. Aunque CommonJS sigue siendo ampliamente utilizado en el ecosistema de Node.js, su adopción en otros entornos de desarrollo JavaScript ha disminuido en favor de ESM y herramientas de empaquetado modernas.

Ejemplo de uso 
```js
// exportar módulo en nodejs
const suma = (a, b) => a + b; // función suma de una línea
module.exports = sum;
```

```js
// importar un módulo
const suma = require ./sum
```
