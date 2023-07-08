const tagsContainer = document.getElementById('tags')
const textArea = document.getElementById('textarea')


textArea.focus()
textArea.addEventListener('keyup', (event) => {
    processInput(event.target.value)

    if(event.key === 'Enter') {
        setTimeout(() => {
            event.target.value = ''
        }, 10)
        const tags = document.querySelectorAll('.tag')
        selectRandomChoice(tags)
    }


})

function processInput(input) {
    const inputChoices = input.split(',')
                               .filter(tag => tag.trim() !== '')
                               .map(tag => tag.trim())

    tagsContainer.innerHTML = ''

    inputChoices.forEach(tag => {
        const tagElement = document.createElement('span')
        tagElement.classList.add('tag')
        tagElement.innerText = tag
        tagsContainer.appendChild(tagElement)
    });

}

function selectRandomChoice(tags) {
    const iterations = tags.length * 1.2
    const interval = setInterval(() => {
        const randomTag = pickRandomTag(tags)
        highlightTag(randomTag)
        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag(tags)
            highlightTag(randomTag)
        }, 100);
    },iterations * 100);
}

function pickRandomTag(tags) {
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}