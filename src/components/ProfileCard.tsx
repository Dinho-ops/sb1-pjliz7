import React from 'react';
import { Heart, X, MessageCircle } from 'lucide-react';
import type { User } from '../types';

interface ProfileCardProps {
  user: User;
  onLike: () => void;
  onPass: () => void;
  onMessage: () => void;
}

export default function ProfileCard({ user, onLike, onPass, onMessage }: ProfileCardProps) {
  return (
    <div className="relative w-full max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative aspect-[3/4]">
        <img
          src={user.photos[0]}
          alt={user.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white">{user.name}, {user.age}</h3>
          <p className="text-white/90">{user.location}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700">{user.bio}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {user.interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
        
        <div className="mt-6 flex justify-between gap-4">
          <button
            onClick={onPass}
            className="flex-1 flex items-center justify-center gap-2 p-3 rounded-full border-2 border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={onMessage}
            className="flex-1 flex items-center justify-center gap-2 p-3 rounded-full border-2 border-blue-300 text-blue-500 hover:bg-blue-50 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
          <button
            onClick={onLike}
            className="flex-1 flex items-center justify-center gap-2 p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
          >
            <Heart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}