import express from "express";
import userSchema from "../model/userSchema.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password, description, title } = req.body;
  const user = await userSchema.findOne({ email: email });
  if (user) res.status(403).json({ error: "User already exist." });
  else {
    const hashPass = await bcrypt.hash(password, 10);
    let user = new userSchema({
      email: email,
      password: hashPass,
      description: description,
      title: title,
    });

    user
      .save()
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((error) => {
        if (error.code == 11000) {
          res.status(500).json({ error: "Email is already exist." });
        }
        return res.status(403).json({ error: error });
      });
  }
});

export default router;
