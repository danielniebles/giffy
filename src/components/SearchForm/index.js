import React from "react";
import { useLocation } from "wouter";
import useForm from "./useForm";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm({ initialKeyword = "", initialRating = "g" }) {
  const [,pushLocation] = useLocation();

  const { keyword, rating, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation("/");
    pushLocation(`search/${keyword}/${rating}`);
  };

  const handleInputChange = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input
        placeholder="Search a gif..."
        onChange={handleInputChange}
        type="text"
        value={keyword}
      />
      <select onChange={handleChangeRating} value={rating}>
        {RATINGS.map((r) => (
          <option key={r}>{r}</option>
        ))}
      </select>
    </form>
  );
}

export default React.memo(SearchForm);
