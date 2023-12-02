import CardItems from "../CardItems/cardItems";
import "./body.css";

const Body = (props) => {
  console.log("product", props);
  return (
    <div className="body-container">
      {props.products.map((product, index) => (
        <CardItems product={product} key={index} />
      ))}
    </div>
  );
};

export default Body;
