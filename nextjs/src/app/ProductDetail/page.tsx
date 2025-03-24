"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from '@/components/Footer'
import { faStar, faStarHalfAlt, faMapMarkerAlt, faTruck, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <div>
            <div className="bg-gray-100 p-4">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg">
                        {/* Left Section */}
                        <div className="lg:w-1/3 p-4  flex flex-col items-center">
                            <img
                                src="//product.hstatic.net/200000343865/product/ai-manh-hon_ca-voi-vs-muc_bia_b93c3cce30014ac387e467c4bee625d5_large.jpg"
                                alt="Product"
                                className="max-w-full h-auto object-contain rounded-lg shadow-md"
                                id="mainImage"
                            />
                            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                                {[

                                    "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
                                    "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
                                    "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                                ].map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    />
                                ))}



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
                            <h1 className="text-2xl text-black font-bold">Mười Phút Mỗi Ngày Thì Thầm Với Con</h1>
                            <p className="text-gray-600">Nhà cung cấp: <span className="text-blue-500">Tân Việt</span></p>
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
                                    94.250 đ <span className="line-through text-gray-500">145.000 đ</span> -35%
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

                            <div className="bg-gray-100 p-4 rounded mb-4 rounded-lg">
                                {/*  */}
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <h3 className="text-lg text-black font-semibold mb-2">Thông tin chi tiết</h3>
                                <table className="w-full text-gray-600">
                                    <tbody>
                                        <tr>
                                            <td className="py-1">Mã hàng</td>
                                            <td className="py-1">8935210307859</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Tên Nhà Cung Cấp</td>
                                            <td className="py-1">Tân Việt</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Tác giả</td>
                                            <td className="py-1">Park Hannah, Darin</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Người Dịch</td>
                                            <td className="py-1">Hà Hương</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">NXB</td>
                                            <td className="py-1">Văn Học</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Năm XB</td>
                                            <td className="py-1">2023</td>
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
                                        <tr>
                                            <td className="py-1">Hình thức</td>
                                            <td className="py-1">Bìa Mềm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 p-4">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-4">
                            {/* Left Section */}
                            <div className="w-full flex justify-center items-center">
                                <span className="text-lg text-black font-semibold">
                                    SÁCH CÙNG THỂ LOẠI
                                </span>

                            </div>
                        </div>
                    </div>


                </div>
             
            </div>
                                
        </div>

    );
};

export default ProductPage;