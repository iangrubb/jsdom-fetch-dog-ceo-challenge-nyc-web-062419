

document.addEventListener("DOMContentLoaded", () => {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        const dogContainer = document.querySelector('#dog-image-container')
        data.message.forEach(dogUrl => {
            dogContainer.insertAdjacentHTML("beforeend", `<img src=${dogUrl}>`)
        })
    })

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        const breedsContainer = document.querySelector('#dog-breeds')
        for (let breed in data.message) {
            const breedItem = document.createElement('li')
            breedItem.innerText = breed
            breedItem.addEventListener("click", (event) => breedItem.setAttribute("style", "color:blue"))
            breedsContainer.append(breedItem)
        }
    })

    const dropdown = document.querySelector('#breed-dropdown')

    dropdown.addEventListener("change", event => {

        fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
        const breedsContainer = document.querySelector('#dog-breeds')
        breedsContainer.innerHTML = ""

        //sort breed
        for (let breed in data.message) {
            if (event.target.value === breed[0].toLowerCase()) {
                const breedItem = document.createElement('li')
                breedItem.innerText = breed
                breedItem.addEventListener("click", (event) => breedItem.setAttribute("style", "color:blue"))
                breedsContainer.append(breedItem)
            }
            }
        })

    })





})