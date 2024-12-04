import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getMyBlogs,
  getSingleBlogs,
  updateBlog,
} from "../controler/Blog.js";
import { isAdmin, isAuthenticated } from "../midelware/isAdmin.js";
import { catchAsyncerror } from "../midelware/catchAsyncError.js";
const router = express.Router();

router.post("/create",isAuthenticated,isAdmin("admin"),createBlog);
router.delete("/delete/:id", isAuthenticated, isAdmin("admin"), deleteBlog);
router.get("/all-blogs", getAllBlogs);
router.get("/single-blog/:id", isAuthenticated, getSingleBlogs);
router.get("/my-blog", isAuthenticated, isAdmin("admin"), getMyBlogs);
router.put("/update/:id", isAuthenticated, isAdmin("admin"), updateBlog);

export default router;