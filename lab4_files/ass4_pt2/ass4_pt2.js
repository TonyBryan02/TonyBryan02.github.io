const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
  {
    filename: 'https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic1.jpg',
    alt: 'Human eye close up'
  },
  {
    filename: 'https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic2.jpg',
    alt: 'Rock formation close up'
  },
  {
    filename: 'https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic3.jpg',
    alt: 'Purple and white flowers'
  },
  {
    filename: 'https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic4.jpg',
    alt: 'Ancient Egyptian art'
  },
  {
    filename: 'https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg',
    alt: 'Large moth on a tree leaf'
  }
];
