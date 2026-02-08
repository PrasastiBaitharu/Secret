let noSize = 1;

function noClicked() {
    const yesBtn = document.getElementById("yesBtn");
    noSize += 0.3;
    yesBtn.style.transform = `scale(${noSize})`;
}

function yesClicked() {
    document.getElementById("response").innerText =
        "I LOVE YOU SO MUCH MY LOVE ❣️💞🤗";
}