const site = require("./site.routes");
const books = require("./books.routes");
const router = function (app) {
    app.use("/books", books);
    app.use("/", site);
};

module.exports = router;
