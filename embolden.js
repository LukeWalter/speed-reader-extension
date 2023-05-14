function emboldenWord(word) {

    const len = word.length
    const add = (len % 2 == 0) ? 0 : 1

    const firstHalf = "<b>" + word.substring(0, len / 2 + add) + "</b>"
    const secondHalf = word.substring(len / 2 + add, len)

    return firstHalf + secondHalf

} // emboldenWord

function embolden(phrase) {
    
    const words = phrase.split(" ")
    
    for (let i = 0; i < words.length; i++)
        words[i] = emboldenWord(words[i])

    let newPhrase = ""

    for (let i = 0; i < words.length - 1; i++)
        newPhrase += words[i] + " "

    return newPhrase + words[words.length - 1]

} // embolden

let tags = [ "p", "h1", "h2", "h3", "h4", "h5", "h6" ]
let elements = []
let taggedElements = []

for (let i = 0; i < tags.length; i++) {

    taggedElements = document.getElementsByTagName(tags[i])
    
    for (let j = 0; j < taggedElements.length; j++)
        elements = elements.concat(taggedElements[j])
        
} // for

for (let i = 0; i < elements.length; i++)
    elements[i].innerHTML = embolden(elements[i].innerHTML)