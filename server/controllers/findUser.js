import express from "express";
import userSchema from "../model/userSchema.js";
const router = express.Router();
import bcrypt from "bcrypt";

router.get("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await userSchema.findOne({ email: email });

  if (!user) {
    return res.status(403).json({ error: "Email not Found." });
  } else
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res
          .status(403)
          .json({ error: "error occured while login, please try again." });
      }
      if (!result) {
        return res.status(403).json({ error: "Incorrect Password." });
      } else {
        return res.status(200).json(user);
      }
    });
});

export default router;
