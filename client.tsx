import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import SWRDevtools from '@jjordy/swr-devtools';
import { cache, mutate } from 'swr';

import App from './layouts/App';

axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'http://uspot.cf.s3-website.ap-northeast-2.amazonaws.com/'
    : 'http://localhost:8081';
console.log('env', process.env.NODE_ENV === 'production');

render(
  <BrowserRouter>
    <>
      {process.env.NODE_ENV === 'production' ? null : <SWRDevtools cache={cache} mutate={mutate} />}
      <App />
    </>
  </BrowserRouter>,
  document.querySelector('#root'),
);
