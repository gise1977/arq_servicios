#Bienvenidos al Proyecto_arq_Servicio

<p>
Algunos temas que hemos visto, y simples comando para que arranques:
</p>

- Git init
- Git status
- Git add .
- git commit -m "bienvenido"
- Git push

**Entre otros comandos te dejo la direccion para que puedas clonar nuestro Proyecto**

- Git clone https://github.com/gise1977/arq_servicios.git

### Introduccion:

Se realizo una base de datos que pueda almacenr no solo el alumno si no su ID, nombre y apellido completo, ademas agregando sus tres notas con su respectivo promedio. Te invito a probarlo. Adjunto el siguiente link.

- http://localhost:3000/alumnos

Adjunto tanto el get como el post  extraido del Postman

- Get
curl --location --request GET 'http://localhost:3000/alumnos' \
--header 'Content-Type: application/json' \
--data ' {"nombre_completo":"jorge Araque",
 "nota1": 7,
 "nota2": 5,
 "nota3": 3
 
   } 

'
- Post
curl --location 'http://localhost:3000/alumnos' \
--header 'Content-Type: application/json' \
--data ' {"nombre_completo":"jorge Araque",
 "nota1": 7,
 "nota2": 5,
 "nota3": 3
 
   } 

'






