import cors from 'cors';
import express from 'express';
import ProductRouter from './routes/ProductRoute.js';
import UserRoute from './routes/UserRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(ProductRouter);

app.listen(5000, () => console.log('Server up and running...'));
