const images = [
    "img/yo110x75.jpg",
    "img/c60x70.jpg",
    "img/cns90x60.jpg",
    "img/cp80x90.jpg",
    "img/cr60x70.jpg",
    "img/cv75x55.jpg",
    "img/cvv50x60.jpg",
    "img/dpv117x75.jpg",
    "img/fm50x70.jpg",
    "img/kp61x92.jpg",
    "img/mp60x90.jpg",
    "img/nvnh55x74.jpg",
    "img/pob75x55.jpg",
    "img/rk63x92.jpg",
    "img/rp100x70.jpg",
    "img/siren60x80.jpg",
    "img/sk74x55.jpg",
    "img/tanec60x90.jpg",
    "img/tk66x77.jpg",
    "img/vesmuz50x60.jpg",
    "img/vlesu74x55.jpg",
    "img/zp75x55.jpg",
    "img/rk55x74.jpg",
    "img/ks98x72.jpg"
]

const gallery = document.getElementById('gallery')
const loader = document.getElementById('loader')

function closeModal() {
    const modal = document.getElementById("myModal")
    modal.style.display = "none"
}

function openModal(src) {
    const modal = document.getElementById("myModal")
    const modalImage = document.getElementById("modalImage")
    modal.style.display = "flex"
    modalImage.src = src
}

function createGallery() {
    images.forEach(src => {
        const anchor = document.createElement('a')
        anchor.href = src
        anchor.className = 'gallery-item relative'
        anchor.onclick = (e) => {
            e.preventDefault()
            openModal(src)
        }

        const hoverDiv = document.createElement('div')
        hoverDiv.className = 'gallery-item-hover absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 opacity-0 transition-opacity duration-300'
        hoverDiv.innerText = 'Посмотреть'

        const img = document.createElement('img')
        img.src = src
        img.alt = 'alt'
        img.className = 'rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105'

        anchor.appendChild(hoverDiv)
        anchor.appendChild(img)
        gallery.appendChild(anchor)
    })

    setTimeout(() => {
        loader.style.display = 'none'
        gallery.style.display = 'grid'
    }, 3000)
}

window.onload = () => {
    createGallery()
}
