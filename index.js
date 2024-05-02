const express = require("express");
const getUsers = require("./src/modules/users");
const port = 3003;
const app = express();
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("*", (req, res) => {
  const url = new URL(req.url, "http://localhost:3003");
  switch (url.pathname) {
    case "/":
      if (url.searchParams.size) {
        const hasUsers = url.searchParams.has("users");
        const hasHello = url.searchParams.has("hello");
        if (hasHello) {
          const helloValue = url.searchParams.get("hello");
          if (helloValue) {
            res.status(200).send("hello " + helloValue);
          } else {
            res.status(400).send("Enter a name");
          }

          return;
        }
        if (hasUsers) {
          const users = getUsers();
          res.status(200).send(users);
          return;
        }
        res.status(500).send("Invalid Param");
      }

      res.status(200).send("Hello World");
      break;
      default:
        res.status(500).send("Invalid Path")
  }
});
