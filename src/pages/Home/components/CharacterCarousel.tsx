// src/components/CharacterCarousel.tsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
// import char1 from '../images/char1.jpg';
// import char2 from '../images/char2.jpg';

const characters = [
  { name: 'Tommy', image: '/src/public/img/home/char1.jpg', role: 'Cảnh sát' },
  { name: 'Maria', image: '/src/public/img/home/char2.jpg', role: 'Bác sĩ' },
  { name: 'Jackson', image: '/src/public/img/home/char1.jpg', role: 'Gang' },
  { name: 'Luna', image: '/src/public/img/home/char2.jpg', role: 'Kỹ sư' },
  { name: 'Rico', image: '/src/public/img/home/char1.jpg', role: 'Doanh nhân' },
  { name: 'Zane', image: '/src/public/img/home/char2.jpg', role: 'Tài xế' }
];

export default function CharacterCarousel() {
  const [index, setIndex] = useState(0);
  console.log({ characters });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % characters.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full mx-auto py-10 px-4"
      style={{
        backgroundImage: 'url(/src/public/img/home/char1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h2 className="text-3xl font-bold text-white text-center mb-8">Nhân vật nổi bật</h2>

      <div className="grid grid-cols-6 gap-4">
        {characters.map((char, i) => (
          <motion.div
            key={char.name}
            whileHover={{ scale: 1.05 }}
            className={`relative group overflow-hidden rounded-xl h-[75vh] transition-all duration-500 ${
              i === index ? 'scale-105 z-10' : 'scale-100 opacity-80'
            }`}
          >
            <img src={char.image} alt={char.name} className="w-full h-full object-cover transition-all duration-500" />

            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2 backdrop-blur-sm">
              <div className="font-bold text-lg">{char.name}</div>
              <div className="text-sm">{char.role}</div>
            </div>

            {/* {i === index && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto px-4 py-2 bg-white text-black font-semibold rounded-full flex items-center gap-2 shadow-lg z-20"
              >
                <span className="text-xl">▶</span> Tham gia
              </motion.button>
            )} */}
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-white/60 mt-8 max-w-xl mx-auto">
        Underlord RP không liên kết hoặc được xác nhận bởi Take-Two, Rockstar North Interactive...
      </p>
    </div>

    // <div className="w-full max-w-6xl mx-auto py-8">
    //   <h2 className="text-3xl font-bold text-white text-center mb-8">Nhân vật nổi bật</h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    //     {characters.map((char, i) => (
    //       <motion.div
    //         key={char.name}
    //         initial={{ opacity: 0, x: 50 }}
    //         // animate={{ opacity: index === i ? 1 : 0, x: index === i ? 0 : 50 }}
    //         animate={{
    //           scale: index === i ? 1.1 : 1,
    //           opacity: index === i ? 1 : 0.6
    //         }}
    //         transition={{ duration: 0.5 }}
    //         className={`absolute inset-0 flex flex-col items-center justify-end text-center p-6 bg-black/60 backdrop-blur-md rounded-xl shadow-xl transition-opacity duration-500 ${
    //           index === i ? 'z-10' : 'z-0'
    //         }`}
    //       >
    //         <img
    //           src={char.image}
    //           alt={char.name}
    //           className="w-full h-full object-cover absolute top-0 left-0 -z-10 rounded-xl opacity-40"
    //         />
    //         <h3 className="text-2xl font-semibold text-white z-10">{char.name}</h3>
    //         <p className="text-white z-10">{char.role}</p>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>
  );
}
