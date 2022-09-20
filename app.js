/*let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}*/

let observer = new IntersectionObserver(callback);


//let observer = new IntersectionObserver(

function callback(entries, observer) {

  
  entries.forEach(entry => {
    //let root = entry.rootBounds.bottom
    // console.log(entry.target.getBoundingClientRect().bottom)
    // let target = entry.boundingClientRec.bottom
    // console.log(target)
    // console.log(entry.intersectionRatio == 0)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove("show")
    }

  });

}

//);

const elements = document.querySelectorAll('.image');

elements.forEach(element => {
  console.log(element)
  observer.observe(element);
})

//Window.requestIdleCallback(observer)

//observer.observe(element);