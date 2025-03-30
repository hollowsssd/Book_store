"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast, ToastContainer } from 'react-toastify';

const Header = ({ handleShowModal }: { handleShowModal: () => void }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  //cần cải thiện thêm phần này
  const [role, setRole] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") { // Kiểm tra chỉ chạy trên client
      setRole(localStorage.getItem("role") || "");
    }
  }, []);
  const router = useRouter();
  const cookies = new Cookies();
  // Hàm toggle mở/đóng menu
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Đóng menu khi chọn một mục
  const closeDropdown = () => setOpenDropdown(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("Đã nhấn Enter:", event.currentTarget.value);
      handleSearch(event.currentTarget.value); // Truyền string
    }
  };

  // Sửa kiểu của handleSearch thành string
  const handleSearch = (query: string) => {
    router.push(`/ProductList?name=${query}`);
  };


  const Logout = async () => {
    const token = cookies.get("token");
    if (!token) {
      router.push("/");
      return;
    }
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      cookies.remove("token");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("role");

      toast.success("Đăng xuất thành công", { position: "top-right" });
      window.location.reload();

    } catch (err) {
      console.error("Logout failed:", err);
      router.push("/");
    }
  };



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
          onKeyDown={handleKeyDown}
        />
        <Link href="/ShoppingCart">
          <button className="btn btn-ghost btn-circle">🛒</button>
        </Link>
      </div>
      <div className="dropdown dropdown-end ">
        <div tabIndex={0} role="button" className="btn btn-ghost">👤</div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {!role && <li><a onClick={handleShowModal}>Đăng nhập / Đăng kí</a></li>}
          {role === "1" && <li><div>
            <img src="dashboard.png" width={19} height={19} />
            <Link href={"/admin"}>
              Dashboard
            </Link>
          </div>
          </li>}
          {role &&
            <>
              <li>
                <div>
                  <img src="prf.jpg" width={19} height={19} />
                  <Link href={""}>
                    Quản lí hồ sơ
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <img src="logout.png" width={19} height={19} />
                  <a onClick={Logout}>Đăng xuất ( {localStorage.getItem("name")})</a>
                </div>
              </li>
            </>
          }
        </ul>
      </div>
      <ToastContainer />
    </header>
  );
};
export default Header;
