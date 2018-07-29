<template>
	<div class="one-infor" @click="toEdit(index)" v-show="content.show==true">
		<div class="del" @click.stop="toEmitDel(index)">
			<img src="../assets/close.png">
		</div>
		<div class="thing-name">{{content.name}}</div>
		<div class="details">{{content.details}}</div>
		<div class="date">{{content.date}}</div>
	</div>
</template>

<script>
	export default {
		props : ['content','index'],
		methods : {
			toEmitDel : function(index){
				this.$emit('delete',index);
				this.$emit('')
			},
			toEdit : function(index){
				this.$emit('edit',index);
			}
		}
}
</script>
<style scoped>
	.one-infor {
		width: 85%;
		height: 10rem;
		background-color: white;
		margin :10px auto;
		position: relative;
		padding: 10px;
		color:  #5556a2;
		background-color: rgba(255,255,255,0.7);
	}

	.one-infor .thing-name {
		width: 80%;
		height: 1.5rem;
		font-size: 1rem;
		padding-top: 0.5rem;
		padding-bottom:0.5rem;
		margin-left: 0.5rem;
	}

	.one-infor .del {
		width: 1rem;
		height: 1rem;
		position: absolute;
		top:15px;
		right: 15px;
	}

	.del img {
		width: 1rem;
		height: 1rem;
	}

	.one-infor .details {
		padding:0.5rem;
		width: 85%;
		height: 45%;
		margin: 0 auto;
		background-color: white;
	}

	.one-infor .date {
		width: 95%;
		height: 15%;
		margin:0.5rem auto;
		text-align: right;
	}
</style>