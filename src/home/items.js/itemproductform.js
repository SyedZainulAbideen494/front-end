import { Fragment, useRef, useState } from "react";
import Input from "../UI/input";
import "./items.css";

const Itemproductform = (props) => {
  const [isvalid, setisvalid] = useState(true);
  const amountInputRef = useRef();
  const submithandler = (event) => {
    event.preventDefault();

    const enteredamount = amountInputRef.current.value;
    const enteredamountnumber = +enteredamount;

    if (
      enteredamount.trim().length === 0 ||
      enteredamountnumber < 1 ||
      enteredamountnumber > 5
    ) {
      setisvalid(false);
      return;
    }
    props.onAddtoCart(enteredamountnumber);
  };

  return (
    <Fragment>
      <form onSubmit={submithandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <div className="addtocartbtn2">
          <button>add to cart</button>
          {!isvalid && <p>please enter a valid amount from 1-5</p>}
        </div>
      </form>
    </Fragment>
  );
};

export default Itemproductform;
