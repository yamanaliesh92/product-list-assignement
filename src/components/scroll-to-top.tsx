import { useEffect, useState } from "react";

import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed z-10 right-3 top-[6.6rem]">
      {visible && (
        <div
          onClick={scrollToTop}
          className="  text-white cursor-pointer   bg-primary rounded-md flex items-center justify-center w-[50px] h-[50px]"
        >
          <AiOutlineArrowUp size={25} />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
