import AuthLayout from '@/features/auth/AuthLayout';
import { Button, Form, Input } from 'antd';

export default function LoginPage() {
  const [form] = Form.useForm();

  return (
    <AuthLayout
      title="Log in"
      links={[
        {
          label: 'Forgot your password?',
          href: '/auth/forgot-password',
        },
      ]}
    >
      <Form layout="vertical" form={form}>
        <Form.Item label="Phone number">
          <Input placeholder="Your phone number" />
        </Form.Item>
        <Form.Item label="Password">
          <Input placeholder="Your password" />
        </Form.Item>
        <Button type="primary">Log in</Button>
      </Form>
    </AuthLayout>
  );
}
