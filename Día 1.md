*Continuando con la cuenta de portswigger...*

## PortSwigger
### Lab: 2FA simple bypass

- Your credentials: `wiener:peter`
- Victim's credentials `carlos:montoya`

Este laboratorio consistía en en hacer un bypass de una autentificación de dos factores, algunas páginas que tienen este factor de seguridad te han loggeado antes de verificar el código enviado al correo electrónico. Simplemente puedes acceder a la cuenta sin tener que verificar el código.

![[Pasted image 20240507121416.png]]
### Teoría
*Conceptos nuevos*

**lo** (linux) -> [[23. loopback]]
>  La interfaz de red Loopback (también conocida como `lo`) es una emulación de una tarjeta de red dentro del propio dispositivo. Aunque no es una tarjeta de red física real, se comporta de manera similar a una tarjeta de red en términos de cómo se accede y se utiliza.
>  
>  La interfaz de bucle de retorno se crea durante la inicialización del sistema operativo y está siempre presente en el sistema. Es una forma eficiente de permitir que los programas en un dispositivo se comuniquen entre sí a través de la red, incluso cuando no hay interfaces de red físicas presentes o configuradas.
>  
>  En lugar de enviar datos a través de una red física, los datos enviados a través de la interfaz de bucle de retorno se enrutan internamente dentro del propio dispositivo, lo que los hace ideales para la comunicación interna y las pruebas locales sin depender de la red externa.

**API REST** (web)
> Las API REST se comunican a través de solicitudes HTTP para realizar funciones de base de datos estándar como crear, leer, actualizar y eliminar registros (también conocido como CRUD) dentro de un recurso.
> 
> Por ejemplo, una API REST usaría una solicitud GET para recuperar un registro. Una solicitud POST crea un nuevo registro. Una solicitud PUT actualiza un registro y una solicitud DELETE elimina uno. Todos los métodos HTTP se pueden utilizar en las llamadas a la API. Una API REST bien diseñada es similar a un sitio web que se ejecuta en un navegador web con funcionalidad HTTP integrada.
> 
> El estado de un recurso en un instante determinado, o marca de tiempo, se conoce como la representación del recurso. Esta información se puede entregar a un cliente en prácticamente cualquier formato, incluidos JavaScript Object Notation (JSON), HTML, XLT, Python, PHP o texto sin formato. JSON es popular porque es legible tanto por humanos como por máquinas, y es independiente del lenguaje de programación.
> 
> Los encabezados y parámetros de solicitud también son importantes en las llamadas a la API REST, ya que incluyen información importante sobre los identificadores, como metadatos, autorizaciones, identificadores uniformes de recursos (URI), almacenamiento en caché, cookies y mucho más. Los encabezados de solicitud y los encabezados de respuesta, junto con los códigos de estado HTTP convencionales, se utilizan en API REST bien diseñadas.

**SSRF** (Server-side request forgery)
[[SSRF]]

### Lab: Basic SSRF against the local server

Este laboratorio consistía en reemplazar una petición api rest que hacia una requestpara obtener el número de stock disponible de un determinado producto y sustituirlo por una petición para borrar el la cuenta de carlos (objetivo) a través del panel de admin.

`stockApi=http://stock.weliketoshop.net:8080/product/stock/check%3FproductId%3D6%26storeId%3D1`

`stockApi=http://localhost/admin`

![[Pasted image 20240507134829.png]]

### Lab: Basic SSRF against another back-end system

![[Pasted image 20240507151250.png]]

Este lab utilizaba la misma tecnología que el anterior, rest api. Pero en este tenía que hacer fuzz hasta encontrar el número 192.168.0.124 (dónde se ejecuta la rest api con permisos de administrador) para mandar con privilegios los comandos.

### Lab: Remote code execution via web shell upload

![[Pasted image 20240507154344.png]]

He subido un archivo php porque al subir el avatar me dejaba, entonces he enviado un comando mediante get para ejecutar cat `/home/carlos/secret`

### Lab: Web shell upload via Content-Type restriction bypass

![[Pasted image 20240507155955.png]]

Este lab era lo mismo que el anterior, con la diferencia que en este lab tenías que subir el fichero modificando la petición http modificando el content type del archivo al de una imagen.

#api_rest #loopback #file_upload #ssrf #2fa_bypass
