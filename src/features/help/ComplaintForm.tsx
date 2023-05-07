import { Button, Form, Input } from 'antd';

export default function ComplaintForm() {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical">
      <Form.Item required label="Full name">
        <Input placeholder="Your full name" />
      </Form.Item>
      <Form.Item required label="Phone number">
        <Input placeholder="Your phone number" />
      </Form.Item>
      <Form.Item label="Email">
        <Input placeholder="Your email" />
      </Form.Item>
      <Form.Item required label="Address">
        <Input placeholder="Your address" />
      </Form.Item>
      <Form.Item required label="List number (if applicable)">
        <Input placeholder="Your list number" />
      </Form.Item>
      <Form.Item required label="Description">
        <Input.TextArea placeholder="Describe your complaint" rows={4} />
      </Form.Item>
      <Button type="primary">Send</Button>
    </Form>
  );
}
