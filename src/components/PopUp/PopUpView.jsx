const PopUpView = ({ setShowPopup, data, userName }) => {
  console.log(data);
  return (
    <div className="wrapper">
      <div className="popup">
        <div className="btn-wrap">
          <h4>
            <span>{userName}</span> Kullanicisinin gonderileri
          </h4>
          <button onClick={() => setShowPopup(false)}>Kapat</button>
        </div>
        {data?.map((post, idx) => (
          <div className="post" key={idx}>
            <h2>{post.title} </h2>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopUpView;
