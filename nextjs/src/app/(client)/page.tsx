import React from 'react'
import Link from "next/link";
export default function HomePage() {
  return (
    <div className='w-full bg-white min-h-screen'>
      {/* Header */}

      <div
        className="hero h-[500px] min-h-[300px] flex items-center justify-center bg-cover bg-center relative"
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
                src="https://product.hstatic.net/200000343865/product/song-con-chua-can_bia_ea1f6ab45ea3428f8c6121fb38eb8b14_large.jpg"
                alt="Shoes" className="max-w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link href="/ProductDetail">
                  <button className="btn btn-error">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
            <figure>
              <img
                src="https://product.hstatic.net/200000343865/product/song-con-chua-can_bia_ea1f6ab45ea3428f8c6121fb38eb8b14_large.jpg"
                alt="Shoes" className="max-w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link href="/ShoppingCart">
                  <button className="btn btn-error">Buy Now</button></Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card card-compact bg-white text-black w-full sm:w-64 md:w-48 lg:w-64 shadow-xl">
            <figure>
              <img
                src="https://product.hstatic.net/200000343865/product/song-con-chua-can_bia_ea1f6ab45ea3428f8c6121fb38eb8b14_large.jpg"
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
                src="https://product.hstatic.net/200000343865/product/song-con-chua-can_bia_ea1f6ab45ea3428f8c6121fb38eb8b14_large.jpg"
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
                src="//product.hstatic.net/200000343865/product/dt-conan-kaito-kid-_1_cff6e6d6dbce4546919546a19ee501cd_large.jpg"
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
                src="//product.hstatic.net/200000343865/product/dt-conan-kaito-kid-_1_cff6e6d6dbce4546919546a19ee501cd_large.jpg"
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
                src="//product.hstatic.net/200000343865/product/dt-conan-kaito-kid-_1_cff6e6d6dbce4546919546a19ee501cd_large.jpg"
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
                src="//product.hstatic.net/200000343865/product/dt-conan-kaito-kid-_1_cff6e6d6dbce4546919546a19ee501cd_large.jpg"
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
  )
} 
