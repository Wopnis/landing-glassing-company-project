import calcScroll from "./calcScroll";

const showImages = () => {
  const imgPopup = document.createElement('div');
  const workSection = document.querySelector('.works');
  const largeImage = document.createElement('img');
  const scroll = calcScroll();

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.appendChild(largeImage);
  imgPopup.style.cssText = `
            justify-content: center;
            align-items: center;
            display: none;
  `;

  workSection.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      largeImage.setAttribute('src', path);
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
    };

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    }
  });
};
export default showImages;