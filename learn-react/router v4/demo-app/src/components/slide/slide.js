import React, {Component} from 'react'
import './slide.less'

class Slide extends Component{
	render(){
		const tab = this.props.lists.map((val,index)=>{
			return (
				<li key={index}><a href="javascript:;">{val}</a></li>
			)
		})
		return (
			<div className="slide">
				<div className="slide_tit">{this.props.title}</div>
				<ul className="slide_tab">
					{tab}
				</ul>
				{this.props.body}
				<div className="slide_point">
					<span className="point"></span>
				</div>
				<div className="slide_left">
					<div className="move"></div>
				</div>
				<div className="slide_right">
					<div className="move"></div>
				</div>
			</div>
		)
	}
}

export default Slide