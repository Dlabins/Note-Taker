const path = require('path');

//Tells node to access the app
module.exports = (app) => {
   // routes for index.html and notes.html with get request to go to index and notes pages
    app.get("/", function(request, response){
        response.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/notes", function(request, response){
        response.sendFile(path.join(__dirname, "../public/notes.html"));
    });
}