const express=require("express");
const { registstrationController, loginController, AdminLoginController, AdminRegistrtionController } = require("../Controller/Registration");
const isLoggedIn = require("../Middleware/isLoggedIn");
const { AddProduct, ShowProducts, ShowProductsDetail, DeleteProduct, EditProduct, Dashboard, featuredProduct, ShowProductsHome } = require("../Controller/ProductController");
const { CartAdd, CartShow, CartDecrease, CartIncrease, CartDelete } = require("../Controller/CartController");
const { OrderSchema, ShowOrders, AdminOrders, StatusUpdate } = require("../Controller/orderController");
const adminIsLoggedIn =require("../Middleware/adminMiddleware");
const { reviewAdd, showReview, showRating } = require("../Controller/reviewController");
const { AddWishlist, ShowWishlist } = require("../Controller/wishlistController");
const optionalLogin = require("../Middleware/optionalLogedIn");
const router=express.Router();

router.post("/registration",registstrationController);
router.post("/login",loginController);
router.post("/admin-registration",AdminRegistrtionController);
router.post("/admin-login",AdminLoginController);
router.post("/admin/add-products",isLoggedIn,adminIsLoggedIn,AddProduct);
router.get("/show-products",optionalLogin,ShowProducts);
router.get("/show-vertical-card",ShowProductsHome)
router.get("/show-product-detail/:id",ShowProductsDetail);
router.post("/add-cart/:id",isLoggedIn,CartAdd)
router.get("/cart",isLoggedIn,CartShow)
router.patch("/cart-decrease/:id",isLoggedIn,CartDecrease)
router.patch("/cart-increase/:id",isLoggedIn,CartIncrease)
router.delete("/remove-cart/:id",isLoggedIn,CartDelete)
router.post("/order",isLoggedIn,OrderSchema)
router.get("/showorders",isLoggedIn,ShowOrders)
router.get("/admin/orders",isLoggedIn,adminIsLoggedIn,AdminOrders)
router.patch("/admin/statusupdate/:id",isLoggedIn,adminIsLoggedIn,StatusUpdate)
router.get("/admin/allproducts",isLoggedIn,adminIsLoggedIn,ShowProducts);
router.delete("/admin/deleteproduct/:id",isLoggedIn,adminIsLoggedIn,DeleteProduct)
router.get("/admin/edit-product/:id",isLoggedIn,adminIsLoggedIn,ShowProductsDetail);
router.put("/admin/edit-product/:id",isLoggedIn,adminIsLoggedIn,EditProduct);
router.get("/admin/dashboard",isLoggedIn,adminIsLoggedIn,Dashboard);
router.get("/featured-products",featuredProduct);
router.post("/add-review/:id",isLoggedIn,reviewAdd);
router.get("/show-review/:id",showReview);
router.get("/show-rating",isLoggedIn,showRating);
router.post("/add-wishlist/:id",isLoggedIn,AddWishlist);
router.get("/show-wishlist",isLoggedIn,ShowWishlist);
module.exports=router;