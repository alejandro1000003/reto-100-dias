[[Día 2]]## PortSwigger

### Teoría
*Conceptos nuevos*

**OS command injection** 
>   Es una vulnerabilidad de seguridad que ocurre cuando un atacante puede ejecutar comandos del sistema operativo en un servidor, aprovechando la falta de validación o filtrado adecuado de entrada en una aplicación web u otro sistema que interactúa con el sistema operativo subyacente.

**Pivoting**
>   El término "pivoting" en el contexto de la ciberseguridad se refiere a la práctica de usar un sistema comprometido como punto de acceso para realizar ataques adicionales dentro de una red. Esto implica moverse lateralmente a través de la red desde el sistema comprometido (o "pivot") hacia otros sistemas y recursos para llevar a cabo acciones maliciosas adicionales. El pivoting puede ayudar a los atacantes a expandir su acceso y control sobre una red, lo que puede conducir a una escalada de privilegios o a la explotación de más sistemas dentro de la infraestructura de la organización objetivo.

**SQL injection**
>  Es una vulnerabilidad de seguridad que permite a un atacante ejecutar comandos SQL no autorizados en una base de datos a través de entradas no validadas en una aplicación web.

**Comandos útiles para reconocimiento en un command injection**

| Purpose of command    | Linux         | Windows         |
| --------------------- | ------------- | --------------- |
| Name of current user  | `whoami`      | `whoami`        |
| Operating system      | `uname -a`    | `ver`           |
| Network configuration | `ifconfig`    | `ipconfig /all` |
| Network connections   | `netstat -an` | `netstat -an`   |
| Running processes     | `ps -ef`      | `tasklist`      |
### Lab: OS command injection, simple case

En este caso se podía hacer command injection en un parámetro GET de un producto de la página, el ejercicio me pide que haga un whoami, por lo tanto lo codificaré en un uri y recargaré la página

![[Pasted image 20240508175927.png]]

Tiene un error de sintaxis pero se ha resuelto el lab
![[Pasted image 20240508180649.png]]

### Lab: SQL injection vulnerability in WHERE clause allowing retrieval of hidden data

![[Pasted image 20240508181250.png]]

Este SQLI era a través de un parámetro GET, este era un ejemplo muy simple, así que con un OR 1=1 ha bastado.

### Lab: SQL injection vulnerability allowing login bypass

![[Pasted image 20240508182109.png]]
Ejemplo básico de sql injection -> `SELECT * FROM users WHERE username = 'administrator'--' AND password = ''`

### Progreso...
![[Pasted image 20240508182319.png]]
Acabada la ruta del aprendiz en portswigger me dirijo a comenzar la ruta de **API testing**, como estos temas ya son más complejos voy a almacenar los reports en carpetas por temas comenzando por Api testing, también he creado un índice para que no se pierda uno buscando el progreso diario.

#os_command_injection