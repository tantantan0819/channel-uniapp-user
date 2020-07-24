<template>
	<view class="apply">
		<text class="ap mt30 ct" v-for="(item,index) in apply" :key="index" @click="link(item)">{{item.name}}
		    <text v-if="item.des">{{item.des}}</text>
		</text>
		<view class="login_wrp cc">
			<view class="login_btn cc" >
				<text @click="match">确认匹配</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',//产品id
				apply:[
					// {
					// 	name: '请填写用户信息',
					// 	link:'/pages/index/apply/user',
					// 	des: '（必填）',
					// },
					// {
					// 	name: '请填写个人基本信息',
					// 	link:'/pages/index/apply/basic',
					// },
					// {
					// 	name: '请填写工作单位信息',
					// 	link:'/pages/index/apply/unit',
					// },
					// {
					// 	name: '请填写企业信息',
					// 	link:'/pages/index/apply/company',
					// },
					// {
					// 	name: '请填写商业保险信息',
					//     link:'/pages/index/apply/business',
					// },
					// {
					// 	name: '请填写全款车信息',
					// 	 link:'/pages/index/apply/full',
					// },
					// {
					// 	name: '请填写按揭车信息',
					// 	link:'/pages/index/apply/mortgage',
					// },
					// {
					// 	name: '请填写全款房信息',
					// 	link:'/pages/index/apply/full-room',
					// },
					// {
					// 	name: '请填写按揭房信息',
					// 	link:'/pages/index/apply/mortgage-room',
					// },
					// {
					// 	name: '请填写其他信息',
					// 	link:'/pages/index/apply/other',
					// },
				]
			}
		},
		onLoad(options) {
			if(options.id){
				this.id = options.id;
			}
			this.$post('/product/getInfoTypeList',{id:this.id}).then(res=>{
				if(res.list){
					this.apply = res.list
				}
			})
			// this.$post('/product/getInfo').then(res=>{
			// 	console.log(res,'填写资料项')
			// })
		},
		methods: {
			link(item){
				uni.navigateTo({
					 url: '/pages/index/apply/show?id='+item.id+'&title='+item.name
				})
			},
			match(){
				uni.navigateTo({
					 url: '/pages/index/list?title='+'产品匹配'
				})
			}
		}
	}
</script>

<style lang="scss">
	.apply{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 100upx;
	}
	.ap{
		width:690upx;
		height:98upx;
		background:rgba(255,255,255,1);
		border-radius:10upx;
		padding: 0 27upx;
		font-size:26upx;
		font-weight:bold;
		color:rgba(51,51,51,1);
		position: relative;
		&::before{
			content:'';
			display: inline-block;
			width: 28upx;
			height: 28upx;
			background: url(../../../static/image/apply_icon.png);
			background-size: 28upx 28upx;
			position: absolute;
			top: 50%;
			right: 30upx;
			transform: translateY(-50%);
		}
		text{
			font-size:26upx;
			color:#FE7800;
		}
	}
</style>

