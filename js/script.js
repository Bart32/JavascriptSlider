window.onload = function()
{




  var sliderDiv = document.getElementById("slider");
  var thumbnailsDiv = document.getElementById("thumbnails");
  var images = ['css.png', 'html.png', 'javascript.png'];


  for(var i=0; i < images.length; i++){
    var slide = new Image();
    var thumbnail = new Image();
    thumbnail.src = "img/"+images[i];
    slide.src="img/"+images[i];
    thumbnailsDiv.appendChild(thumbnail);
    sliderDiv.appendChild(slide);
  }



  var imagesElements = sliderDiv.getElementsByTagName('img');
  var thumbnailsElements = thumbnailsDiv.getElementsByTagName('img');



  imagesElements[0].setAttribute("class", "active");
  var k = 0;
  var sliderInterval = setInterval(function(){
    imagesElements[k % 3].setAttribute("class", " ");
    imagesElements[(k + 1) % 3].setAttribute("class", "active");
    i++;
  },4500);

  for (var j = 0; j <= thumbnailsElements.length-1; j++)
 {
 thumbnailsElements[j].onclick = function()
  {
          clearInterval(sliderInterval);
          document.getElementsByClassName('active')[0].setAttribute("class", " ");
          var index = Array.from(this.parentElement.children).indexOf(this) 
          imagesElements[index].setAttribute("class", "active");
          k=index;
          sliderInterval = setInterval(function(){
            imagesElements[k % 3].setAttribute("class", " ");
            imagesElements[(k + 1) % 3].setAttribute("class", "active");
            k++;
          },4500);
  }
 };
};
