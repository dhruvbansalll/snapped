# Snapped 📸  
*A Full-Stack MERN Memories Sharing Application*

Snapped is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to post interesting events and memories from their lives. Users can create, view, update, and delete posts, as well as like other people's memories.

<img width="1878" height="845" alt="image" src="https://github.com/user-attachments/assets/2a759741-8764-4d91-a45b-4df9f21213c9" />


---

## ✨ Features

- **Create & Manage Posts**: Users can create new posts with a title, message, tags, and an image.
- **View All Posts**: See a gallery of all memories created by users.
- **Update & Delete**: Edit or remove your own posts.
- **Like Posts**: Show appreciation for other users' memories.

---

## 🛠 Technologies Used

- **MongoDB**: NoSQL database for storing application data.
- **Express.js**: Backend framework for building the RESTful API.
- **React.js**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for the server-side.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **Axios**: For making API requests from the client to the server.
- **Redux**: For state management in the React application.

---

## ✅ Prerequisites

Make sure the following tools are installed on your system:

- [Node.js](https://nodejs.org/) (v17 or newer recommended)
- [Git](https://git-scm.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for the database

---

## 🚀 Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/dhruvbansalll/snapped
```

### 2. Configure the Backend (Server)

#### i. Navigate to the server directory:

```bash
cd server
```

#### ii. Install dependencies:

```bash
npm install
```

#### iii. Create the Environment File:

Create a new `.env` file in the `server` directory.

#### iv. Add MongoDB Connection URL:

Log in to MongoDB Atlas → Go to your cluster → Click **Connect** → **Drivers** → Copy the connection string.

Replace `<password>` with your actual database user's password.

Your `.env` file should look like this:

```env
CONNECTION_URL=mongodb+srv://your_username:your_password@yourcluster.mongodb.net/your_database_name?retryWrites=true&w=majority
```

### 3. Configure the Frontend (Client)

#### i. Navigate to the client directory:

```bash
cd ../client
```

#### ii. Install dependencies:

```bash
npm install
```

---

## 🧪 Running the Application

You will need **two separate terminals** open to run both backend and frontend servers.

### Terminal 1: Start the Backend Server

```bash
cd path/to/project_mern_memories/server
npm start
```

Server will run at: **http://localhost:5000**

### Terminal 2: Start the Frontend Client

> ⚠️ **Node.js v17 or newer?** Run the following command once per terminal session to avoid digital envelope error.

#### For Windows PowerShell:

```powershell
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

#### For Mac/Linux or Git Bash:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

Then start the React app:

```bash
cd path/to/project_mern_memories/client
npm start
```

App will be available at: **http://localhost:3000**

---

## 🎉 You're Ready to Go!

Create your first post to see Snapped📸 in action and start sharing memories.

---

## 📬 Feedback & Contributions

Feel free to open issues or submit pull requests to improve this project. Contributions are welcome!
