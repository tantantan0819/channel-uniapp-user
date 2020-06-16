<template>
	<view class="customer">
		<view class="wrp">
			<view class="time cc">2020/5/23 12:34</view>
			<view class="official">
				<image src="../../static/image/customer.png" mode=""></image>
				<view class="item">
					<text class="mb30">官方客服</text>
					<text>您好，很高兴为您服务！</text>
				</view>
			</view>
		</view>
		<view class="footer" v-bind:class="{ active: isPicture }" id="footer">
			<view class="send ">
				<view class="wrp ct">
					<image id="pictureImg" src="../../static/image/customer_icon1.png" mode="" @click="showPicture"></image>
					<input class="uni-input" focus placeholder="说点什么..." />
					 <text class="cc">发送</text>
				</view>
			</view>
			<view class="picture wrp">
				<image src="../../static/image/picture.png" mode="" @click="upload"></image>
				<text>上传图片</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isPicture: false
			}
		},
		mounted() {
			let _this = this
			document.onclick = function(){
				var e = e || window.event; //浏览器兼容性
				var elem = e.target || e.srcElement;
				while (elem) { //循环判断至跟节点，防止点击的是div子元素
				    if (elem.id && elem.id=='footer' || elem.tagName=='INPUT') {
				        return;
				    }//如果还有别的div不想点击，就加else if判断
				    elem = elem.parentNode;
				}
				//这里写你想实现的效果
				_this.isPicture = false;
			}
		},
		methods: {
			showPicture(){
				this.isPicture = true;
			},
			upload(){
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			}
		}
	}
</script>

<style lang="scss">
	.active{
		bottom: 0!important;
	}
	.footer{
		background:rgba(250,250,250,1);
		position: fixed;
		bottom: -250upx;
		width: 100%;
		transition: all 0.1s ease-in-out;
		.picture{
			padding: 37upx 0 93upx 0;
			display: flex;
			flex-direction: column;
			image{
				width: 80upx;
				height: 80upx;
			}
			text{
				font-size:18upx;
				color:rgba(51,51,51,1);
				padding-top: 10upx;
			}
		}
		.send{
			border:2px solid rgba(238,238,238,1);
			padding: 20upx 0;
			.wrp{
				image{
					width:40upx;
					height:40upx;
				}
				input{
					width:472upx;
					height:68upx;
					background:rgba(238,238,238,1);
					border-radius:6upx;
					padding: 10upx 26upx;
					font-size: 28upx;
					color:rgba(51,51,51,1);
					margin: 0 14upx;
					&::-webkit-input-placeholder{
						color:rgba(153,153,153,1);
						font-size:24upx;
					}
				}
				text{
					width:150upx;
					height:68upx;
					background:rgba(254,120,0,1);
					border-radius:6upx;
					font-size:30upx;
					color:rgba(255,255,255,1);
				}
			}
		}
	}
    .customer{
		.official{
			display: flex;
			image{
				width:110upx;
				height:110upx;
				border-radius:50%;
				margin-right: 20upx;
			}
			.item{
				display: flex;
				flex-direction: column;
				text{
					&:nth-child(1){
						font-size:24upx;
						color:rgba(102,102,102,1);
					}
					&:nth-child(2){
						padding: 26upx 22upx;
						font-size:30upx;
						color:rgba(51,51,51,1);
						background:rgba(255,255,255,1);
						border-radius:10upx;
					}
				}
			}
		}
		.time{
			padding: 36upx 0;
			font-size:24upx;
			color:rgba(153,153,153,1);
		}
	}
</style>
