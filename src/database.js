const mongoose = require("mongoose");

const URI = "mongodb://localhost/mern-task";

mongoose
  .connect(URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false
  })
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.error(error));

  module.exports = mongoose;