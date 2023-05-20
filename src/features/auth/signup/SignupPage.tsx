import AuthLayout from '@/features/auth/AuthLayout';
import { Button, Form, Input, Radio, Select } from 'antd';

export default function SignupPage() {
  const [form] = Form.useForm();

  return (
    <AuthLayout
      links={[
        {
          label: 'Back to login',
          href: '/auth/login',
        },
      ]}
      title="Sign up"
    >
      <Form form={form} layout="vertical">
        <div className="grid grid-cols-2 gap-4">
          <Form.Item required label="First name">
            <Input placeholder="Your first name" />
          </Form.Item>
          <Form.Item required label="Surname">
            <Input placeholder="Your surname" />
          </Form.Item>
        </div>
        <Form.Item required label="Place of residence">
          <Select
            className="w-full"
            options={[]}
            placeholder="Select your district"
          />
        </Form.Item>
        <Form.Item label="Township / Area">
          <Input placeholder="Your township or area" />
        </Form.Item>
        <Form.Item required label="ID">
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
            className="mt-3"
            placeholder="Your passport, national ID or license number"
          />
        </Form.Item>
        <Form.Item required label="Phone number">
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
