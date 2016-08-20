var keysDown = {}

window.addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
    update();
}, false)

window.addEventListener("keyup", function(e) {
    update();
    delete keysDown[e.keyCode];
}, false)

// Update game objects
function update() {
    if (38 in keysDown) { // UP
        document.body.style.backgroundImage = "url('http://images.clipartpanda.com/smiley-face-png-Smiley_Face.png')";
    }
    if (40 in keysDown) { // DOWN
        document.body.style.backgroundImage = "url('http://images.clipartpanda.com/moderation-clipart-jixEg7AiE.png')";
    }
    if (37 in keysDown) { // LEFT
        document.body.style.backgroundImage = "url('http://freeforumsigs.com/ffs_gallery/albums/batch/ZZ-misc-smiley%20renders/evil-smiley-face.png')";
    }
    if (39 in keysDown) { // RIGHT
        document.body.style.backgroundImage = "url('http://images3.cpcache.com/image/30896433_350x350.png')";        
    }
    console.log(keysDown)
};

