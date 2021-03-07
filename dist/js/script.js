const newQuote = document. querySelector("#new-quote")
const bgColor = document.querySelectorAll(".bg-color")
const txtColor = document.querySelectorAll(".text-color");
const changePhrase = document.querySelector("#text");
const changeAuthor = document.querySelector("#author");
const shareTwitter = document.querySelector("#tweet-quote");
const shareTumblr = document.querySelector("#tumblr-quote");

let arrPhrases = [
    {phrase: "Sólo vives una vez, pero si lo haces bien, una vez es suficiente.",author: "Mae West"}, 
    {phrase: "Tu tiempo es limitado, así que no lo desperdicies viviendo la vida de otra persona.", author:"Steve Jobs"},
    {phrase: "Vive como si fueras a morir mañana. Aprende como si fueras a vivir para siempre.", author: "Mahatma Gandhi"},
    {phrase: "No cuentes tus días, haz que tus días cuenten.", author: "Muhammad Ali"},
    {phrase: "La vida no se trata de encontrarte a ti mismo. La vida se trata de crearte a ti mismo.", author: "George Bernard Shaw"},
    {phrase: "Todos nuestros sueños pueden hacerse realidad si tenemos el coraje de perseguirlos.", author: "Walt Disney"},
    {phrase: "Algunas personas quieren que suceda, algunos desean que suceda, otros lo hacen posible.", author: "Michael Jordan"},
    {phrase: "El riesgo más grande es no tomar ninguno. En un mundo que está cambiando tan rápido, la única estrategia que está garantizada a fracasar es no tomar riesgos.", author: "Mark Zuckerberg"},
    {phrase: "La mejor manera de aprender sobre cualquier cosa es haciéndolo.", author: "Richard Branson"},
    {phrase: "Si siempre haces lo que te interesa, al menos una persona estará contenta.", author: "Katharine Hepburn"},
    {phrase: "Nada grande se ha logrado sin entusiasmo.", author: "Ralph Waldo Emerson"},
    {phrase: "Los que dicen que es imposible no deberían molestar a los que lo estan intentando.", author: "Albert Einstein"}
]

newQuote.addEventListener("click", changeAll)
window.addEventListener("load",changeAll)


function changeAll(){
    let color = `rgb(${getRandom()},${getRandom()},${getRandom()})`
    let aleatorio = Math.floor(Math.random() * arrPhrases.length);
    
    bgColor.forEach(element => {
        element.style.backgroundColor = color;
    });

    txtColor.forEach(element => {
        element.style.color = color;
    })
    let newPhrase = arrPhrases[aleatorio].phrase;
    let newAuthor = arrPhrases[aleatorio].author;
    changePhrase.textContent = newPhrase;
    changeAuthor.innerText = "- " + newAuthor;
    shareTwitter.setAttribute("href","https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
                                +newPhrase + " - "+ newAuthor);
    shareTumblr.setAttribute("href", 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' 
                                    + newAuthor +'&content=' + newPhrase 
                                    +'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button')
    //Animation opacity
    changePhrase.classList.toggle('toggle')
    changeAuthor.classList.toggle('toggle')
}

function getRandom(){
    return Math.floor(Math.random() * 255)
}
