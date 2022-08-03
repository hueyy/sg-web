const pickRandom = (array) => array[Math.floor(Math.random() * array.length)]
const walk = async () => {
  const html = await (await fetch(`/blogs.html`)).text()
  const parser = new DOMParser()
  const htmlDocument = parser.parseFromString(html, `text/html`)
  const links = htmlDocument.querySelectorAll(`#main-content ul a[href^="https://"], #main-content ul a[href^="http://"]`)
  window.location.href = pickRandom(links).href
}

const init = () => {
  document.getElementById(`forestWalk`).addEventListener(`click`, walk)
}

if (document.readyState === 'complete') {
  init()
} else {
  document.addEventListener("DOMContentLoaded", init)
}