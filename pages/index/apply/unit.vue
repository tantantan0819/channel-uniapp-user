<template>
	<view class="form wrp">
		<view class="item ct mt30">
			<text>是否工作</text>
			<radio-group @change="sexChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in job" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === sexId" />
					</view>
					<view>{{item.name}}</view>
				</label>
			 </radio-group>
		</view>
		<view class="item ct mt30">
			<text>工作单位</text>
			 <input class="uni-input" placeholder="请填写工作单位全称" />
		</view>
		<view class="item ct mt30">
			<text>注册资金</text>
			 <input class="uni-input" placeholder="请填写公司注册资金（单位/万元）" />
		</view>
		<view class="item ct mt30">
			<text>在职时间</text>
			 <input class="uni-input" placeholder="请填写在职时间" />
		</view>
		<view class="item ct mt30">
			<text>打卡工资</text>
			 <input class="uni-input" placeholder="请填写每月打卡工资（单位/元）" />
		</view>
		<view class="item ct mt30">
			<text>自存流水</text>
			 <input class="uni-input" placeholder="请填写自存流水（单位/元）" />
		</view>
		<view class="item ct mt30">
			<text>是否购买</text>
			<checkbox-group @change="buyChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="item in buy" :key="item.value">
					<view>
						<checkbox :value="item.value" :checked="item.checked" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</checkbox-group>
		</view>
		<view class="item ct mt30 mulbox">
			<text>公积金</text>
			<view class="mul">
				<input class="uni-input" placeholder="请填写公积金基数（单位/元）" />
				<input class="uni-input" placeholder="请填写公积金单边缴费金额（单位/元）" />
				<input class="uni-input" placeholder="请填写公积金已缴费时间（单位/月）" />
			</view>
		</view>
		<view class="item ct mt30 mulbox">
			<text>社保</text>
			<view class="mul">
				<input class="uni-input" placeholder="请填写社保基数（单位/元）" />
				<input class="uni-input" placeholder="请填写社保已缴费时间（单位/月）" />
			</view>
		</view>
		<view class="item ct mt30">
			<text>工作地址</text>
			 <input class="uni-input" placeholder="请填写工作地址" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				job: [{
						value: '1',
						name: '是'
					},
					{
						value: '0',
						name: '否',
					},
				],
				buy: [{
						value: '0',
						name: '公积金'
					},
					{
						value: '1',
						name: '社保',
					},
				],
				jobId: 0,
				buyId: 0,
				
			}
		},
		onNavigationBarButtonTap:function(e){
		         uni.navigateBack({
		         	delta: 1
		         });
		},
		methods: {
			    jobChange: function(evt) {
					for (let i = 0; i < this.job.length; i++) {
						if (this.jog[i].value === evt.target.value) {
							this.jobId = i;
							break;
						}
					}
				},
				buyChange: function (e) {
					var items = this.buy,
						values = e.detail.value;
					for (var i = 0, lenI = items.length; i < lenI; ++i) {
						const item = items[i]
						if(values.indexOf(item.value) >= 0){
							this.$set(item,'checked',true)
						}else{
							this.$set(item,'checked',false)
						}
					}
				}
		}
	}
</script>

<style>

</style>
