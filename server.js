const express = require("express");
const app = express();

app.use(express.json());
app.use("/api", require("./api"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started with port: ${PORT}`));
