import gsap from 'gsap'

let SQ_CONTAINER: HTMLCollectionOf<Element>
let NUM_CONTAINER: HTMLCollectionOf<Element>
let DOT_GRID: HTMLCollectionOf<Element>

if (typeof window !== 'undefined') {
  SQ_CONTAINER = document.getElementsByClassName('square')
  NUM_CONTAINER = document.getElementsByClassName('number')
  DOT_GRID = document.getElementsByClassName('dot-grid-svg')
}

function moveNumElement(event: React.MouseEvent) {
  const x = event.clientX / window.innerWidth - 0.5
  const y = event.clientY / window.innerHeight - 0.5

  gsap.to([SQ_CONTAINER, NUM_CONTAINER], {
    duration: 0.6,
    x: x * 20,
    y: y * 20,
    ease: 'power4.easeOut',
  })

  gsap.to(DOT_GRID, {
    duration: 0.6,
    x: -x * 20,
    y: -y * 20,
  })
}

export default moveNumElement

