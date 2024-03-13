
export default function(){
    let hobbyLinks = [
        "https://developer.mozilla.org/en-US/",
        "https://www.ultimate-guitar.com/"]

        return (
            <div> My hobbies
                <a href={hobbyLinks[0]}>MDN</a>
                <a href= {hobbyLinks[1]}>Ultimate Guitar</a>
            </div>
        )
}