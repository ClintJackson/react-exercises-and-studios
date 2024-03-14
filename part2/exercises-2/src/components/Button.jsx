import style from './styles.module.css';

export default function Button() {
   function onLearnMore(){
      alert("Stay splish splashin' mis amigos")
   }
   return ( 
         <button onClick = {onLearnMore}>
            Learn More
         </button>
   );
}

