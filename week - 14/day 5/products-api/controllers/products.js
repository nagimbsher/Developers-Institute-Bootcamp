const {get_all_products, 
  get_one_product, 
  post_one_product, 
  delete_one_product,
  update_one_product,
  search_products,
  products_ejs
} = require(`../modules/products.js`);

const controller_get_all_products = (req,res) =>{
  get_all_products()
  .then(data => {
      res.json(data.rows)
      // res.json(data)
  })
  .catch(err=>{
      console.log(err);
      res.status(404).json({msg:`not found`})
  })
};

const controller_get_product = (req,res) => {
  get_one_product(req.params.id)
  .then(data => {
      res.json(data)
  })
  .catch(err=>{
      console.log(err);
      res.status(404).json({msg:`not found`})
  })
}

const controller_insert_product = (req,res) =>{
  post_one_product(req.body.name, req.body.price)
  .then(data => {
      res.json(data)
  })
  .catch(err=>{
      console.log(err);
      res.status(404).json({msg:`not found`})
  })
}


const controller_delete_product =(req,res) =>{
  delete_one_product(req.params.id)
  .then(data => {
      res.json(data)
  })
  .catch(err=>{
      console.log(err);
      res.status(404).json({msg:`not found`})
  })
}

const controller_update_product =(req,res) =>{
  update_one_product(req.params.id, req.body)
  .then(data => {
      res.json(data)
  })
  .catch(err=>{
      console.log(err);
      res.status(404).json({msg:`not found`})
  })

}

const controller_rearch_products =(req,res) =>{
  search_products(req.query.name)
  .then(data => {
      res.json(data)
      
  })
  .catch(err=>{
      console.log(err);
      res.status(404).json({msg:`not found`})
  })
}

const get_all_products_ejs = (req,res) =>{
  products_ejs()
  .then(data => {
      res.render(`products`, {data})
  })
  .catch(err=>{
      console.log(err);
      res.render('404', {msg:`not found`})
  })
  
}

module.exports={
  controller_get_all_products,
  controller_get_product,
  controller_insert_product,
  controller_delete_product,
  controller_update_product,
  controller_rearch_products,
  get_all_products_ejs
}


// const { getAllProducts,
//         getProduct,
//         insertProduct,
//         deleteProduct,
//         updateProduct,
//         searchProducts
// } = require('../modules/products.js')

// const _getAllProducts = (req, res) => {
//   getAllProducts()
//   .then(data => {
//     res.json(data)
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(404).json({msg:'not found'})
//   })
// }

// const _getAllProductsEjs = (req, res) => {
//   getAllProducts()
//   .then(data => {
//     // res.json(data)
//     res.render('shop', {products:data} )
//   })
//   .catch(err => {
//     console.log(err);

//     res.render("404",{msg:'not found'})
//   })
// }

// const _getProduct = (req,res) => {
//   getProduct(req.params.id)
//   .then(data => {
//     res.json(data)
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(404).json({msg:'not found'})
//   })
// }

// // insertProduct
// const _insertProduct = (req, res) => {
//   insertProduct(req.body)
//   .then(data => {
//     res.json(data)
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(404).json({msg:'not found'})
//   })
// }

// const _deleteProduct = (req, res) => {
//   deleteProduct(req.params.id)
//   .then(data => {
//     res.json(data)
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(404).json({msg:'not found'})
//   })
// }

// const _updateProduct = (req,res) => {
//   updateProduct(req.params.id, req.body)
//   .then(data => {
//     res.json(data)
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(404).json({msg:'not found'})
//   })
// }

// const _searchProducts = (req,res) =>{
//   searchProducts(req.query.name)
//   .then(data => {
//     res.json(data)
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(404).json({msg:'not found'})
//   })
// }

// module.exports = {
//   _getAllProducts,
//   _getProduct,
//   _insertProduct,
//   _deleteProduct,
//   _updateProduct,
//   _searchProducts,
//   _getAllProductsEjs
// }
