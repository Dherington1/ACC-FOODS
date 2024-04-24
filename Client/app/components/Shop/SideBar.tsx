import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-white z-10 shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4">
        {/* Sign In */}
        <Link href='/login' passHref>
          <div className="flex items-center justify-between py-2 border-b border-gray-300">
            <span>Sign In</span>
          </div>
        </Link>

        {/* Create Account */}
        <div className="flex items-center justify-between py-2 border-b border-gray-300">
          <span>Create Account</span>
        </div>

        {/* Orders */}
        <div className="flex items-center justify-between py-2">
          <span>Orders</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
