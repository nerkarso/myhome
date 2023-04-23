import AuthLayout from '@/features/auth/AuthLayout';
import { Button, Form, Input, Radio, Select } from 'antd';

export default function SignupPage() {
  const [form] = Form.useForm();

  return (
    <AuthLayout
      title="Sign up"
      links={[
        {
          label: 'Back to login',
          href: '/auth/login',
        },
      ]}
    >
      <Form layout="vertical" form={form}>
        <div className="grid grid-cols-2 gap-4">
          <Form.Item label="First name" required>
            <Input placeholder="Your first name" />
          </Form.Item>
          <Form.Item label="Surname" required>
            <Input placeholder="Your surname" />
          </Form.Item>
        </div>
        <Form.Item label="Place of residence" required>
          <Select
            options={[]}
            className="w-full"
            placeholder="Select your district"
          />
        </Form.Item>
        <Form.Item label="Township / Area">
          <Input placeholder="Your township or area" />
        </Form.Item>
        <Form.Item label="ID" required>
          <Radio.Group
            defaultValue="Passport"
            options={[
              { label: 'Passport', value: 'Passport' },
              { label: 'National ID', value: 'National ID' },
              { label: 'License', value: 'License' },
            ]}
            optionType="button"
          />
          <Input
            placeholder="Your passport, national ID or license number"
            className="mt-3"
          />
        </Form.Item>
        <Form.Item label="Phone number" required>
          <Input placeholder="Your phone number" />
        </Form.Item>
        <Form.Item label="Email">
          <Input placeholder="Your email" />
        </Form.Item>
        <Button type="primary">Continue</Button>
      </Form>
    </AuthLayout>
  );
}
