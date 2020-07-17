<template>
	<view class="popup-layout-wrap " :class="popuplayoutClass">
		<view class="popup-layout-content" :class="popupContentClass" :style="[{height:height}]">
			<view class="link-address-wrap">
				<view class="link-adress-content">
					<view class="head-wrap">
						<text class="cancel" @click="btn_cancel">取消</text>
						<text class="confirm" @click="btn_confirm">确认</text>
					</view>
					<view class="head-selected">
						<text class="selected-txt" v-if="selected_address">已选择: {{selected_address}}</text>
					</view>
					<view class="operation-wrap">
						<view class="operation-container">
							<!-- 省 -->
							<view class="operation-content">
								<scroll-view scroll-y="true" class="province" show-scrollbar="false">
									<view @click="changeProvince(index,items.name,items.code)" v-for="(items , index) of areaArr" :class="[provinceIndex == index ? 'province-txt-click' : 'province-txt']">
										{{items.name}}
										<view class="pic" v-show="provinceIndex == index">
											<image src="../static/image/yes.png"></image>
										</view>
									</view>
								</scroll-view>
							</view>
							<!-- 市 -->
							<view class="operation-content">
								<scroll-view scroll-y="true" class="province" show-scrollbar="false">
									<view @click="changeCity(index,items.name,items.code)" v-for="(items , index) of city" :class="[cityIndex == index ? 'province-txt-click' : 'province-txt']">
										{{items.name}}
										<view class="pic" v-show="cityIndex == index ">
											<image src="../static/image/yes.png"></image>
										</view>
									</view>
								</scroll-view>
							</view>
							<!-- 区县 -->
							<view class="operation-content">
								<scroll-view scroll-y="true" class="province" show-scrollbar="false">
									<view @click="changeCountry(index,items.name,items.code)" v-for="(items , index) of county" :class="[countyIndex == index ? 'province-txt-click' : 'province-txt']">
										{{items.name}}
										<view class="pic" v-show="countyIndex == index ">
											<image src="../static/image/yes.png"></image>
										</view>
									</view>
								</scroll-view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="maskShow" class="popup-layout-mask" @tap="close(maskClick)"></view>
	</view>
</template>

<script>
	import areaData from '@/plugins/area.js'
	export default {
		data() {
			return {
				newActive: "",
				newTransition: true,
				areaArr: [], //地区
				province: [], //省
				city: [], //市
				county: [], //区县
				provinceIndex: null,
				cityIndex: null,
				countyIndex: null,
				selected_address: '',
				provinceId: '',
				cityId: '',
				areaId: ''
			};
		},
		props: {
			/*底部弹窗的属性*/
			active: {
				type: Boolean,
				default: false
			},
			height: {
				type: [String],
				default: "100%"
			},
			//遮盖层显示
			maskShow: {
				type: Boolean,
				default: true
			},
			//遮盖层点击
			maskClick: {
				type: Boolean,
				default: true
			},
			//回掉
			callback: {
				type: Function,
				default: function() {

				}
			},
		},
		computed: {
			popuplayoutClass: function() {
				let _class = "";
				if (this.newActive) {
					_class += "popup-layout-active";
				}
				_class += " popup-layout-bottom";
				return _class;
			},
			popupContentClass: function() {
				let _class = "";
				if (this.newTransition && this.transition !== 'none') {
					_class += "popup-layout-transition-slider"
				}
				return _class;
			}
		},
		mounted() {
			this.areaArr = areaData;
			this.city = areaData[0].cityList;
			this.county = this.city[0].areaList;
		},
		methods: {
			//选择省份
			changeProvince(index,name,id) {
				this.provinceIndex = index;
				this.cityIndex = null;
				this.countyIndex = null;
				this.city = this.areaArr[index].cityList;
				this.county = this.city[0].areaList;      
				this.selected_address = name;
				this.provinceId = id;
				this.cityId = '';
				this.areaId = '';
			},
			//选择市
			changeCity(index,name,id){
				if(this.provinceIndex == null ){
					this.provinceIndex = 0;
					this.provinceId = this.areaArr[0].code;
				}
				this.cityIndex = index;
				this.countyIndex = null;
				this.county = this.city[index].areaList;
				this.selected_address =  this.areaArr[this.provinceIndex].name+'-'+name;
				this.areaId = '';
				this.cityId = id;
			},
			//选择区县
			changeCountry(index,name,id){
				if(this.cityIndex == null){
					this.cityIndex = 0;
					this.cityId = this.city[0].code;
				}
				if(this.provinceIndex == null){
					this.provinceIndex = 0;
					this.provinceId = this.areaArr[0].code;
				}
				this.countyIndex = index;
				this.areaId = id;
				this.selected_address =  this.areaArr[this.provinceIndex].name+'-'+this.city[this.cityIndex].name+'-'+name;
			},
			//显示弹窗
			show: function() {
				//提交的数据置为空
				this.newActive = true;
				let _this = this;
				setTimeout(function() {
					_this.newTransition = false;
				}, 50)
			},

			//关闭弹窗
			close: function(v) {
				let close = v || true;
				if (close) {
					this.newTransition = true;
					let _this = this;
					setTimeout(function() {
						_this.newActive = false;
					}, 300)
				}

			},
			//取消按钮
			btn_cancel: function() {
				this.close();
			},
			//确定按钮
			btn_confirm: function() {
				if(!this.selected_address){
					uni.showToast({
						title: '请先选择地址',
						icon: 'none'
					});
					return false;
				}
				this.close();
				uni.setStorageSync('provinceId', this.provinceId);
				uni.setStorageSync('cityId', this.cityId);
				uni.setStorageSync('areaId', this.areaId);
				uni.setStorageSync('area', this.selected_address);
				this.$emit('confirmCallback');
			}
		},
	}
