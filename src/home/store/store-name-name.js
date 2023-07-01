import { Fragment, useCallback, useState, useEffect } from "react";
import Storename from "./storename";

const NameStore = (props) => {
  const [name, setname] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchusershandler = useCallback(async () => {
    setloading(true);
    const response = await fetch("http://localhost:8080/user/shops");
    const data = await response.json();
    const transformeduser = data.shops.map((userdata) => {
      return {
        shop_name: userdata.shop_name,
      };
    });
    setname(transformeduser);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchusershandler();
  }, []);

  return (
    <Fragment>
      <section>
        {!loading && <Storename storename={name} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
};

export default NameStore;
