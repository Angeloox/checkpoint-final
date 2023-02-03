/* eslint-disable react/prop-types */

import "./Responses.css";

function Response({ answers, onClick, color }) {
  return (
    <div>
      <ul>
        {answers &&
          answers
            .filter((el) => el)
            .map((el) => {
              return (
                <div key={el.id}>
                  <li>
                    <button
                      className={color}
                      type="button"
                      onClick={() => onClick(el.capital)}
                    >
                      {el.capital}
                    </button>
                  </li>
                </div>
              );
            })}
      </ul>
    </div>
  );
}

export default Response;
