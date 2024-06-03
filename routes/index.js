var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});

mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB =
	"mongodb+srv://ttdo:7ZMBHEiwFUtTH9h3@library.yfnazpq.mongodb.net/?retryWrites=true&w=majority&appName=library";

// Wait for database to connect, logging an error if there is a problem
mongoose.connect(mongoDB);


// const bookSchema = new mongoose.Schema({
// 	title: String,
// 	author: String,
//   publishDate: {
//     type: Date,
//     default: Date.now()
//   }
// });

// const Lib = mongoose.model('Lib', bookSchema);

// run()
// async function run() {
//   try {
//     const newBook = await Lib.create({
// 			title: "The Metamorphosis",
// 			author: "abc",
// 			pubishDate: Date.now()
//     })
//     console.log(newBook);

//     const newBook2 = await Lib.create({
//       title: 'Crying in HMart',
//       author: 'xyz',
//     })
//     console.log(newBook2);
    
//   } catch (error) {
//     console.log(error.message)
//   }
  
// };


module.exports = (router);//, Lib);





