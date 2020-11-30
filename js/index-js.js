

var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var imgList=document.querySelectorAll(".img-hover");
var imgArray = [];
var numbers=document.getElementById("num")
var lightboxContainer = document.getElementById("lightbox-container");
var lightboxItem = document.getElementById("lightbox-item");
var currentSlideIndex =0; 
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
//convert imglist to array
for(var i=0;i <imgList.length ;i++)
{
    imgArray.push(imgList[i]); 
  
    imgArray[i].addEventListener("click" , function(){
        currentSlideIndex =imgArray.indexOf(this);

        var imgSrc =this.firstElementChild.src;
  
        lightboxItem.style.backgroundImage="url("+imgSrc+")"
       lightboxContainer.style.display ="flex";
numbers.innerHTML=`<p class=" text-light ">`+(currentSlideIndex+1)+`/`+imgArray.length+`</p>`
        
    })}


    function nextslider(){
       
        currentSlideIndex++;
        if(currentSlideIndex >imgArray.length)
        {
            currentSlideIndex=0;
        }
        var imgSrc =imgArray[currentSlideIndex].firstElementChild.src;
        lightboxItem.style.backgroundImage="url("+imgSrc+")"
       lightboxContainer.style.display ="flex";
       numbers.innerHTML=`<p class=" text-light ">`+(currentSlideIndex+1)+`/`+imgArray.length+`</p>`

       
    }
    nextBtn.addEventListener("click",nextslider)
    function prevslider(){
       
        currentSlideIndex--;
        if(currentSlideIndex < 0 )
        {
            currentSlideIndex=imgArray.length;
        }
        console.log(currentSlideIndex)
        var imgSrc =imgArray[currentSlideIndex].firstElementChild.src;
        console.log(imgSrc)
        lightboxItem.style.backgroundImage="url("+imgSrc+")"
       lightboxContainer.style.display ="flex";
       numbers.innerHTML=`<p class=" text-light ">`+(currentSlideIndex+1)+`/`+imgArray.length+`</p>`

       
    }
    prevBtn.addEventListener("click",prevslider)
closeBtn.addEventListener("click", function(){
    lightboxContainer.style.display="none";
}
);

 // nextBtn.addEventListener("keydown",function(event){debugger;


    
 //     nextslider();}
// );