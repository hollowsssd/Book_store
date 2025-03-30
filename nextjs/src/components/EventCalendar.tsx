"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    "id": 1,
    "title": "Book Launch: 'Journey of Knowledge'",
    "time": "4/5/2025",
    "description": "Introducing the new book by author Võ Đăng Khoa, followed by a meet-and-greet with readers."
  },
  {
    "id": 2,
    "title": "Book Signing Event",
    "time": "2:00 PM - 4:00 PM 1/3/2025",
    "description": "A famous author will sign books for the first 50 readers."
  },
  {
    "id": 3,
    "title": "Seminar: Smart Reading",
    "time": "5:00 PM - 7:00 PM 1/12/2024",
    "description": "Discussion on effective reading methods with experts and renowned speakers."
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-white p-4 rounded-md">
      {isMounted && <Calendar onChange={onChange} value={value} />}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Book event</h1>
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
              <span className="text-gray-300 text-xs center">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
