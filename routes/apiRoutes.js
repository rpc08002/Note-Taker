

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

/* 
  const newNote = req.body;
  fs.readfile("db.json","utf-8",(err,data)=>{
  if(err) console.log(err)
  const parsedd_data = JSON.parse(data);
  const notes = parsed_data.notes
  notes.push(newNote)
  fs.writefile("db.json", jSON.stringify(notes),(err)=>{
    if(err) console.log(err)
    return res
    .status(201)
    .json({
      notes:notes,
      msg:"note added"
    })
  })
})

*/