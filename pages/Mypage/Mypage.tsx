import Layout from '@layouts/Layouts';
import React, { useEffect } from 'react';
import LogIn from '@pages/LogIn/LogIn';
import Button from '@components/mypage/ko/Button/Button';
import EnButton from '@components/mypage/en/Button/EnButton';

const Mypage = () => {
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }

  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', JSON.stringify('KO'));
  }

  var local = localStorage.getItem('language');
  var language = local.split('"');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout>{memberid === 0 ? <LogIn /> : language[1] === 'KO' ? <Button /> : <EnButton />}</Layout>
    </>
  );
};

export default Mypage;
