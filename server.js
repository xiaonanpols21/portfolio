const express = require('express');

const dotenv = require("dotenv").config();
const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

let db = null;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get('/', async (req, res) => {
    const skills = await db.collection("skills").find({},{}).toArray();
    const work = await db.collection("work").find({},{}).toArray();
    const eschool = await db.collection("eschool").find({},{}).toArray();
    const ework = await db.collection("ework").find({},{}).toArray();
    res.render("pages/index", {
        skills,
        work,
        eschool,
        ework
    });
})

//My work projects
app.get('/chingu', async (req, res) => {
    const work = await db.collection("work").find({},{}).toArray();
    res.render("pages/chingu", {
        work
    });
})

app.get('/xiaocoijs', async (req, res) => {
    const work = await db.collection("work").find({},{}).toArray();
    res.render("pages/xiaocoijs", {
        work
    });
})

app.get('/yuanhotpot', async (req, res) => {
    const work = await db.collection("work").find({},{}).toArray();
    res.render("pages/yuanhotpot", {
        work
    });
})

app.get('/eboy', async (req, res) => {
    const work = await db.collection("work").find({},{}).toArray();
    res.render("pages/eboy", {
        work
    });
})

app.get('/festivala', async (req, res) => {
    const work = await db.collection("work").find({},{}).toArray();
    res.render("pages/festivala", {
        work
    });
})

app.get('/xiaocola', async (req, res) => {
    const work = await db.collection("work").find({},{}).toArray();
    res.render("pages/xiaocola", {
        work
    });
})

app.get('/mojo', async (req, res) => {
    const work = await db.collection("work").find({},{}).toArray();
    res.render("pages/mojo", {
        work
    });
})

app.get('/bts', async (req, res) => {
    const work = await db.collection("work").find({},{}).toArray();
    res.render("pages/bts", {
        work
    });
})

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