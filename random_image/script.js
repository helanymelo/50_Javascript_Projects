
const container = document.querySelector('.container')
const BASE_URL = 'https://source.unsplash.com/featured/'
const rows = 10

for(let i = 0; i < rows * 3; i++){
    const img = document.createElement('img')
    img.src = `${BASE_URL}${getRandomImage()}`
    
    container.appendChild(img)
}

function getRandomImage(){
    return `${getRandomNum()}x${getRandomNum()}` 
}

function getRandomNum() {
    return Math.floor(Math.random() * 10) + 300
}


