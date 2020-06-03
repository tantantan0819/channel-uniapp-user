import CartSdk from './cart'
class api{
	constructor(options) {
	    this.name = 'api';
		this.cart = new CartSdk();
	}
	get(name,parms) {
	   try {
	       if (!name || name == '') {
	           throw new Error('sdk名称不能为空.')
	       }
		
	       let arr = name.split('.');
		   // return this.arr[0].arr[1]();   
	       // let res = this
	       // let up = this
	       // for (let index in arr) {
	       //     res = res[arr[index]]
	       // }
	       // if (arguments.length === 1) {
	       //     return res.call(up)
	       // }
	       // if (arguments.length > 1) {
	       //     return res.call(up, ...params)
	       // }
	   } catch (error) {
	       throw new Error(`not fond sdk name:${name}`)
	   }
	}
}

export default api