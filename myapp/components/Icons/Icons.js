'use client'
import React from 'react';
import { FaYoutube, FaTwitter, FaTiktok, FaFacebook } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 items-center justify-center">
      {/* YouTube Icon */}
      <a href="YOUR_YOUTUBE_URL" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-red-500 hover:text-red-700" />
      </a>

      {/* Twitter Icon */}
      <a href="YOUR_TWITTER_URL" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-blue-500 hover:text-blue-700" />
      </a>

      {/* TikTok Icon */}
      <a href="YOUR_TIKTOK_URL" target="_blank" rel="noopener noreferrer">
        <FaTiktok className="text-black hover:text-gray-700" />
      </a>

      {/* Facebook Icon */}
      <a href="YOUR_FACEBOOK_URL" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-blue-600 hover:text-blue-800" />
      </a>
    </div>
  );
};

export default SocialIcons;
