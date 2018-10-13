require('dotenv').load()
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const options = { keepAlive: 300000, connectTimeoutMS: 30000, useNewUrlParser: true};
mongoose.connect(process.env.MONGO_URI, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>  {
const personSchema = new Schema ({
  firstName: String,
  lastName: String,
  age: Number,
  hobbies: [String]
});

  const Person = mongoose.model('Person', personSchema);

  const matthew = new Person({
    firstName: "Matthew",
    lastName: "Dodi",
    age: 23,
    hobbies: ["coding", "gym"]
  })
});