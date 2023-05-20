import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(
    'Listings',
    'listings',
    null,
    [
      getItem('My listings', 'my-listings'),
      getItem('Bought', 'bought'),
      getItem('Rented', 'rented'),
    ],
    'group'
  ),

  getItem(
    'Account',
    'account',
    null,
    [
      getItem('Profile', 'Profile'),
      getItem('Subscriptions', 'subscriptions'),
      getItem('Billing', 'billing'),
      getItem('Log out', 'log-out'),
    ],
    'group'
  ),
];

const UserMenu: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      className="pt-4"
      items={items}
      mode="inline"
      style={{ width: 256 }}
      onClick={onClick}
    />
  );
};

export default UserMenu;
