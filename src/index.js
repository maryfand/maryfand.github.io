
import React from 'react';
import {render} from 'react-dom';
import {Router,browserHistory} from 'react-router';

import routes from './routers.js';
import './style/default.css';
import './style/blog.css';
import './style/main.css';

render(<Router routes={routes} history={browserHistory} />
  ,document.getElementById('root'));
