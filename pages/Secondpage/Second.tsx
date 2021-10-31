import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Slide from '@components/2page/ko/Slide/Slide';
import EnSlide from '@components/2page/en/Slide/EnSlide';
import Layout from '@layouts/Layouts';
import Newcategory from '@components/2page/ko/Newcategory/Newcategory';

const Second = (props: any) => {
  var local = localStorage.getItem('language');
  var language = local.split('"');
  const selectedcity = props.match.params.selectedcity;
  const selectedcategory = props.match.params.selectedcategory;
  const history = props.history;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Newcategory selectedcity={selectedcity} history={history}/>
    </Layout>
  );
};

export default Second;
