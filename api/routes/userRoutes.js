import express from 'express';
import {
  updateUser,
  deleteUser
} from '../controllers/userController.js'
import verifyAuth from '../middleware/verifyAuth.js'

const router = express.Router();

// Routes for User model, with isUserLoggedIn middleware to protect the routes
router.put('/user', verifyAuth, updateUser)
router.delete('/user', verifyAuth, deleteUser) 

export default router;





// EXAMPLE FROM EMRE BLOGS ROUTER
// // Import modules
// import { Router } from 'express'
// import { getBlogs, getBlog, createBlog, updateBlog, deleteBlog, getAuthorBlogs } from '../controllers/blogsController.js'
// import verifyAuth from '../middleware/verifyAuth.js'

// const router = Router()

// // GET routes
// router.get('/', verifyAuth, getBlogs)
// router.get('/:id', verifyAuth, getBlog)
// router.get('/authorBlogs/:authorId', verifyAuth, getAuthorBlogs)

// // POST routes
// router.post('/', verifyAuth, createBlog)

// // PUT routes
// router.put('/:id', verifyAuth, updateBlog)

// // DELETE route
// router.delete('/:id', verifyAuth, deleteBlog)

// export default router