
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';

import ButtonExample from '../lib/button/button.example';
import DialogExample from '../lib/dialog/dialog.example';
import PagerExample from '../lib/pager/pager.example';
import Layout, {Aside, Content, Footer, Header} from '../lib/layout/layout';
import LayoutExample from '../lib/layout/layout.example';
import './index.scss'
import IconDemo from '../lib/icon/icon.demo';
import SpinExample from '../lib/spin/spin.example';
const logo = require('./logo.png');

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="48" height="48" alt=""/>
          <span> Rainbow UI </span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
            <li>
              <NavLink to="/pager">Pager</NavLink>
            </li>
            <li>
              <NavLink to="/spin">Spin</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/pager" component={PagerExample}/>
          <Route path="/spin" component={SpinExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; clayJa
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));
