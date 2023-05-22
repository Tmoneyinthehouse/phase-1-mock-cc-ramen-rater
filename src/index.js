// write your code here
fetch('http://localhost:3000/ramens')
    .then((resp) => resp.json())
    .then((ramenObjects) => {
        ramenObjects.forEach(ramenObject => renderRamenMenuItem(ramenObject))
        selectRamen(ramenObjects[0])    
    })

function renderRamenMenuItem(ramen) {
    const newImg = document.createElement('img')
    newImg.src = ramen.image

    newImg.addEventListener('click', () => selectRamen(ramen))

    document.querySelector('#ramen-menu').appendChild(newImg)
}

function selectRamen(ramen) {
    const img = document.querySelector('.detail-image')
    img.src = ramen.image

    const name = document.querySelector('.name')
    name.textContent = ramen.name

    const restaurant = document.querySelector('.restaurant')
    restaurant.textContent = ramen.restaurant

    const rating = document.querySelector('#rating-display')
    rating.textContent = ramen.rating

    const comment = document.querySelector('#comment-display')
    comment.textContent = ramen.comment
}

const form = document.querySelector('#new-ramen')

form.addEventListener('submit', (event) => handleSubmit(event))

function handleSubmit(event) {
    event.preventDefault()

    const ramenObject = {
        "name": event.target.name.value,
        "restaurant": event.target.restaurant.value,
        "image": event.target.image.value,
        "rating": event.target.rating.value,
        "comment": event.target['new-comment'].value
    }

    renderRamenMenuItem(ramenObject)

    selectRamen(ramenObject)

    event.target.reset()

}