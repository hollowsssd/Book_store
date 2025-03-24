import React, { useState } from 'react';
import Link from "next/link";

const Header = ({ handleShowModal }: { handleShowModal: () => void }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // Hàm toggle mở/đóng menu
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Đóng menu khi chọn một mục
  const closeDropdown = () => setOpenDropdown(null);

  return (
    <header className="bg-rose-500 px-6 py-2 flex items-center">
      {/* Bên trái: Menu */}
      <div className="flex-1 flex items-center gap-4 justify-start">
        {/* Dropdown Danh Mục */}
        <div className="relative">
          <button onClick={() => toggleDropdown(1)} className="btn btn-ghost">☰</button>
          {openDropdown === 1 && (
            <ul className="absolute left-0 mt-2 bg-white text-black rounded-box z-10 w-64 p-4 shadow">
              <li className="border-b border-gray-300" onClick={closeDropdown}><Link href="/ProductList">TẤT CẢ SẢN PHẨM</Link></li>
              <li className="border-b border-gray-300" onClick={closeDropdown}><a>LỊCH SỬ TRUYỀN THỐNG</a></li>
              <li className="border-b border-gray-300" onClick={closeDropdown}><a>VĂN HỌC VIỆT NAM</a></li>
              <li className="border-b border-gray-300" onClick={closeDropdown}><a>VĂN HỌC NƯỚC NGOÀI</a></li>
              <li className="border-b border-gray-300" onClick={closeDropdown}><a>TRUYỆN TRANH</a></li>
              <li className="border-b border-gray-300" onClick={closeDropdown}><a>MANGO - COMIC</a></li>
              <li className="border-b border-gray-300" onClick={closeDropdown}><a>TRUYỆN CỔ TÍCH</a></li>
            </ul>
          )}
        </div>

        {/* Dropdown Tin Tức */}
        <div className="relative">
          <button onClick={() => toggleDropdown(2)} className="btn btn-ghost text-xs font-medium">TIN TỨC</button>
          {openDropdown === 2 && (
            <ul className="absolute left-0 mt-2 bg-white text-black rounded-box z-10 w-64 p-4 shadow">
              <li onClick={closeDropdown}><a>BÀI VIẾT MỚI</a></li>
              <li onClick={closeDropdown}><a>SỰ KIỆN</a></li>
      
            </ul>
          )}
        </div>

        {/* Dropdown Giới Thiệu */}
        <div className="relative">
          <button onClick={() => toggleDropdown(3)} className="btn btn-ghost text-xs font-medium">GIỚI THIỆU</button>
          {openDropdown === 3 && (
            <ul className="absolute left-0 mt-2 bg-white text-black rounded-box z-10 w-64 p-4 shadow">
              <li onClick={closeDropdown}><a>VỀ CHÚNG TÔI</a></li>
              <li onClick={closeDropdown}><a>LIÊN HỆ</a></li>
              <li onClick={closeDropdown}><a>ĐỐI TÁC</a></li>
            </ul>
          )}
        </div>
      </div>

      {/* Logo chính giữa */}
      <div className="navbar-center rounded-full bg-white">
        <Link href="/">
          <img
            src="https://i.ibb.co/1Jw6QbbY/M-H-3-removebg-preview.png"
            className="btn btn-ghost w-28 h-auto border"
          />
        </Link>
      </div>

      {/* Bên phải: Tìm kiếm & icon */}
      <div className="flex-1 flex items-center gap-4 justify-end">
        <input
          type="text"
          placeholder="Search"
          className="bg-white text-black input input-bordered w-24 md:w-auto"
        />
        <Link href="/ShoppingCart">
          <button className="btn btn-ghost btn-circle">🛒</button>
        </Link>
        <button onClick={handleShowModal} className="btn btn-ghost">👤</button>
      </div>
    </header>
  );
};

export default Header;
