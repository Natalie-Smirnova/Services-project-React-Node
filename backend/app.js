const express = require("express");
const app = express();
const userRouter = require("./route/user-route");

app.use(express.json());
app.use("/api/user", userRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;