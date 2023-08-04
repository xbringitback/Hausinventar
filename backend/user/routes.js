import { Router } from "express";
import { User } from "./UserModel.js";
import { authenticateToken, generateAccessToken } from "./authToken.js";

export const userRouter = Router();

const hoursInMilisec = (hours) => {
  return 1000 * 60 * 60 * hours;
}

// ! User ausgeben
userRouter.get("/aut", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// ! SignUp
userRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  let user = new User({ name, email });
  user.setPassword(password);
  user = await user.save();

  res.send({ message: "New user created", data: user });
});

// ! Login
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+hash").select("+salt");

  const passwordIsValid = user.verifyPassword(password);
  if (passwordIsValid) {

    const token = generateAccessToken({ email })
    // console.log(token);
    res.cookie("auth", token, { httpOnly: true, maxAge: hoursInMilisec(4) })

    res.send({ message: "Success", data: user });
  } else {
    res.status(404).send({
      message: "Failed login",
      error: { message: "Password and Email combination is wrong" },
    });
  }
});


userRouter.get("/secure", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+hash").select("+salt");
  // um User zu finden und hash u salt zu selektieren
  // diese PW erstellt gleichen Hash wie in der datenbank
  const passwordIsValid = user.verifyPassword(password);
  if (passwordIsValid) {
    res.send({ message: "Success PW", data: user, authenticated: true });
  } else {
    res.status(404).send({
      message: "Login failed",
      error: {
        message: "PW Email Combi falsch",
      },
    });
  }
});