import React from 'react';
import { useSelector } from 'react-redux';

const Skill = ({ name, image }) => {
  const theme = useSelector((store) => store.theme);

  return (
    <div className="flex flex-col lg:flex-row p-4 items-center">
      <img src={image} alt={name} className="rounded-2xl  mr-1 md:mr-4 shadow-bannerImg" />
      <p className={`text-tiny lg:text-2xl " ${theme === 'light' ? 'text-graytext' : 'text-whitetext'}`}>{name}</p>
    </div>
  );
};

export default Skill;
