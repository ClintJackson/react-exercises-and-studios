import style from './styles.module.css';

function SaveButton() {
  function handleClick() {
    alert("You are saving this pin!");
  }
  return (
    <button id={style.saveButton} onClick={handleClick}>
      Save
    </button>
  );
}

export default SaveButton;
