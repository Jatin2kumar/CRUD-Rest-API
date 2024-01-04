import express from "express";
import userSchema from "../model/userSchema.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.delete("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await userSchema.findOne({ email, email });
  if (!user) {
    return res.status(403).json({ error: "Email not Found." });
  } else
    bcrypt.compare(password, user.password, async (err, result) => {
      if (err) {
        return res
          .status(403)
          .json({ error: "something went wrong, please try again." });
      }
      if (!result) {
        return res.status(401).json({ error: "Incorrect Password." });
      } else {
        const del = await user.deleteOne({ email: email });
        return res.status(200).json({ message: "User Deleted Successfully." });
      }
    });
});

export default router;
