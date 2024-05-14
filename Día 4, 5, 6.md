### Organización

He llegado a un punto en API testing (portswigger) que me cuesta visualizar cómo funcionan por detrás los ataques porque debería tener más contexto de las tecnologías presentes en la web, voy a intentar aprender un poco node.js para ver como funcionan mejor los framework.

---
### Node js, ¿qué es?

**Node.js**
>   Entorno de tiempo de ejecución de JavaScript que permite ejecutar código JavaScript fuera del navegador web, posibilitando su uso en servidores, herramientas de línea de comandos, aplicaciones de escritorio y otros contextos de desarrollo de software.

**Motor V8**
>   El motor V8 es un motor de ejecución de JavaScript de código abierto desarrollado por Google para su navegador web Google Chrome. Es conocido por su velocidad y eficiencia, y es el motor subyacente utilizado por Node.js para ejecutar código JavaScript fuera del navegador, optimizando su rendimiento al compilar el código en código de máquina directamente ejecutable.

**Patrón de diseño - Modulos**
>   Consiste en separar nuestro código en diferentes ficheros y los vamos a poder importar y exportar para que ese código se reutilice.

**Sistema de modulos Common JS**
>   CommonJS es una especificación de módulos en JavaScript, utilizada principalmente en entornos de servidor como Node.js, que permite la organización modular y la reutilización de código. <font style="color:red;">Aunque CommonJS sigue siendo ampliamente utilizado en el ecosistema de Node.js, su adopción en otros entornos de desarrollo JavaScript ha disminuido en favor de ESM y herramientas de empaquetado modernas.</font>

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

**Sistema de módulos ecmascript (ES Modules)**

>   El sistema de módulos ECMAScript (conocido como ES Modules o ESM) es el método recomendado actualmente para trabajar con módulos en JavaScript.

*Extensiones de archivo disponibles en node*
.js -> por defecto utiliza CommonJS
.mjs -> para utilizar ES Modules
.cjs -> para utilizar CommonJS

**Ejemplo de ES Modules (utilizando extensión mjs)** 

```js
// exportar funciones
export function sum(a,b){
	return a+b;
}
// puedes exportar cuantas quieras
export function sub(a,b){
	return a-b;
}
```

```js
// importar modulo
import {sum, sub} from './sum.mjs'
```

---
## Modulos nativos nodejs

>   La inclusión de bibliotecas nativas en Node.js para interactuar con el sistema operativo, manejar la red, y realizar muchas otras tareas es uno de los aspectos más destacados y poderosos de esta plataforma. Esto le otorga a Node.js una flexibilidad y capacidad considerable para construir desde simples scripts hasta sistemas de backend complejos y escalables.

>   En temas de seguridad de la aplicación, node.js puede contener módulos de terceros para ayudar a realizar auditorias de seguridad dentro de la aplicación

**Ejemplos**

*El módulo os proporciona utilidades básicas relacionadas con el sistema operativo*
```js
const os = require('node:os');

console.log("Nombre del S.O | ", os.platform());
console.log("Versión del S.O | ",os.release());
console.log('Arquitectura del S.O | ', os.arch());
console.log('NºCPU\'s',os.cpus()); // Vamos a poder escalar (nodejs usa un hilo)
console.log('Memoria libre', os.freemem());
console.log('Memoria total', os.totalmem());
```

*El módulo fs proporciona utilidades básicas relacionadas con el file system*
```js
// file system
const fs = require('node:fs');

// fichero de ejemplo
const stats = fs.statSync('./fichero.txt');

console.log(
    stats.isFile(),         // Es fichero?
    stats.isDirectory(),    // Es directorio?
    stats.isSymbolicLink(), // Es un enlace simbolico?
    stats.size,             // Tamaño en bytes
)
```

---

## Síncrono vs. Asíncrono

### Operaciones Síncronas

- **Bloqueo:** Las operaciones síncronas bloquean la ejecución del programa hasta que se completa la tarea.

```js
const fs = require('fs');

// Lectura de un archivo de forma síncrona
const data = fs.readFileSync('archivo.txt');
console.log(data.toString());
console.log('Lectura de archivo completa.');
```

### Operaciones Asíncronas

- **No Bloqueo:** Las operaciones asíncronas no bloquean la ejecución del programa y utilizan devoluciones de llamada (callbacks) para manejar los resultados.

