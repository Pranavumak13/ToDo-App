const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
// const ejsLint = require('ejs-lint');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];  // In JS , ALTHOUGH IT IS A CONST BUT WE CAN PUSH ITEMS IN THIS ARRAY.
const WorkItems = [];

app.get("/", function (req, res) {
  //this function gets the data which is entered into the website.

  res.sendFile(__dirname + "/list.ejs");

  const day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items }); // sending data to list.ejs file
});

app.post("/", function (req, res) {
  
  const item = req.body.newItem;
  if(req.body.addItems === "Work")
  {
    WorkItems.push(item);
    res.redirect("/Work");
  }else{

    items.push(item); // pushing new items in an array
    res.redirect("/"); // it goes back to app.get()
  }


});

app.get("/Work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: WorkItems });
})

app.get("/about",function (req, res) {
  res.render("about");
})

app.listen(process.env.PORT || 3000, function () {
  console.log("Port has started!!");
});


// app.post("/Work", function (req, res) {
//     let item = req.body.newItem;
//     WorkItems.push(item); // pushing new items in an array
//     res.redirect("/Work");
// })

/*

2. Declared Globally, outside the function
var - global
let - global
const - global

3. Inside a If_else  
var - global
let - local
const - local

4. Inside a LOOPS 
var - global
let - local
const - local

*/
