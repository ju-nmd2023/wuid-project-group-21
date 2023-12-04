
function changeImage(imageName) {  
  var imageContainer = document.getElementById('detailmainpicture');  
  var currentImage = imageContainer.getElementsByTagName('img')[0];  
  currentImage.src = 'pictures/' + imageName + '.png';  
}  
