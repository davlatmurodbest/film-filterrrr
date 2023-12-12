const elitem = document.querySelector(".list")
const elhello = document.getElementById("hello").content
const elselect = document.querySelector('.selection')
const elform = document.querySelector('.form')

const rendergenro = (arrey) => {
    const genres = [];

    arrey.forEach(filma => {
        filma.genres.forEach((genre) => {
            if (!genres.includes(genre)) {
                genres.push(genre)
            }
        })
    });
    // console.log(arrey);
    return genres;
}

function renderAll() {
    const newOptions = document.createElement("option")
    newOptions.value = "All"
    newOptions.textContent = "All"

    elselect.appendChild(newOptions)
}
renderAll()

const rendoselect = (arrey) => {

    arrey.forEach((genre) => {
        const newoption = document.createElement('option')
        newoption.value = genre;
        newoption.textContent = genre;


        elselect.appendChild(newoption)
    })

}
rendoselect(rendergenro(films))

function normalize(format) {

    const newdate = new Date(format)
    const day = String(newdate.getDate() + 1).padStart(2, 0)
    const month = String(newdate.getMonth() + 1).padStart(2, 0)
    const year = String(newdate.getFullYear() + 1)

    return day + '.' + month + '.' + year
}

var selflife = (array) => {
    array.forEach((films) => {
        const render = elhello.cloneNode(true)

        render.querySelector('.item__pic').src = films.poster
        render.querySelector('.heading').textContent = films.title
        render.querySelector('.text').textContent = films.overview
        render.querySelector('.time').textContent = normalize(films.release_date)
        render.querySelector('.genre').textContent = films.genres

        elitem.appendChild(render)
    });
}
selflife(films)


elform.addEventListener('change', (evt) => {
    evt.preventDefault()

    elitem.innerHTML = null

    const allselect = [];

    films.forEach(filma => {
        if (elselect.value == 'All') {
            allselect.push(filma)
        } else if (filma.genres.includes(elselect.value)) {
            allselect.push(filma)
        }
    })

    selflife(allselect, elselect)
})