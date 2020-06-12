<template>
	<view class="mine">

		<view class="mine_top">
			<!-- <image src="../../static/img/mine_bg.png" mode=""></image> -->
		</view>
		<view class="line-up">
			<view class="line-item mt20">
				<view class="line_left">
					<view class="line-img info">
						<image src="../../static/image/mine_icon1.png" mode=""></image>
					</view>
					<text>个人信息</text>
				</view>
				<view class="line-right">
					<uni-icons type="contact" size="30"></uni-icons>
				</view>
			</view>
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
			
		}
	}
</script>

<style lang="scss">
  .line-up{
	  width: 100%;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  .line-item{
		  width:690upx;
		  height:100upx;
		  background:rgba(255,255,255,1);
		  border-radius:10upx;
		  display: flex;
		  align-items: center;
		  .line_left{
			  display: flex;
			 .line-img{
				 width: 48upx;
				 height: 48upx;
				 padding: 0 35upx 0 24upx;
			 }
			 text{
				 font-size:30upx;
				 font-weight:bold;
				 color:rgba(51,51,51,1);
			 }
		  }
		  .info{
			  image{
				  width: 37upx;
				  height: 40upx;
			  }
		  }
	  }
  }
</style>
 