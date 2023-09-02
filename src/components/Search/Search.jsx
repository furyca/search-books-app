import { useContext, useState } from "react";
import "./Search.module.scss";
import { Context } from "../../Context";

const Search = () => {
  const context = useContext(Context)
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()

    input.trim().length > 0 && context.setSearchInput(input)
  }
  return (
    <form>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
    </form>
  );
};

export default Search;
