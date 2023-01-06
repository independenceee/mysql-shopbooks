const express = require("express");
const router = express.Router();

const booksController = require("../apps/controllers/BooksController");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.postBooks);
router.put("/:id", booksController.updateBooks);
router.delete("/:id", booksController.deleteBooks);

module.exports = router;
