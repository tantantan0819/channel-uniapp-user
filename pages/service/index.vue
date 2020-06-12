<template>
	<view>
		<view class="yellow">
			111
			<button type="default" @click="weixin">登陆</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getImage(){
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						console.log(res)
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			},
			weixin(){
				uni.request({
					url:'https://api.weixin.qq.com/cgi-bin/token',
					method:'GET',
					data:{
						grant_type: 'client_credential',
						appid: 'wx8c312393c7435d11',
						secret: '2989c23024099d7593dc4a29c4cb083a'
					},
					header:{},
					success:(res)=>{
						console.log(res)
					},
					fail:(error)=>{
						
					}
				})
			}
		}
	}
</script>

<style>

</style>
