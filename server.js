const express = require('express');

const dotenv = require("dotenv").config();
const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");

const app = express();
const port = 3000;

let db = null;

/*
// Routes
const workRoute = require("./routes/Work");

// Use routes
app.use("/work", workRoute);
*/

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get('/', async (req, res) => {
    const skills = await db.collection("skills").find({},{}).toArray();
    const work = await db.collection("work").find({},{}).toArray();
    res.render("pages/index", {
        skills,
        work
    });
})

app.get('/detail/:workId', async (req, res) => {
    const workId = {_id: ObjectId(req.params.workId)};
    const work = await db.collection("work").findOne(workId);

    res.render("pages/detail", {
        work
    });
})

app.get("/detail", async (req, res) => {
    const work = await db.collection("work").find({},{}).toArray();
    res.render("pages/detail", {
        work
    });
});

// Make connection with Mongo
async function connectDB() {
    const uri = process.env.DB_URI;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        await client.connect();
        db = client.db(process.env.DB_NAME);
    } catch (error) {
      console.error(error);
      throw error;
    }
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    connectDB()
    .then(console.log("We have a connection to mongo"));
});