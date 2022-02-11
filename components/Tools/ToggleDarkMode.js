import React from "react";
import { motion } from "framer-motion";
import useDarkMode from "../Hooks/useDarkMode";
export default function ToggleDarkMode() {
  const [colorTheme, setTheme] = useDarkMode();
  const [isOn, setIsOn] = React.useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <div onClick={() => setTheme(colorTheme)}>
      <div
        className="switch flex w-[60px] h-[30px] bg-gray-800 justify-start rounded-[50px] p-[5px] cursor-pointer"
        data-ison={isOn}
        onClick={toggleSwitch}
      >
        <motion.div
          className="handle w-[20px] h-[20px] bg-white rounded-[40px]"
          layout
          transition={spring}
        />
      </div>
    </div>
  );
}
