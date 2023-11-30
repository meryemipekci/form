import AddPostModel from "./AddPostModel";
import AddPostView from "./AddPostView";
import { useState } from "react";
import axiosInstance from "./../../constants";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
  const formModel = new AddPostModel();

  const [form, setForm] = useState(formModel.state);
  const navigate = useNavigate();

  //!key: hangi inputa yazildiginin bilgisi
  //value: inputun icerisindeki deger
  const onInputChange = (key, e) => {
    // console.log(key, e.target.value);
    setForm({ ...form, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.user || !form.text || !form.title) {
      alert("Tum Alanlari Doldurun");
    }
    axiosInstance
      .post("posts", form)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <AddPostView handleSubmit={handleSubmit} onInputChange={onInputChange} />
  );
};

export default AddPostController;
