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
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        onClick={getData}
        className="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
      >
        Get Random {imageType.charAt(0).toUpperCase() + imageType.slice(1)} Image
        </button>
    </div>
  );
};

export default Button;