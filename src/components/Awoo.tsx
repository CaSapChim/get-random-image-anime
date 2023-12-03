import React from 'react';
import axios from 'axios';

export default function Awoo() {
  const [img, setImg] = React.useState("");
  const getData = async () => {
    try {
      const res = await axios.get("https://api.waifu.pics/sfw/awoo");
      setImg(res.data.url);
    } catch(err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className='m-2 flex justify-center items-center flex-col'>
      <button className='text-1xl p-2 border rounded-xl border-neutral-950 w-30 h-12 mb-2 transition ease-linear hover:text-purple-400 hover:border-purple-400' onClick={getData}>
        Get random image
      </button>
      <br />
      {img && <img src={img} alt="Random Awoo" className="h-auto max-w-lg rounded-lg" />}
    </div>
  )
}
