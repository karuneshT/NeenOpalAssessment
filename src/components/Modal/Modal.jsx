import "./Modal.styles.css";
import { useCallback, useState } from "react";

export default function Modal(prop) {
  const [changedData, setChangedData] = useState({
    id: prop.card[0].id,
    name: prop.card[0].name,
    email: prop.card[0].email,
    phone: prop.card[0].phone,
    url: prop.card[0].url,
  });

  const changeHandler = useCallback(()=>{
    prop.setData((data) => {
      data[changedData.id - 1] = {
        id: changedData.id,
        name: changedData.name,
        email: changedData.email,
        phone: changedData.phone,
        url: changedData.url,
      }
    })
    prop.onClick();
  },[changedData, prop])
    
  return (
    <div>
      <div className="backdrop" onClick={prop.onClick} />
      <div className="modal-container">
        <div className="modal">
          <div className="modal-header">
            <h3>Basic Modal</h3>
            <i class="far fa-times fa-lg" onClick={prop.onClick}></i>
          </div>
          <form>
            <div>
              <label>Name:</label> &nbsp;
              <input
                placeholder={prop.card[0].name}
                name="name"
                size="45"
                onChange={(e) => {
                  setChangedData({ ...changedData, name: e.target.value });
                }}
              />
            </div>
            <div>
              <label>Email:</label> &nbsp;
              <input
                placeholder={prop.card[0].email}
                name="email"
                size="45"
                onChange={(e) => {
                  setChangedData({ ...changedData, email: e.target.value });
                }}
              />
            </div>
            <div>
              <label>Phone:</label> &nbsp;
              <input
                placeholder={prop.card[0].phone}
                name="phone"
                size="45"
                onChange={(e) => {
                  setChangedData({ ...changedData, phone: e.target.value });
                }}
              />
            </div>
            <div>
              <label>Website:</label> &nbsp;
              <input
                placeholder={prop.card[0].url}
                name="url"
                size="45"
                onChange={(e) => {
                  setChangedData({ ...changedData, url: e.target.value });
                }}
              />
            </div>
          </form>
          <div className="modal-footer">
            <button onClick={prop.onClick}>Cancel</button>
            <button type="submit" onClick={changeHandler}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
