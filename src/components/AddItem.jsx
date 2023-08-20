import React from "react";

export default function AddItem({ onAdd }) {
  let [name, setName] = React.useState("");
  let [num, setNum] = React.useState();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAdd(name, Number(num));
        }}
        className="row "
      >
        <div className="col mb-3">
          <label htmlFor="inputName" className="form-label">
            Stock Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="col mb-3">
          <label htmlFor="inputprice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
