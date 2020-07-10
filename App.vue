
<script>
export default {
	onLaunch: function() {
		// //在页面加载时读取sessionStorage里的状态信息
		// if (getSession("store")) {
		// 	this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(getSession("store"))))
		// }
		// //在页面刷新时将vuex里的信息保存到sessionStorage里
		// window.addEventListener("beforeunload", () => {
		// 	setSession("store", JSON.stringify(this.$store.state))
		// })
		console.log('加载')
	}
};
</script>

<style lang="scss">
	/*每个页面公共css */
	@import './static/css/base.scss';
	@import './static/css/uni.scss';
	@import './static/css/reset.css';
</style>