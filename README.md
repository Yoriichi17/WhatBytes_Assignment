````
#  Healthcare Backend API

This is a secure backend system for managing patients and doctors using **Node.js**, **Express.js**, **PostgreSQL**, and **Sequelize ORM**. It features user authentication, patient and doctor CRUD operations, and patient-doctor mappings.

---

##  Tech Stack

- Node.js + Express.js  
- PostgreSQL  
- Sequelize ORM  
- JWT Authentication  
- dotenv (for environment variables)  
- bcryptjs (for password hashing)  
- cors (for cross-origin access)  
- pg (PostgreSQL client)  

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
````

### 2. Install Dependencies

Since `node_modules` is not included in the repo, install them using:

```bash
npm install
```

This uses the `package.json` and `package-lock.json` files you’ve already committed.

---

## 🛠️ Environment Setup

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
DB_HOST=localhost
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
```

Make sure your PostgreSQL server is running and the database exists.

---

## 🧾 Running the Project

### For Development (with hot reloading):

```bash
npm run dev
```

### For Production:

```bash
npm start
```

---

##  API Authentication

Use the `/api/auth/register` and `/api/auth/login` endpoints to register and log in users. Copy the returned token and include it in all protected routes as:

```
Authorization: Bearer <your_token_here>
```

---

##  API Endpoints Overview

### Authentication

* `POST /api/auth/register` – Register a user
* `POST /api/auth/login` – Login and get JWT token

### Patients (requires authentication)

* `POST /api/patients` – Create patient
* `GET /api/patients` – Get all patients of logged-in user
* `GET /api/patients/:id` – Get one patient
* `PUT /api/patients/:id` – Update patient
* `DELETE /api/patients/:id` – Delete patient

### Doctors (requires authentication)

* `POST /api/doctors` – Create doctor
* `GET /api/doctors` – List all doctors
* `GET /api/doctors/:id` – Get one doctor
* `PUT /api/doctors/:id` – Update doctor
* `DELETE /api/doctors/:id` – Delete doctor

### Mappings (requires authentication)

* `POST /api/mappings` – Assign doctor to patient
* `GET /api/mappings` – Get all mappings
* `GET /api/mappings/:patientId` – Get all doctors assigned to a patient
* `DELETE /api/mappings/:id` – Remove mapping

---

## 📝 Notes

* All models and routes include validation and error handling.
* Sequelize relationships are configured for `hasMany`, `belongsTo`, and `belongsToMany`.
* DB is auto-synced on start with `sequelize.sync({ alter: true })`.

---

##  Testing

Use **Postman** to test endpoints. Make sure to set headers properly for authenticated routes.
Here’s the workspace link:
 [Postman Collection](https://www.postman.com/maintenance-cosmologist-12845390/workspace/anirudh/collection/31320871-77b619e5-8399-4847-9f95-c50250b5f373?action=share&creator=31320871)

---
```
```
