# Face-Map

A React-based facial recognition application that harnesses AI-driven face recognition APIs to identify, and highlight faces in image submissions. It not only manages user authentication and registration but also prioritises security by encrypting user passwords.
Moreover, the application fetches data from a RESTful API using Knex and tracks user interactions, offering insights into the entries made by each user. 

## Technologies Used
- React
- Express.js
- Postman
- PostgreSQL
- Render
- APIs

**Live Demo:** [Face-Map Demo](https://facemap.onrender.com/)

**To test out the full app, please use the following credentials:**
- User: Test3@gmail.com
- Pass: 123

## Pages

### Register
- Page where users can register for an account and log in through user authentication. It will notify the user if their credentials are already registered and if their password doesn't match. Will also hash the password when added to the database for enhanced security.

### Sign in
- Authenticates the user's credentials to see if they match any entries within the database.

### Navigation
- Navigation used throughout and changes when a user wants to sign in, sign out, or register.

### Logo
- Face-Map logo with a glare effect when users interact with it.

### Image Link Form
- Where users input their image links for the app to detect faces. It will notify with an error if the link is invalid or if they haven't uploaded anything at all.

### Rank
- Counts the number of entries that a user inputs and keeps track of their name.

### Face Recognition
- Calls Clarifai API and adds CSS styling to add the blue boxes around the face. It is also programmed to add multiple boxes around the detected faces.
