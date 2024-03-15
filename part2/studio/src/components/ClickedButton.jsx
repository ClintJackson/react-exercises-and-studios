import style from './styles.module.css';
function ClickedButton() {
  function handleClick(){
      alert ("You clicked save");
  }
  return (
      <button id={style.clickedButton} onClick={handleClick}>
        Unsave
      </button>
  
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
