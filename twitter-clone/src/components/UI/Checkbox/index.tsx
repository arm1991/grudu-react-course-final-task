import './styles.scss';

interface CheckboxProps {
  changeHideDone: () => void;
  hideDone: boolean;
  text: string;
}

function Checkbox({ changeHideDone, hideDone, text }: CheckboxProps) {
  const checkboxChange = () => {
    changeHideDone();
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className="checkbox"
        id="hide-all"
        checked={hideDone}
        onChange={checkboxChange}
      />
      <label htmlFor="hide-all">{text}</label>
    </div>
  );
}

export default Checkbox;
