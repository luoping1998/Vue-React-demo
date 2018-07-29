<template>
	<div class="header">
		<div class="n-add" @click.stop="toEmitAdd" :style="note">
		</div>
	</div>
</template>

<script>
export default {
	methods : {
		toEmitAdd : function() {
			this.$emit('change');
			this.$emit('showe');
		}
	},
	data() {
		return {
			note : {
				background : 'url('+require('../assets/add.png')+') no-repeat',
				backgroundPosition : 'center',
				backgroundSize : '75% auto'
			}
		}
	}
}
</script>

<style scoped>
.header {
	width: 100%;
	height: 3rem;
	background-color:#BABCFF;
}
.header .n-add {
	width: 3rem;
	height:3rem;
	float: right;
}
</style>