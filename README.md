# NGO Management System

## Overview
The **NGO Management System** is a web-based platform designed to streamline the operations of non-governmental organizations. It allows administrators to manage volunteers, initiatives, and assignments efficiently while providing an intuitive interface for users to interact with the NGO's activities.

## Features
- **Volunteer Management:** Add, update, and track volunteers.
- **Initiatives & Projects:** Create and manage NGO initiatives.
- **Dashboard:** View analytics and key metrics.
- **Authentication:** Secure login and signup for different user roles.
- **Admin Panel:** Manage users, assignments, and reports.
- **Responsive UI:** User-friendly interface with mobile support.

## Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js, Express.js, Prisma
- **Database:** PostgreSQL
- **Authentication:** JWT-based authentication
- **Styling:** Tailwind CSS

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (LTS version recommended)
- PostgreSQL
- Git

### Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Diya-Nisar/ngo.git
   cd ngo-management-system
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file and add the necessary environment variables:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/ngodb
   JWT_SECRET=your_secret_key
   ```
4. **Run database migrations:**
   ```sh
   npx prisma migrate dev --name init
   ```
5. **Start the application:**
   ```sh
   npm run dev
   ```
6. **Access the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Make your changes and commit them: `git commit -m "Add feature"`
4. Push to your branch: `git push origin feature-branch`
5. Open a Pull Request.

## License
This project is licensed under the **MIT License**.

## Contact
For any questions or suggestions, reach out to **Diya Nisar** via [GitHub](https://github.com/Diya-Nisar).
