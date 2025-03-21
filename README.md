# Travel Booking

Travel Booking is a modern React.js application for booking tour and travel reservations.

## Steps to Run the Project Locally

1. **Clone the repository**
   - To clone the project, open your terminal and run the following command:
     ```bash
     git clone https://github.com/AngelaGrozdanova/Travel-Booking.git
     ```

2. **Start the Frontend**
   - Navigate to the project directory:
     ```bash
     cd tour-management
     ```
   - Enter the `frontend` folder:
     ```bash
     cd frontend
     ```
   - Start the frontend React application:
     ```bash
     npm start
     ```
   - This will start the React app and open it in your browser at [http://localhost:3000](http://localhost:3000).

3. **Start the Backend**
   - Open a new terminal window and navigate back to the main project directory:
     ```bash
     cd tour-management
     ```
   - Enter the `backend` folder:
     ```bash
     cd backend
     ```
   - Start the backend server with Nodemon:
     ```bash
     npm run start-dev
     ```
   - This will start the backend server, making it accessible at [http://localhost:4000](http://localhost:4000).

4. **Ensure Both Frontend and Backend are Running**
   - Make sure both the frontend and backend servers are running for full functionality of the app.
  
5. **Key Features:**
 - Public Access:
   - Homepage: Provides an overview of available tours and travel packages.
   - Tour Catalog: Displays a comprehensive list of all available tours.
   - Tour Details: Offers detailed information about each tour, including pricing, and booking options.
   - User Authentication: Allows users to register and log in to access personalized features.
 - User Dashboard (Private Area):
   - Booking Management: View, create, and manage tour bookings.
   - Review and Rating System: Leave reviews and rate tours.
 - Search Functionality:
   - Search Bar: Users can search for specific tours or destinations from the catalog.
  
6. **Technical Specifications:**
 - Frontend:
   - Developed using React.js for a responsive and dynamic user experience.
   - Utilizes React Hooks and Context API for efficient state management.
   - Incorporates client-side routing with React Router for seamless navigation.
 - Backend:
   - Built with Node.js and Express.js to handle API requests and server-side logic.
   - Connects to a MongoDB database for secure storage of user data and booking information.
   - Implements RESTful API endpoints for data retrieval and manipulation.
