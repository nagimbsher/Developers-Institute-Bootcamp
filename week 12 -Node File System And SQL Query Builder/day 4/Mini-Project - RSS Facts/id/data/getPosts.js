function getPostsThatContainTitle(items,title){
    return items.filter((item) => item.title.toLowerCase().includes
    (title.toLowerCase()));
}
function getPostsInCategory(items,category) {
    return items.filter((item) => 
     item.categories.some((cat) => cat.toLowerCase().includes
     (category.toLowerCase()))
    );
}
 module.exports = {getPostsInCategory,getPostsThatContainTitle};