class SiteController {
    async home(request, response) {
        try {
            response.send("Hello this is the backend");
        } catch (error) {
            response.status(404).json({
                message: error.message,
            });
        }
    }
}

module.exports = new SiteController();
