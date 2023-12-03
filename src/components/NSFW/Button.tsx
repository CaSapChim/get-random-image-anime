import React from "react";
import axios from "axios";

interface ButtonProps {
  setImg: React.Dispatch<React.SetStateAction<string>>;
  imageType: string;
}

const Button: React.FC<ButtonProps> = ({ setImg, imageType }) => {
  const getData = async () => {
    try {
      if (confirm("Bạn phải trên 18 tuổi") == false) return;
      const res = await axios.get(`https://api.waifu.pics/nsfw/${imageType}`);
      setImg(res.data.url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='m-2 flex justify-center items-center flex-col'>
      <button
        onClick={getData}
        className='text-1xl p-2 border rounded-xl border-neutral-950 w-30 h-12 mb-2 
          transition ease-linear hover:text-purple-400 hover:border-purple-400'
      >
        Get Random {imageType.charAt(0).toUpperCase() + imageType.slice(1)} Image
      </button>
    </div>
  );
};

export default Button;