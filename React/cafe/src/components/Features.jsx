import {
  BsCupHot,
  BsClock,
  BsTruck
} from "react-icons/bs";

const Features = () => {
  return (
    <div className="container feature-wrapper">
      <div className="row shadow bg-white">

        <div className="col-md-4 text-center p-5">
          <BsCupHot size={40} />
          <h5 className="mt-3">Best Coffee</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="col-md-4 text-center p-5 bg-light">
          <BsClock size={40} />
          <h5 className="mt-3">Fast Cooking</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="col-md-4 text-center p-5">
          <BsTruck size={40} />
          <h5 className="mt-3">Free Delivery</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

      </div>
    </div>
  );
};

export default Features;