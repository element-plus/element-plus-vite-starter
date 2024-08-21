import http from './public'

// Login
export const userLogin = params => http.fetchPost('/users/login', params);

// Register
export const userRegister = params => http.fetchPost('/users/reg', params);

// Get all products in homepage
export const getAllGoods = params => http.fetchGet('/products/all', params);

// Search results of goods
export const searchGoods = params => http.fetchPost('/products/search', params);

// Search results of shops
export const searchShops = params => http.fetchPost('/shop/search', params);

// Get goods detail
export const getGoodsDetail = params => http.fetchPost('/products/details', params);

// Add to cart 
export const addToCart = params => http.fetchPost('/cart/add_to_cart', params);


// Buy immediately 
export const buyImmediately = params => http.fetchPost('/order/submit', params);

// Collect product
export const collectProduct = params => http.fetchPost('/favorite/add', params);


// Subscribe product
export const subscribeShop = params => http.fetchPost('/favorite_shop/add', params);

// Cancel collecting product
export const cancelCollectingProduct = params => http.fetchPost('/favorite/remove', params);

// Cancel subscribing shop
export const cancelSubscribingShop = params => http.fetchPost('/favorite_shop/remove', params);

// check if shop is subscribed 
export const checkShopSubscribed = params => http.fetchPost('/favorite_shop/isFavorite', params);


// check if product is collected 
export const checkProductCollected = params => http.fetchPost('/favorite/isFavorite', params);


// Get shop details
export const getShopDetail = params => http.fetchPost('/shop/shop_info', params);
// Get shop product list
export const getShopProducts = params => http.fetchPost('/shop/get_products', params);
// Get cart product list
export const getCartList =params => http.fetchPost('/cart/get_list',params);
// Get address list
export const getAddress = params => http.fetchPost('/address/get_address',params);
// add address
export const addAddress = params => http.fetchPost('/address/add_address',params);
// delay address
export const delayAddress =params => http.fetchPost('/address/delay_address',params); 

