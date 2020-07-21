<template>
	<view class="complaint wrp login">
		<view class="reason form wrp">
			<view class="item ct mt40">
				<text class="title">选择投诉理由</text>
				<radio-group @change="reaChange" class="cs">
					<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in reason" :key="item.id">
						<view>
							<radio :value="item.id" :checked="item.id === reasonId" />
						</view>
						<view>{{item.name}}</view>
					</label>
				 </radio-group>
			</view>
		</view>
		<text class="reason_title">描述详细理由</text>
		<view class="uni-textarea mt30">
			<textarea maxlength="1000" auto-height placeholder-style="color:#999" placeholder="详细理由..." v-model="parms.content"/>
		</view>
		<view class="login_wrp cc">
			<view class="login_btn cc" >
				<text @click="submit">提交</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				reason: [],
				reasonId: 0,
				parms: {
					type: '',//投诉理由中文字符
					content:'',//content
					spuId: ''//产品id
					
				}
			}
		},
		onLoad(options) {
			if(options.id){
				this.parms.spuId = options.id;
			}
			this.getReason();
		},
		
		methods: {
			reaChange: function(evt) {
				for (let i = 0; i < this.reason.length; i++) {
					if (this.reason[i].id === evt.target.id) {
						this.reasonId = his.reason[i].idsss;
						this.parms.type = this.reason[i].name;
						break;
					}
				}
			},
			//获取投诉理由
			getReason(){
				this.$get('/product/complainTypeList').then(res=>{
					this.reason = res.list;
					this.reason.map(item=>{
						item.id = item.id.toString();
					})
					this.parms.type = this.reason[0].name;
					this.reasonId = this.reason[0].id;
				})
			},
			//提交投诉
			submit(){
				if(!this.parms.type){
					uni.showToast({
						title: '请选择您的投诉理由',
						icon: 'none'
					});
					return false;
				}
				if(!this.parms.content){
					uni.showToast({
						title: '请填写您的详细投诉理由',
						icon: 'none'
					});
					return false;
				}
				this.$post('/product/complain',this.parms).then(res=>{
					uni.showToast({
						title: '已成功进行投诉',
						icon: 'none'
					});
					setTimeout(()=> {
						uni.navigateBack({
							delta: 1
						});
					}, 600)
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	textarea{
		width: 100%;
		min-height:236upx;
		background:rgba(255,255,255,1);
		border-radius:6upx;
		padding: 20upx;
		font-size: 26upx;
		line-height: 40upx;
	}
	.reason_title{
		font-size:30upx;
		color:rgba(51,51,51,1);
		padding-left: 40upx;
	}
	.reason{
		background:rgba(255,255,255,1);
		border-radius:10upx;
		.item{
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
		}
		.title{
			width: 100%;
			font-size:26upx;
			color:rgba(153,153,153,1);
			padding-bottom: 40upx;
		}
		uni-radio-group{
			flex-direction: column;
			align-items: flex-start;
		}
		uni-label{
			margin-bottom: 40upx;
			}
	}
</style>
