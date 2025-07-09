// src/components/AuthForm.tsx
import { useForm } from 'react-hook-form';
import { Input, Button, Checkbox, message, Form } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined } from '@ant-design/icons';
import { useState } from 'react';
import AdministrationApi from '@apis/api/AdminApi';

interface AuthFormProps {
  mode: 'login' | 'register';
  onSubmit: (data: any) => void;
}

export function AuthForm({ mode, onSubmit }: AuthFormProps) {
  const [form] = Form.useForm();

  const userName = Form.useWatch('email', form);
  const passWord = Form.useWatch('pasword', form);
  const confirm = Form.useWatch('confirm', form);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (data: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log({ data, userName, passWord, confirm });

      if (!data.email || !data.password || (mode === 'register' && !data.confirm)) {
        message.error('Vui lòng điền đầy đủ thông tin.');
        return;
      }
      if (mode === 'register') {
        if (data.password !== data.confirm) {
          message.error('Mật khẩu xác nhận không khớp.');
          return;
        } else {
          // Xử lý đăng ký
          handleRegister(data);
          return;
        }
      }
      message.success(mode === 'login' ? 'Đăng nhập thành công!' : 'Đăng ký thành công!');
      onSubmit(data);
    }, 800);
  };

  const handleRegister = async (data: any) => {
    try {
      setLoading(true);
      const res = await AdministrationApi.Register({
        email: data.email.trim(),
        password: data.password.trim()
      });
      console.log({ res });

      //   if (res.data.Status === 1) {
      //     message.success(t('Register.Success'));

      //     // Lưu thông tin để xác minh OTP
      //     localStorage.setItem('emailUser', userName.trim());

      //     // Điều hướng sang OTP
      //     history('/verify-otp');
      //   } else {
      //     message.error(t('Register.Error'));
      //     setMessageError(res.data.Description || t('Register.ErrorMessage'));
      //   }
    } catch (error) {
      console.error(error);
      //   setMessageError(t('Register.ErrorMessage'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} onFinish={handleFormSubmit} layout="vertical" className="space-y-4">
      <Form.Item name="email" rules={[{ required: true, message: 'Vui lòng nhập email' }]}>
        <Input size="large" placeholder="Email" prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}>
        <Input.Password
          size="large"
          placeholder="Mật khẩu"
          prefix={<LockOutlined />}
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>

      {mode === 'register' && (
        <Form.Item name="confirm" rules={[{ required: true, message: 'Vui lòng xác nhận mật khẩu' }]}>
          <Input.Password
            size="large"
            placeholder="Xác nhận mật khẩu"
            prefix={<LockOutlined />}
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>
      )}

      {mode === 'login' && (
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Ghi nhớ đăng nhập</Checkbox>
        </Form.Item>
      )}

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} className="w-full mt-2" size="large">
          {mode === 'login' ? 'Đăng nhập' : 'Đăng ký'}
        </Button>
      </Form.Item>
    </Form>
  );
}
