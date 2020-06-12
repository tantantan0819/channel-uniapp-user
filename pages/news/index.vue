<template>
	<view>
		news
		<input type="text" v-model="aa"/>
		<button type="default" @click="getValue">获取值</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aa: '',
			}
		},
		methods: {
			getValue(){
				console.log(this.aa)
			},
			
		}
	}
</script>

<style>
 input{
	 border: 1px solid red;
 }
 button{
	 border: 1px solid red;
 }
</style>
