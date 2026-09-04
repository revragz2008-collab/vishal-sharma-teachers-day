document.addEventListener("DOMContentLoaded", () => {
    const revealBtn = document.getElementById("reveal-btn");
    const mentorsSection = document.getElementById("mentors");
    const bgMusic = document.getElementById("bg-music");
    const musicToggle = document.getElementById("music-toggle");
    
    let isMusicPlaying = false;

    if (revealBtn && mentorsSection) {
        revealBtn.addEventListener("click", () => {
            mentorsSection.classList.add("visible");
            setTimeout(() => { mentorsSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);

            if (bgMusic) {
                bgMusic.volume = 0.5;
                bgMusic.play().then(() => {
                    isMusicPlaying = true;
                    if (musicToggle) musicToggle.style.display = "flex";
                }).catch((err) => console.log("Audio play blocked:", err));
            }
        });
    }

    const smashBtn = document.getElementById("smash-btn");
    if (smashBtn) {
        smashBtn.addEventListener("click", () => {
            // Save music state so it carries over to the next page if needed, or we just jump to celebrate.html
            window.location.href = "celebrate.html";
        });
    }

    if (musicToggle) {
        musicToggle.addEventListener("click", () => {
            if (bgMusic) {
                if (isMusicPlaying) {
                    bgMusic.pause();
                    musicToggle.classList.add("muted");
                    musicToggle.innerText = "🔇";
                    isMusicPlaying = false;
                } else {
                    bgMusic.play();
                    musicToggle.classList.remove("muted");
                    musicToggle.innerText = "🔊";
                    isMusicPlaying = true;
                }
            }
        });
    }
});