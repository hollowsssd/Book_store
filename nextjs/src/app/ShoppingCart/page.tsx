"use client"
import Footer from "@/compoments/Footer";
import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";


const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  
  const handleGoToCart = () => {
  };

  return (
    <div className="font-roboto bg-gray-100 min-h-screen">
   

      <main className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
        <div className="bg-white p-6 rounded shadow w-full md:w-2/3">
          <h2 className="text-red-500 text-lg font-bold mb-4">Giỏ hàng của bạn</h2>
          <p>Bạn đang có <strong>1 sản phẩm</strong> trong giỏ hàng</p>
          <div className="flex items-center border-b py-4">
            <img
              src="https://storage.googleapis.com/a1aa/image/9taXadx_xKIpBruCKs6ZOeV9pES_cDLcmC0O8ykLZRA.jpg"
              alt="Book combo"
              className="w-24 h-auto border rounded"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-md font-bold">Combo 4 cuốn sách MBA thực chiến...</h3>
              <p className="text-red-500 font-bold">564,000₫ <span className="line-through text-gray-500">752,000₫</span></p>
            </div>
            <div className="flex items-center">
              <button onClick={decreaseQuantity} className="bg-red-500 text-white px-2 rounded">-</button>
              <input type="text" value={quantity} readOnly className="w-12 text-center border mx-2 rounded" />
              <button onClick={increaseQuantity} className="bg-red-500 text-white px-2 rounded">+</button>
            </div>
          </div>

          {/* 🔥 Nút "Thêm vào giỏ hàng" với điều hướng */}
          <button onClick={handleGoToCart} className="w-full bg-red-500 text-white py-2 rounded mb-2">
            Thêm vào giỏ hàng
          </button>

          <div className="mt-4">
            <h3 className="text-lg font-bold">Ghi chú đơn hàng</h3>
            <textarea className="w-full p-2 border rounded" rows={4}></textarea>
          </div>
          <div className="mt-2 flex items-center">
            <input type="checkbox" id="invoice" className="mr-2" />
            <label htmlFor="invoice">Xuất hóa đơn cho đơn hàng</label>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow w-full md:w-1/3">
          <h3 className="text-red-500 text-lg font-bold">Thông tin đơn hàng</h3>
          <div className="mt-4">
            <input type="radio" id="delivery-now" name="delivery-time" className="mr-2" />
            <label htmlFor="delivery-now">Giao khi có hàng</label>
            <br />
            <input type="radio" id="choose-time" name="delivery-time" className="mr-2" />
            <label htmlFor="choose-time">Chọn thời gian</label>
          </div>
          <div className="text-2xl text-red-500 font-bold my-4">564,000₫</div>
          <a href="#" className="bg-red-500 text-white text-center block p-4 rounded shadow hover:bg-red-700">THANH TOÁN</a>
        </div>
      </main>

    <Footer/>
    </div>
  );
};

export default ShoppingCart;
