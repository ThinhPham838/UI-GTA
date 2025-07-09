// src/pages/RegisterPage.tsx

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthForm } from '../AuthForm';

export default function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Side: Placeholder or empty */}
        <div className="hidden md:block bg-gray-800" />

        {/* Right Side: Register Form */}
        <div className="p-10 flex flex-col justify-center text-white">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <h1 className="text-4xl font-bold mb-4">Tạo tài khoản mới</h1>
            <p className="text-gray-300 mb-8">Tham gia server và khám phá thành phố đầy hỗn loạn!</p>

            <AuthForm mode="register" onSubmit={data => console.log('Register data:', data)} />

            <button
              className="mt-6 text-sm text-gray-300 hover:text-white underline"
              onClick={() => navigate('/login')}
            >
              Đã có tài khoản? Đăng nhập
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
