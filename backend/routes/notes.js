const express = require("express");
const auth = require("../middleware/authMiddleware");
const noteController = require("../controllers/noteController");

const router = express.Router();

router.use(auth);

router.post("/",noteController.createNote);
router.get("/",noteController.getNotes);
router.get("/:id",noteController.getNote);
router.put("/:id",noteController.updateNote);
router.delete("/:id", noteController.deleteNote);

module.exports = router;