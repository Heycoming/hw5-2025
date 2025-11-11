var video;

window.addEventListener("load", function() {
    console.log("Page loaded successfully");

    video = document.querySelector("#player1");

    video.autoplay = false;
    video.loop = false;

    let slider = document.querySelector("#slider");
    let volumeDisplay = document.querySelector("#volume");
    volumeDisplay.textContent = slider.value + "%";

    document.querySelector("#play").addEventListener("click", () => {
        console.log("Play Video");
        video.play();
        volumeDisplay.textContent = slider.value + "%";
    });

    document.querySelector("#pause").addEventListener("click", () => {
        console.log("Pause Video");
        video.pause();
    });

    document.querySelector("#slower").addEventListener("click", () => {
        let newSpeed = video.playbackRate * 0.9;
        video.playbackRate = newSpeed;
        console.log("New speed: " + video.playbackRate.toFixed(5));
    });

    document.querySelector("#faster").addEventListener("click", () => {
        let newSpeed = video.playbackRate / 0.9;
        video.playbackRate = newSpeed;
        console.log("New speed: " + video.playbackRate.toFixed(5));
    });

    document.querySelector("#skip").addEventListener("click", () => {
        console.log("Skip Ahead");
        if (video.currentTime + 10 < video.duration) {
            video.currentTime += 10;
        } else {
            video.currentTime = 0;
        }
        console.log("Current time: " + video.currentTime);
    });

    document.querySelector("#mute").addEventListener("click", (e) => {
        if (video.muted) {
            video.muted = false;
            e.target.textContent = "Mute";
        } else {
            video.muted = true;
            e.target.textContent = "Unmute";
        }
        console.log("Muted: " + video.muted);
    });

    slider.addEventListener("input", () => {
        video.volume = slider.value / 100;
        volumeDisplay.textContent = slider.value + "%";
        console.log("Volume: " + video.volume);
    });

    document.querySelector("#vintage").addEventListener("click", () => {
        console.log("Apply oldSchool style");
        video.classList.add("oldSchool");
    });

    document.querySelector("#orig").addEventListener("click", () => {
        console.log("Revert to original style");
        video.classList.remove("oldSchool");
    });
});
