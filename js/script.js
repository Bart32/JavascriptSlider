window.onload = function()
{
  var sliderDiv = document.getElementById("slider");
  var images = ['css.png', 'html.png', 'javascript.png'];


  for(var i=0; i < images.length; i++){
    var slide = new Image();
    slide.src="img/"+images[i];
    sliderDiv.appendChild(slide);
  }

  var imagesElements = sliderDiv.getElementsByTagName('img');

  imagesElements[0].setAttribute("class", "active");
  var i = 0;
  
  setInterval(function(){
    imagesElements[i % 3].setAttribute("class", " ");
    imagesElements[(i + 1) % 3].setAttribute("class", "active");
    i++;
  },4500);
};
