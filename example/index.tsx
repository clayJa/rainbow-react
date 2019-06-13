
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';

import IconExample from '../lib/icon/icon.example';
import ButtonExample from '../lib/button/button.example';
import DialogExample from '../lib/dialog/dialog.example';
import Layout, {Aside, Content, Footer, Header} from '../lib/layout/layout';
import LayoutExample from '../lib/layout/layout.example';
import './index.scss'

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        {/*<div className="logo">*/}
        {/*<img src={logo} width="48" height="48" alt=""/>*/}
        {/*<span> FUI </span>*/}
        {/*</div>*/}
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; 方应杭
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));
