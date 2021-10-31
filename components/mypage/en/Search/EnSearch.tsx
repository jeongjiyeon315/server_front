import React, { useEffect, useState } from 'react';
import '@components/mypage/en/Search/Search.scss';
import EnMap from '@components/mypage/en/Search/EnMap';

const EnSearch = () => {
  return (
    <div className="myplacecontents">
      <div style={{ margin: '2vh 0 1vh 0' }}>Please select a departure point</div>
      <EnMap />
    </div>
  );
};

export default EnSearch;
