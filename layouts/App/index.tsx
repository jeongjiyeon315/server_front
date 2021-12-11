import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('@pages/Home/Mainhome'));
const Mypage = lazy(() => import('@pages/Mypage/Mypage'));
const Second = lazy(() => import('@pages/Secondpage/Second'));
const Third = lazy(() => import('@pages/Thirdpage/Third'));
const LogIn = lazy(() => import('@pages/LogIn/LogIn'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/:selectedcity" component={Second} />
        <Route exact path="/:selectedcity/:selectedcategory/more" component={Third} />
      </Switch>
    </Suspense>
  );
};

export default App;
