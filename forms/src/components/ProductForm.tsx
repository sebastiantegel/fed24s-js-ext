import { ChangeEvent, FormEvent, useState } from "react";
import { Product } from "../models/Product";
import { ErrorMessage } from "../models/ErrorMessage";

export const ProductForm = () => {
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    image: "",
    description: "",
  });

  const [errors, setErrors] = useState<ErrorMessage[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text") {
      setProduct({ ...product, [e.target.id]: e.target.value });
    }

    if (e.target.type === "number") {
      setProduct({ ...product, [e.target.id]: +e.target.value });
    }

    if (e.target.type === "checkbox") {
      setProduct({ ...product, [e.target.id]: e.target.checked });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // fetch
      console.log("Submit done");
    }

    // setProduct({...product, id: Date.now() });
    // const p = { ...product, id: Date.now() };

    // const response = await fetch("adslfjhakldsf", {
    //   method: "POST",
    //   body: JSON.stringify(product),
    // });

    // const data = await response.json();
    // console.log(data);
  };

  const validate = () => {
    console.log("Validerar");

    let temp = [...errors];

    if (product.name.length < 3) {
      if (!temp.find((e) => e.type === "shortname"))
        temp.push({
          name: "name",
          error: "Öh, pucko, skriv in fler än 2 tecken",
          type: "shortname",
        });
    } else {
      temp = temp.filter((e) => e.type !== "shortname");
    }

    if (product.name === "") {
      console.log("Set empty error");

      if (!temp.find((e) => e.type === "emptyname"))
        temp.push({
          name: "name",
          error: "Detta får inte vara tomt...",
          type: "emptyname",
        });
    } else {
      temp = temp.filter((e) => e.type !== "emptyname");
    }

    setErrors(temp);
    if (temp.length > 0) return false;
    return true;
  };

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Namn</label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={product.name}
            required
            minLength={3}
            onBlur={validate}
          />
          <ul>
            {errors
              .filter((e) => e.name === "name")
              .map((e, i) => (
                <li key={i}>{e.error}</li>
              ))}
          </ul>
        </div>

        <label htmlFor="price">Pris</label>
        <input
          type="number"
          id="price"
          onChange={handleChange}
          value={product.price}
        />

        <label htmlFor="image">Bild</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={product.image}
        />

        <label htmlFor="description">Beskrivning</label>
        <input
          type="text"
          id="description"
          onChange={handleChange}
          value={product.description}
        />

        <button>Spara</button>

        <p>{JSON.stringify(product)}</p>
      </form>

      {/* <div>
        <ul>
          {errors.map((e, i) => (
            <li key={i}>
              {e.name}: {e.error}
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};
