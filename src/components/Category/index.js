import React from "react";

const Category = ({ match }) => {
  const { cat_name } = match.params;
  return <div className="category_page">{cat_name}</div>;
};

export default Category;