```js
const fs = require('fs');

// Lectura de un archivo de forma asíncrona
fs.readFile('archivo.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error('Error al leer el archivo:', error);
        return;
    }
    console.log(data.toString());
    console.log('Lectura de archivo completa.');
});
```

## Tipos de Asincronía en JavaScript

JavaScript, como lenguaje de programación, ofrece varias formas de manejar la asincronía. Estos son los tipos principales:

### 1. Callbacks

Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que se completa una operación asíncrona. Son el mecanismo más antiguo para manejar la asincronía en JavaScript.

```js
function leerArchivo(callback) {
  fs.readFile('archivo.txt', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

leerArchivo((err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
  } else {
    console.log(data.toString());
    console.log('Lectura de archivo completa.');
  }
});
```

### 2. Promesas

Las promesas son objetos que representan el resultado eventual (o el fracaso) de una operación asíncrona. Proporcionan una sintaxis más clara y manejo mejorado de errores en comparación con los callbacks.

```js
function leerArchivo() {
  return new Promise((resolve, reject) => {
    fsPromises.readFile('archivo.txt')
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

leerArchivo()
  .then(data => {
    console.log(data.toString());
    console.log('Lectura de archivo completa.');
  })
  .catch(error => {
    console.error('Error al leer el archivo:', error);
  });
```

### 3. Async/Await

Async/Await es una característica introducida en ECMAScript 2017 que proporciona una forma más elegante de escribir código asincrónico. Permite escribir código asincrónico de manera similar a la síncrona, lo que mejora la legibilidad y el mantenimiento del código.

```js
async function leerArchivo() {
  try {
    const data = await fsPromises.readFile('archivo.txt');
    console.log(data.toString());
    console.log('Lectura de archivo completa.');
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
}

leerArchivo();
``` 

### Conclusión

Cada tipo de asincronía tiene sus propias ventajas y desventajas, y la elección entre ellos depende del caso de uso y las preferencias del desarrollador. Los callbacks son el enfoque más antiguo, las promesas ofrecen una sintaxis más clara y manejo de errores mejorado, mientras que Async/Await proporciona un código más legible y estructurado.

---
## Tipos de Sincronía y Asincronía en JavaScript

### 1. Sincronía

En la sincronía, las operaciones se ejecutan secuencialmente, una después de la otra, en el orden en que se escriben en el código. Cada operación espera a que la anterior se complete antes de comenzar.

```js
console.log('Paso 1'); console.log('Paso 2'); console.log('Paso 3');`
```

### 2. Asincronía Secuencial

La asincronía secuencial implica la ejecución de operaciones asíncronas en secuencia, donde cada operación espera a que la anterior se complete antes de comenzar. Aunque las operaciones son asincrónicas, siguen un orden secuencial.

```js
setTimeout(() => {
  console.log('Paso 1');
  setTimeout(() => {
    console.log('Paso 2');
    setTimeout(() => {
      console.log('Paso 3');
    }, 1000);
  }, 1000);
}, 1000);
```

### 3. Sincronía Paralela

En la sincronía paralela, las operaciones se ejecutan simultáneamente, sin esperar a que una operación se complete antes de comenzar otra. Esto puede lograrse utilizando múltiples hilos de ejecución o procesos.

```js
// Ejemplo ficticio, JavaScript no admite verdadera ejecución paralela en un solo hilo.
// Se puede simular usando Web Workers en navegadores o el módulo cluster en Node.js.
const operacion1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Paso 1');
    resolve();
  }, 2000);
});

const operacion2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Paso 2');
    resolve();
  }, 1000);
});

const operacion3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Paso 3');
    resolve();
  }, 1500);
});

Promise.all([operacion1, operacion2, operacion3])
  .then(() => {
    console.log('Todas las operaciones completadas en paralelo.');
  });
```

### 4. Asincronía Paralela

La asincronía paralela implica la ejecución de múltiples operaciones asíncronas al mismo tiempo, sin esperar a que una operación se complete antes de comenzar otra. Esto puede lograrse utilizando funciones asíncronas y `Promise.all()`.

```js
async function ejecutarEnParalelo() {
  const resultado1 = operacion1();
  const resultado2 = operacion2();
  const resultado3 = operacion3();

  await Promise.all([resultado1, resultado2, resultado3]);
  console.log('Todas las operaciones completadas en paralelo.');
}

ejecutarEnParalelo();
```

Cada tipo de sincronía y asincronía tiene sus propias características y casos de uso. La elección entre ellos depende del contexto y los requisitos específicos de la aplicación. 