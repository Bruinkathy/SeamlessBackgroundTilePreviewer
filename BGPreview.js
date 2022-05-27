const inpFile = document.getElementById('inpFile');
const previewPageContainer = document.getElementById('full-page-background-tiles');
const previewContainer = document.getElementById('imagePreview');
const previewImage = previewContainer.querySelector('.image-preview__image');
const previewDefaultText = previewContainer.querySelector('.image-preview__default-text');

const imgDimensionsContainer = document.getElementById('img-dimensions')

const imgHeight = document.getElementById('img-height');
const imgWidth = document.getElementById('img-width');

const DeleteBGButton = document.getElementById('delete-bg');

inpFile.addEventListener('change', function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    previewDefaultText.style.display = 'none';
    previewImage.style.display = 'block';
    DeleteBGButton.style.display = 'inline';
    imgDimensionsContainer.style.display = 'block';
    previewContainer.style.backgroundColor = 'none';
    previewContainer.style.border = 'none';

    reader.addEventListener('load', function () {
      previewImage.setAttribute('src', this.result);
      previewPageContainer.style.backgroundImage = 'url('+this.result+')';
      previewPageContainer.style.backgroundRepeat = 'repeat';
      
      var image = new Image();
         image.src = this.result.toString();
         image.addEventListener('load', function () {
           imgWidth.value = this.width;
           imgHeight.value = this.height;
           previewPageContainer.style.backgroundSize ='auto auto';
         });
    });

    reader.readAsDataURL(file);
  } else {
    previewImage.style.display = 'none';
    previewImage.setAttribute("src", "");
    previewDefaultText.style.display = 'inline';
    previewPageContainer.style.backgroundImage = 'none';
    imgDimensionsContainer.style.display = 'none';
    previewContainer.style.backgroundColor = '#fff';
    previewContainer.style.border = 'border: 10px double #aaa';
  }
});

imgWidth.addEventListener('change', function(){
  width = imgWidth.value;
  previewPageContainer.style.backgroundSize = width +'px auto';
  imgHeight.value = 'auto';
});

imgHeight.addEventListener('change', function(){
  height = imgHeight.value;
  previewPageContainer.style.backgroundSize ='auto '+height+'px';
  imgWidth.value = 'auto';
});

DeleteBGButton.addEventListener('click', function(){
  previewImage.style.display = 'none';
  previewImage.setAttribute("src", "");
  previewDefaultText.style.display = 'inline';
  previewPageContainer.style.backgroundImage = 'none';
  DeleteBGButton.style.display='none';
  inpFile.value = "";
  imgWidth.value = ' ';
  imgHeight.value = ' ';
  imgDimensionsContainer.style.display = 'none';
  previewContainer.style.backgroundColor = '#fff';
  previewContainer.style.border = 'border: 10px double #aaa';
});

