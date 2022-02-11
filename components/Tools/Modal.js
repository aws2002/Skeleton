import { motion, AnimatePresence } from "framer-motion";
export default function Modal({ isToggled, children, setToggle }) {
  return (
    <AnimatePresence>
      {isToggled && (
        <>
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3
              }
            }}
            onClick={() => setToggle(false)}
            className="top-0 left-0 fixed bg-slate-600 w-screen h-screen bg-opacity-70 z-[1]"
          />
          <motion.div
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.3
              }
            }}
            className="w-96 h-96 fixed m-auto inset-0 bg-gray-300 p-5 z-50"
          >
            <motion.div
              initial={{
                x: 100,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3
                }
              }}
              exit={{
                x: 100,
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
