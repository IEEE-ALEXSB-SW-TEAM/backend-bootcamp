## Session #2

#### Content Outline
- Node.js
  - JavaScript Engines
    - V8 Engine
  - Modules
    - CommonJS Modules
  - File System
    - fs Module
    - JSON
  - *Notes Workshop*
- NPM
  - npm init
  - package.json
- Client vs Server
- Intro to Express
  - Hello World
  - Routing
- Web Concepts
  - Routes
  - HTTP Methods
    - Types of Requests
    - CRUD
    - GET vs POST
  - Insomnia
  - Request Content
    - Headers
    - Body
    - Query
  - Status Codes
  - APIs
  - *NPA Players API Workshop*
  - REST
- Authentication
  - Hashing
- *Login System Workshop*
- Authorization
  - JWT
  - Middlewares
- *Advanced Notes Workshop*

#### Workshops
##### Notes Workshop
Create a Node.js application that reads and writes notes to a file. The application should be able to take a note as an input and save it to a file. After each new note added, it should read all the notes from the file and display them.
##### NBA Players API Workshop
You have a JSON file that contains a list of 100 NBA players. Create an Express API that has 3 endpoints, one for reading all players, one for reading a single player by their id, and one for reading all players from a specific team. Bonus: Add an endpoint for creating a new player and another for updating a player's.
##### Login System Workshop
Create an Express API that has 2 endpoints, one for registering a user and one for logging in. The user should be able to register with a username and password and then log in with the same credentials. The password should be hashed before saving it to the database and the login endpoint should check the hashed password.
##### Advanced Notes Workshop
Create an Express API that has 3 endpoints, one for creating a note, one for reading all notes. It should also have a login system that allows the user to register and login. The application should use JWT for authentication and the user should only be able to read and delete their own notes.