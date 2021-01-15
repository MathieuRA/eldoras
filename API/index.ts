"use strict";

import express from "express";

const app = express();

const PORT = process.env.PORT || 1251;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("Server started on port: " + PORT);
});
