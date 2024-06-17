import { ArrowRightSquareFill } from "react-bootstrap-icons";

function Input({ inputValue, onChangeValue, click }) {
  return (
    <form className="input" onSubmit={(e) => click(e)}>
      <input
        type="text"
        placeholder="Search for a repo..."
        value={inputValue}
        onChange={onChangeValue}
      />
      {inputValue.length >= 1 && (
        <ArrowRightSquareFill
          size={36}
          color="#1F883D"
          cursor="pointer"
          onClick={(e) => click(e)}
        />
      )}
    </form>
  );
}

export default Input;
