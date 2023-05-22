import { Button } from 'antd';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MobileNavBar({ children }: any) {
  const navigate = useNavigate();

  return (
    <header className="flex h-16 items-center gap-4">
      <Button
        icon={<ArrowLeft size={22} />}
        type="ghost"
        onClick={() => {
          navigate(-1);
        }}
      />
      <h4 className="text-2xl font-semibold">{children}</h4>
    </header>
  );
}
