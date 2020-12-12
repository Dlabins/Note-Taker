const fs = require('fs');
const notesEntry = require('../db/db.json');
// export the api routes that will be used on the server
module.exports = (app) => {
   // function to write the file to the db.json as a string
    function stringDB(notes){
        notes = JSON.stringify(notes);
        fs.writeFile("./db/db.json", notes, function(e){
            if (e){
                return console.log(e);
            }
        });
}
 // GET to pull notes from app
    app.get("/api/notes", function(request, response){
        response.json(notesEntry);
    });
// POST to create notes on the app
    app.post("/api/notes", function(request, response){
        notesEntry.push(request.body);
        response.json({notesEntry});
        stringDB(notes);
});
// deletes notes based on their respective id in the app
app.delete("/api/notes/:id", function (request, response){
    // splice changes the contents of the array by removing notes
    notesEntry.splice(request.params.id, 1);
    for (let i = request.params.id; i , notesEntry.length; i++){
        notesEntry[i].id = `${i}`;
    }
    stringDB(notes);
});
}
