import Sound from 'react-native-sound';

//在静音模式下启用播放

Sound.setCategory('Playback');

let sound: Sound;

const init = (url: string) => {
  return new Promise((resolve, reject) => {
    sound = new Sound(url,'', (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

const initPlayer = (filepath: string) => {
  return new Promise((resolve, reject) => {
    sound = new Sound(filepath, '', (error) => {
      if (error) {
        console.log('failed to load the sound: ', error);
        reject(error);
      } else {
        resolve(sound);
      }
    });
  });
};

const playComplete = () => {
  return new Promise((resolve, reject) => {
    sound.play((success) => {
      if (success) {
        console.log('successfully finished playing');
        resolve(sound);
      } else {
        console.log('playback failed due to audio decoding errors');
        reject();
      }
    });
  });
};

const stop = () => {
  return new Promise((resolve, reject) => {
    if (sound) {
      sound.stop(() => {
        resolve();
      });
    } else {
      reject();
    }
  });
};

const getCurrentTime = () => {
  return new Promise((resolve, reject) => {
    if (sound && sound.isLoaded()) {
      sound.getCurrentTime((seconds) => {
        resolve(seconds);
      });
    } else {
      reject();
    }
  });
};

//获取音频时长

const getDuration = () => {
  if (sound) {
    return sound.getDuration();
  }
  return 0;
};

const play = () => {
  return new Promise((resolve, reject) => {
    if (sound) {
      sound.play((success) => {
        if (success) {
          resolve();
        } else {
          reject();
        }
      });
    } else {
      reject();
    }
  });
};

const pause = () => {
  return new Promise((resolve) => {
    if (sound) {
      sound.pause(() => {
        resolve();
      });
    } else {
      resolve();
    }
  });
};

export {
  sound,
  init,
  pause,
  getDuration,
  play,
  initPlayer,
  playComplete,
  stop,
  getCurrentTime,
};
