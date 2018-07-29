<template>
	<div class="empty" @click="change">{{words}}</div>
</template>

<script>
export default{
	data : function() {
		return {
			words : '空 荡 荡 . . . '
		}
	},
	methods : {
		change : function(){
			this.words = '再点也是 空 荡 荡 ...'
		}
	}
}
</script>

<style>
.empty {
	width: 85%;
	height: 6.5rem;
	background-color: white;
	margin :0.8rem auto;
	padding: 10px;
	font-size: 1rem;
	color:  #5556a2;
	text-align: center;
	line-height: 6rem;
	background-color: rgba(255,255,255,0.7);
}
</style>