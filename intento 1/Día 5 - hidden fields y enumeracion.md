## 1/Portswigger
Lab: User ID controlled by request parameter with password disclosure

Este laboratorio es sencillo, tienes que cambiar el parámetro de la url por "**adminitrator**" para confundir al sistema. Desde esta interfaz remplaza el input de mi contraseña anterior (1234) por la contraseña del admin, inspeccionando el elemento puedes encontrarla. Muy sencillo pero me ha llevado mucho tiempo.

**Repaso de conceptos**: La autenticación verifica la identidad de un usuario, mientras que la autorización determina a qué recursos puede acceder dicho usuario.

## Lab: Username enumeration via different responses

Este laboratorio me ha hecho indagar como enumerar usuarios y hacer fuerza bruta con burpsuit (**yo lo sabía hacer con ffuf**). Para enumerar usuarios tenemos que mandar la petición http al intruder y luego marcar el parámetro post/get de la petición http, cargar la wordlist (te la da portswigger) y por último empezar el ataque. Para obtener el usuario encontrado podemos fijarnos en el tamaño de la respuesta, si el tamaño es inferior o superior significa que el html (respuesta) generado muestra un mensaje distinto a las demás respuestas, por lo tanto es muy probable que este sea el usuario. Para las contraseñas he mirado el código de estatus que es diferente.


![[Pasted image 20240426224127.png]]

## /

Lo último que he hecho hoy es organizar mi repositorio obsidian de ciberseguridad, sincronizandolo con el que tengo en clase. 