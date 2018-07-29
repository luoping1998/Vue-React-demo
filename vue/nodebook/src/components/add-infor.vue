<template>
	<div class="add-infor">
		<input type="text" placeholder="" v-model="name">
		<textarea v-model="details"></textarea>
		<div class="but" @click="send" v-show="flag">小本本记下</div>
		<div class="but" @click="emit" v-show="!flag">悄咪咪改下</div>
	</div>
</template>

<script>
	export default {
		data : function() {
			return{
				name : '',
				details : ''
			}
		},
		props:['infor','flag','index'],
		methods : {
			send : function() {
				var date = (new Date()).toLocaleDateString();
				var infor = {
					'name' : this.name,
					'details' : this.details,
					'date' : date,
					'show' : true
				}
				if(infor.name&&infor.details){
					this.$emit('infor',infor);
					this.$emit('change');
					this.name='';
					this.details='';
				}else {
					console.log('没有填入信息');
				}
				this.$emit('showe');
			},
			emit : function() {
				var date = (new Date()).toLocaleDateString();
				var obj = {
					'name' : this.name,
					'details' : this.details,
					'date' : date,
					'index' : this.index,
					'show' : true
				}
				// console.log(obj);
				if(obj.name&&obj.details){
					this.$emit('emitinfor',obj);
					this.$emit('change');
				}else {
					console.log('没有填入信息');
				}
				this.name='';
				this.details='';
				this.$emit('all');
				this.result=[];
				this.$emit('showe');
			}
		},
		watch : {
			flag (val) {
				if(!val){
					this.name = this.infor.name;
					this.details = this.infor.details;
				}
			}
		}
	}
</script>

<style scoped>
.add-infor {
	width: 90%;
	height: 71%;
	background-color: rgba(255,255,255,0.6);
	padding-top: 1.5rem;
	margin:1rem auto;
	border-radius: 1rem;
	margin-bottom: 2rem;
}

.add-infor input {
	font-size: 1rem;
	width: 80%;
	height: 2rem;
	margin:0.5rem auto;
	display: block;
	outline: none;
	text-indent: 0.5rem;
	color:  #7E81CA;
	border: 1px solid #7E81CA;
}

.add-infor textarea {
	width: 80%;
	font-size: 1rem;
	outline: none;
	height: 60%;
	display: block;
	margin:0 auto;
	padding-top:0.5rem;
	padding-bottom:1rem;
	text-indent: 0.5rem;
	color:  #7E81CA;
	font-size: 1rem;
	border: 1px solid #7E81CA;
}

.add-infor .but {
	width: 50%;
	height: 2.5rem;
	margin:1rem auto;
	background-color: #7E81CA;
	color: white;
	font-size: 1rem;
	text-align: center;
	line-height: 2.5rem;
}

</style>