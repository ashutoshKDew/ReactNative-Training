export const getImagePath = (icon: string): string => {
  let imgSrc: string;
  switch (icon) {
    case '01d':
      // clear sky
      imgSrc = require('../assets/sun.png');
      break;
    case '02d':
      // few cloud
      imgSrc = require('../assets/sun.png');
      break;
    case '03d':
      // scattered clouds
      imgSrc = require('../assets/sun_one.png');
      break;
    case '04d':
      // overcast clouds
      imgSrc = require('../assets/cloud.png');
      break;
    case '10d':
      // light rain
      imgSrc = require('../assets/rain.png');
      break;
    case '01n':
      // clear sky
      imgSrc = require('../assets/sun.png');
      break;
    case '02n':
      // few cloud
      imgSrc = require('../assets/sun.png');
      break;
    case '03n':
      // scattered clouds
      imgSrc = require('../assets/sun_one.png');
      break;
    case '04n':
      // overcast clouds
      imgSrc = require('../assets/cloud.png');
      break;
    case '10n':
      // light rain
      imgSrc = require('../assets/rain.png');
      break;
    default:
      imgSrc = require('../assets/sun.png');
      break;
  }
  return imgSrc;
};
