function removeBr(element) {
  if (window.matchMedia("(max-width: 1024px) and (min-width: 768px)").matches || window.matchMedia("(max-width: 767px) and (min-width: 301px)").matches) {
    let text = document.getElementById(element);
    text.innerHTML = text.innerHTML.replace(/<br>/g, "");
  }
}
removeBr("home-about");
removeBr("footer-text");

if (window.matchMedia("(max-width: 1024px) and (min-width: 768px)").matches || window.matchMedia("(max-width: 767px) and (min-width: 301px)").matches) {
  let carouselSlide = document.querySelector(".container-carousel .carousel");
  carouselSlide.classList.remove("carousel");
}

if (window.matchMedia("(max-width: 767px) and (min-width: 301px)").matches) {
  const bannerImage = document.querySelectorAll("section#banner-ads img");
  bannerImage.forEach((element) => {
    element.style.width = "150px";
  });
}
