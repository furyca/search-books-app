import { useContext, useEffect } from "react";
import { Context } from "../../Context";
import axios from "axios";
import Book from "../Book/Book";
import "./BookList.module.scss";

const BookList = () => {
  const context = useContext(Context);

  useEffect(() => {
    const getBooks = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${context.searchInput}`
      );
      context.setData(response.data.items);
    };

    getBooks();
    // eslint-disable-next-line
  }, [context.searchInput]);

  return (
    <ul>
      {context.data &&
        context.data.map((book) => {
          return (
            <Book
              key={book.id}
              title={book.volumeInfo.title}
              pages={book.volumeInfo.pageCount}
              authors={book.volumeInfo.authors}
              link={book.volumeInfo.infoLink}
              date={book.volumeInfo.publishedDate}
              cover={book.volumeInfo.imageLinks?.thumbnail}
            />
          );
        })}
    </ul>
  );
};

export default BookList;
