function changeImage(imageName) {  
    const imageContainer = document.getElementById('detailmainpicture');  
    const currentImage = imageContainer.getElementsByTagName('img')[0];  
    currentImage.src = 'pictures/' + imageName + '.png';  
  }  