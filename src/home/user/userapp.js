import React, {
    useState,
    useEffect,
    useCallback,
    Fragment,
    axios,
  } from "react";
import Userslist from "./userlist";
import { Spinner } from "react-bootstrap";
import Spinnerui from "../UI/spinner";

  
  function Users() {
    const [items, setitems] = useState([]);
    const [loading, setloading] = useState(false);
    const token = localStorage.getItem("token");
    const fetchprodshandler = useCallback(async () => {
      setloading(true);
      const response = await fetch("https://apifordropment.online/all/users", {
        headers: {
          Authorization: token,
        },
      });
      const data = await response.json();
      const transformedItems = data.order.map((itemsdata) => {
        return {
          user_id: itemsdata.user_id,
          first_name: itemsdata.first_name,
          last_name: itemsdata.last_name,
          email: itemsdata.email,
          unique_id: itemsdata.unique_id,
          occupation: itemsdata.occupation
        };
      });
      setitems(transformedItems);
      setloading(false);
    }, []);
  
    useEffect(() => {
      fetchprodshandler();
    }, []);
  
    return (
      <Fragment>
        <section>
          {!loading && <Userslist shops={items} />}
          {loading && <Spinnerui/>}
        </section>
      </Fragment>
    );
  }
  
  export default Users;
  