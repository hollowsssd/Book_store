"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ProductPage() {

  const [BookData, setBookData] = useState<{
    isbn: string;
    name: string;
    author: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    status: string;
    category: string;
    publisher: string;
  }[]>([]);
  const searchQuery = useSearchParams();
  const name= searchQuery.get("name");

  const [isLoading, setIsLoading] = useState(true); // Trạng thái tải dữ liệu


  const fetchData = async (url = "http://127.0.0.1:8000/api/books") => {
    setIsLoading(true);
    try {
      const result = await axios.get(url, {
        params: { name: name }, // Truyền query tìm kiếm nếu có
      });
      console.log(result); // Xem dữ liệu trả về
      // console.log(result.data.Result.data || []);

      setBookData(result.data.Result.data || []);
      // setPagination(result.data.Result || {});

    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false); // Dữ liệu đã tải xong
    }
  };
    useEffect(() => {
    fetchData();
  }, [name]);





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
            {isLoading ? (
              <span className="loading center loading-dots loading-lg"></span>
            ) : (
              <>
                {BookData.map((book, index) => (
                  <div key={book.isbn}>
                    <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
                      <figure>
                        <img
                          src={`http://127.0.0.1:8000/storage/${book?.image}`}
                          alt="Shoes" className="max-w-full h-20" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{book.name}</h2>
                        <p>{book.description}</p>
                        <div className="card-actions justify-end">
                          <Link href={`/ProductDetail/${book.isbn}`}><button className="btn btn-error">Buy Now</button></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

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
    </div>
  );
};


