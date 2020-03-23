var btn = document.querySelector("#random-btn").addEventListener('click', randomMatchUp);
//var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");


function randomMatchUp(){
  fetch('random', {
    method: 'post',
    // headers: {'Content-Type': 'application/json'},
    // body: JSON.stringify({
    //   'candy': candy,
    //   'comment': comment,
    //   'thumbUp':thumbUp
    // })
  })
  .then(response => {
    if (response.ok) window.location.reload(true)
  })
}


// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const candy = this.parentNode.parentNode.parentNode.childNodes[2].value
//         const comment = this.parentNode.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.parentNode.childNodes[5].innerText)
//         //console.log(candy)
//         fetch('ranking', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'candy': candy,
//             'comment': comment,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

// Array.from(thumbDown).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const candy = this.parentNode.parentNode.childNodes[1].innerText
//     const comment = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('thumbdown', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': candy,
//         'comment': comment,
//         'thumbUp':thumbUp
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const candy = this.parentNode.parentNode.childNodes[1].innerText
        const comment = this.parentNode.parentNode.childNodes[2].innerText
        fetch('ranking', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'candy': candy,
            'comment': comment
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
