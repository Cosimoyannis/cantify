const express = require("express");
const app = express();


const listener = app.listen(process.env.PORT, () => {
  console.log("your app is listening on port" + listener.adress().port);
})