/* eslint-disable react/prop-types */
function Response({ answers, onClick }) {
  return (
    <div>
      <ul>
        {answers &&
          answers.map((el) => {
            return (
              <li key={el?.id}>
                <button type="button" onClick={() => onClick(el?.capital)}>
                  {el?.capital}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Response;
