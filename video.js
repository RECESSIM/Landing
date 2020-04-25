const videosList = [
  {
    src: 'https://github.com/RECESSIM/Landing/blob/master/img/Power%20Supply_Blurry%20LEDs.mp4?raw=true',
    type: 'video/mp4',
  },
  {
    src: 'https://github.com/headphonestatic/Landing/blob/master/img/media/video-1.mp4?raw=true',
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
