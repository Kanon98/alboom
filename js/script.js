// Mostrar nueva colección

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

let clickImage = ()=> {
   dropImage.addEventListener('click', ()=> {
   inputImage.click()
  }
)}


clickImage();

// dropImage.addEventListener('click', ()=> {
//   inputImage.click()
// });

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


 // Carga de archivos de Imágenes

let progressBarImage = document.querySelector('.circular-progress-image');
let percentageImage = document.querySelector('.percentage-image');
const loadbarImage = document.querySelector('.loadbar-image');
const searchImage = document.getElementById('search-image')
const modal = document.getElementById('modal')
const modalImage = document.getElementById('modal-image')

inputImage.addEventListener('change', (e) => {

  console.log(inputImage.files)
  const file = e.target.files[0]
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file)
  fileReader.addEventListener('progress', (e)=>{
    let loaded = parseInt(e.loaded * 100 / e.total);
    let width = loaded * 0.8;
    progressBarImage.style.width = width + '%';
  })
  fileReader.addEventListener('loadend',(e)=>{
    loadbarImage.classList.add('traslate-loadbar--image')
    const thumb = document.getElementById('thumb-image')
    thumb.style.visibility = "visible";
    thumb.setAttribute('src', e.target.result)
    searchImage.classList.add('search-view')
    searchImage.addEventListener('mouseenter',()=>{
    thumb.classList.add('emergency')
    })
    searchImage.addEventListener('mouseleave',()=>{
    thumb.classList.remove('emergency')
    })


    clickImage = function(){};

    //dropImage.removeEventListener('click',clickImage)





    searchImage.addEventListener('click',()=>{
      modal.classList.add('modal-show')
      e.preventDefault();
    })
  })
})







// Arrastre de archivos de vídeo

const inputVideo = document.getElementById('input-video');
const dropVideo = document.getElementById('drop-video');


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
  const file = inputVideo.files ;
  console.log(file)
})

 // Carga de archivos de vídeo

 const loadbarVideo = document.querySelector('.loadbar-video');

 let progressBarVideo = document.querySelector('.circular-progress-video')
 let percentageVideo = document.querySelector('.percentage-video')

inputVideo.addEventListener('change', (e) => {
  loadbarVideo.classList.add('traslate-loadbar--video')
  const fileVideo = e.target.files[0]
  const fileReaderVideo = new FileReader();
  fileReaderVideo.readAsDataURL(fileVideo);
  console.log(inputVideo.value)


  fileReaderVideo.addEventListener('progress', (e)=>{
    let loadedVideo = parseInt(e.loaded * 100 / e.total);
    percentageVideo.textContent = `${loadedVideo}%`;
    progressBarVideo.style.background = `conic-gradient(
      #45ae70 ${loadedVideo * 3.6}deg,
      #cadcff ${loadedVideo * 3.6}deg
    )`
  })
  fileReaderVideo.addEventListener('load',(e)=>{
    const thumb = document.getElementById('thumb-video')
    thumb.classList.add('z-index')
    thumb.setAttribute('src', e.target.result)
    thumb.setAttribute('controls', e.target.result)
  })
})

// Enviar formulario

const terminar = document.querySelector('.terminar')
const wrong = document.querySelector('.wrong');

let showWrong = ()=>{
  wrong.classList.add('wrong--visible')
}

terminar.addEventListener('click',showWrong);

// Agregar nuevo formulario
