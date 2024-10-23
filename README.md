<h1 align="center"> || DESAFÍO FINAL || </h1>
<h4 align="center"> Desarrollo backend con NodeJS </h4>

¡FELICITACIONES por haber llegado hasta acá! Ahora sólamente queda este último trabajo grupal... ¡Qué lo disfruten!

---

Desarrollar un sistema de autenticación de usuarios que permita:

-   Register: Crear un nuevo usuario
-   Login: Inicio de sesión
-   Logout: Cierre de sesión
-   Update: Actualizar la información relativa a un usuario
-   Delete: Eliminar un usuario

Este backend tiene que tener arquitectura REST y MVC, así que repasen y piensen bien el nombre de los endpoints, qué rol cumple cada capa de la app, etc...

La entidad usuario tiene los siguientes campos:

-   id: string
-   username: string
-   fullname: string
-   password: string (8 caracteres como minimo, debe incluir numeros, letras en mayusculas y minusculas, y caracteres espaciales)
-   email: string
-   birthdate: Date
-   nationality: string

#### INVESTIGACIÓN

-   Investigar que cosa son los refresh tokens, para qué se usan, e implementarlos. Siempre respetando la arquitectura REST.
-   Investigar para qué sirve WinstonJS e implementarlo. Piensen ustedes qué utilidad tendría usar tal herramienta, y en función de eso úsenla donde ustedes juzgen necesario.
-   Investiguen qué es la paginación, para qué sirve, qué utilidad tiene, e implementenla.
-   Para este proyecto NO pueden usar ElephantSQL, tienen que usar otro servicio de Postgres as a Service.
-   Investigar qué cosa es HelmetJS, para qué sirve e implementarlo. Pista: hay un apartado en la documentación de Express que hace referencia a esta herramienta.

<h2 align="center"> CONDICIONES DE APROBACIÓN </h2>

-   El código tiene que estar 100% operativo, sin fallas ni errores no tratados. Así que dediquen un buen tiempo a testear todo.
-   El archivo README.md adjunto tiene que explicar la dinámica general de la app y también tiene que incluir un link a la documenetación online hecha con Postman. Incluir ejemplos claros.
-   Incluír en el proyecto una carpeta "researchs" que tenga los fundamentos de por qué usaron las tres herramientas que tienen que investigar. No hace falta incluir nada relativo al servicio de Postgres as a Service.
-   Usar bases de datos relacionales con Sequelize y PostgreSQL.
-   Usar variables de entorno e inicializarlo en un módulo aparte.
-   Incluir la carpeta constants.
-   Tomar todas las medidas de seguridad vistas en clase:
    -   No filtrar llaves de acceso
    -   Prevenir Timing Attacks
    -   Prevenir Rainbow Attacks. Usar salt y pepper.
-   Usar JWT e implementarlo mediante middlewares.
-   Validar datos con ZOD e implementarlo mediante middlewares.
-   Incluir endpoint de status del servidor. Incluir aquí el estado de la conexión a la base de datos.
-   NO INCLUIR COMENTARIOS, a menos de que sea para explicar el por qué tomaron cierto camino, en caso de ser necesario.
-   NO INCLUIR CONSOLE.LOG()

#### LINKS DE AYUDA

-   [WinstonJS](https://www.npmjs.com/package/winston?activeTab=dependents)
-   [Guia completa de WinstonJS](https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/)
