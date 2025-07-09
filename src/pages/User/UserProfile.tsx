// src/pages/UserProfilePage.tsx
import { useEffect, useState } from 'react';
import { Card, Tabs, Avatar, Form, Input, Button, message, Descriptions, Table } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const mockUser = {
  email: 'user@example.com',
  nickname: 'Tommy Vercetti',
  joinedAt: '2024-06-10',
  description: 'Tôi là một cảnh sát chính trực tại Los Santos.',
  rank: 'Citizen'
};

const mockLogs = [
  { time: '2025-07-05 21:32', action: 'Đăng nhập thành công từ IP 192.168.1.23' },
  { time: '2025-07-04 17:15', action: 'Thay đổi mật khẩu' },
  { time: '2025-07-01 10:12', action: 'Cập nhật mô tả RP' }
];

export default function UserProfilePage() {
  const [form] = Form.useForm();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(mockUser);
    form.setFieldsValue(mockUser);
  }, [form]);

  const handleUpdate = (values: any) => {
    message.success('Cập nhật thông tin thành công!');
    console.log('Cập nhật:', values);
  };

  const handleChangePassword = (values: any) => {
    if (values.newPassword !== values.confirmPassword) {
      return message.error('Mật khẩu xác nhận không khớp!');
    }
    message.success('Đổi mật khẩu thành công!');
    console.log('Đổi mật khẩu:', values);
  };

  const columns = [
    { title: 'Thời gian', dataIndex: 'time', key: 'time' },
    { title: 'Hành động', dataIndex: 'action', key: 'action' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <Tabs defaultActiveKey="1" size="large">
          <Tabs.TabPane tab="Thông tin chung" key="1">
            <div className="flex items-center gap-4 mb-4">
              <Avatar size={64} icon={<UserOutlined />} />
              <div>
                <p className="text-xl font-semibold">{user?.nickname}</p>
                <p className="text-gray-500">{user?.email}</p>
              </div>
            </div>
            <Descriptions title="Chi tiết" bordered column={1}>
              <Descriptions.Item label="Ngày tham gia">{user?.joinedAt}</Descriptions.Item>
              <Descriptions.Item label="Mô tả RP">{user?.description}</Descriptions.Item>
              <Descriptions.Item label="Rank hiện tại">{user?.rank}</Descriptions.Item>
            </Descriptions>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Cập nhật thông tin" key="2">
            <Form form={form} layout="vertical" onFinish={handleUpdate}>
              <Form.Item name="nickname" label="Tên RP">
                <Input prefix={<UserOutlined />} placeholder="Nhập tên nhân vật RP" />
              </Form.Item>
              <Form.Item name="description" label="Mô tả RP">
                <Input.TextArea rows={3} placeholder="Nhập mô tả về nhân vật" />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Lưu thay đổi
              </Button>
            </Form>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Đổi mật khẩu" key="3">
            <Form layout="vertical" onFinish={handleChangePassword}>
              <Form.Item name="oldPassword" label="Mật khẩu cũ" rules={[{ required: true }]}>
                <Input.Password prefix={<LockOutlined />} />
              </Form.Item>
              <Form.Item name="newPassword" label="Mật khẩu mới" rules={[{ required: true }]}>
                <Input.Password prefix={<LockOutlined />} />
              </Form.Item>
              <Form.Item name="confirmPassword" label="Xác nhận mật khẩu" rules={[{ required: true }]}>
                <Input.Password prefix={<LockOutlined />} />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Đổi mật khẩu
              </Button>
            </Form>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Lịch sử hoạt động" key="4">
            <Table columns={columns} dataSource={mockLogs} pagination={false} rowKey="time" />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </div>
  );
}
