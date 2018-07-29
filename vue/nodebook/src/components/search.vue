<template>
	<div class="search">
		<input type="text" v-model="words" @keyup="toEmitSearch">
		<div class="tosearch" @click.stop="toEmitSearch">
			<img src="../assets/find.png">
		</div>
		<ul class="list" v-show="sflag">
			<li v-for="item in result" @click.stop="replace(item)">
				{{item.name}}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data : function() {
		return {
			words : ''
		}
	},
	props:['result','sflag','clear'],
	methods : {
		toEmitSearch : function(e) {
			if(this.words!==''){
				if(e.type=="keyup"){
					this.$emit('emitresult',this.words);
				}else {
					this.$emit('emitsearch',this.words);
				}
			}			
		},
		replace : function(item) {
			this.words = item.name;
			this.$emit('chsflag',item.name);
		}
	},
	watch : {
		words (val) {
			console.log(val);
			if(val == '') {
				this.$emit('chsflag',val);
			}
		}
	}
}
</script>
<style scoped>
	.search {
		margin-top: 1rem;
		width: 100%;
		height: 3rem;
		display: flex;
		flex-direction: row;
		justify-content:center;
		align-items: center;
	}

	.search input {
		width: 65%;
		height: 75%;
		margin-right: 5%;
		outline: none;
		text-indent: 10px;
		font-size: 1rem;
		border: 1px solid #7E81CA;
		color:  #7E81CA;
	}

	.search .tosearch {
		width: 18%;
		height: 75%;
		background-color: #7E81CA;
	}

	.tosearch img {
		width: 45%;
		height: auto;
		margin:4px auto;
		display: block;
	}

	.search .list{
		width: 65%;
		height: auto;
		flex: none;
		align-self:flex-start;
		border: 1px solid rgba(0,0,0,0);
		display: block;
		color:white;
		font-size: 1rem;
		position: absolute;
		top:7rem;
		left: 5.5%;
		background-color: rgba(186,188,255,0.7);
		z-index: 3;
	}

	.search ul {
		list-style: none;
		padding: 0;
	}

	.search ul li {
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		text-indent: 1rem;
	}
	.search ul li:hover {
		background-color: #BABCFF;
	}
</style>
