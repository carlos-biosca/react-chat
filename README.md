# React Chat with Web Sockets

This is a simple chat application built with React and Web Sockets using Socket.IO.

## Features

- Real-time communication with Web Sockets
- Support for multiple users
- User can join the chat room and send messages
- Messages are displayed in real-time

## How to use

1. Clone the repository
2. Install the dependencies with `npm install`
3. Create a `.env` file in the root of the project with the port server number: `PORT=8000`
4. Start the server with `npm run server`
5. Open a new console and navigate to the frontend directory `cd frontend`
6. Install frontend dependencies with `npm install`
7. Run the frontend development server with `npm run dev`
8. Open two or more browsers and navigate to `http://localhost:3000`
9. Enter your username and join the chat room
10. Send messages to the chat room
11. Observe the messages being displayed in real-time

## Technologies used

- React
- Socket.IO
- Web Sockets
- Node.js

## Explicación Técnica del Proyecto

En este proyecto se utiliza Socket.IO para establecer una conexión de Web Sockets entre el cliente y el servidor. Cuando un usuario envía un mensaje, el mensaje se envía al servidor y se reenvía a todos los demás usuarios conectados. El cliente actualiza la sala de chat con el nuevo mensaje en tiempo real.

El proyecto utiliza Express como framework para el servidor y Socket.IO para la comunicación con los clientes. En el frontend se utiliza React y la biblioteca socket.io-client para establecer la conexión con el servidor.

El proyecto se encuentra dividido en dos carpetas: backend y frontend.

En la carpeta de backend, el archivo index.js crea un servidor HTTP utilizando la biblioteca Express y, posteriormente, un servidor de sockets utilizando la biblioteca Socket.IO.

El frontend de React se crea utilizando el generador de proyectos vite. Al proyecto se le agrega la biblioteca socket.io-client para establecer la comunicación con el servidor. Para evitar el error de CORS, en la configuración de vite se agrega un proxy con la dirección del servidor, especificando que se trata de una biblioteca de web sockets.

En App.jsx, se renderiza un input para que el usuario introduzca su nombre. Una vez guardado en el estado, se renderizan los componentes de chat.

Cada mensaje se envía al servidor de ws mediante la emisión de un evento y es reenviado a todos los usuarios mediante la emisión de otro evento. Después de enviarlo, se guarda en el listado de mensajes de la App utilizando useState. Y cuando los otros usuarios lo reciben a través del socket, el listado también se actualiza utilizando useEffect. Así todos los usuarios pueden ver todos los mensajes.

Todos los componentes se encuentran en la carpeta componentes y reciben los datos necesarios a través de las props.

Todos los estilos de la App se encuentran en el archivo index.css, los cuales se encuentran ordenados por clases para mantener la especificidad de la cascada de estilos.
