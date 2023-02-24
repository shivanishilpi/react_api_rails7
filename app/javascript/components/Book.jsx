import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Book = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [recipe, setBook] = useState({ category: "" });

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setBook(response))
      .catch(() => navigate("/books"));
  }, [params.id]);

  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  };

  const deleteBook = () => {
    const url = `/api/v1/destroy/${params.id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => navigate("/books"))
      .catch((error) => console.log(error.message));
  };

  const ingredientList = () => {
    let categoryList = "No category available";

    if (recipe.category.length > 0) {
      categoryList = recipe.category
        .split(",")
        .map((category, index) => (
          <li key={index} className="list-group-item">
            {category}
          </li>
        ));
    }

    return ingredientList;
  };

  const bookName = addHtmlEntities(book.name);
  
  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">
          {book.name}
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul className="list-group">
              <h5 className="mb-2">category</h5>
              {categoryList()}
            </ul>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h5 className="mb-2">Preparation names</h5>
            <div
              dangerouslySetInnerHTML={{
                __html: `${bookName}`,
              }}
            />
          </div>
          <div className="col-sm-12 col-lg-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={deleteBook}
            >
              Delete Recipe
            </button>
          </div>
        </div>
        <Link to="/books" className="btn btn-link">
          Back to books
        </Link>
      </div>
    </div>
  );
};

export default Book;