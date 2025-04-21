const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});
app.post("/submit-form", (req, res) => {
  const username = req.body.username;
  res.send(`Username is $sselvam`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
