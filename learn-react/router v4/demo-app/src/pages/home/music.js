import React from 'react'
import {
  Route,
  NavLink
} from 'react-router-dom'

import Home from './home/home.js'
import './music.less'



const Homehead = ()=>{
	return (
		<ul className="inner_down">
            <li><NavLink exact to="/music" activeClassName="active">首页</NavLink></li>
            <li><NavLink to="/music/singer" activeClassName="active">歌手</NavLink></li>
            <li><NavLink to="/music/album" activeClassName="active">专辑</NavLink></li>
            <li><NavLink to="/music/toplist" activeClassName="active">排行榜</NavLink></li>
            <li><NavLink to="/music/playlist" activeClassName="active">分类歌单</NavLink></li>
            <li><NavLink to="/music/radio" activeClassName="active">电台</NavLink></li>
            <li><NavLink to="/music/mv_lib" activeClassName="active">MV</NavLink></li>
            <li><NavLink to="/music/album_mall" activeClassName="active">数字专辑</NavLink></li>
        </ul>
		)
}

const Index = ()=> {
	return (
		<div id="music">
			<Homehead />
			
			<Route exact path="/music" component={Home}/>
		</div>
	)
}

export default Index