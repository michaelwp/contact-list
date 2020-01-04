const app = require("../app");
const http = require("http").createServer(app);
const PORT = process.env.PORT || 5000;

http.listen(PORT, () => {
    console.log("server running on port", PORT)
});