import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import ResponseCheck from './ResponseCheck.jsx';

const Hot = hot(ResponseCheck);

ReactDom.render(<Hot />, document.querySelector('#root'));