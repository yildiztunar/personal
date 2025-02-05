import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../store/actions/themeActions';

const Theme = () => {
  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      className={`bg-transparent text-tiny md:text-base p-2 font-bold text-${theme === 'light' ? 'emailtext' : 'whitetext'}`}
      onClick={changeTheme}
    >
      {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
    </button>
  );
};

export default Theme;