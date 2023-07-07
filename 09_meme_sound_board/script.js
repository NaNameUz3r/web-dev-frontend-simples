const sounds = ["bing-chilling", "directed", "hehe-boy", "hello-there", "pipe", "wow"]

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', ()  => {
        stopSounds()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSounds() {
    sounds.forEach(sound => {
        const soundThis = document.getElementById(sound)

        soundThis.pause()
        soundThis.currentTime = 0
    })
}