import express from "express";
import cors from "cors";

const app = express(); //create instance

app.use(express.json()); //look at json in body

app.use(cors()); //middleware

//server start
app.listen(8080, function () {
  console.log("server is running on 8080");
});

//endpoints
app.get("/message", (request, response) => {
  response.json({ message: "hey world" });
});
