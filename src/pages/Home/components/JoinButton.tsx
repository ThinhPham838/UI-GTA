// src/components/JoinButton.tsx
import { PlayCircleOutlined } from '@ant-design/icons';

export default function JoinButton() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
      <button className="bg-white text-black px-6 py-2 rounded-full text-xl font-bold flex items-center gap-2 hover:bg-gray-200 transition">
        <PlayCircleOutlined />
        Tham gia
      </button>
    </div>
  );
}
