import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Hello Nour
      </motion.h1>

      <motion.button whileHover={{ scale: 1.1 }} className="bg-blue-500 px-4 py-2 rounded">
        Click
      </motion.button>

      <motion.button whileTap={{ scale: 0.9 }}>Click</motion.button>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Content
      </motion.div>

      <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
        Left
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        Scroll Me
      </motion.div>
    </>
  );
}
