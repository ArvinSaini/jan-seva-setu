import e from 'express';
import connect from '../db/dbconfig.js';
import login from './login.js';
import register from './register.js';
import donate from './donate.js';
import logout from './logout.js';
import ngos from './ngos.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import feedback from './feedback.js';

const app = e();

app.use(e.json());
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',
        exposedHeaders: ['SET-COOKIE'],
    })
);
app.use(cookieParser());

app.listen(3000, () => {
    console.log('server is running on port 3000');
});

app.post('/login', login);
app.post('/register', register);
app.post('/donate', donate);
app.get('/logout', logout);
app.get('/ngos', ngos);
app.post('/feedback', feedback);

export default app;
