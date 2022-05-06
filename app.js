const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
// const ejsLint = require('ejs-lint');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"]; // an array   // In JS , ALTHOUGH IT IS A CONST BUT WE CAN PUSH ITEMS IN THIS ARRAY.
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

// app.post("/Work", function (req, res) {
//     let item = req.body.newItem;
//     WorkItems.push(item); // pushing new items in an array
//     res.redirect("/Work");
// })

app.listen(process.env.PORT || 3000, function () {
  console.log("Port has started!!");
});

// var today = new Date();
// var currentDay = today.getDate();
// var day = "";

// switch (currentDay) {
//     case 1:
//         day = "Sunday";
//         break;
//     case 2:
//         day = "Monday";
//         break;
//     case 3:
//         day = "Tuesday";
//         break;
//     case 4:
//         day = "Wednesday";
//         break;
//     case 5:
//         day = "Thursday";
//         break;
//     case 6:
//         day = "Friday";
//         break;
//     case 7:
//         day = "Saturday";
//         break;
//     default:
//         console.log("Error: current day is : " + currentDay);
// }

// if(currentDay === 6 || currentDay === 0)
// {
//     day = "Weekend  :)";
// }else{
//     day = "WeekDay :(";
// }

// EJS SYNTAX
// <%=  ....  %> is used for HTML output here in this file.
//  <% .... %> is used to render JS logic in .ejs file, have to use for every single line which is not HTML.

//************SCOPE*********************** */
/* 
var , let , const
const - can't be change further 
var and let - Work similarly but slightly different in case of loops/if else statements.

1. Inside a function 
var - local
let - local
const - local

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
