import React from 'react'
const Footer = () => {
  return (
    <footer className="footer bg-rose-500 text-white p-10 rounded-xl ">
      <nav>
        <h6 className="footer-title text-black">DỊCH VỤ</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title text-black">HỖ TRỢ</h6>
        <a className="link link-hover">Giới thiệu</a>
        <a className="link link-hover">Liên hệ</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title text-black">KẾT NỐI MẠNG XÃ HỘI</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/_ng.minhh_/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M7 2C4.239 2 2 4.239 2 7V17C2 19.761 4.239 22 7 22H17C19.761 22 22 19.761 22 17V7C22 4.239 19.761 2 17 2H7ZM17 20H7C5.346 20 4 18.654 4 17V7C4 5.346 5.346 4 7 4H17C18.654 4 20 5.346 20 7V17C20 18.654 18.654 20 17 20ZM12 6C8.691 6 6 8.691 6 12C6 15.309 8.691 18 12 18C15.309 18 18 15.309 18 12C18 8.691 15.309 6 12 6ZM12 16C9.794 16 8 14.206 8 12C8 9.794 9.794 8 12 8C14.206 8 16 9.794 16 12C16 14.206 14.206 16 12 16ZM18.5 6.5C18.776 6.5 19 6.276 19 6C19 5.724 18.776 5.5 18.5 5.5C18.224 5.5 18 5.724 18 6C18 6.276 18.224 6.5 18.5 6.5Z"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/@MixiGaming3con">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="https://www.facebook.com/ng.minh.489441/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
