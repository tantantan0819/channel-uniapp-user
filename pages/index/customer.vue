<template>
	<view class="customer" id="chat">
		<view class="wrp">
			<view class="time cc" v-if="list.length>0">{{show_time}}</view>
			<view class="official active" v-for="(item,index) in list" :key="index+'-'" v-bind:class="{other: item.content.user.id != userId }">
				<view class="left showBox" v-if="item.content.user.id == userId">
					<image :src="item.content.user.portrait" mode="" class="avatar"></image>
					<view class="item">
						<text class="mb30">{{item.content.user.name}}</text>
						<image class="content_show" :src="item.content.imageUri" mode="aspectFit" v-if="item.content.imageUri" @click="viewImg(item.content.imageUri)"></image>
						<view class="showCon" v-else>{{item.content.content}}</view>
					</view>
				</view>
				<view class="right showBox" v-else>
					<view class="item">
						<text class="mb30">{{item.content.user.name}}</text>
						<image class="content_show" :src="item.content.imageUri" mode="aspectFit" v-if="item.content.imageUri" @click="viewImg(item.content.imageUri)"></image>
						<view class="showCon" v-else>{{item.content.content}}</view>
					</view>
					<image :src="item.content.user.portrait" mode="" class="avatar"></image>
				</view>
			</view>
		</view>
		<view class="footer" v-bind:class="{ active: isPicture }" id="footer">
			<view class="send ">
				<view class="wrp ct">
					<image id="pictureImg" src="../../static/image/customer_icon1.png" mode="" @click="showPicture"></image>
					<input class="uni-input" focus placeholder="说点什么..." v-model="msg" />
					<text class="cc" @click="sendMsg">发送</text>
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
	import {
		timeFormat
	} from '@/plugins/validate.js'
	// import init from "@/static/rongyun/init";
	// import RongIMLib from '@/static/rongyun/RongIMLib-2.5.9.js'
	import Config from "@/plugins/config"
	// var RongIMClient = RongIMLib

	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'http://cdn.ronghub.com/RongIMLib-2.5.9.js';
	head.appendChild(script);
	var time = Date.now();
	export default {
		data() {
			return {
				show_time: '',
				isPicture: false,
				userInfo: {
					appKey: "",
					token: ""
				},
				userId: '', //自己的id
				// otherId: 'merchant_2', //他人的id -- 官方id
				otherId: '', //他人的id -- 官方id
				msg: '', //发送的消息
				list: [], //聊天信息框
				user: {
					id: '',
					name: '',
					portrait: '',
				}
			}
		},
		mounted() {
			let _this = this;
			_this.userInfo.appKey = Config.ryKey;
			_this.userInfo.token = uni.getStorageSync('ryToken');
			_this.show_time = timeFormat(time)
			_this.$post('/getInfo').then(res => {
				_this.user.name = res.nickname;
				_this.user.portrait = res.headurl;
			})
			//点击展示区域
			document.onclick = function() {
				var e = e || window.event; //浏览器兼容性
				var elem = e.target || e.srcElement;
				while (elem) { //循环判断至跟节点，防止点击的是div子元素
					if (elem.id && elem.id == 'footer' || elem.tagName == 'INPUT') {
						return;
					} //如果还有别的div不想点击，就加else if判断
					elem = elem.parentNode;
				}
				//这里写你想实现的效果
				_this.isPicture = false;
			}
			//获取融云官方客服id
			this.kefu();
			//融云
			setTimeout(function() {
				_this.new();
			}, 1000)
		},
		methods: {
			//获取融云官方客服id
			kefu() {
				this.$get('/kefu').then(res => {
					this.otherId = res.kefuId;
				})
			},
			//查看图片
			viewImg(url){
				let arr = [];
				arr.push(url)
				uni.previewImage({
						urls: arr
				})
			},
			new() {
				let _this = this;
				RongIMLib.RongIMClient.init(_this.userInfo.appKey); //开发者后台 -> 基本信息 获取
				console.log(RongIMLib.RongIMClient)
				/* 连接状态监听器 */
				RongIMLib.RongIMClient.setConnectionStatusListener({
					onChanged: function(status) {
						/* status 标识当前连接状态 */
						console.log('连接成功');
					}
				});
				/* 消息监听器 */
				RongIMLib.RongIMClient.setOnReceiveMessageListener({
					onReceived: function(message) {
						if (message.content.user) {
							_this.list.push(message);
							_this.scrollEnd();
						}
					}
				});
				//链接获取id
				RongIMLib.RongIMClient.connect(_this.userInfo.token, {
					onSuccess: function(userId) {
						_this.userId = userId;
						_this.user.id = userId;
						// 连接已成功, 此时可通过 getConversationList 获取会话列表并展示
					},
					onTokenIncorrect: function() {
						console.log('连接失败, 失败原因: token 无效');
					},
					onError: function(errorCode) {
						console.log('连接失败, 失败原因: ', errorCode);
					}
				});

			},
			showPicture() {
				this.isPicture = true;
			},
			upload() {
				let _this = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths;
						uni.uploadFile({
							url: Config.upload_host, //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: (uploadFileRes) => {
								let imgUrl = JSON.parse(uploadFileRes.data).url;

								let con = {
									content: '',
									imageUri: imgUrl,
									user: _this.user
								}
								var msg = new RongIMLib.ImageMessage(con);
								var conversationType = RongIMLib.ConversationType.PRIVATE; // 单聊
								var targetId = _this.otherId; // 用户 B 的 userId
								RongIMClient.getInstance().sendMessage(conversationType, targetId, msg, {
									onSuccess: function(message) {
										// message 为发送的消息对象并且包含服务器返回的消息唯一 ID 和发送消息时间戳
										console.log(message, '图片上传信息')
										_this.list.push(message);
										_this.scrollEnd();
									},
									onError: function(errorCode, message) {
										console.log(errorCode, '错误看信息-图片')
									}
								});
							},
							fail() {
								uni.showToast({
									title: '上传失败',
									icon: 'none'
								});
							}
						});
					}
				});
			},
			//发送消息
			sendMsg() {
				let _this = this;
				if (_this.msg) {
					let con = {
						content: _this.msg,
						user: _this.user
					}
					var msg = new RongIMLib.TextMessage(con);
					var conversationType = RongIMLib.ConversationType.PRIVATE; // 单聊
					var targetId = _this.otherId; // 用户 B 的 userId
					RongIMClient.getInstance().sendMessage(conversationType, targetId, msg, {
						onSuccess: function(message) {
							_this.msg = '';
							// message 为发送的消息对象并且包含服务器返回的消息唯一 ID 和发送消息时间戳
							console.log(message, '文字')
							_this.list.push(message);
							_this.scrollEnd();
						},
						onError: function(errorCode, message) {
							console.log(errorCode, '错误')
						}
					});
				}

			},
			scrollEnd() {
				//添加完消息 跳转到最后一条
				setTimeout(()=>{
					var list = document.querySelectorAll(".official");
					if (list.length > 1) {
						var last = list[list.length - 1];
						last.scrollIntoView();
					}
				},50)
				// this.$nextTick(function(){
				// 	var list = document.querySelectorAll(".official");
				// 	if (list.length > 1) {
				// 		var last = list[list.length - 1];
				// 		last.scrollIntoView();
				// 	}
				// })
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		padding-bottom: 200upx;
	}

	.active {
		bottom: 0 !important;
	}

	.customer {
		.wrp {
			padding-top: 40upx;
		}

		.other {
			justify-content: flex-end;

			image {
				margin-right: 0 !important;
				margin-left: 20upx;
			}

			.item {
				align-items: flex-end;
			}
		}

		.active {
			.item {
				text {
					&:nth-child(2) {
						// background-color: red!important;
					}
				}
			}
		}
	}


	.footer {
		background: rgba(250, 250, 250, 1);
		position: fixed;
		bottom: -250upx;
		width: 100%;
		transition: all 0.1s ease-in-out;

		.picture {
			padding: 37upx 0 93upx 0;
			display: flex;
			flex-direction: column;

			image {
				width: 80upx;
				height: 80upx;
			}

			text {
				font-size: 18upx;
				color: rgba(51, 51, 51, 1);
				padding-top: 10upx;
			}
		}

		.send {
			border: 2px solid rgba(238, 238, 238, 1);
			padding: 20upx 0;

			.wrp {
				image {
					width: 40upx;
					height: 40upx;
				}

				input {
					width: 472upx;
					height: 68upx;
					background: rgba(238, 238, 238, 1);
					border-radius: 6upx;
					padding: 10upx 26upx;
					font-size: 28upx;
					color: rgba(51, 51, 51, 1);
					margin: 0 14upx;

					&::-webkit-input-placeholder {
						color: rgba(153, 153, 153, 1);
						font-size: 24upx;
					}
				}

				text {
					width: 150upx;
					height: 68upx;
					background: rgba(254, 120, 0, 1);
					border-radius: 6upx;
					font-size: 30upx;
					color: rgba(255, 255, 255, 1);
				}
			}
		}
	}

	.customer {
		.official {
			display: flex;
			margin-top: 20upx;

			.showBox {
				display: flex;
				image{
					min-width: 120upx;
					width: 120upx;
					height: 120upx;
				}
			}

			.avatar {
				width: 110upx;
				height: 110upx;
				border-radius: 50%;
				margin-right: 20upx;
				transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				/* IE 9 */
				-moz-transform: rotate(0deg);
				/* Firefox */
				-webkit-transform: rotate(0deg);
				/* Safari 和 Chrome */
				-o-transform: rotate(0deg);
			}

			.content_show {
				width: 200upx;
				height: 200upx;
				transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				/* IE 9 */
				-moz-transform: rotate(0deg);
				/* Firefox */
				-webkit-transform: rotate(0deg);
				/* Safari 和 Chrome */
				-o-transform: rotate(0deg);
			}

			.item {
				display: flex;
				flex-direction: column;

				text {
					max-width: 400upx;

					&:nth-child(1) {
						font-size: 24upx;
						color: rgba(102, 102, 102, 1);
					}

				}

			}
		}
		.showCon {
			max-width: 450upx;
			padding: 26upx 22upx;
			font-size: 30upx;
			color: rgba(51, 51, 51, 1);
			background: rgba(255, 255, 255, 1);
			border-radius: 10upx;
		}
		
		.time {
			padding: 36upx 0;
			font-size: 24upx;
			color: rgba(153, 153, 153, 1);
		}
	}
</style>
