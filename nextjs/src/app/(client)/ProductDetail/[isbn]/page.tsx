"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faMapMarkerAlt, faTruck, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";
import axios from "axios";

export default function ProductPage () {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
    const { isbn } = useParams();

    const [book, setBook] = useState({
        isbn: "",
        name: "",
        author: "",
        description: "",
        price: "",
        image: null as File | null,
        quantity: "",
        status: "",
        category: "",
        publisher: "",
        created_at: "",
    });

    useEffect(() => {
        if (isbn) {
            fetchBook();
        }

    }, [isbn]);

    const fetchBook = async () => {
        try {
            const result = await axios.get(`http://127.0.0.1:8000/api/books/${isbn}`);

            setBook(result.data.Result);
            console.log(result.data.Result);
            // console.log("Image path:", book.image);
            // console.log("Image path:", book.isbn);



        } catch (error) {
            console.log("something went wrong");

        }
    };
    return (
        <div>
            <div className="bg-gray-100 p-4">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg">
                        {/* Left Section */}
                        <div className="lg:w-1/3 p-4  flex flex-col items-center">
                            <img
                                src={`http://127.0.0.1:8000/storage/${book?.image}`}
                                alt="Product"
                                className="max-w-full h-auto object-contain rounded-lg shadow-md"
                                id="mainImage"
                            />
                            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
        
                            </div>

                            <button className="w-full bg-red-500 text-white py-2 rounded mb-2">Thêm vào giỏ hàng</button>
                            <button className="w-full bg-yellow-500 text-white py-2 rounded">Mua ngay</button>
                            <div className="mt-4">
                                <h3 className="text-lg text-black font-semibold mb-2">Chính sách ưu đãi của M & H Store</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Thời gian giao hàng: Giao nhanh và uy tín</li>
                                    <li>Chính sách đổi trả: Đổi trả miễn phí trong vòng 7 ngày</li>
                                    <li>Chính sách khách sỉ: Dành cho khách sỉ mua số lượng lớn</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="lg:w-2/3 p-4">
                            <h1 className="text-2xl text-black font-bold">{book.name}</h1>
                            <p className="text-gray-600">Nhà cung cấp: <span className="text-blue-500">{book.publisher}</span></p>
                            <p className="text-gray-600">Đánh giá:
                                <span className="text-yellow-500">
                                    {[...Array(4)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                </span> (633 đánh giá)
                            </p>

                            <div className="bg-red-100 p-2 rounded mb-4 rounded-lg">
                                <div className="flex justify-between text-red-500 font-bold">

                                </div>
                                <div className="text-xl text-red-500">
                                {book.price} đ <span className="line-through text-gray-500">50.000 đ</span> 
                                </div>
                            </div>

                            <div className="bg-gray-100 p-4 rounded mb-4 rounded-lg">
                                <h3 className="text-lg text-black font-semibold">Thông tin vận chuyển</h3>
                                <p className="text-gray-600">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500" /> Giao hàng đến <span className="text-blue-500">Hồ Chí Minh</span>
                                </p>
                                <p className="text-gray-600">
                                    <FontAwesomeIcon icon={faTruck} className="text-blue-500" /> Giao hàng tiêu chuẩn
                                </p>
                                <p className="text-gray-600">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500" /> Dự kiến: 03/03
                                </p>
                                <h3 className="text-lg text-black font-semibold">Số lượng:</h3>
                                <div className="flex items-center space-x-2">
                                    <button onClick={decreaseQuantity} className="bg-gray-200 text-gray-600 px-2 py-1 rounded">-</button>
                                    <input type="text" className="w-12 bg-white text-black text-center border border-gray-300 rounded" value={quantity} readOnly />
                                    <button onClick={increaseQuantity} className="bg-gray-200 text-gray-600 px-2 py-1 rounded">+</button>
                                </div>
                            </div>

                            
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="text-lg text-black font-semibold mb-2">Thông tin chi tiết</h3>
                                <table className="w-full text-gray-600">
                                    <tbody>
                                        <tr>
                                            <td className="py-1">ISBN</td>
                                            <td className="py-1">{book.isbn}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Tên Nhà Cung Cấp</td>
                                            <td className="py-1">{book.publisher}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Tác giả</td>
                                            <td className="py-1">{book.author}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">NXB</td>
                                            <td className="py-1">Văn Học</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Năm XB</td>
                                            <td className="py-1">{book.created_at}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Trọng lượng (gr)</td>
                                            <td className="py-1">220</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Kích Thước Bao Bì</td>
                                            <td className="py-1">22 x 17 x 1 cm</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Số trang</td>
                                            <td className="py-1">216</td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 p-4">
                    <div className="container mx-auto">
                        
                    </div>


                </div>

            </div>

        </div>

    );
};
