import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "하암",
    rating: 5.0,
    author: "오찬영",
  },
  {
    id: 2,
    img: Book2,
    title: "어쩌구 저쩌구",
    rating: 4.5,
    author: "이건우",
  },
  {
    id: 3,
    img: Book3,
    title: "바보",
    rating: 4.7,
    author: "이은주",
  },
  {
    id: 4,
    img: Book2,
    title: "모지리",
    rating: 4.4,
    author: "김영웅",
  },
  {
    id: 5,
    img: Book1,
    title: "천재",
    rating: 4.5,
    author: "정선호",
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              최상단 책들 ~위하여 당신
            </p>
            <h1 className="text-3xl font-bold">최상단 책들</h1>
            <p className="text-xs text-gray-400">
              책책check,,,,책을 읽읍시다^_^
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
                보다 모든 책들
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;