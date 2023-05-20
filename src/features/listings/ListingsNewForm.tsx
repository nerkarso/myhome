import { Button, Form } from 'antd';
import { useState } from 'react';
import {
  AreaField,
  BedroomsField,
  DeedField,
  DescriptionField,
  LandSizeField,
  ListingTypeField,
  LocationField,
  PhoneNumberField,
  PicturesField,
  PriceField,
} from './listingFields';

export default function ListingsNewForm() {
  const [listingType, setListingType] = useState('House');
  const [form] = Form.useForm();

  return (
    <>
      <h2 className="text-2xl font-semibold">New listing</h2>
      <Form className="mt-8" form={form} layout="vertical">
        <ListingTypeField value={listingType} onChange={setListingType} />
        <>
          <DeedField />
          <LocationField />
          <AreaField />
          <PriceField />
          {listingType === 'House' && <BedroomsField />}
          {listingType === 'Land' && <LandSizeField />}
          <PhoneNumberField />
          <PicturesField />
          <DescriptionField />
        </>
        <Button type="primary">Submit</Button>
      </Form>
    </>
  );
}
