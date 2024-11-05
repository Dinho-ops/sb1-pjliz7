import React from 'react';
import { Heart, MessageCircle, User, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-4 py-2">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        <NavButton icon={<Heart className="w-6 h-6" />} label="Explore" />
        <NavButton icon={<MessageCircle className="w-6 h-6" />} label="Messages" />
        <NavButton icon={<User className="w-6 h-6" />} label="Profile" />
        <NavButton icon={<Settings className="w-6 h-6" />} label="Settings" />
      </div>
    </nav>
  );
}

function NavButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center p-2 text-gray-600 hover:text-purple-600 transition-colors">
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}