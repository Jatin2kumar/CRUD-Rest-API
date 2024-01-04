import express from "express";
import userSchema from "../model/userSchema.js";
import bcrypt from "bcrypt";
const router = express.Router();

// Use PUT request for updating user information
router.put("/", async (req, res) => {
  const { email, password, description, title } = req.body;

  try {
    // Find the user
    const user = await userSchema.findOne({ email, email });
    if (!user) {
      return res.status(403).json({ error: "Email not Found." });
    } else
      bcrypt.compare(password, user.password, async (err, result) => {
        if (err) {
          return res
            .status(403)
            .json({ error: "error occured while login, please try again." });
        }
        if (!result) {
          return res.status(403).json({ error: "Incorrect Password." });
        } else {
          const hashPass = await bcrypt.hash(password, 10);
          if (email) user.email = email;
          if (password) user.password = hashPass;
          if (description) user.description = description;
          if (title) user.title = title;

          // Save the updated user
          const updatedUser = await user.save();

          // Return the updated user as a JSON response
          return res.status(200).json(updatedUser);
        }
      });
  } catch (err) {
    res.status(403).json({ error: err.message });
  }
});
export default router;
