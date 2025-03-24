"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

// Định nghĩa kiểu dữ liệu của sản phẩm
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<{ [key: number]: boolean }>({});
  const [selectAll, setSelectAll] = useState<boolean>(false);

  useEffect(() => {
    const initialCart: CartItem[] = [
      {
        id: 1,
        name: "Combo 4 cuốn sách MBA thực chiến...",
        price: 564000,
        image:
          "https://storage.googleapis.com/a1aa/image/9taXadx_xKIpBruCKs6ZOeV9pES_cDLcmC0O8ykLZRA.jpg",
      },
      {
        id: 2,
        name: "Sách dạy thể dục",
        price: 320000,
        image:
          "https://i.vgt.vn/2023/7/26/hotgirl-tran-ha-linh-bi-boc-tran-qua-khu-lieu-co-an-o-nhu-thoi-nguyen-thuy-them-1-clip-gay-bao-ba6-6951964.png",
      },
    ];
    setCartItems(initialCart);
    setQuantities(
      initialCart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
    );
    setSelectedItems(
      initialCart.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
    );
  }, []);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, item) =>
        selectedItems[item.id] ? acc + item.price * (quantities[item.id] ?? 1) : acc,
      0
    );
    setTotalPrice(newTotal);
  }, [cartItems, quantities, selectedItems]);

  const increaseQuantity = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 1) + 1,
    }));
  };

  const decreaseQuantity = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] ?? 1) - 1, 1),
    }));
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setQuantities((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
    setSelectedItems((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });

    setSelectAll(Object.values(selectedItems).every((value) => value));
  };

  const handleSelectItem = (id: number) => {
    setSelectedItems((prev) => {
      const newSelected = { ...prev, [id]: !prev[id] };
      setSelectAll(Object.values(newSelected).every((value) => value));
      return newSelected;
    });
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedItems(
      cartItems.reduce((acc, item) => ({ ...acc, [item.id]: newSelectAll }), {})
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <main className="container mx-auto p-4 flex flex-col md:flex-row gap-4 flex-1">
        <div className="bg-white p-6 rounded-lg shadow w-full md:w-2/3">
          <h2 className="text-red-500 text-lg font-bold mb-4">Giỏ hàng của bạn</h2>
          <label className="flex items-center mb-4">
            <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
            <span className="ml-2 text-black">Chọn tất cả</span>
          </label>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <input
                  type="checkbox"
                  checked={selectedItems[item.id] || false}
                  onChange={() => handleSelectItem(item.id)}
                />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-auto border rounded ml-4"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-md font-bold text-black">{item.name}</h3>
                  <p className="text-red-500 font-bold">
                    {(item.price * (quantities[item.id] ?? 1)).toLocaleString("vi-VN")}₫
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-red-500 text-white px-2 rounded"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantities[item.id]}
                    readOnly
                    className="bg-white text-black w-12 text-center border mx-2 rounded"
                  />
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-red-500 text-white px-2 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="ml-3 text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Giỏ hàng trống</p>
          )}
        </div>

        <div className="items-center bg-gray-100">
          <div className="bg-white rounded-lg shadow-md p-6 w-80 text-black">
            <div className="flex justify-between mb-2">
              <span>Thành tiền</span>
              {totalPrice.toLocaleString("vi-VN")}₫
            </div>
            <div className="flex justify-between font-bold text-red-500 mb-4">
              <span>Tổng Số Tiền (gồm VAT)</span>
              {totalPrice.toLocaleString("vi-VN")}₫
            </div>
            <Link href="/Payment">
              <button className="w-full bg-red-500 text-white text-center py-2 rounded-md font-bold hover:bg-red-600">
                THANH TOÁN
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
