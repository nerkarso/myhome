import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Segmented,
  Select,
  Upload,
  message,
} from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useState } from 'react';

export function ListingTypeField({
  value,
  onChange,
}: {
  value: any;
  onChange: any;
}) {
  return (
    <Form.Item required label="What do you want to sell?">
      <Segmented
        options={['House', 'Land']}
        value={value}
        onChange={onChange}
      />
    </Form.Item>
  );
}

export function DeedField() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Form.Item required label="Do you have a deed?">
      <Radio.Group value={value} onChange={onChange}>
        <Radio value={1}>Yes</Radio>
        <Radio value={2}>No</Radio>
      </Radio.Group>
    </Form.Item>
  );
}

export function LocationField() {
  return (
    <Form.Item required label="In which district is it located?">
      <Select className="w-full" options={[]} placeholder="Select a district" />
    </Form.Item>
  );
}

export function AreaField() {
  return (
    <Form.Item required label="Township / Area / Village">
      <Input placeholder="Your township or area" />
    </Form.Item>
  );
}

export function PriceField() {
  return (
    <Form.Item required label="Price">
      <Input placeholder="Enter the price" />
    </Form.Item>
  );
}

export function BedroomsField() {
  return (
    <Form.Item required label="Bedrooms">
      <Input placeholder="Enter number of bedrooms" />
    </Form.Item>
  );
}

export function PhoneNumberField() {
  return (
    <Form.Item required label="Phone number">
      <Input placeholder="Your phone number" />
    </Form.Item>
  );
}

export function PicturesField() {
  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Form.Item required label="Pictures (Minimum 5)">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        className="avatar-uploader"
        listType="picture-card"
        name="avatar"
        showUploadList={false}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img alt="avatar" src={imageUrl} style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </Form.Item>
  );
}

export function DescriptionField() {
  return (
    <Form.Item required label="Description">
      <Input.TextArea placeholder="Enter a brief description" rows={4} />
    </Form.Item>
  );
}

export function LandSizeField() {
  return (
    <Form.Item required label="Size of land">
      <Input placeholder="Enter size of land" />
    </Form.Item>
  );
}
