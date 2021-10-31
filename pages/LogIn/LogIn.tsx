import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import useInput from '@pages/Signup/useinput';
import Layout from '@layouts/Layouts';
import Logout from './Logout';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import './login.css';

const LogIn = ({ history }: RouteComponentProps) => {
  var local = localStorage.getItem('language');
  var language = local.split('"');

  const [username, onChangeUsername] = useInput('');
  const [password, onChangePassword] = useInput('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const headers = {
        'Content-type': 'application/json',
      };
      axios
        .post(process.env.REACT_APP_DB_HOST + '/api/member/login', JSON.stringify({ password, username }), { headers })
        .then((res) => {
          sessionStorage.setItem('memberid', JSON.stringify(res.data.memberid));
          if (language[1] === 'KO') {
            alert('로그인 성공!');
          } else {
            alert('Log in Success');
          }
          history.goBack();
        })
        .catch((error) => {
          if (language[1] === 'KO') {
            alert('아이디/비밀번호를 확인해주세요!');
          } else {
            alert('Check your ID & PASSWORD');
          }
        });
    },
    [username, password],
  );

  return (
    <>
      <Layout>
        <div id="login_outer">
          <form id="login_inner" onSubmit={onSubmit} method="POST">
            <div className="input-box">
              <input
                className="loginput"
                type="text"
                id="username"
                name="username"
                placeholder="ID"
                value={username}
                onChange={onChangeUsername}
              />
              <label className="login_label" htmlFor="username">
                ID
              </label>
            </div>
            <div className="input-box">
              <input
                className="loginput"
                type="password"
                id="password"
                name="password"
                placeholder="PASSWORD"
                value={password}
                onChange={onChangePassword}
              />
              <label className="login_label" htmlFor="password">
                PASSWORD
              </label>
            </div>
            {/*<button type="submit">로그인</button>*/}
            <button type="submit" id="login_button">
              <div className="btn">
                <span>LOG IN</span>
                <div className="dot"></div>
              </div>
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};
export default withRouter(LogIn);

// -webkit-appearance: none !important;
// -moz-appearance: none !important;
// appearance: none !important;
