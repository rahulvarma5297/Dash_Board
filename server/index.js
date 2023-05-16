const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const databaseID = "AlphaTest";
const collectionID = "Job";

const url = `mongodb://forwardappdb:aXWqHXoAq110hcDseuIk32gmeDiefOYwQwELCXYGchRHFv
OjWj40wFQ0OHhTcBdTp66idpLoGJ32ACDbjm0auw%3D%3D@forwardappdb.mongo.cos
mos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@
forwardappdb@
`;

app.use(cors());

const cli = new mongoose.mongo.MongoClient(url);

app.get("/", (req, res) => {
  res.send("Back End Activated, Good to Go!, /data to get data");
});

app.get("/data", async (req, res) => {
  try {
    await mongoose.connect(url);
    const collection = await cli.db(databaseID).collection(collectionID);

    await collection.createIndex({ createdAt: -1 });

    // const data = await collection.find().limit(10).toArray();
    const data = await collection.find().toArray();

    console.log("Data Fetched");
    res.json(data);
  } catch (err) {
    console.log(err);
    res.send("Error retrieving data");
  }
});

// get the data with id
app.get("/data/:id", async (req, res) => {
  try {
    await mongoose.connect(url);
    const collection = await cli.db(databaseID).collection(collectionID);

    req.params.id = parseInt(req.params.id);

    const data = await collection.findOne({ job_ids: req.params.id });
    console.log("Data Fetched");
    res.json(data);
  } catch (err) {
    console.log(err);
    res.send("Error retrieving data");
  }
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
