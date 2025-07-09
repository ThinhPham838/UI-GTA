import { Button, Checkbox, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Đăng nhập thành công!');
      navigate('/');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-lg ring-1 ring-white/10"
      >
        <h2 className="text-white text-3xl font-extrabold text-center mb-6 tracking-wide drop-shadow">
          Đăng nhập vào GTA One
        </h2>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className="space-y-4"
        >
          <Form.Item name="email" rules={[{ required: true, message: 'Vui lòng nhập email!' }]}>
            <Input
              size="large"
              prefix={<UserOutlined />}
              placeholder="Email"
              className="bg-white/10 text-white placeholder-gray-300 border-none focus:shadow-outline"
            />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
            <Input.Password
              size="large"
              prefix={<LockOutlined />}
              placeholder="Mật khẩu"
              className="bg-white/10 text-white placeholder-gray-300 border-none focus:shadow-outline"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" className="mt-2">
            <Checkbox className="text-gray-300">Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>

          <Form.Item className="pt-2">
            <Button
              icon={<LoginOutlined />}
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all"
              size="large"
            >
              Đăng nhập
            </Button>
          </Form.Item>

          <div className="text-center text-sm text-gray-400">
            Chưa có tài khoản?{' '}
            <a href="/register" className="text-purple-400 hover:underline">
              Đăng ký
            </a>
          </div>
        </Form>
      </motion.div>
    </div>
  );
}

// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { AuthForm } from '../AuthForm';

// export default function LoginPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
//       <div className="max-w-6xl w-full bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
//         {/* Left Side: Placeholder or empty */}
//         <div className="hidden md:block bg-gray-800" />

//         {/* Right Side: Login Form */}
//         <div className="p-10 flex flex-col justify-center text-white">
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.4 }}
//             className="w-full"
//           >
//             <h1 className="text-4xl font-bold mb-4">Chào mừng trở lại!</h1>
//             <p className="text-gray-300 mb-8">Đăng nhập để tiếp tục vào thế giới GTA RP.</p>

//             <AuthForm mode="login" onSubmit={data => console.log('Login data:', data)} />

//             <button
//               className="mt-6 text-sm text-gray-300 hover:text-white underline"
//               onClick={() => navigate('/register')}
//             >
//               Chưa có tài khoản? Đăng ký ngay
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
