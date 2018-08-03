import React from 'react'

import {
  BrowserRouter,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom'
import './App.less'
import Music from './pages/home/music.js'

const MusHead = () =>{
  return (
      <div className="mus_header">
        <div className="mus_inner">
          <div className="inner_up">
            <div className="mus_logo">
            </div>
            <ul className="inner_head">
              <li><NavLink to="/music" activeClassName="active">音乐馆</NavLink></li>
              <li><NavLink to="/profile" activeClassName="active">我的音乐</NavLink></li>
              <li><a href="https://y.qq.com/download/index.html" rel="noopener noreferrer" target="_blank">客户端</a></li>
              <li><a href="https://y.qq.com/vip/daren_recruit/apply.html" rel="noopener noreferrer" target="_blank">音乐号</a></li>
              <li><a href="https://y.qq.com/portal/vipportal/index.html" rel="noopener noreferrer" target="_blank">VIP</a></li>
            </ul>
            <div className="inner_search">
              <input type="text" className="sear_input"/>
              <button className="sear_btn">
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

const Footer = () => {
  return (
    <div className="mus_footer">
      <div className="mus_main">
        <div className="mus_adver"></div>
        <div className="mus_infor"></div>
      </div>
    </div>
  )
}

const App = ()=> {
  return (
    <BrowserRouter>
      <div>
        <MusHead/>
        <Route path="/" render={()=><Redirect to="/music"/> } component = {Music} />
        <Footer/>
      </div>
    </BrowserRouter>
    )
}
export default App