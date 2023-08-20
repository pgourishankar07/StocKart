import React from "react";

export default function Product({ product, incQty, decQty, index, del }) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {product.name}
          <span className="badge bg-secondary">₹{product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <button
          onClick={() => {
            incQty(index);
          }}
          type="button"
          className="btn btn-outline-success"
        >
          +
        </button>
        <button type="button" className="btn ">
          {product.qty}
        </button>

        <button
          onClick={() => {
            decQty(index);
          }}
          type="button"
          className="btn btn-outline-warning"
        >
          -
        </button>
      </div>
      <div className="col-3">{product.qty * product.price}</div>
      <button
        type="button"
        className="col-1 btn btn-danger"
        onClick={() => {
          del(product.name);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
        </svg>
      </button>
    </div>
  );
}
