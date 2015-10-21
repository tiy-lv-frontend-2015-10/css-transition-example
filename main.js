function docready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

docready(function(){
  var container = document.getElementById("box");

  container.addEventListener("click", function(){
    container.classList.toggle("animate");
  })
  
});
