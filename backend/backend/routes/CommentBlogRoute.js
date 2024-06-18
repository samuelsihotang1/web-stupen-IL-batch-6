import express from 'express';
import {
    getCommentBlogs,
    getCommentBlogById,
    createCommentBlog,
    updateCommentBlog,
    deleteCommentBlog
} from '../controllers/CommentBlogController.js';

const router = express.Router();

router.get('/comment-blogs', getCommentBlogs);
router.get('/comment-blogs/:blogId/:userId', getCommentBlogById); // Assuming composite key route
router.post('/comment-blogs', createCommentBlog);
router.patch('/comment-blogs/:blogId/:userId', updateCommentBlog); // Assuming composite key route
router.delete('/comment-blogs/:blogId/:userId', deleteCommentBlog); // Assuming composite key route

export default router;
