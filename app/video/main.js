let playBtn = document.getElementById("play"),
  pauseBtn = document.getElementById("pause"),
  f10secBtn = document.getElementById("f10"),
  b10secBtn = document.getElementById("b10"),
  volumeBtn = document.getElementById("volume"),
  volumeInputEle = document.getElementById("volume-slider"),
  muteBtn = document.getElementById("mute"),
  unMuteBtn = document.getElementById("un-mute"),
  downloadBtn = document.getElementById("download"),
  swapBtn = document.getElementById("swap"),
  fullScreenBtn = document.getElementById("full-screen"),
  video = document.getElementById("main-video");

function videoPlay() {
  video.play();
}
function videoPause() {
  video.pause();
}
//video forward 10 sec
function videoF10() {
  let cTime = video.currentTime;
  cTime = cTime + 5;
  video.currentTime = cTime;
}
//video backward 10 sec
function videoB10() {
  let cTime = video.currentTime;
  cTime = cTime - 5;
  video.currentTime = cTime;
}
function volumeUpdate() {
  //get slider value
  let volumeInput = volumeInputEle.value;
  console.log(volumeInput);

  //convert point value
  volumeInput = volumeInput / 100;
  console.log(volumeInput);

  //update the volume
  video.volume = volumeInput;
}

//mute and unmute
function videomute() {
  video.muted = true;
}
function videounMute() {
  video.muted = false;
}

//download file
function videoDownload() {
  // get the file name
  //TODO
  let filePath = video.getAttribute("src");
}

//video swap
function videoSwap() {
  // get the selected video & current time of the video
  let currentVideo = this.value,
    cTime = video.currentTime;

  // change the attribute of src to currentvideo
  video.setAttribute("src", currentVideo);

  // current time of the selected video is changed before selected video time
  video.currentTime = cTime;

  // play the video
  videoPlay();
}

playBtn.addEventListener("click", videoPlay);
pauseBtn.addEventListener("click", videoPause);
f10secBtn.addEventListener("click", videoF10);
b10secBtn.addEventListener("click", videoB10);
volumeBtn.addEventListener("click", volumeUpdate);
muteBtn.addEventListener("click", videomute);
unMuteBtn.addEventListener("click", videounMute);
downloadBtn.addEventListener("click", videoDownload);
swapBtn.addEventListener("change", videoSwap);
