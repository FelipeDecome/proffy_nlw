import express from "express";

const PORT = 3333;
const app = express();

app.use(express.json());

app.get("/users", (request, response) => {
  return response.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
