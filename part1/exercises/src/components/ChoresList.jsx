
import classes from "./choresList.module.css"
export default function ChoresList () {
   let choresArray = ["this is a chore", "this, too, is a chore", "as is this"];
   return (
      <div>
         <h3 className={classes.choresHeading}>Chores</h3>
         <p className={classes.choresText}> {choresArray[0]} </p>
         <p className={classes.choresText}> {choresArray[1]} </p>
         <p className={classes.choresText}> {choresArray[2]} </p>
      </div>
   );

}