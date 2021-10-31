import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '@pages/Home/Mainhome';
import Mypage from '@pages/Mypage/Mypage';
import Second from '@pages/Secondpage/Second';
import Third from '@pages/Thirdpage/Third';
import LogIn from '@pages/LogIn/LogIn';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/mypage" component={Mypage} />
      <Route exact path="/:selectedcity/:selectedcategory" component={Second} />
      <Route exact path="/:selectedcity/:selectedcategory/more" component={Third} />
    </Switch>
  );
};

export default App;
