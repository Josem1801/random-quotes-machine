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
    {phrase: "Los que dicen que es imposible no deberían molestar a los que lo estan intentando.", author: "Albert Einstein"},
    {phrase: "Si quieres hacer un cambio permanente, deja de centrarte en el tamaño de tus problemas y céntrate en tu tamaño." , author: "T. Harv Eker"},
    {phrase: "Sin continuo crecimiento y perseverancia, palabras como mejora, logro y éxito no tienen significado.", author: "Benjamin Franklin"},
    {phrase: "El éxito depende de la preparación previa, y sin ella seguro que llega el fracaso.", author: "Confucio"},
    {phrase: "Para enseñar a los demás, primero has de hacer tú algo muy duro: enderezarte a ti mismo.", author: "Buda"},
    {phrase: "Cuando es evidente que los objetivos no se pueden alcanzar, no ajustes los objetivos, ajusta tos pasos.", author: "Confucio"},
    {phrase: "El conocimiento llega, pero la sabiduría perdura.", author: "Alfred Lord Tennyson"},
    {phrase: "Largo es el camino de la enseñanza por medio de teorías; breve y eficaz por medio de ejemplos.", author: "Séneca"},
    {phrase: "Enseñar es aprender dos veces.", author: "Joseph Joubert"},
    {phrase: "Las raíces de la educación son amargas, pero la fruta es dulce.", author: "Aristóteles"},
    {phrase: "El que abre la puerta de una escuela, cierra una prisió.n", author: "Victor Hugo"},
    {phrase: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.", author:"Nelson Mandela"},
    {phrase: "El que si niega a aprender en su juventud se pierde en el pasado y esta muerto para el futuro.", author: "Eurípides"},
    {phrase: "La gente vive años y años pero, en realidad, únicamente durante un tiempo vive de verdad, y es cuando consigue hacer aquello para lo que nació.", author: "Alessandro Baricco"},
    {phrase: "La pintura es poesía que se ve y no se siente, y la poesía es pintura que se siente y no se ve.", author: "Leonardo da Vinci"},
    {phrase: "Vive como si fueras a morir mañana, aprende como si fueras a vivir para siempre.", author: "James Dean"}
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
