<template>
	<view class="form wrp">
		<view class="item ct mt30">
			<text>存在复效</text>
			<radio-group @change="effChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in effect" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === effectId" />
					</view>
					<view>{{item.name}}</view>
				</label>
			 </radio-group>
		</view>
	<view class="item ct mt30">
		<text>投保人</text>
		<radio-group @change="polChange" class="cs">
			<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in policy" :key="item.value">
				<view>
					<radio :value="item.value" :checked="index === policyId" />
				</view>
				<view>{{item.name}}</view>
			</label>
		 </radio-group>
	</view>
	<view class="item ct mt30">
		<text>缴费状态</text>
		<radio-group @change="payChange" class="cs">
			<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in pay" :key="item.value">
				<view>
					<radio :value="item.value" :checked="index === payId" />
				</view>
				<view>{{item.name}}</view>
			</label>
		 </radio-group>
	</view>
		<view class="item ct mt30">
			<text>保单保额</text>
			 <input class="uni-input" placeholder="请填写保单保额（单位/万元）" />
		</view>
		<view class="item ct mt30">
			<text>生效时间</text>
			 <input class="uni-input" placeholder="请填写保单生效时间（单位/月）" />
		</view>
		<view class="item ct mt30">
			<text>缴费年限</text>
			 <input class="uni-input" placeholder="请填写保单总缴费年限（单位/年）" />
		</view>
		<view class="item ct mt30">
			<text>缴费金额</text>
			<view class="mul">
				 <input class="uni-input" placeholder="请填写保单月缴费金额（单位/元）" />
				  <input class="uni-input" placeholder="请填写保单年缴费金额（单位/元）" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				effect: [{
						value: '1',
						name: '是'
					},
					{
						value: '0',
						name: '否',
					},
				],
				policy: [{
						value: '1',
						name: '是'
					},
					{
						value: '0',
						name: '否',
					},
				],
				pay: [{
						value: '1',
						name: '正常'
					},
					{
						value: '0',
						name: '不正常',
					},
				],
				effectId: 0,
				policyId: 0,
				payId: 0,
			}
		},
		  onNavigationBarButtonTap:function(e){
		            console.log(this.effectId)
					
		},
		methods: {
			    effChange: function(evt) {
					for (let i = 0; i < this.effect.length; i++) {
						if (this.effect[i].value === evt.target.value) {
							this.effectId = i;
							break;
						}
					}
				},
				polChange: function(evt) {
					for (let i = 0; i < this.policy.length; i++) {
						if (this.policy[i].value === evt.target.value) {
							this.policyId = i;
							break;
						}
					}
				},
		}
	}
</script>

<style>

</style>
