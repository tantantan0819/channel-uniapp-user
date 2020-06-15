<template>
	<view class="form wrp">
		<view class="item ct mt30">
			<text>性别</text>
			<radio-group @change="sexChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in sex" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === sexId" />
					</view>
					<view>{{item.name}}</view>
				</label>
			 </radio-group>
		</view>
		<view class="item ct mt30">
			<text>婚姻</text>
			<radio-group @change="marChange" class="cs">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item, index) in marriage" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === marId" />
					</view>
					<view>{{item.name}}</view>
				</label>
			 </radio-group>
		</view>
		<view class="item ct mt30">
			<text>年龄</text>
			 <input class="uni-input" placeholder="请填写年龄" />
		</view>
		<view class="item ct mt30">
			<text>学历</text>
			 <radio-group @change="eduChange" class="cs">
			 	<label class="uni-list-cell uni-list-cell-pd ct edu" v-for="(item, index) in edu" :key="item.value">
			 		<view>
			 			<radio :value="item.value" :checked="index === eduId" />
			 		</view>
			 		<view>{{item.name}}</view>
			 	</label>
			  </radio-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sex: [{
						value: '1',
						name: '男'
					},
					{
						value: '0',
						name: '女',
					},
				],
				marriage: [{
						value: '1',
						name: '已婚'
					},
					{
						value: '0',
						name: '未婚',
					},
					{
							value: '2',
							name: '离异'
						},
						{
							value: '3',
							name: '丧偶',
						},
				],
				edu: [{
						value: '0',
						name: '专科/大专'
					},
					{
						value: '1',
						name: '本科',
					},
					{
							value: '2',
							name: '研究生'
						},
						{
							value: '3',
							name: '其他',
						},
				],
				sexId: 0,
				marId: 0,
				eduId: 0
			}
		},
		methods: {
			    sexChange: function(evt) {
					for (let i = 0; i < this.sex.length; i++) {
						if (this.sex[i].value === evt.target.value) {
							this.sexId = i;
							break;
						}
					}
					},
			   marChange: function(evt) {
			    	for (let i = 0; i < this.marriage.length; i++) {
			    		if (this.marriage[i].value === evt.target.value) {
			    			this.marId = i;
			    			break;
			    		}
			    	}
			    },	
				eduChange: function(evt) {
			    	for (let i = 0; i < this.edu.length; i++) {
			    		if (this.edu[i].value === evt.target.value) {
			    			this.eduId = i;
			    			break;
			    		}
			    	}
			    },	
				cheshi(){
					console.log(this.current)
				},
			
		}
	}
</script>

<style>

</style>
