import { Dispatch, SetStateAction, useCallback, useState } from 'react';

// const useInput = <T = any>(initialData: T) : [T, (e:any) => void, Dispatch<SetStateAction<T>>]=>{
const useInput = (initialData: any) => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
