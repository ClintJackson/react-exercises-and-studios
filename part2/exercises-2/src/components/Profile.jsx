import styles from './styles.module.css';
import Button from './Button';
import data from "../oceans.json";
const listItem = data.map((item)=> (
   <div key = {item.id} className={`${item.fishCheck === "true" ? styles.isAFish : styles.profile}`}>
      <img src={item.image} alt={item.name} />
         <li key = {item.id}></li>
      <h1>{item.name}</h1>
      <h3>Fun Facts:</h3>
         <ul className ={styles.fful}>
            <li key = {item.id} className={styles.ffli}>{item.fact1}</li>
            <li key = {item.id} className={styles.ffli}>{item.fact2}</li>
            <li key = {item.id} className={styles.ffli}>{item.fact3}</li>
         </ul>
         <Button/>
   </div>
));
export default function Profile() {
   
 
   return (
         <ul>
            {listItem}
         </ul>
   );
}
   