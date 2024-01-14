# TripsYourWay - MERN Stack

This project is a full-stack web application built using React for the frontend and Express.js with MongoDB for the backend. The frontend features a register and login page, homepage to show all the available accomodations, dedicated accomodation details, create-accomodation page to let users add their own accomodations, bookings page, edit-bookings page to edit them, as well profile page to view all added accomodations by that user and their past bookings.
The backend uses packages such as bcryptjs, cookie-parser, cors, helmet, jsonwebtoken, mongoose, image-downloader and multer to handle user authentication, password encryption, and database operations. It checks whether the user exists before storing the user's information in the database and uses JSON web tokens for secure communication between the client and server.

TailwindCSS is used to style the web application.

The accomodation detail page that displays information such as title, address, photos, descritions, checkin, checkout timings, house rules, etc. 

To use the application, users must first sign up with their name, email and password. Once signed in, they can browse through all accomodations, book them, create new ones, edit them, etc. The profile page shows all accomodations added by them and their past bookings. The application also provides a logout button to ensure the user's privacy and security.

## Video Demo
https://drive.google.com/file/d/1yq4R-9W2ysVcujCL2EygCtVQvFOESSOw/view?usp=drive_link
 
## Installation

To run this project, you'll need to have Node.js and MongoDB installed on your system. You can download Node.js from the official website: https://nodejs.org/, and install MongoDB by following the instructions provided here: https://docs.mongodb.com/manual/installation/.

To install the project dependencies, follow these steps:

Clone the repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/your-name/your-project-name.git
Navigate to the project directory:

bash
Copy code
```bash
cd your-project
```
Install the frontend dependencies:
```bash
cd client
npm install
```
Navigate to the backend directory:

```bash
cd server
```
Install the backend dependencies:

```bash
npm install
```
Create a .env file in the backend directory, and set the following environment variables:

makefile
```bash
MONGO_URL=<your-mongodb-uri>
```
Replace <your-mongodb-uri> with the URI of your MongoDB database.

Start the backend server:

```bash
npm start
```
Open a new terminal window, navigate to the project directory, and start the frontend server:

```bash
npm start
```
Open your web browser and navigate to http://localhost:3000 to view the application.

That's it! You should now be able to run the application locally. If you encounter any issues, please refer to the project documentation or create a new issue on the project's GitHub repository.
    
  
