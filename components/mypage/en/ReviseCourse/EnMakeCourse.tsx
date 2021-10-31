import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import EnMain from './EnMain';
import EnNone from './EnNone';

interface Props {}

const EnMakeCourse: FC<Props> = (props: Props) => {
  var local = sessionStorage.getItem('memberid');
  try {
    var memberid = Number(local.split('')[1]);
  } catch {
    var memberid = 0;
  }
  const [exist, setExsist] = useState(false);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_DB_HOST + `/api/en/course/findall/${memberid}`)
      .then(async (response) => {
        if (response.data.data.length !== 0) {
          setExsist(true);
        }
      })
      .catch((error) => {});
  }, []);

  return <>{exist ? <EnMain /> : <EnNone />}</>;
};

export default EnMakeCourse;
