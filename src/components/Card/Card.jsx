import "./Card.styles.css";
import { useState } from "react";

function Card(prop) {
  const [clicked, setClicked] = useState(false);

  function heartClick() {
    setClicked((prevValue) => !prevValue);
  }

  return (
    <div className="card">
      <div className="card-header">
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/${prop.name}.svg?options[mood][]=happy`}
          alt=""
        />
      </div>
      <div className="card-main">
        <h3>{prop.name}</h3>
        <p>
          <i class="fa-lg far fa-envelope"></i> &nbsp; {prop.email}
        </p>
        <p>
          <i class="fa-lg fas fa-phone"></i> &nbsp; {prop.phone}
        </p>
        <p>
          <i class="fa-lg fas fa-globe"></i> &nbsp; {prop.url}
        </p>
      </div>
      <div className="card-footer">
        <table>
          <tbody>
            <tr>
              <td onClick={heartClick}>
                {clicked ? (
                  <i class="fa-lg fas fa-heart"></i>
                ) : (
                  <i class="fa-lg far fa-heart"></i>
                )}
              </td>
              <td
                onClick={() => {
                  prop.onEdit(prop.id);
                  prop.onClick();
                }}
              >
                <i class="fa-lg far fa-edit"></i>
              </td>
              <td
                onClick={() => {
                  prop.onDelete(prop.id);
                }}
              >
                <i class="fa-lg fas fa-trash"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Card;
