import cors from 'cors';
import express from 'express';
import ProductRouter from './routes/ProductRoute.js';
import UserRoute from './routes/UserRoute.js';
import ImageProductRoute from './routes/ImageProductRoute.js';
import CategoryProductRoute from './routes/CategoryProductRoute.js';
import ReviewRoute from './routes/ReviewRoute.js';
import CartRoute from './routes/CartRoute.js';
import CheckoutRoute from './routes/CheckoutRoute.js';
import BlogRoute from './routes/BlogRoute.js';
import CategoryBlogRoute from './routes/CategoryBlogRoute.js';
import CommentBlogRoute from './routes/CommentBlogRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(ProductRouter);
app.use(ImageProductRoute);
app.use(CategoryProductRoute);
app.use(ReviewRoute);
app.use(CartRoute);
app.use(CheckoutRoute);
app.use(BlogRoute);
app.use(CategoryBlogRoute);
app.use(CommentBlogRoute);

app.listen(5000, () => console.log('Server up and running...'));
