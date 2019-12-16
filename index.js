var express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

// Models
const notes = require("./db/notes");
var app = express();

// Middleware

app.use(cors());
app.use(require("morgan")("combined"));
app.use(require("cookie-parser")());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
}

// API calls!

app.get("/notes", (req, res) => {
  notes.getAll().then(notes => {
    res.json(notes);
  });
});

app.get("/notes/:category", (req, res) => {
  notes.getCategoryNotes(req.params.category).then(notes => {
    res.json(notes);
  });
});

app.post("/notes", (req, res) => {
  // console.log(req.body);
  notes
    .create(req.body)
    .then(note => {
      res.json(note);
    })
    .catch(error => {
      res.status(500);
      res.json(error);
    });
});

app.put("/notes/:id", (req, res) => {
  notes
    .updateNote(req.params.id, req.body.newContent)
    .then(note => {
      res.json(note);
    })
    .catch(error => {
      res.status(500);
      res.json(error);
    });
});

app.delete("/notes/:id", (req, res) => {
  notes
    .deleteMe(req.params.id)
    .then(note => {
      res.json(note);
    })
    .catch(error => {
      res.json(error);
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`You know what time it is: ${port}`);
});
