En JavaScript, los términos "global" y "globalThis" se refieren a objetos que proporcionan acceso al ámbito global del entorno de ejecución. Dependiendo de dónde se ejecute JavaScript, este ámbito global puede ser diferente, lo que llevó a la introducción de "globalThis" para ofrecer una forma consistente de acceder al objeto global.

### Global

El término "global" no es una característica oficial de JavaScript por sí mismo en términos de ser una propiedad o método específico del lenguaje. Más bien, se usa para describir el objeto o espacio donde viven las variables y funciones globales. En diferentes entornos de JavaScript, este objeto global tiene diferentes nombres y comportamientos:

- **En el navegador**: El objeto global es `window`. Todas las variables y funciones globales se convierten en propiedades de `window`.
- **Node.js**: En Node.js, el objeto global se llama `global`. Cualquier variable o función definida globalmente está disponible como propiedad de `global`.
- **Web Workers**: En los web workers, el objeto global es `self`, que representa el ámbito global para el script del worker.

### globalThis

`globalThis` fue introducido en ECMAScript 2020 para proporcionar una manera uniforme de acceder al objeto global en cualquier entorno de JavaScript sin tener que preocuparse por el contexto específico como navegador, Node.js, o workers. `globalThis` siempre apunta al objeto global, independientemente del entorno:

- En el navegador, `globalThis` es equivalente a `window`.
- En Node.js, `globalThis` es equivalente a `global`.
- En web workers, `globalThis` es equivalente a `self`.

#### Ejemplo de Uso de globalThis

```javascript
console.log(globalThis); // Devuelve el objeto global, que será `window`, `global` o `self` dependiendo del entorno.

// Definir una variable global a través de globalThis
globalThis.miVariable = 'Hola Mundo';
console.log(miVariable); // "Hola Mundo"
```

La ventaja de usar `globalThis` es que simplifica el desarrollo de código JavaScript que es compatible con múltiples entornos sin necesidad de chequear el entorno específico para acceder al objeto global. Esto hace que el código sea más limpio y menos propenso a errores al trabajar en entornos cruzados.