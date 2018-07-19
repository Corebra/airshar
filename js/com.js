var x = document.getElementsByClassName("value-shar__item");
var headerTop =  document.getElementsByTagName("header")[0];


document.onreadystatechange =  (function() {


  window.onscroll = function () {

    if(scrollY > 1200){
      for (var i=0; i<= x.length-1; i++){
        addMyClass(x[i], 'active');
      } 
    } 
    if(scrollY > 1000){
     addMyClass(headerTop, 'topmen');
   }else{
     removeMyClass(headerTop, 'topmen');
   }
 }

})();


function addMyClass(elem, myclass) {

  if(!elem.classList.contains(myclass)){
    elem.classList.add(myclass);
  }
}
function removeMyClass(elem, myclass) {

  if(elem.classList.contains(myclass)){
    elem.classList.remove(myclass);
  }
}

