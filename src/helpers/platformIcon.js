import {
  FaAndroid,
  FaApple,
  FaGlobe,
  FaLinux,
  FaMobileAlt,
  FaPlaystation,
  FaWindows,
  FaXbox
} from 'react-icons/fa';

const icon = {
  playstation: <FaPlaystation />,
  pc: <FaWindows />,
  xbox: <FaXbox />,
  ios: <FaMobileAlt />,
  android: <FaAndroid />,
  mac: <FaApple />,
  linux: <FaLinux />,
  web: <FaGlobe />
};

export function platformIcon(slug) {
  return icon[slug];
}
