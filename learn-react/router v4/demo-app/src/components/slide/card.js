import React, {Component} from 'react'

class Card extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render(){
		return (
			<div className="slide_card">
				<div className="card_img"></div>
				<div className="card_word">
					<div className="card_tit">巴拉巴拉介绍</div>
					<div className="card_commit">播放量balabala</div>
				</div>
			</div>
		)
	}
}

class Item extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div className="slide_item">
				<div className="item_img"></div>
				<div className="item_word">
					<div className="item_song">歌名</div>
					<div className="item_singer">歌手</div>
				</div>
				<div className="item_time"><span>04:09</span></div>
			</div> 
		)
	}
}

class Movie extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div className="slide_movie">
				<div className="movie_img"></div>
				<div className="movie_infor">
					<div className="mv_tit">MV的介绍词</div>
					<div className="mv_singer">歌手</div>
					<div className="mv_num">
						<div className="mv_icon"></div>123
					</div>
				</div>
			</div>
		)
	}
}

class List extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render(){
		return(
			<div className="slide_list"></div>
		)
	}
}

export default {
	Card,
	Item,
	Movie,
	List
};