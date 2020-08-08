
<script>
import routerArr from '@/plugins/router.js'
export default {
	onLaunch: function() {
	},
	onShow: function() {
		let _this = this;
		_this.$nextTick(function(){
			let isLink = true;
			let pathName = _this.$route.path;
			let token = uni.getStorageSync('token');
			routerArr.map(item=>{
				pathName == item ? isLink = false : '';
			})
			if(isLink && !token){
				uni.showToast({
					title: '未登陆，即将跳转登陆页面',
					icon: 'none'
				});
				setTimeout(function() {
					uni.navigateTo({
						url: '/pages/login/login'
					});
				}, 700);
			}
		})
		
	},
};
</script>

<style lang="scss">
	/*每个页面公共css */
	@import './static/css/base.scss';
	@import './static/css/uni.scss';
	@import './static/css/reset.css';
</style>