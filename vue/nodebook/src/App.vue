<template>
  <div id="app" @click="sflag=false">
    <n-header @change="showform"></n-header>
    <search @emitsearch="search" @emitresult="getresult" :result="result" :sflag="sflag" @chsflag="changeSflag" :clear="clear"></search>
      <add-infor v-show="toadd" @infor="add" @change="showform" :flag="flag" :infor="myData" :index="now" @emitinfor="changeinfor" @all="allshow">
      </add-infor>
    <div class="added" @delete="todel" v-show="!toadd && infors.length!=0">
    <infors v-for="(item,index) in infors" :content="item" :index="index" :key="index" @delete="todel" @edit="toedit">
    </infors>
    </div>

    <empty v-show="infors.length==0&&!toadd"></empty>
  </div>
</template>

<script>
import nHeader from './components/n-header'
import search from './components/search'
import infors from './components/infors'
import addInfor from './components/add-infor'
import empty from './components/empty'

window.onload = function() {
  var _body = document.getElementsByTagName('body')[0];

  var scale = 1 / devicePixelRatio;
  document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');

  if(document.documentElement.clientWidth <= document.documentElement.clientHeight * 0.6) {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 22 + 'px';
  }else if(document.documentElement.clientWidth >= document.documentElement.clientHeight * 0.6) {
    document.documentElement.style.fontSize = (document.documentElement.clientHeight * 0.6) / 22 + 'px';
    if(document.documentElement.clientWidth >= document.documentElement.clientHeight) {
      _body.style.width = _body.clientHeight * 0.6 + 'px';
    }
  }

  _body.style.height = _body.clientHeight + 'px';
}

export default {
  name: 'App',
  data : function() {
    return {
      toadd : false,
      infors : [],
      flag : true,
      now:'',
      myData:{},
      result:[],
      sflag : true,
      reShow : false,
      clear : false
    }
  },
  methods : {
    showform : function() {
      // console.log('showform');
      this.toadd = !this.toadd;
    },
    todel : function(index) {
      // console.log(index);
      this.infors.splice(index,1);
    },
    add : function(infor) {
      // console.log(infor);
      this.infors.push(infor);
    },
    toedit : function(index){
      this.toadd = true;
      this.flag = false;
      this.now = index;
      this.myData = this.infors[index];
    },
    changeinfor : function(obj) {
      // console.log(obj);
      var infor = {
        'name' : obj.name,
        'details' : obj.details,
        'date' : obj.date,
        'show' : obj.show
      }
      this.infors.splice(obj.index,1,infor);
      this.flag = true;
    },
    search : function(words) {
      this.result=[];
      if(words=='') {
        this.clear = true;
        return ;
      }
      this.result = this.infors.filter(function(item ,index ,array){
          if(item.name.indexOf(words)!=-1){
            item.show = true;
            return item;
          }else {
            item.show = false;
          }
      })
      // console.log(this.result);   
    },
    getresult : function(words) {
      this.sflag = true;
      this.search(words);

    },
    changeSflag : function(words) {
      this.sflag = false;
      this.search(words);
      if(!words){
        this.allshow();
      }
      
    },
    allshow : function() {
      this.infors.forEach(function(item) {
        item.show = true;
      })
      this.clear = true;
    }
  },
  components : {
    'n-header' : nHeader,
    'search' : search,
    'add-infor' : addInfor,
    'infors' : infors,
    'empty' : empty
  },
  watch : {
    // result(val) {
    //   console.log(val);
    //   if(val.length == 0 && this.sflag) {
    //     this.reShow = true;
    //   } else {
    //     this.reShow = false;
    //   }
    // }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

html,body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: center no-repeat url('./assets/cat.png');
  background-size: auto 100%;
  background-position: center;
  overflow: hidden;
}

#app .added {
  width: 100%;
  height: 80%;
  overflow: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
