const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shivitripathi2511:Zero%402511@cluster1.piutcpz.mongodb.net/?appName=Cluster1")
  .then(() => {
    console.log("MongoDB Atlas Connected ✅");
  })
  .catch((err) => {
    console.log("Connection Error ❌", err);
  });