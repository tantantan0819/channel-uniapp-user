<template>
	<view class="form wrp">
		<view class="item ct mt30">
			<text>登记证书</text>
			<radio-group @change="regChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in register" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === registerId" />
					</view>
					<view>{{item.name}}</view>
				</label>
			 </radio-group>
		</view>
		<view class="item ct mt30 mulbox">
			<text>购置价</text>
			<view class="mul">
				 <input class="uni-input" placeholder="请填写一手车购置价（单位/元）" />
				  <input class="uni-input" placeholder="请填写二手车购置价（单位/元）" />
			</view>
		</view>
		<view class="item ct mt30">
			<text>公里数</text>
			 <input class="uni-input" placeholder="请填写已跑公里数（单位/公里）" />
		</view>
		<view class="item ct mt30">
			<text>车损险</text>
			 <input class="uni-input" placeholder="请填写全款车车损险保额（单位/万元）" />
		</view>
		<view class="item ct mt30">
			<text>车龄</text>
			 <input class="uni-input" placeholder="请填写车龄（单位/月）" />
		</view>
		<view class="item ct mt30">
			<text>车牌归顺</text>
			 <input class="uni-input" placeholder="请填写车牌归属地" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				register: [{
						value: '1',
						name: '有'
					},
					{
						value: '0',
						name: '无',
					},
				],
			registerId: 0,
			
			}
		},
	onNavigationBarButtonTap:function(e){
	         uni.navigateBack({
	         	delta: 1
	         });
	},
		methods: {
			    regChange: function(evt) {
					for (let i = 0; i < this.register.length; i++) {
						if (this.register[i].value === evt.target.value) {
							this.registerId = i;
							break;
						}
					}
				},
			
		}
	}
</script>

<style>

</style>
