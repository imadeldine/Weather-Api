import React from "react";
export default function Header(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.updateCity(e.target.city.value);
  }

  return (
    <div className="header-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input name="city" type="text" placeholder="London"></input>
        <input type="submit" value="FIND WEATHER"></input>
      </form>
    </div>
  );
}
