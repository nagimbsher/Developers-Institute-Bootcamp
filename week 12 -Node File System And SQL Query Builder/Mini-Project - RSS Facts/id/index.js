const Parser = require("rss-parser");
const  parser = new Parser();
const express = require("express");
const { getPostsInCategory,getPostsThatContainTitle } = require
("./data/getPosts");

const url ="https://thefactfile.org/feed/";
const app = express();
app.set("view engine","ejs");

app.use(express.json());
app.use(
    express.urlencoded({
       extended:true
    })
    );
const PORT = 3000;
const INDEX_PARTIAL = "index.ejs";
const SEARCH_PARTIAL= "search.ejs";
const GET_METHOD = "GET";
app.get("/",renderFeed);
app.get("/search",searchFeed);
app.post("/search/title", searchFeed);
app.post("/search/category", searchFeed);

app.listen(PORT, ()=> console.log("listening on port",PORT));
let items = [];

populateItems();

async function populateItems(){
const feed = await parser.parseURL(url);
items = feed.items;
}
function searchFeed(req, res) {
    if (req.method === GET_METHOD) {
     return res.render(SEARCH_PARTIAL,{ items: [] });
    }
        const {
        body: { title, category } 
              } = req;
        const itemsToReturn =
        title == "" ? getPostsInCategory(items, category) :
        getPostsThatContainTitle(items, title);
        res.render(INDEX_PARTIAL, { items: itemsToReturn });
     }

function renderFeed(req, res){
    res.render(INDEX_PARTIAL, {items});
}