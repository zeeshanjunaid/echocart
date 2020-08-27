import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const cats = [
  {
    id: 1,
    title: "Getting Started",
    image: "globe.svg",
  },
  {
    id: 2,
    title: "Account Questions",
    image: "people.svg",
  },
  {
    id: 3,
    title: "Why Carbon Offset",
    image: "trees.svg",
  },
  {
    id: 4,
    title: "Eco Points",
    image: "echopoints.svg",
  },
  {
    id: 5,
    title: "About Ecocart",
    image: "plane.svg",
  },
  {
    id: 6,
    title: "Privacy",
    image: "privacy.svg",
  },
];

const Categories = () => {
  return (
    <div className="categories_section">
      <Container>
        <h2>Choose a category:</h2>
        <div className="cat_grid">
          {cats.map((cat) => (
            <Link to={`/category/${cat.id}`} key={cat.id}>
              <div className="category">
                <img
                  className="category_img"
                  src={require(`../../assets/images/${cat.image}`)}
                />
                <h3 className="category_title">{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
