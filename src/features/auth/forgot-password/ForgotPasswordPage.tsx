import AuthLayout from '@/features/auth/AuthLayout';
import { Button, Form, Input } from 'antd';

export default function ForgotPasswordPage() {
  const [form] = Form.useForm();

  return (
    <AuthLayout
      title="Forgot password"
      links={[
        {
          label: 'Back to login',
          href: '/auth/login',
        },
      ]}
    >
      <Form layout="vertical" form={form}>
        <Form.Item label="Phone number">
          <Input placeholder="Your phone number" />
        </Form.Item>
        <Button type="primary">Send OTP</Button>
      </Form>
    </AuthLayout>
  );
}
