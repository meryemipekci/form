import { useEffect, useState } from "react";
import PopUpView from "./PopUpView";
import axios from "axios";

const PopUpController = ({ setShowPopup, userName }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts?user=${userName}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [userName]);
  return (
    <PopUpView userName={userName} data={data} setShowPopup={setShowPopup} />
  );
};

export default PopUpController;
