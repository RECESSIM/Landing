const videosList = [
  {
    src: 'https://github.com/RECESSIM/Landing/blob/gh-pages/img/ShortLoop.mp4?raw=true',
    type: 'video/mp4',
  },
  {
    src: 'https://github.com/RECESSIM/Landing/blob/gh-pages/img/ShortLoop2.mp4?raw=true',
    type: 'video/mp4',
  }
];
const index = Math.floor(Math.random() * videosList.length);
console.log(index);

window.onload = () => {
  const videoElement = document.getElementById('myVideo');
  const source = document.createElement('source');

  source.setAttribute('src', videosList[index].src);
  source.setAttribute('type', videosList[index].type);
  videoElement.appendChild(source);
  videoElement.play();
  console.log(source);
};
