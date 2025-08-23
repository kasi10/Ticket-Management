# 🎫 Ticket Management System

A comprehensive web-based ticket management system built with Node.js, Express, MongoDB, and modern web technologies. This system allows users to book and manage tickets for buses, trains, and movies with role-based access control.

## ✨ Features

### 🚀 Core Functionality

- **Multi-modal Ticket Booking**: Book tickets for buses, trains, and movies
- **User Authentication**: Secure registration and login system
- **Role-based Access Control**: Separate interfaces for admin and regular users
- **Real-time Ticket Management**: View, create, and delete tickets
- **Responsive Design**: Modern, mobile-friendly user interface

### 🎭 Ticket Types

- **Movie Tickets**: Book movie screenings with date, time, and seat selection
- **Bus Tickets**: Reserve bus seats with pickup and destination locations
- **Train Tickets**: Book train journeys with route and timing details

### 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected API endpoints
- Admin-only access to management functions

## 🛠️ Technology Stack

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcrypt** - Password hashing

### Frontend

- **HTML5** - Semantic markup
- **CSS3** - Styling and responsive design
- **Bootstrap 4** - UI framework
- **Vanilla JavaScript** - Client-side functionality

### Development Tools

- **Nodemon** - Development server with auto-reload
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (local installation or MongoDB Atlas account)

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ticket-management.git
   cd ticket-management
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Database Setup**

   - For local MongoDB: Ensure MongoDB service is running
   - For MongoDB Atlas: Use your connection string in the `.env` file

5. **Start the application**

   ```bash
   # Development mode (with auto-reload)
   npm run dev

   # Production mode
   npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:5000
   - Backend API: http://localhost:5000/api

## 📱 Usage

### User Registration & Login

1. Navigate to the registration page
2. Create a new account with username and password
3. Login with your credentials
4. Choose your ticket type (bus, train, or movie)

### Admin Access

- **Username**: admin@gmail.com
- **Password**: admin@123
- Access admin dashboard to manage all tickets

### Regular User Access

- Register and login with your credentials
- Book tickets for your preferred transportation or entertainment
- View your booking history

## 🔌 API Endpoints

### Authentication

```
POST /api/auth/register - User registration
POST /api/auth/login - User login
```

### Movie Tickets

```
GET    /api/tickets/movie-tickets - Get all movie tickets
POST   /api/tickets/book-movie - Book a movie ticket
DELETE /api/tickets/movie-tickets/:id - Delete a movie ticket
```

### Bus Tickets

```
GET    /api/tickets/bus-tickets - Get all bus tickets
POST   /api/tickets/book-bus - Book a bus ticket
DELETE /api/tickets/bus-tickets/:id - Delete a bus ticket
```

### Train Tickets

```
GET    /api/tickets/train-tickets - Get all train tickets
POST   /api/tickets/book-train - Book a train ticket
DELETE /api/tickets/train-tickets/:id - Delete a train ticket
```

## 🗄️ Database Schema

### User Model

```javascript
{
  username: String (required, unique),
  password: String (required)
}
```

### Ticket Model (Movies)

```javascript
{
  title: String (required),
  description: String,
  date: Date (required),
  time: String (required),
  price: Number (required),
  tickets: Number
}
```

### Bus Ticket Model

```javascript
{
  pickup: String (required),
  destination: String (required),
  date: Date (required),
  time: String (required)
}
```

### Train Ticket Model

```javascript
{
  pickup: String (required),
  destination: String (required),
  date: Date (required),
  time: String (required)
}
```

## 📁 Project Structure

```
ticket-management/
├── controllers/          # Business logic controllers
│   └── authController.js
├── models/              # Database models
│   ├── User.js
│   ├── Ticket.js
│   ├── BusTicket.js
│   └── TrainTicket.js
├── routes/              # API route definitions
│   ├── auth.js
│   └── tickets.js
├── public/              # Frontend static files
│   ├── css/
│   ├── js/
│   └── *.html
├── server.js            # Main server file
├── package.json         # Dependencies and scripts
└── README.md           # Project documentation
```

## 🔧 Configuration

### Environment Variables

- `MONGO_URI`: MongoDB connection string
- `PORT`: Server port (default: 5000)
- `JWT_SECRET`: Secret key for JWT tokens

### Database Configuration

The application connects to MongoDB using Mongoose with the following options:

- `useNewUrlParser: true`
- `useUnifiedTopology: true`

## 🚀 Deployment

### Local Development

```bash
npm run dev
```

### Production

```bash
npm start
```

### Docker (Optional)

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## 🧪 Testing

Currently, the project doesn't include automated tests. To add testing:

1. Install testing framework:

   ```bash
   npm install --save-dev jest supertest
   ```

2. Add test scripts to `package.json`:
   ```json
   "scripts": {
     "test": "jest",
     "test:watch": "jest --watch"
   }
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - _Initial work_ - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Express.js community for the excellent web framework
- MongoDB team for the robust database solution
- Bootstrap team for the responsive UI components

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/ticket-management/issues) page
2. Create a new issue with detailed description
3. Contact: your.email@example.com

## 🔮 Future Enhancements

- [ ] Email notifications for bookings
- [ ] Payment gateway integration
- [ ] Mobile app development
- [ ] Advanced reporting and analytics
- [ ] Multi-language support
- [ ] Real-time seat availability
- [ ] Booking cancellation and refunds
- [ ] User profile management
- [ ] Booking history and receipts
- [ ] Admin analytics dashboard

---

⭐ **Star this repository if you find it helpful!**
