function getRandomImage() {
    let aaa = Math.floor(Math.random() * 120) + 1;
    let imgUrl = 'background-image: url("https://raw.githubusercontent.com/zvbt/animeclient-assets/main/assets/' + aaa + '.png")'
    var imgStr = "<canvas class='bg' style='" + imgUrl + "'></canvas>";
    document.write(imgStr); document.close();
}