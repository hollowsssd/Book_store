"use client";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type LocationType = {
  code: string;
  name: string;
};

export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    discountCode: "",
  });

  const [provinces, setProvinces] = useState<LocationType[]>([]);
  const [districts, setDistricts] = useState<LocationType[]>([]);
  const [wards, setWards] = useState<LocationType[]>([]);

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/p/")
      .then((res) => res.json())
      .then((data) => {
        setProvinces(data || []);
      })
      .catch((error) => console.error("Lỗi khi lấy tỉnh/thành:", error));
  }, []);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;

    setForm((prevForm) => ({ ...prevForm, [id]: value }));

    if (id === "city") {
      setDistricts([]);
      setWards([]);
      setForm((prevForm) => ({ ...prevForm, district: "", ward: "" }));

      try {
        const res = await fetch(`https://provinces.open-api.vn/api/p/${value}?depth=2`);
        const data = await res.json();
        setDistricts(data.districts || []);
      } catch (error) {
        console.error("Lỗi khi lấy quận/huyện:", error);
      }
    }

    if (id === "district") {
      setWards([]);
      setForm((prevForm) => ({ ...prevForm, ward: "" }));

      try {
        const res = await fetch(`https://provinces.open-api.vn/api/d/${value}?depth=2`);
        const data = await res.json();
        setWards(data.wards || []);
      } catch (error) {
        console.error("Lỗi khi lấy phường/xã:", error);
      }
    }
  };

  const handleOrder = () => {
    if (!form.name || !form.email || !form.phone || !form.address || !form.city || !form.district || !form.ward) {
      toast.error("Vui lòng nhập đầy đủ thông tin!", { position: "top-right" });
      return;
    }

    toast.success("Đặt hàng thành công!", { position: "top-right" });
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between p-6">
        {/* Thông tin thanh toán */}
        <div className="bg-white p-6 rounded-lg shadow-md md:w-3/5">
          <h1 className="text-2xl font-bold mb-4 text-black">M & H BookStore</h1>
          <h2 className="text-xl font-semibold text-black">Thông tin thanh toán</h2>

          <form className="mt-4">
            <label className="block font-medium text-black">Họ và tên</label>
            <input id="name" type="text" value={form.name} onChange={handleChange} placeholder="Nhập tên của bạn" className="w-full p-2 border rounded-lg mt-1 bg-white" />

            <div className="flex mt-4 gap-4">
              <div className="w-1/2">
                <label className="block font-medium text-black">Email</label>
                <input id="email" type="email" value={form.email} onChange={handleChange} placeholder="Nhập email" className="w-full p-2 border rounded-lg mt-1 bg-white" />
              </div>
              <div className="w-1/2">
                <label className="block font-medium text-black">Điện thoại</label>
                <input id="phone" type="text" value={form.phone} onChange={handleChange} placeholder="Nhập số điện thoại" className="w-full p-2 border rounded-lg mt-1 bg-white" />
              </div>
            </div>

            <label className="block font-medium mt-4 text-black">Địa chỉ</label>
            <input id="address" type="text" value={form.address} onChange={handleChange} placeholder="Nhập địa chỉ" className="w-full p-2 border rounded-lg mt-1 bg-white" />

            <div className="flex mt-4 gap-4">
              <div className="w-1/3">
                <label className="block font-medium text-black">Tỉnh/Thành</label>
                <select id="city" value={form.city} onChange={handleChange} className="w-full p-2 border rounded-lg mt-1 bg-white text-black">
                  <option value="">Chọn tỉnh thành</option>
                  {provinces.map((province) => (
                    <option key={province.code} value={province.code}>
                      {province.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/3">
                <label className="block font-medium text-black">Quận/Huyện</label>
                <select id="district" value={form.district} onChange={handleChange} className="w-full p-2 border rounded-lg mt-1 bg-white text-black" disabled={!form.city}>
                  <option value="">Chọn Quận/Huyện</option>
                  {districts.map((district) => (
                    <option key={district.code} value={district.code}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/3">
                <label className="block font-medium text-black">Phường/Xã</label>
                <select id="ward" value={form.ward} onChange={handleChange} className="w-full p-2 border rounded-lg mt-1 bg-white text-black" disabled={!form.district}>
                  <option value="">Chọn Phường/Xã</option>
                  {wards.map((ward) => (
                    <option key={ward.code} value={ward.code}>
                      {ward.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>

        {/* Thông tin đơn hàng */}
        <div className="bg-white p-6 rounded-lg shadow-md md:w-2/5 mt-6 md:mt-0 md:ml-6">
          <h2 className="text-xl font-semibold text-black">Thông tin đơn hàng</h2>
          <div className="mt-4">
            <div className="flex justify-between text-black font-medium border-b pb-2">
              <span>Sản phẩm</span>
              <span>Giá</span>
            </div>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between text-black">
                <span>Dragon Ball</span>
                <span>32,000đ</span>
              </div>
              <div className="flex justify-between text-black">
                <span>One Piece</span>
                <span>56,400đ</span>
              </div>
             
            </div>
            <div className="border-t mt-4 pt-2 font-semibold text-black flex justify-between">
              <span>Tổng</span>
              <span>88,400đ</span>
            </div>
            <button className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full" onClick={handleOrder}>
              Xác nhận thanh toán
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
