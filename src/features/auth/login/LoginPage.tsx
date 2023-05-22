import AuthLayout from '@/features/auth/AuthLayout';
import { Button, Form, Input } from 'antd';

export default function LoginPage() {
  const [form] = Form.useForm();

  return (
    <AuthLayout
      links={[
        {
          label: 'Forgot your password?',
          href: '/auth/forgot-password',
        },
        {
          label: 'Already have an account? Sign up',
          href: '/auth/signup',
        },
      ]}
      title="Log in"
    >
      <Form form={form} layout="vertical">
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
