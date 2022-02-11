import React from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  
  const [isVisible, setVisible] = React.useState(false);
  
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {isVisible && (
        <span onClick={scrollToTop} className=" text-white w-16 h-16 rounded-full text-4xl fixed right-9 bottom-9 bg_1 d--flex-2 cursor-pointer">
          <FiArrowUp />
        </span>
      )}
    </div>
  );
}
