import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//  磨平浏览器默认样式-> normalize.css库
import 'normalize.css';
import 'antd/dist/antd.css';
import './assets/css/base.css';

ReactDOM.render(<App />, document.getElementById('root'));
