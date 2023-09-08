# Workers, ejemplo práctico
Este readme proporciona información sobre el código de un servidor Express básico. El servidor se inicia utilizando Node.js y Express.js, y realiza tareas sencillas, como proporcionar una ruta "/counter" que devuelve una matriz de nombres y ejecutar una tarea de cálculo intensivo en el hilo principal.

## Requisitos
Antes de ejecutar este código, asegúrate de tener instalados los siguientes componentes:

Node.js: El entorno de ejecución JavaScript.
npm: El gestor de paquetes de Node.js.
Instalación
Sigue estos pasos para configurar el proyecto y ejecutar el servidor:

Clona el repositorio o descarga el código en tu sistema.

Abre una terminal y navega hasta el directorio raíz del proyecto.

Ejecuta el siguiente comando para instalar las dependencias necesarias:

`npm install`

### Uso
Una vez que hayas instalado las dependencias, puedes ejecutar el servidor Express utilizando el siguiente comando:

`node server.js`

El servidor se ejecutará en el puerto especificado (por defecto, 3100) y mostrará un mensaje en la consola que indica que el servidor está corriendo. Puedes acceder al servidor en tu navegador o mediante una herramienta de solicitud HTTP, como curl o Postman, utilizando la URL http://localhost:3100.

## Rutas
El servidor tiene una sola ruta definida:

/counter: Cuando se accede a esta ruta, el servidor responderá con una matriz JSON que contiene los nombres ["Tony", "Lisa", "Michael", "Ginger", "Food"].
Tarea de Cálculo Intensivo
El código también contiene una función hardWork() que realiza una tarea de cálculo intensivo en el hilo principal. Esta función se ejecuta periódicamente cada 10 segundos a través de un setInterval. Durante su ejecución, realiza un bucle while que realiza una gran cantidad de iteraciones.

## Trabajadores (Workers)
El código incluye comentarios relacionados con la creación de un nuevo Worker utilizando la API de worker_threads de Node.js. Sin embargo, esta parte del código está actualmente comentada y no se está utilizando. Si deseas habilitar y utilizar trabajadores para realizar tareas en hilos separados, puedes descomentar las secciones correspondientes.

## Personalización
Puedes personalizar el servidor Express cambiando la ruta, el puerto y las respuestas según tus necesidades. Además, puedes modificar la lógica de la tarea de cálculo intensivo o habilitar los trabajadores para realizar tareas en hilos separados.

## Contribución
Si deseas contribuir a este proyecto o realizar mejoras en el código, siéntete libre de hacerlo. Puedes abrir un problema (issue) o enviar una solicitud de extracción (pull request) en el repositorio.

## Licencia
Este proyecto está disponible bajo la Licencia MIT. Puedes utilizar, modificar y distribuir el código según los términos de esta licencia.