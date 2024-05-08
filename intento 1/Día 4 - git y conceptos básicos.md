Maldita sea, hoy he aprendido a configurar las claves rsa para poder usar ssh protocol porque git en linux no te permite usar el protocolo http. Esto me ha servido para aprender como administrar y configurar claves rsa. He descargado para mi repositorio de obsidian una copia del tutorial;

https://gist.githubusercontent.com/xirixiz/b6b0c6f4917ce17a90e00f9b60566278/raw/525ae94ae3bd952a7ed67f6725ef449dc1474d31/Set%2520up%2520GitHub%2520push%2520with%2520SSH%2520keys.md

1/ Portswinger
---
### Lab: User ID controlled by request parameter, with unpredictable user IDs
Este laboratorio me ha costado un poco más de 50 minutos resolverlo y era lo más simple del mundo, he aprendido que antes de hacer un ejercicio tengo que leer bien el enunciado. Básicamente consistía en ir a los blogs publicados por carlos y en la misma url te sale su id de usuario, luego si has leido el enunciado e inicias sesión con la cuenta que te dan verás que el panel de control del usuario puedes sustituir sin ningún tipo de protección el identificador del usuario accediendo al panel de otros usuarios, en este caso tenía que encontrar el de carlos.

![[Pasted image 20240425201442.png]]


También he aprendido de ffuf y su sintáxis porque pensaba que el laboratorio era más complicado y me he puesto a fuzzear directorios y parametros get.

- Concepto nuevo: **parameter tampering**
- Concepto nuevo: **horizontal privilege escalation**