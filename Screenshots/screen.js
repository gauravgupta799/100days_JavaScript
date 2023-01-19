const btn =document.querySelector("#src-btn");
const screenshotPreview = document.querySelector(".src-preview")
const closeIcon = document.querySelector("#close-icon")

const captureScreen =async ()=>{
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({preferCurrentTab:true})
    console.log(stream);
    const video = document.createElement("video");
    console.log(video)
    video.addEventListener("loadedmetadata", ()=>{
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        // console.log(ctx, canvas)

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        video.play();
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        stream.getVideoTracks()[0].stop();
        screenshotPreview.querySelector("img").src = canvas.toDataURL();
        screenshotPreview.classList.add("show");
        // document.body.appendChild(canvas);
    })
    video.srcObject = stream;
  } catch (error) {
    alert("Failed to capture screenchot!")
  }
}

closeIcon.addEventListener('click', ()=>{
    screenshotPreview.classList.remove("show");
})
btn.addEventListener("click", captureScreen)

