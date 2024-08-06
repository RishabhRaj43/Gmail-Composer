# Gmail Composer

This is a mail-generating website developed using the MERN stack.

## Features

- **Generate and Send Emails**: Easily create and send emails with customizable templates.
- **Nodemailer Integration**: Uses Nodemailer for reliable email sending.
- **Mailgen Integration**: Utilizes Mailgen for generating visually appealing email templates.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Email Services**: Nodemailer, Mailgen

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/RishabhRaj43/Gmail-Composer.git
    cd Gmail-Composer
    ```

2. **Install dependencies**:

    - For the backend:
      ```bash
      cd backend
      npm install
      ```

    - For the frontend:
      ```bash
      cd ../frontend
      npm install
      ```

3. **Set up environment variables**:

    - Create a `.env` file in the `backend` directory and add the following:
      ```plaintext
      PORT=5000
      MONGO_URI=your_mongodb_uri
      JWT_SECRET=your_jwt_secret
      EMAIL_USER=your_email@example.com
      EMAIL_PASS=your_email_password
      ```

4. **Run the application**:

    - Start the backend server:
      ```bash
      cd backend
      npm start
      ```

    - Start the frontend server:
      ```bash
      cd ../frontend
      npm start
      ```

5. **Access the application**:
    Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Generate Email**: Use the interface to create and customize email templates.
- **Send Email**: Send the generated emails to the desired recipients.

## Screenshots
***This is the home page***
<img src = "https://github.com/RishabhRaj43/Gmail-Composer/blob/main/screenshots/home.png" />

***This is how you can write the email***
<img src = "https://github.com/RishabhRaj43/Gmail-Composer/blob/main/screenshots/second.png" />

***The confirmation of email***
<img src = "https://github.com/RishabhRaj43/Gmail-Composer/blob/main/screenshots/email.png" />



<h1 style="color:blue;">Happy Coding 🎉</h1>
