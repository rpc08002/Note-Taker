

// on post route you have to:
// 1. read in json file (comaes in as stringified)
// 2. after file is read turn json into js-array
// 3. once turned into js -array push new note to array
// 4. stringify data again
// 5. resave that data back to the json file
// module.exports = function (app) {
//     class Store {
//         read() {
//           return readFileAsync('db/db.json', 'utf8');
//         }
//     }
// }

const fs = require("fs");
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));


module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
       
        res.json(data);

    });

    app.get("/api/notes/:id", function(req, res) {

        res.json(data[Number(req.params.id)]);

    });


    app.post("/api/notes", function(req, res) {

        let newNote = req.body;
        let uniqueId = (data.length).toString();
        console.log(uniqueId);
        newNote.id = uniqueId;
        data.push(newNote);
        
        fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
            if (err) throw (err);        
        }); 

        res.json(data);    

    });

    
    app.delete("/api/notes/:id", function(req, res) {

        let noteId = req.params.id;
        let newId = 0;
        console.log(`Deleting note with id ${noteId}`);
        data = data.filter(currentNote => {
           return currentNote.id != noteId;
        });
        for (currentNote of data) {
            currentNote.id = newId.toString();
            newId++;
        }
        fs.writeFileSync("./db/db.json", JSON.stringify(data));
        res.json(data);
    }); 

}