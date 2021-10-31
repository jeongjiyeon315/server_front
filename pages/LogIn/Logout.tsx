import React, { useCallback, useEffect, useState } from 'react';

const Logout = () => {
  const onClick = () => {
    sessionStorage.removeItem('memberid');
  };

  return (
    <>
      <button onClick={onClick}>Logout</button>
    </>
  );
};
export default Logout;
