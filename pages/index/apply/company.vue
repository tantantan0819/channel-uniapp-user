<template>
	<view class="form wrp">
		<view class="item ct mt30">
			<text>营业执照</text>
			<radio-group @change="licChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in license" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === licenseId" />
					</view>
					<view>{{item.name}}</view>
				</label>
			 </radio-group>
		</view>
		<view class="item ct mt30">
			<text>实体</text>
			<radio-group @change="entChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in entity" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === entityId" />
					</view>
					<view>{{item.name}}</view>
				</label>
			 </radio-group>
		</view>
		<view class="item ct mt30">
			<text>个体/公司</text>
			<radio-group @change="typeChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in type" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === typeId" />
					</view>
					<view>{{item.name}}</view>
				</label>
			 </radio-group>
		</view>
		<view class="item ct mt30">
			<text>法人/股东</text>
			<radio-group @change="typeChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in type" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === typeId" />
					</view>
					<view>{{item.name}}</view>
				</label>
			 </radio-group>
		</view>
		<view class="item ct mt30">
			<text>股份占比</text>
			 <input class="uni-input" placeholder="请填写股份占比（单位/%）" />
		</view>
		<view class="item ct mt30">
			<text>注册时间</text>
			 <input class="uni-input" placeholder="请填写公司注册时间" />
		</view>
		<view class="item ct mt30">
			<text>对公流水</text>
			 <input class="uni-input" placeholder="请填写公司对公流水（单位/万元）" />
		</view>
		<view class="item ct mt30">
			<text>经营时间</text>
			 <input class="uni-input" placeholder="请填写公司经营时间（单位/月）" />
		</view>
		<view class="item ct mt30">
			<text>年营业额</text>
			 <input class="uni-input" placeholder="请填写公司年营业额（单位/万元）" />
		</view>
		<view class="item ct mt30">
			<text>纳税金额</text>
			 <input class="uni-input" placeholder="请填写公司年纳税金额（单位/万元）" />
		</view>
		<view class="item ct mt30">
			<text>公司地址</text>
			 <input class="uni-input" placeholder="请填写公司地址" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				license: [{
						value: '1',
						name: '有'
					},
					{
						value: '0',
						name: '否',
					},
				],
				entity: [{
						value: '1',
						name: '有'
					},
					{
						value: '0',
						name: '否',
					},
				],
				type: [{
						value: '1',
						name: '个体'
					},
					{
						value: '0',
						name: '公司',
					},
				],
				legal: [{
						value: '1',
						name: '法人'
					},
					{
						value: '0',
						name: '股东',
					},
				],
				licenseId: 0,
				entityId: 0,
				typeId: 0,
				legalId: 0,
				
			}
		},
		  onNavigationBarButtonTap:function(e){
		            console.log(this.licenseId)
					
		},
		methods: {
			    licChange: function(evt) {
					for (let i = 0; i < this.license.length; i++) {
						if (this.license[i].value === evt.target.value) {
							this.licenseId = i;
							break;
						}
					}
				},
				entChange: function(evt) {
					for (let i = 0; i < this.entity.length; i++) {
						if (this.entity[i].value === evt.target.value) {
							this.entityId = i;
							break;
						}
					}
				},
				legChange: function(evt) {
					for (let i = 0; i < this.legal.length; i++) {
						if (this.legal[i].value === evt.target.value) {
							this.legalId = i;
							break;
						}
					}
				}
		}
	}
</script>

<style>

</style>
