import { useState } from "react";

const useLightbox = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [imageList, setImageList] = useState<string[]>([]);

  function open(imgList: string[]) {
    setIsShowing(true);
    setImageList(imgList);
  }

  function close() {
    setIsShowing(false);
  }

  return {
    isShowing,
    open,
    close,
    imageList,
  };
};

export default useLightbox;
