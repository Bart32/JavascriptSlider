window.onload = function()
{

  var sliderDiv = document.getElementById("slider");
  var thumbnailsDiv = document.getElementById("thumbnails");
  var images = ['css.png', 'html.png', 'javascript.png'];

// Displaying slides and thumbnails
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



// Slider
  var k = 0;

  function startSlider(){
    imagesElements[k % 3].setAttribute("class", " ");
    imagesElements[(k + 1) % 3].setAttribute("class", "active");
    k++;
  }

  var sliderInterval = setInterval(startSlider,4500);


// Thumbnails click function
  for (var j = 0; j <= thumbnailsElements.length-1; j++)
 {
 thumbnailsElements[j].addEventListener('click', function(){
          clearInterval(sliderInterval); // Stoping slider
          document.getElementsByClassName('active')[0].setAttribute("class", " "); // Removing actual 'active' class
          var index = Array.from(this.parentElement.children).indexOf(this); // Getting index of clicked thumbnail
          imagesElements[index].setAttribute("class", "active");
          k=index;
          sliderInterval = setInterval(startSlider,4500);
  });
 };
};
