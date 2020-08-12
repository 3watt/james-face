const { ipcRenderer } = require('electron')
const path = require('path');
const rootPath = require('electron-root-path').rootPath;

const AnimeEmotion = ["going_up", "four", "five", "six", "fuck_you"];

VideoFace.onended = function () {
  console.log('Video ended. Returning to normal')
  loadEmotion('normal')
}

function loadEmotion(emotion) {
  const vidSrc = path.join(rootPath, 'data', emotion + '.mp4');
  console.log(`Emotion ${emotion}`);
  if( AnimeEmotion.includes(emotion)){
    if (emotion === "going_up"){
      GoingUp();
    } else if (emotion === "four") {
      ShowFloor('4');
    } else if (emotion === "five") {
      ShowFloor('5');
    } else if (emotion === "six" ) {
      ShowFloor('6');
    } else if (emotion === "fuck_you") {
      EasterEgg("Fuck You");
    }
  } else {
    document.getElementById('mp4-src').src = vidSrc
    VideoFace.load()
    VideoFace.play()
  }
}

ipcRenderer.on('set-emotion', (event, arg) => {
	const emotion = arg.emotion
  loadEmotion(emotion)
})

loadEmotion('boot_up')

 