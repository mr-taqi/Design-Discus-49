# Project Description 📝

Knowledge Knook is a fully functional edu-tech platform that enables users to create, consume, and rate educational content.
<br/>
This platform is built using the **MERN stack**, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.

<h2>Live link 🌍📡 - <a href="https://design-discus-049-io358p0wv-madhu-mishras-projects.vercel.app/">Visit Site</a></h2>




## Hive Goals 📚

1️⃣ Centralize and streamline access to educational content for efficient learning and teaching.<br/>
2️⃣ Enhance communication and collaboration between students and instructors.<br/>


## Tech Stack 💻🔧

### Frontend 🎨 :

<code title="React.js"><img height="40" src="https://github.com/BoddepallyVenkatesh06/LearnHub-E-Learning-Platform/blob/main/screenshots/React.png"></code>
<code title="Vite"><img height="40" src="https://github.com/BoddepallyVenkatesh06/LearnHub-E-Learning-Platform/blob/main/screenshots/Vitejs-logo.png"></code>
<code title="Redux.js"><img height="35" src="https://github.com/BoddepallyVenkatesh06/LearnHub-E-Learning-Platform/blob/main/screenshots/redux-logo.png"></code>
<code title="css"><img height="40" src="https://github.com/BoddepallyVenkatesh06/LearnHub-E-Learning-Platform/blob/main/screenshots/css%20logo.png"></code>
<code title="Tailwind css"><img height="35" src="https://github.com/BoddepallyVenkatesh06/LearnHub-E-Learning-Platform/blob/main/screenshots/tailwind%20css%20logo.png"></code>

### Backend ⚙️ :

<code title="Nodejs"><img height="50" src="https://github.com/BoddepallyVenkatesh06/LearnHub-E-Learning-Platform/blob/main/screenshots/nodejs-logo.png"></code>
<code title="Express"><img height="70" src="https://github.com/BoddepallyVenkatesh06/LearnHub-E-Learning-Platform/blob/main/screenshots/express%20logo.png"></code>



## System Architecture 🏰

☝ Hive edu-tech platform and consists of three main components:  
The front end, the back end, and the database. The platform follows a client-server architecture, with the front end serving as the client and the back end and database serving as the server.

### 🎨 Front-end

The front end of the platform is built using ReactJS, which is a popular JavaScript library for building user interfaces. ReactJS allows for the creation of dynamic and responsive user interfaces, also **Loading Skeleton**, which are critical for providing an engaging learning experience to the students. The front end communicates with the back end using RESTful API calls.

### ⚙️ Back-end

The back end of the platform is built using NodeJS and ExpressJS, which are popular frameworks for building scalable and robust server-side applications. The back end provides APIs for the front end to consume, which include functionalities such as user authentication, course creation, and course consumption. The back end also handles the logic for processing and storing the course content and user data.

### 🛢️ Database

The database for the platform is built using MongoDB, which is a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data, which is useful for storing course content such as videos, images, and PDFs. The database stores the course content, user data, and other relevant information related to the platform.

## Architecture Diagram 🏗️

Here is a high-level diagram that illustrates the architecture of the Hive edu-tech platform:
<img width='60%' src='./frontend/src/assets/Images/Architecture Diagram.png' />

<hr/>

## API Design

The Hive platform's API is designed following the REST architectural style. The API is implemented using Node.js and Express.js. It uses JSON for data exchange and follows standard HTTP request methods such as GET, POST, PUT, and DELETE. Here is a sample list of API endpoints and their functionalities:

1. `/api/auth/signup` (POST) - Create a new user (student or instructor) account.
2. `/api/auth/login` (POST) – Log in using existing credentials and generate a JWT token.
3. `/api/auth/verify-otp` (POST) - Verify the OTP sent to the user's registered email.
4. `/api/auth/forgot-password` (POST) - Send an email with a password reset link to the registered email.
5. `/api/courses` (GET) - Get a list of all available courses.
6. `/api/courses/:id` (GET) - Get details of a specific course by ID.
7. `/api/courses` (POST) - Create a new course.
8. `/api/courses/:id` (PUT) - Update an existing course by ID.
9. `/api/courses/:id` (DELETE) - Delete a course by ID.
10. `/api/courses/:id/rate` (POST) - Add a rating (out of 5) to a course.
    Sample API requests and responses:
11. `GET /api/courses`: Get all courses
    - Response: A list of all courses in the database
12. `GET /api/courses/:id`: Get a single course by ID
    - Response: The course with the specified ID
13. `POST /api/courses`: Create a new course
    - Request: The course details in the request body
    - Response: The newly created course
14. `PUT /api/courses/:id`: Update an existing course by ID
    - Request: The updated course details in the request body
    - Response: The updated course
15. `DELETE /api/courses/:id`: Delete a course by ID
    - Response: A success message indicating that the course has been deleted.

## 🖥️ Screen Preview :

### About Page

<img width='100%' src='./frontend/src/assets/Images/About_img.png' />

### Contact Page

<img width='100%' src='./frontend/src/assets/Images/Contact_img.png' />

<!-- ### Ai Content Page

<img width='100%' src='./frontend/src/assets/Images/AI content.png' /> -->



### 404 Page

<img width='100%' src='./frontend/src/assets/Images/404 page.png' />
