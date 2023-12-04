import React, { useState } from 'react';
import Button from "./Button";

const BlowJobNSFW: React.FC = () => {
  const [img, setImg] = useState<string>("");

  return (
    <div className='m-2 flex justify-center items-center flex-col'>
      <Button setImg={setImg} imageType="blowjob" />
      {img && <img src={img} alt="Random Blowjob" className="h-auto max-w-lg rounded-lg" />}
    </div>
  );
};

export default BlowJobNSFW;
