"use client";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const LoginModal = ({ handleShowModal }: { handleShowModal?: () => void }) => {
  const [isLogin, setIsLogin] = useState(true); // true: Đăng nhập, false: Đăng ký
  const [userField, setUserField] = useState({
    name: "",
    email: "",
    password: ""
  });
  // const Router = useRouter();
  // const [router, setRouter] = useState<any>(null);

  // useEffect(() => {
  //   setRouter(require("next/navigation").useRouter());
  // }, []);

  const changeUserFieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value
    }); 
  };

  const onSubmitChange = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(userField); 

      const response = await axios.post("http://127.0.0.1:8000/api/auth/login",userField);
      console.log(response);

      console.log(response.data.token);
      const {token}= response.data.token;

      const cookies = new Cookies();
      cookies.set("token", response.data.token, {
        path: "/",
        secure: false,
        httpOnly: false, // httpOnly chỉ có tác dụng khi set từ phía server
        maxAge: 86400, // Thời gian tồn tại tính bằng giây
      });
      const username = await axios.get(`http://127.0.0.1:8000/api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      })
      console.log(username);
      console.log(username.data.user);
      const user = username.data.user;
      // console.log(user.name); 
      if (user) {
        localStorage.setItem('name', user.name);
        localStorage.setItem('email', user.email);
        localStorage.setItem('is_admin', user.is_admin);
      } 



      window.location.href = '/';
      
  

    } catch (err) {
      console.log("Something Wrong");

    }
  };





  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center"
      onClick={() => handleShowModal?.()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-lg shadow px-8 py-10 w-full max-w-lg"
      >
        {/* Nút đóng popup */}
        <button
          type="button"
          className="absolute top-3 right-3 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
          onClick={handleShowModal}
        >
          ✕
        </button>

        {/* Tiêu đề */}
        <h2 className="text-center text-2xl font-semibold text-gray-900">
          {isLogin ? "Đăng nhập tài khoản" : "Tạo tài khoản mới"}
        </h2>

        {/* Form Đăng nhập */}
        {isLogin ? (
          <form className="mt-6" 
          onSubmit={onSubmitChange}
          >
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="bg-white w-full mb-3 p-3 border rounded-lg focus:ring-2 focus:ring-black"
              onChange={changeUserFieldHandler}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Mật khẩu"
              className=" bg-white w-full mb-3 p-3 border rounded-lg focus:ring-2 focus:ring-black"
              onChange={changeUserFieldHandler}
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg"
            >
              Đăng nhập
            </button>
          </form>
        ) : (
          // Form Đăng ký
          <form className="mt-6">
            <input
              name="name"
              type="text"
              placeholder="Tên của bạn"
              className="bg-white w-full mb-3 p-3 border rounded-lg focus:ring-2 focus:ring-black"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className=" bg-white w-full mb-3 p-3 border rounded-lg focus:ring-2 focus:ring-black"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Mật khẩu"
              className="bg-white w-full mb-3 p-3 border rounded-lg focus:ring-2 focus:ring-black"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg"
            >
              Đăng ký
            </button>
          </form>
        )}

        {/* Chuyển đổi giữa Đăng nhập & Đăng ký */}
        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}
          <span
            className="text-blue-500 cursor-pointer ml-1"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Đăng ký" : "Đăng nhập"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
