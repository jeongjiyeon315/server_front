import React from 'react';
import Footer from '@layouts/Footer/Footer';
import Header from '@layouts/Header/LogInHeader';
import './Layouts.scss';
import LogInHeader from '@layouts/Header/LogInHeader';
import LogoutHeader from './Header/LogoutHeader';

const Layout = (props: { children: React.ReactNode }) => {
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  return (
    <div className="Layout">
      {memberid === 0 ? <LogInHeader /> : <LogoutHeader />}
      <main className="Main">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
