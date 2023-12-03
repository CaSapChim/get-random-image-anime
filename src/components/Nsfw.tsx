import React from 'react';
import axios from 'axios';

export default function Nsfw() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://api.waifu.pics/sfw/neko");
      return res;
    }
    getData().then(res => console.log(res));
  }, []);
  return (
    <div>Nsfw</div>
  )
}
