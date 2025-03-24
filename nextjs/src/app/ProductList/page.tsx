import Footer from "@/components/Footer";
import React from "react";

const ProductPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
    <div className="container mx-auto p-4 flex flex-wrap ">
      {/* Sidebar */}
      <div className="flex items-start">
  <aside className="border border-gray-300 rounded-lg shadow-md w-60 bg-white h-auto">
    <h3 className="bg-red-700 text-white p-3 font-semibold text-center rounded-t-lg">TẤT CẢ SẢN PHẨM</h3>
    <ul className="list-none p-0">
      {[
        "LỊCH SỬ TRUYỀN THỐNG",
        "VĂN HỌC VIỆT NAM",
        "VĂN HỌC NƯỚC NGOÀI",
        "TRUYỆN TRANH",
        "MANGO - COMIC",
        "TRUYỆN CỔ TÍCH",
      ].map((category, index) => (
        <li key={index} className="border-b last:border-none">
          <a
            href="#"
            className="block p-3 text-gray-700 hover:text-red-700 hover:bg-gray-100 transition duration-200"
          >
            {category}
          </a>
        </li>
      ))}
    </ul>
  </aside>
</div>


      {/* Main Content */}
      <main className="flex-1 p-4">
        <h1 className="text-2xl mb-4 text-black">Tất cả sản phẩm</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="relative bg-white p-4 border shadow-sm">
              <img
                src="https://placehold.co/200x300"
                alt={`Product ${index + 1}`}
                className="w-full h-auto"
              />
              <div className="text-red-700 font-bold mt-2">77.000đ</div>
              
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {[1, 2, 3].map((page) => (
            <a
              key={page}
              href="#"
              className={`px-4 py-2 border mx-1 ${page === 1 ? "bg-red-700 text-white" : "text-gray-700"}`}
            >
              {page}
            </a>
          ))}
        </div>
      </main>
    </div>
    <Footer/>
    </div>
  );
};

export default ProductPage;
