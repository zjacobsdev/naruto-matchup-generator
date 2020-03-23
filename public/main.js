var btn = document.querySelector("#random-btn").addEventListener('click', randomMatchUp);
//var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.querySelectorAll('.fa-trash')

function randomMatchUp(){
  fetch('random', { method: 'post'}) 
  window.location.reload() 
}

Array.from(trash).forEach(function(element) {
      console.log("click")
      element.addEventListener('click', function(){
        const player = this.parentNode.parentNode.childNodes[1].textContent
        const opponent = this.parentNode.parentNode.childNodes[5].textContent
        // console.log(this.parentNode.parentNode.childNodes[1].textContent)
        // console.log(this.parentNode.parentNode.childNodes[5].textContent)
        fetch('/arena', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'player': player,
            'opponent': opponent
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
