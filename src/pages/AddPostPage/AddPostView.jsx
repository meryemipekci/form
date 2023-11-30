const AddPostView = ({ handleSubmit, onInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Yeni Gonderi Ekle</h2>
      <fieldset>
        <label>Kullanici Adi</label>
        <input
          onChange={(e) => onInputChange("user", e)}
          type="text"
          placeholder="orn: Ahsen"
        />
      </fieldset>
      <fieldset>
        <label>Baslik</label>
        <input
          type="text"
          onChange={(e) => onInputChange("title", e)}
          placeholder="orn: MVC Pattern"
        />
      </fieldset>
      <fieldset>
        <label>Aciklama</label>
        <textarea
          onChange={(e) => onInputChange("text", e)}
          type="text"
          placeholder="Aciklama Giriniz"
        />
      </fieldset>
      <button>Gonder</button>
    </form>
  );
};

export default AddPostView;
