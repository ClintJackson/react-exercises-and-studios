import SaveButton from './SaveButton.jsx';
import ClickedButton from './ClickedButton.jsx';
import style from './styles.module.css';

function Button(prop) {
  const saveButton = prop.saveButton;
  return saveButton === true ? <SaveButton id = {style.saveButton}/> : <ClickedButton id = {style.clickedButton}/>
   
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 