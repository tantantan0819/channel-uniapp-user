<template>
	<view class="form wrp">
		<view class="item ct mt30" v-for="(item,index) in list" :key="index">
			<text>{{item.name}}</text>
			<!-- 填写 -->
			<input class="uni-input" :placeholder="item.hint" v-model="params[item.id]" v-if="item.type == 0"/>
			<!-- 单选 -->
			<radio-group @change="marChange($event,item.id)" class="cs" v-if="item.type == 1">
				<label class="uni-list-cell uni-list-cell-pd ct" v-for="(item2, index) in item.radios" :key="item2.id">
					<view>
						<radio :value="item2.id | isString"/>
					</view>
					<view>{{item2.name}}</view>
				</label>
			</radio-group>
			 <!-- 多选 -->
			<checkbox-group @change="insChange($event,item.id)" v-if="item.type == 2">
			 	<label class="uni-list-cell uni-list-cell-pd ct edu" v-for="(item2, index) in item.radios" :key="item2.id">
			 		<view>
			 			<checkbox :value="item2.id | isString"/>
			 		</view>
			 		<view>{{item2.name}}</view>
			 	</label>
			</checkbox-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				spuId: '',//产品id
				id: '',//选项id
				title: '',//导航名称
				list: [],//需要填写的表单
				params: {},//需要提交的参数
			}
		},
		onLoad(options) {
			if(options.id){
				this.id = options.id;
				this.getList(this.id);	
			}
			if(options.spuId){
				this.spuId = options.spuId;
			}
			if(options.title){
				this.title = options.title;
				uni.setNavigationBarTitle({
					title: this.title
				});
			}
		},
		filters:{
			isString(val){
				return val.toString();
			}
		},
		methods: {
			//获取表单
			getList(id){
				let _this = this;
				this.$post('/product/getInfo',{id:id}).then(res=>{
					if(res.list){
						this.list = res.list;
						this.list.map(item=>{
							_this.params[item.id] = '';
						})
					}
				})
			},
			//单选框
			marChange: function(evt,id) {
				this.params[id] = evt.target.value;
			 },	
			 //多选框
			 insChange: function (evt,id) {
				 this.params[id] = evt.detail.value.join(',');
			 },
		}
	}
</script>

<style>

</style>
