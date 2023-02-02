/* eslint-disable react/prop-types */
function Response({ answers, onClick }) {
  return (
    <div>
      <ul>
        {answers &&
          answers.map((el) => {
            return (
              <li>
                <button type="button" onClick={() => onClick(el && el.capital)}>
                  {el && el.capital}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Response;
