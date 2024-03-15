import style from './styles.module.css';
import data from './recipe.json';

//website import?

export default function AuthorInfo() {
  const authorName = data.map(data => (
    <div key = {data.name}> {data.author}</div>
  ))

  const authorImage = data.map(data=>(
    <div>
      <img src={data.authorImage} className={style.authorImage}/>
    </div>
  ))

  const authorURL = data.map(data=>(
    <div>
      <a href = {data.website}>{data.website}</a>
    </div>
  ))
   return (
    <div>
    <div>{authorName}</div>
    <div>{authorImage}</div>
    <div>{authorURL}</div>
    </div>
    ) ;
 }
 

 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 