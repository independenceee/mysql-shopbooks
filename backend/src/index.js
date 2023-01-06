require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/index.routes");
const app = express();

app.use(express.json());
app.use(cors());

router(app);
const PORT = process.env.PORT || 5000;
const start = async function () {
    try {
        await app.listen(PORT, function () {
            return console.log(`http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

(function () {
    start();
})();
