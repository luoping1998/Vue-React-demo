import React ,{Component} from 'react'
import './home.less'
import Slide from '../../../components/slide/slide.js'
import Obj from '../../../components/slide/card.js'

class Home extends Component{
	constructor(){
		super();
		this.getNewsongs = this.getNewsongs.bind(this);
	}

	getNewsongs() {
		fetch('https://c.y.qq.com/mv/fcgi-bin/getmv_by_tag?g_tk=830509363&jsonpCallback=MusicJsonCallback6641304096181186&loginUin=632694871&hostUin=0&format=jsonp&inCharset=utf8&outCharset=GB2312&notice=0&platform=yqq&needNewCode=0&cmd=shoubo&lan=all',{
			'mode' : 'cors',
			'headers': {
      		  'Content-Type': 'application/x-www-form-urlencoded'
    		}
		}).then(res=>{
			console.log(res);
		}).catch(err=>{
			console.log(err);
		})
	}

	render(){
		this.getNewsongs();
		const Card = Obj.Card;
		const Item = Obj.Item;
		const Movie = Obj.Movie;
		const List = Obj.List;
		let bdone = (
				<div className="slide_bd">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			)
		let bdtwo = (
				<div className="slide_bd">
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			)
		let bdthree = (
				<div className="slide_bd">
					<List />
					<List />
				</div>
			);
		let bdfour = (
				<div className="slide_bd">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			)
		let bdfive = (
				<div className="slide_bd">
					<Movie/>
					<Movie/>
					<Movie/>
					<Movie/>
					<Movie/>
					<Movie/>
					<Movie/>
					<Movie/>
					<Movie/>
					<Movie/>
				</div>
			)

		return (
			<div>
				<Slide title="歌单推荐" lists={['为你推荐', '英语', '安静', '快乐', '情歌', '影视']} body={bdone}/>
				<Slide title="新歌首发" lists={['为你推荐', '内地', '港台', '欧美', '日本', '韩国']} body={bdtwo}/>
				<Slide title="精彩推荐" lists={[]} body={bdthree}/>
				<Slide title="新碟首发" lists={['为你推荐', '内地', '港台', '欧美', '韩国', '日本']} body={bdfour}/>
				<Slide title="MV" lists={['精选', '内地', '韩国', '港台', '欧美', '日本']} body={bdfive} />
			</div>
		)
	}
}
export default Home