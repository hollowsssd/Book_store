import React from 'react'
import Link from "next/link";



export default function HomePage() {


  return (
    <div className='w-full bg-white min-h-screen'>


      <div
        className="hero h-auto min-h-auto flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://theme.hstatic.net/200000343865/1001052087/14/ms_banner_img5.jpg?v=1742')",
        }}>
      </div>
      {/* Product Section */}
      <div>
        <h2 className='text-2xl font-semibold text-center text-black mb-6 mt-4'>SÁCH MỚI</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
            <figure>
              <img
                src="https://product.hstatic.net/200000343865/product/nhung-anh-hung-tre-tuoi_be-van-dan_8ab2a9407f604669906f50044a940f4c_51acc4d7e1fd4a2e932b8c0aa908f4e6_large.jpg"
                alt="Shoes" className="max-w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Những anh hùng trẻ tuổi - Bế Văn Đàn</h2>
              <p>Văn học Việt Nam</p>
              <div className="card-actions justify-end">
                <Link href="/ProductDetail">
                  <button className="btn btn-error">Xem Ngay</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
            <figure>
              <img
                src="https://product.hstatic.net/200000343865/product/vu-a-dinh_bia_tb-2024_1eac9f6d11f0435889ea432f81a940c8_large.jpg"
                alt="Shoes" className="max-w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Những anh hùng trẻ tuổi - Vừ A Dính!</h2>
              <p>Văn học Việt Nam</p>
              <div className="card-actions justify-end">
                <Link href="/ShoppingCart">
                  <button className="btn btn-error">Xem Ngay</button></Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
            <figure>
              <img
                src="https://product.hstatic.net/200000343865/product/vo-thi-sau_bia_tb-2024_a1f990df85874de594b550516023ef92_d799bb3fd6ef454a813c02dbf65d62f8_large.jpg"
                alt="Shoes" className="max-w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Những anh hùng trẻ tuổi - Võ Thị Sáu</h2>
              <p>Văn học Việt Nam</p>
              <div className="card-actions justify-end">
                <button className="btn btn-error">Xem Ngay</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
            <figure>
              <img
                src="https://product.hstatic.net/200000343865/product/2022_b0dec6693c0a4831b5c8f494bc1194d1_66e8d940bda34c7a995f33eaba147dc3_e15ca0cf7e5946ee954f6dad93065fae_large.jpg"
                alt="Shoes" className="max-w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Gương thiếu nhi -Cõng bạn đi học</h2>
              <p>Văn học Việt Nam</p>
              <div className="card-actions justify-end">
                <button className="btn btn-error">Xem Ngay</button>
              </div>
            </div>
          </div>
        </div>
        {/* Nút Xem Thêm */}
        <div className="flex justify-center  mt-4">
          <Link href="/ProductList">
            <button className="btn btn-ghost text-black">Xem Thêm</button></Link>
        </div>
        {/* Product Section */}
        <div>
          <h2 className='text-2xl font-semibold text-center text-black mb-6 mt-5'>SÁCH BÁN CHẠY</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
              <figure>
                <img
                  src="https://product.hstatic.net/200000343865/product/14_a84c0ad16276449fb8c805b0c8b13ab7_large.jpg"
                  alt="Shoes" className="max-w-full h-auto" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-error">Buy Now</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
              <figure>
                <img
                  src="https://product.hstatic.net/200000343865/product/14_a84c0ad16276449fb8c805b0c8b13ab7_large.jpg"
                  alt="Shoes" className="max-w-full h-auto" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-error">Buy Now</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
              <figure>
                <img
                  src="https://product.hstatic.net/200000343865/product/14_a84c0ad16276449fb8c805b0c8b13ab7_large.jpg"
                  alt="Shoes" className="max-w-full h-auto" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-error">Buy Now</button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
              <figure>
                <img
                  src="https://product.hstatic.net/200000343865/product/14_a84c0ad16276449fb8c805b0c8b13ab7_large.jpg"
                  alt="Shoes" className="max-w-full h-auto" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-error">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          {/* Nút Xem Thêm */}
          <div className="flex justify-center  mt-4">
            <button className="btn btn-ghost text-black">Xem Thêm</button>
          </div>
        </div>
      </div>
      {/* Banner Section */}
      <div>
        <div className="relative flex items-center justify-center text-white text-center px-4">
          <img
            src="https://theme.hstatic.net/200000343865/1001052087/14/banner_home_pro_6.jpg?v=1742"
            alt="Banner"
            className="rounded-full w-full max-w-6xl h-44"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 p-6">
            <a href="/shop" className="block w-full h-full"></a>
          </div>
        </div>
        <h2 className='text-2xl font-semibold text-center text-black mb-6 mt-4'>BST DORAEMON</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
            <figure>
              <img
                src="https://product.hstatic.net/200000343865/product/mon-movie-story-mau_nobita-va-chuyen-tham-hiem-nam-cuc-kachi-kochi_bia_6b938ec5d12545f4a7a2c266ac0af643_large.jpg"
                alt="Shoes" className="max-w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-error">Buy Now</button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
            <figure>
              <img
                src="https://product.hstatic.net/200000343865/product/mon-movie-story-mau_nobita-va-chuyen-tham-hiem-nam-cuc-kachi-kochi_bia_6b938ec5d12545f4a7a2c266ac0af643_large.jpg"
                alt="Shoes" className="max-w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-error">Buy Now</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
            <figure>
              <img
                src="https://product.hstatic.net/200000343865/product/mon-movie-story-mau_nobita-va-chuyen-tham-hiem-nam-cuc-kachi-kochi_bia_6b938ec5d12545f4a7a2c266ac0af643_large.jpg"
                alt="Shoes" className="max-w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-error">Buy Now</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
            <figure>
              <img
                src="https://product.hstatic.net/200000343865/product/mon-movie-story-mau_nobita-va-chuyen-tham-hiem-nam-cuc-kachi-kochi_bia_6b938ec5d12545f4a7a2c266ac0af643_large.jpg"
                alt="Shoes" className="max-w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-error">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Nút Xem Thêm */}
        <div className="flex justify-center  mt-4">
          <button className="btn btn-ghost text-black">Xem Thêm</button>
        </div>
      </div>
      <div>
        <div className="relative flex items-center justify-center text-white text-center px-4">
          <img
            src="https://theme.hstatic.net/200000343865/1001052087/14/banner_home_pro_5.jpg?v=1742"
            alt="Banner"
            className="rounded-full w-full max-w-6xl h-44"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 p-6">
            <a href="/shop" className="block w-full h-full"></a>
          </div>
        </div>
        <h2 className='text-2xl font-semibold text-center text-black mb-6 mt-4'>MANGA - COMIC</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
            <figure>
              <img
                src="https://product.hstatic.net/200000343865/product/one-piece-_bia_tap-1_c4d0ea3d590d4b858270c5ca3d565e4c_large.jpg"
                alt="Shoes" className="max-w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">One Piece </h2>
              <p>Manga - Comic</p>
              <div className="card-actions justify-end">
                <button className="btn btn-error">Xem Ngay</button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
            <figure>
              <img
                src="https://product.hstatic.net/200000343865/product/dragon-ball_tap-1_047b116d3f0e4637a6f97bef34bb03f0_master.jpg"
                alt="Shoes" className="max-w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Dragon Ball </h2>
              <p>Manga - Comic</p>
              <div className="card-actions justify-end">
                <button className="btn btn-error">Xem Ngay</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
            <figure>
              <img
                src="https://product.hstatic.net/200000343865/product/37_2615818a2f9f4622b710f88d85251367_55af8db7dc394d1fb4e7ff0a8108764e_large.jpg"
                alt="Shoes" className="max-w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> Naruto</h2>
              <p>Manga - Comic</p>
              <div className="card-actions justify-end">
                <button className="btn btn-error">Xem Ngay</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
            <figure>
              <img
                src="https://product.hstatic.net/200000343865/product/thanh-guom-diet-quy_tap-1_3050763eddf347279b97edb058d6bce4_large.jpg"
                alt="Shoes" className="max-w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">QuatVN</h2>
              <p>Manga - Comic</p>
              <div className="card-actions justify-end">
                <button className="btn btn-error">Xem Ngay</button>
              </div>
            </div>
          </div>
        </div>

        {/* Nút Xem Thêm */}
        <div className="flex justify-center  mt-4">
          <button className="btn btn-ghost text-black">Xem Thêm</button>

        </div>
      </div>
    </div>
  )
} 
