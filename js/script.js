// Agregar nueva colección

const add = document.getElementById('add-colecction');
const newCollection = document.getElementById('new-collection')

const messageMain = document.querySelector('.message-main');
const messageCollection = document.querySelector('.message-collection')

add.addEventListener('click',()=>{
  newCollection.classList.add('show-collection');
  messageMain.classList.add('hide-collection');
  messageCollection.classList.add('hide-collection');
})



// Arrastre y carga del archivo de Imágenes

const inputImage = document.getElementById('input-image');
const dropImage = document.getElementById('drop-image');

dropImage.addEventListener('click', ()=> {
  inputImage.click()
});

dropImage.addEventListener('dragover',(e)=> {
  e.preventDefault()
  dropImage.classList.add('drop-zone--active')
})

dropImage.addEventListener('dragleave',(e)=> {
  e.preventDefault()
  dropImage.classList.remove('drop-zone--active')
})

dropImage.addEventListener('drop', (e) => {
  e.preventDefault();
  inputImage.files = e.dataTransfer.files
})

inputImage.addEventListener('change', (e) => {
  e.preventDefault();
})


let progressBarImage = document.querySelector('.circular-progress-image');
let percentageImage = document.querySelector('.percentage-image');
const loadbarImage = document.querySelector('.loadbar-image');

inputImage.addEventListener('change', (e) => {
  loadbarImage.classList.add('traslate-loadbar--image')
  console.log(inputImage.files)
  const file = e.target.files[0]
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file)
  fileReader.addEventListener('progress', (e)=>{
    let loaded = parseInt(e.loaded * 100 / e.total);
    percentageImage.textContent = `${loaded}%`;
    progressBarImage.style.background = `conic-gradient(
      #45ae70 ${loaded * 3.6}deg,
      #cadcff ${loaded * 3.6}deg
    )`
  })
})

// Arrastre y carga de archivos de vídeo

const inputVideo = document.getElementById('input-video');
const dropVideo = document.getElementById('drop-video');
const loadbarVideo = document.querySelector('.loadbar-video');

let progressBarVideo = document.querySelector('.circular-progress-video')
let percentageVideo = document.querySelector('.percentage-video')

dropVideo.addEventListener('click', ()=> {
  inputVideo.click()
});

dropVideo.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropVideo.classList.add('drop-zone--active')
})

dropVideo.addEventListener('dragleave',(e)=> {
  e.preventDefault();
  dropVideo.classList.remove('drop-zone--active')
})

dropVideo.addEventListener('drop', (e) => {
  e.preventDefault();
  inputVideo.files = e.dataTransfer.files
  console.log(inputVideo.files)
})

inputVideo.addEventListener('change', (e) => {
  loadbarVideo.classList.add('traslate-loadbar--video')
  const fileVideo = e.target.files[0]
  const fileReaderVideo = new FileReader();
  fileReaderVideo.readAsDataURL(fileVideo)
  fileReaderVideo.addEventListener('progress', (e)=>{
    let loadedVideo = parseInt(e.loaded * 100 / e.total);
    percentageVideo.textContent = `${loadedVideo}%`;
    progressBarVideo.style.background = `conic-gradient(
      #45ae70 ${loadedVideo * 3.6}deg,
      #cadcff ${loadedVideo * 3.6}deg
    )`
  })
})
