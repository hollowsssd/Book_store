import React from 'react'
import Link from "next/link";
const Header = ({ handleShowModal }: { handleShowModal: () => void }) => {
  return (
          <header className='bg-rose-500 px-4 py-2 flex justify-between items-center'>
            <div className="flex gap-1">
              {/* Dropdown 1 */}
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                  ☰
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white text-black rounded-box z-10 mt-6 w-64 p-4 shadow">
                  <li className="border-b border-gray-300"><a>TẤT CẢ SẢN PHẨM</a></li>
                  <li className="border-b border-gray-300"><a>LỊCH SỬ TRUYỀN THỐNG</a></li>
                  <li className="border-b border-gray-300"><a>VĂN HỌC VIỆT NAM</a></li>
                  <li className="border-b border-gray-300"><a>VĂN HỌC NƯỚC NGOÀI</a></li>
                  <li className="border-b border-gray-300"><a>TRUYỆN TRANH</a></li>
                  <li className="border-b border-gray-300"><a>MANGO - COMIC</a></li>
                  <li><a>TRUYỆN CỔ TÍCH</a></li>
                </ul>
              </div>
      
              {/* Dropdown 2 */}
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost flex items-center gap-2">
                  <span className="text-xs font-medium">TIN TỨC</span>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white text-black rounded-box z-10 mt-6 w-64 p-4 shadow">
                  <li><a>BÀI VIẾT MỚI</a></li>
                  <li><a>SỰ KIỆN</a></li>
                  <li><a>KHUYẾN MÃI</a></li>
                </ul>
              </div>
      
              {/* Dropdown 3 */}
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost flex items-center gap-2">
                  <span className="text-xs font-medium">GIỚI THIỆU</span>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white text-black rounded-box z-10 mt-6 w-64 p-4 shadow">
                  <li><a>VỀ CHÚNG TÔI</a></li>
                  <li><a>LIÊN HỆ</a></li>
                  <li><a>ĐỐI TÁC</a></li>
                </ul>
              </div>
            </div>
      
            <div className='navbar-center rounded-full bg-white'>
              <Link href="/">
              <img src="https://i.ibb.co/1Jw6QbbY/M-H-3-removebg-preview.png"
                className='btn btn-ghost w-28 h-auto border'
              /></Link>
            </div>
      
            {/* Bên phải: Các icon */}
            <div className="flex items-center gap-6">
              
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost flex items-center gap-2">
                <button
                     onClick={handleShowModal}>👤</button>
               
                </div>
                
              </div>
              
              {/* Tìm kiếm */}
              
      
              {/* Giỏ hàng */}
              <Link href="ShoppingCart">
              <button className="btn btn-ghost btn-circle">
                🛒
                
              </button>
              </Link>
              {/* Thông báo */}
              <button className="btn btn-ghost btn-circle relative">
                🔔
                <span className="badge badge-xs badge-error absolute top-0 right-0"></span>
              </button>
            </div>
          </header>
        );
      };
      
      export default Header;
    
