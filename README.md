To-Do List Application API Documentation

### Overview

This API allows users to register, log in, and manage their to-do items. It uses Node.js, Supabase, and MongoDB for the backend, with the backend deployed on Render and the frontend on Netlify.

### User Authentication:

  * Implement user registration and login using Supabase.
  * Store user information securely in MongoDB.

### To-Do Operations:

  * Allow users to create, read, update, and delete their to-do items.
  * Ensure each user can only access their own to-do items.

### API Endpoints
### 1. Register User
Endpoint: POST /register

Description: Register a new user.
Request:
{
  "email": "user@example.com",
  "password": "password123"
}
Response:
Registered Succesfully

### 2. Login User
Endpoint: POST /login

Description: Log in an existing user.
Request:
{
  "email": "user@example.com",
  "password": "password123"
}
Response:
Login Succesfully

### 3. Create Todo
Endpoint: POST /save

Description: Create a new to-do item.

Request:
{
    "text":"Learn python"
}
Response:
{
    "text": "Learn python",
    "_id": "66ae1ea479c68e0103bd3994",
    "__v": 0
}

### 4. Get Todos
Endpoint: GET /

Description: Retrieve all to-do items for the logged-in user.

Request:
Authorization
Response:
[
    {
        "_id": "66add34ea4c96ee120d67116",
        "text": "Learn nodejs",
        "__v": 0
    },
    {
        "_id": "66add6b5affd897fa17d3354",
        "text": "Learn Git",
        "__v": 0
    },
    {
        "_id": "66adf3d911e71538bdc2d737",
        "text": "erhgbvn ",
        "__v": 0
    },
    {
{
    "text": "Learn python",
    "_id": "66ae1ea479c68e0103bd3994",
    "__v": 0
}
]

### 5. Update Todo
Endpoint: PUT /update

Description: Update a to-do item by ID.
Request:
{
    "_id": "66ae1ea479c68e0103bd3994",
    "text":"Learn Java"
}
Response:
Updated Successfully

### 6. Delete Todo
Endpoint: DELETE /api/todos/:id

Description: Delete a to-do item by ID.
Request:
{
    "_id": "66ae1ea479c68e0103bd3994"
}
Response:
Deleted Successfully

### Deployment
Create a Netlify Account:

Sign up at Netlify.
Create a New Site:

Click on New site from Git.
Connect your GitHub repository containing the frontend code.
Configure the Site:

Select the branch to deploy.
Set the build command and publish directory:
Build Command: npm run build
Publish Directory: build
Environment Variables:

Add  environment variables such as REACT_APP_SUPABASE_URL,REACT_APP_SUPABASE_KEY.
Deploy:

Click Deploy site to deploy.

netlify link:
https://glittering-sunburst-368c1c.netlify.app



