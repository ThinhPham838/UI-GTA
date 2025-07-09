import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
// import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('TRANG CHỦ');
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const navLinks = ['TRANG CHỦ', 'BẮT ĐẦU THAM GIA', 'ĐỐI TÁC', 'TIN TỨC'];

  return (
    <header className="w-full fixed top-0 z-50 bg-black/70 text-white backdrop-blur-md shadow-md">
      <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Player count */}
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold tracking-wide">GTA ONE</div>
          <div className="text-sm text-gray-300 hidden sm:block">
            NGƯỜI CHƠI: <span className="font-semibold text-white">3.607</span>
          </div>
        </div>

        {/* Menu links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(label => (
            <a
              key={label}
              href="#"
              //   className={clsx('transition relative', active === label ? 'text-purple-400' : 'hover:text-purple-400')}
              onClick={() => setActive(label)}
            >
              {label}
            </a>
          ))}

          {/* Submenu Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSubmenuOpen(!submenuOpen)}
              className="flex items-center gap-1 hover:text-purple-400 transition"
            >
              KHÁC <ChevronDown size={16} />
            </button>
            {submenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-20">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Diễn đàn
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Hỗ trợ
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-1.5 rounded-md font-semibold shadow-md hover:shadow-purple-500/50 hover:ring-2 hover:ring-purple-400/70 transition">
            Donate
          </button> */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="btn-shimmer bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-1.5 rounded-md font-semibold shadow-md hover:shadow-purple-500/50 hover:ring-2 hover:ring-purple-400/70 transition"
          >
            Donate
          </motion.button>
          <button className="bg-white hover:bg-gray-200 text-black text-sm px-4 py-1.5 rounded-md font-semibold shadow-md hover:shadow-lg hover:ring-2 hover:ring-gray-400 transition">
            Đăng nhập
          </button>

          {/* Mobile menu toggle */}
          <button onClick={toggleMenu} className="ml-2 md:hidden">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-black/80 text-center">
          {navLinks.map(label => (
            <a
              key={label}
              href="#"
              //   className={clsx('block py-2 border-b border-gray-700', active === label ? 'text-purple-400' : '')}
              onClick={() => setActive(label)}
            >
              {label}
            </a>
          ))}
          <div className="pt-2">
            <a href="#" className="block py-2 border-b border-gray-700">
              Diễn đàn
            </a>
            <a href="#" className="block py-2">
              Hỗ trợ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const toggleMenu = () => setOpen(!open);

//   return (
//     <header className="w-full fixed top-0 z-50 bg-black/70 text-white backdrop-blur-md shadow-md">
//       <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo + Player count */}
//         <div className="flex items-center gap-4">
//           <div className="text-xl font-bold tracking-wide">GTA ONE</div>
//           <div className="text-sm text-gray-300 hidden sm:block">
//             NGƯỜI CHƠI: <span className="font-semibold text-white">3.607</span>
//           </div>
//         </div>

//         {/* Menu links */}
//         <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
//           <a href="#" className="hover:text-purple-400 transition">
//             TRANG CHỦ
//           </a>
//           <a href="#" className="hover:text-purple-400 transition">
//             BẮT ĐẦU THAM GIA
//           </a>
//           <a href="#" className="hover:text-purple-400 transition">
//             ĐỐI TÁC
//           </a>
//           <a href="#" className="hover:text-purple-400 transition">
//             TIN TỨC
//           </a>
//         </nav>

//         {/* Right actions */}
//         <div className="flex items-center gap-2">
//           <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-1.5 rounded-md font-semibold">
//             Donate
//           </button>
//           <button className="bg-white hover:bg-gray-200 text-black text-sm px-4 py-1.5 rounded-md font-semibold">
//             Đăng nhập
//           </button>

//           {/* Mobile menu toggle */}
//           <button onClick={toggleMenu} className="ml-2 md:hidden">
//             {open ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile nav */}
//       {open && (
//         <div className="md:hidden px-4 pb-4 bg-black/80 text-center">
//           <a href="#" className="block py-2 border-b border-gray-700">
//             TRANG CHỦ
//           </a>
//           <a href="#" className="block py-2 border-b border-gray-700">
//             BẮT ĐẦU THAM GIA
//           </a>
//           <a href="#" className="block py-2 border-b border-gray-700">
//             ĐỐI TÁC
//           </a>
//           <a href="#" className="block py-2">
//             TIN TỨC
//           </a>
//         </div>
//       )}
//     </header>
//   );
// }
