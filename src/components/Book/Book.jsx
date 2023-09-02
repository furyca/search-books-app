import { nanoid } from "nanoid";
import style from "./Book.module.scss";

const Book = ({ title, pages, authors, link, date, cover }) => {
  return (
    <li>
      <h4>{title}</h4>
      <div className={style.authors}>
        {authors && authors.map((author) =>
          authors.indexOf(author) !== authors.length - 1 ? (
            <span key={nanoid()}>{author}, </span>
          ) : (
            <span key={nanoid()}>{author}</span>
          )
        )}
      </div>
      <a href={link} target="blank">
        <img src={cover} alt={cover} />
      </a>
        <p>Pages: {pages}</p>
        <p>Published: {date}</p>
    </li>
  );
};

export default Book;
