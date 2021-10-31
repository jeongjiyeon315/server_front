import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Main from './Main';
import None from './None';

interface Props {}

const MakeCourse: FC<Props> = (props: Props) => {
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  const [exist, setExsist] = useState(false);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_DB_HOST + `/api/course/findall/${memberid}`)
      .then(async (response) => {
        if (response.data.data.length !== 0) {
          setExsist(true);
        }
      })
      .catch((error) => {});
  }, []);

  return <>{exist ? <Main /> : <None />}</>;
};

export default MakeCourse;
