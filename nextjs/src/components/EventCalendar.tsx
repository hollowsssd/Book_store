"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Ra Mắt Sách Mới: 'Hành Trình Tri Thức'",
    time: "10:00 AM - 12:00 PM",
    description: "Giới thiệu cuốn sách mới từ tác giả Nguyễn Văn A, kèm giao lưu cùng độc giả.",
  },
  {
    id: 2,
    title: "Sự Kiện Ký Tặng Sách",
    time: "2:00 PM - 4:00 PM",
    description: "Tác giả nổi tiếng sẽ ký tặng sách cho 50 độc giả đầu tiên.",
  },
  {
    id: 3,
    title: "Hội Thảo: Đọc Sách Thông Minh",
    time: "5:00 PM - 7:00 PM",
    description: "Thảo luận về cách đọc sách hiệu quả với các chuyên gia và diễn giả nổi tiếng.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Sự Kiện Sách</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-blue-500 even:border-t-purple-500"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
