"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";



export default function AllUser() {
  const [UserData, SetUserData] = useState<{
    id: number,
    name: string,
    email: string,
    address: string,
    phone: string,
    password: string,
    is_admin: boolean
  }[]>([]);

  const [pagination, setPagination] = useState<{ // Dữ liệu phân trang
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    next_page_url: string | null;
    prev_page_url: string | null;
  }>({
    total: 0,
    per_page: 10,
    current_page: 1,
    last_page: 1,
    next_page_url: null,
    prev_page_url: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Trạng thái tải dữ liệu

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async (url = "http://127.0.0.1:8000/api/users") => {
    setIsLoading(true);
    try {
      const result = await axios.get(url, {
        params: { email: searchQuery }, // Truyền query tìm kiếm nếu có
      });
      console.log(result); // Xem dữ liệu trả về
      // console.log(result.data.Result.data || []);

      SetUserData(result.data.Result.data || []);
      setPagination(result.data.Result || {});

    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false); // Dữ liệu đã tải xong
    }
  };





  const handlePreviousPage = () => {
    if (pagination.prev_page_url) fetchData(pagination.prev_page_url);
    window.scrollTo(0, 0);
  };
  const handleNextPage = () => {
    if (pagination.next_page_url) fetchData(pagination.next_page_url);
    window.scrollTo(0, 0);
  };


  return (
    <div>
      <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">All Users</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            {/* <Search /> */}
            <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
              <Image src="/search.png" alt="" width={14} height={14} />
              <input
                type="text"
                placeholder="Search Email..."
                className="w-[200px] p-2 bg-transparent outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4 self-end">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/filter.png" alt="" width={14} height={14} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/sort.png" alt="" width={14} height={14} />
              </button>
              <div>
                <Link href={"/list/users/createuser"}>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                    <Image src="/create.png" alt="" width={14} height={14} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* LIST */}
        {isLoading ? (
          <span className="loading center loading-dots loading-lg"></span>
        ) : (
          <>
            <table className="w-full mt-4">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="hidden md:table-cell">STT</th>
                  <th className="hidden md:table-cell">ID</th>
                  <th className="hidden md:table-cell">Name</th>
                  <th className="hidden md:table-cell">Email</th>
                  <th className="hidden md:table-cell">Phone</th>
                  <th className="hidden md:table-cell">Address</th>
                  <th className="hidden md:table-cell">Role</th>
                  <th className="hidden md:table-cell">Action</th>

                </tr>
              </thead>
              <tbody>
                {UserData.map((user, index) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
                  >
                    <td>{index + 1}</td>
                    <td className="hidden md:table-cell">{user.id}</td>
                    <td className="hidden md:table-cell">{user.name}</td>
                    <td className="hidden md:table-cell">{user.email}</td>
                    <td className="hidden md:table-cell">{user.phone ?? "None"}</td>
                    <td className="hidden md:table-cell">{user.address ?? "None"}</td>
                    <td className="hidden md:table-cell">{user.is_admin ? "Admin" : "User"}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Link href={`/list/users/${user.id}`}>
                          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                            <Image src="/view.png" alt="" width={16} height={16} />
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* PAGINATION */}
            <div className="p-4 flex items-center justify-between text-gray-500">

              {/* pagination.prev_page_url */}
              {pagination.prev_page_url ? (
                <button
                  className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handlePreviousPage}
                >
                  Prev
                </button>
              ) : (
                <button
                  disabled
                  className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Prev
                </button>
              )}

              <div className="flex items-center center gap-2 text-sm">
                <button className="join-item btn">
                  Page {pagination.current_page || 1} / {pagination.last_page || 1}
                </button>
              </div>

              {/* pagination.next_page_url */}
              {pagination.next_page_url ? (
                <button
                  className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleNextPage}
                > next
                </button>
              ) : (
                <button
                  disabled
                  className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
