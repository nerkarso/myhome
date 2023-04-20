import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';

export default function AppLayout() {
  const tabs = [
    {
      icon: () => <Feather name="home" size={24} />,
      name: 'index',
      label: 'Home',
    },
  ];

  return (
    <Tabs>
      {tabs.map(({ icon, name, label }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            tabBarIcon: icon,
            tabBarLabel: label,
          }}
        />
      ))}
    </Tabs>
  );
}