</script>

<style lang="scss">
	popup-layout-wrap {
		position: absolute;
	}
	.popup-layout-wrap {
		position: fixed;
		z-index: 998;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		display: none;

		&.popup-layout-active {
			display: flex;
		}

		&.popup-layout-bottom {
			align-items: flex-end;

			.popup-layout-transition-slider {
				transform: translate3d(0, 100%, 0);
			}
		}

		.popup-layout-content {
			background-color: #fff;
			z-index: 2;
			height: 100%;
			width: 100%;
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			transform: translate3d(0, 0, 0) scale(1);
			opacity: 1;
			transition: transform .3s ease-in-out, opacity .3s ease-in-out;

			&.popup-layout-transition-fade {
				transform: translate3d(0, 0, 0) scale(0.3);
				opacity: 0;
			}
		}

		.popup-layout-mask {
			position: absolute;
			transition: all 1s;
			z-index: 1;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			height: 100%;
			width: 100%;
			background-color: rgba(#000, 0.6);
		}
	}

	/***省市区选择器***/
	.link-address-wrap {
		height: 100%;
		width: 100%;
		background: #fff;
	}
	.link-address-wrap .link-adress-content {
		margin: 8px 10px 10px 10px;
		.head-wrap {
			padding-bottom: 5px;
			display: flex;
			flex-direction: row;
			position: relative;
			font-size: 30upx;
			.cancel {
				color: #999;
				font-size: 30upx;
			}
			.confirm {
				position: absolute;
				right: 0px;
				font-size: 30upx;
			}
		}
		.head-selected {
			text-align: center;
			color: #ccc;
			font-size: 26upx;
		}
		.operation-wrap {
			.operation-container {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				.operation-content {
					display: flex;
					flex-direction: column;
					width: 33.333%;

					.province {
						//scroll-view区域的固定高度
						height: 420rpx;
						font-size: 26upx;

						.province-txt {
							margin: 18px 12px;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						.province-txt-click {
							margin: 18px 12px;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							color: red;
							font-size: 28upx;
							display: flex;
							flex-direction: row;

							.pic {
								padding-left: 15rpx;
								width: 30rpx;
								height: 30rpx;
								display: flex;
								justify-content: center;
								text-align: center;
								margin: auto 0;

								image {
									width: 100%;
									height: auto;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
