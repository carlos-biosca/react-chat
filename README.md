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
3. Start the server with `npm run server`
4. Open a new console and navigate to the frontend directory `cd frontend`
5. Install frontend dependencies with `npm install`
6. Run the frontend development server with `npm run dev`
7. Open two or more browsers and navigate to `http://localhost:3000`
8. Enter your username and join the chat room
9. Send messages to the chat room
10. Observe the messages being displayed in real-time

## How it works

The application uses Socket.IO to establish a Web Socket connection between the client and the server. When a user joins the chat room, their username is broadcasted to all other users. When a user sends a message, the message is sent to the server and broadcasted to all other users. The client updates the chat room with the new message in real-time.

## Technologies used

- React
- Socket.IO
- Web Sockets
- Node.js

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
