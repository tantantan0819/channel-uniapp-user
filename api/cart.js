class CartSdk {
    constructor(options) {
        this.name = 'cart'
    }
    // 加入购物车
    addToCar(params) {
        return this.options.http.post('/g/addToCar',params)
    };
    // 查看购物车
    viewCart(params) {
        return this.options.http.post('/g/viewCart',params)
    };
    // 修改购物车中商品信息
    updateGoodsInCar(params) {
        return this.options.http.post('/g/updateGoodsInCar',params)
    };
    // 删除购物车商品
    delGoodsInCar(params) {
        return this.options.http.post('/g/delGoodsInCar',params)
    };
}

export default CartSdk