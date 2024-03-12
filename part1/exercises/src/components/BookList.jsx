export default function BookList() {
   let pageTitle = "a better section heading";
   let book1 = "https://whitmorerarebooks.cdn.bibliopolis.com/pictures/1699.jpg?auto=webp&v=1522521921";
   let book2 = "https://cdn-yotpo-images-production.yotpo.com/instagram/93/17965452869529293/standard_resolution.jpg";
   let book3 = "https://images.booksense.com/images/712/413/9780756413712.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Original Jane Austen Pride and Prejudice Set" />
         <img src={book2} alt="Game of Thrones Folio Society Set" />
         <img src={book3} alt="The Name of the Wind, by Patrick Rothfuss" />
      </div>      
   );
}