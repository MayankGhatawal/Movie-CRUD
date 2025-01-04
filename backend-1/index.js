import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/user.route.js';
import bodyParser from 'body-parser';
import movieRoutes from './routes/movie.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true,
  }
));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/movies', movieRoutes);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});