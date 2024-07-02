import express from 'express';
import bcrypt from 'bcrypt';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node'; // Import JSONFile from the node module

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Set up the database
const adapter = new JSONFile('./database.json');
const db = new Low(adapter);

// Function to initialize the database with default data
async function initializeDB() {
    await db.read();
    db.data = db.data || { users: [] };
    await db.write();
}

// Initialize the database
await initializeDB();

// Define a JWT secret key. This should be isolated by using env variables for security
const jwtSecretKey = process.env.JWT_SECRET_KEY || 'dsfdsfsdfdsvcsvdfgefg';

// Basic home route for the API
app.get('/', (_req, res) => {
    res.send('Auth API.\nPlease use POST /auth & POST /verify for authentication');
});

// The auth endpoint that creates a new user record or logs a user based on an existing record
app.post('/auth', async (req, res) => {
    const { email, password } = req.body;

    // Look up the user entry in the database
    const user = db.data.users.find(user => email === user.email);

    // If found, compare the hashed passwords and generate the JWT token for the user
    if (user) {
        const result = await bcrypt.compare(password, user.password);
        if (!result) {
            return res.status(401).json({ message: 'Invalid password' });
        } else {
            let loginData = {
                email,
                signInTime: Date.now(),
            };

            const token = jwt.sign(loginData, jwtSecretKey);
            return res.status(200).json({ message: 'success', token });
        }
    } else {
        // If no user is found, hash the given password and create a new entry in the auth db with the email and hashed password
        const hashedPassword = await bcrypt.hash(password, 10);
        db.data.users.push({ email, password: hashedPassword });
        await db.write();

        let loginData = {
            email,
            signInTime: Date.now(),
        };

        const token = jwt.sign(loginData, jwtSecretKey);
        return res.status(200).json({ message: 'success', token });
    }
});

// The verify endpoint that checks if a given JWT token is valid
app.post('/verify', (req, res) => {
    const tokenHeaderKey = 'jwt-token';
    const authToken = req.headers[tokenHeaderKey];
    try {
        const verified = jwt.verify(authToken, jwtSecretKey);
        if (verified) {
            return res.status(200).json({ status: 'logged in', message: 'success' });
        } else {
            // Access Denied
            return res.status(401).json({ status: 'invalid auth', message: 'error' });
        }
    } catch (error) {
        // Access Denied
        return res.status(401).json({ status: 'invalid auth', message: 'error' });
    }
});

// An endpoint to see if there's an existing account for a given email address
app.post('/check-account', async (req, res) => {
    const { email } = req.body;

    await db.read();
    const user = db.data.users.find(user => email === user.email);

    res.status(200).json({
        status: user ? 'User exists' : 'User does not exist',
        userExists: !!user,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
