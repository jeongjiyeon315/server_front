import React, { FC, memo, useEffect, useMemo, useState } from 'react';
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
      <Newcategory selectedcity={selectedcity} history={history} />
    </Layout>
  );
};

export default Second;
