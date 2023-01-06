const { database } = require("../../utils/databases");
class PostsController {
    async getAllBooks(request, response) {
        try {
            const query = "SELECT * FROM books";
            database.query(query, function (error, data) {
                if (error) {
                    return response.json({
                        message: error,
                    });
                }
                response.status(200).json({ data });
            });
        } catch (error) {
            response.status(404).json({
                message: error,
            });
        }
    }

    async postBooks(request, response) {
        try {
            const { title, description, cover } = request.body;
            const query =
                "INSERT INTO books (`title`,`description`,`cover`) VALUES (?)";
            const values = [title, description, cover];

            database.query(query, [values], function (error, data) {
                if (error) {
                    return response.status(404).json({
                        message: error,
                    });
                }
                return response.status(200).json({
                    message: "Book has been created successfully",
                });
            });
        } catch (error) {
            response.status(404).json({
                message: error,
            });
        }
    }
    async deleteBooks(request, response) {
        try {
            const { id } = request.params;
            const query = "DELETE FROM books WHERE id = ? ";
            database.query(query, [id], function (error, data) {
                if (error) {
                    return response.status(404).json({
                        message: error,
                    });
                }
                return response
                    .status(200)
                    .json({ message: `Delete books ${id} successfully` });
            });
        } catch (error) {
            response.status(404).json({
                message: error,
            });
        }
    }

    async updateBooks(request, response) {
        try {
            const { id } = request.params;
            const query =
                "UPDATE books SET `title` = ?, `description` = ?, `cover` = ? WHERE id = ?";
            const { title, description, cover } = request.body;
            const values = [title, description, cover];
            database.query(query, [...values, id], function (error, data) {
                if (error) {
                    return response.status(404).json({
                        message: error,
                    });
                }
                return response
                    .status(200)
                    .json({ message: `Book has ${id} update successfully.` });
            });
        } catch (error) {
            response.status(404).json({
                message: error,
            });
        }
    }
}

module.exports = new PostsController();
