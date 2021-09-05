window.addEventListener("load", () => {
    // Testing Variables
    var width = 5;
    var color = "red";

    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    plus.addEventListener("click", () => {
        if(width<25)    width += 5;
        else            return;
    })
    minus.addEventListener("click", () => {
        if(width>5)     width -= 5;
        else            return;
    })

    document.querySelector("#red").addEventListener("click", () => {
        color = "red";
    })
    document.querySelector("#blue").addEventListener("click", () => {
        color = "blue";
    })
    document.querySelector("#green").addEventListener("click", () => {
        color = "green";
    })
    document.querySelector("#black").addEventListener("click", () => {
        color = "black";
    })
    document.querySelector("#orange").addEventListener("click", () => {
        color = "orange";
    })
    const colorPicker = document.querySelector("#colorPicker");
    colorPicker.addEventListener("input", () => {
        color = colorPicker.value;
        console.log(colorPicker.value);
    })
    document.querySelector(".eraser").addEventListener("click", () => {
        color = "white";
    })

    document.querySelector(".clear").addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas. width, canvas. height);
    })


    const canvas = document.querySelector(".canvas");
    const ctx = canvas.getContext("2d");

    // Canvas Resizing Implementation
    function canvasResize(){
        canvas.height = window.innerHeight / 1.5;
        canvas.width = window.innerWidth / 1.5;   
        ctx.restore(); 
    }
    canvasResize();
    window.addEventListener("resize", canvasResize);

    let pen = false;
    function penDown(e){
        pen = true;
        draw(e);
    }
    function penUp(){
        pen = false;
        ctx.beginPath(); 
    }
    function draw(e){
        if (!pen)   return;
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.save();
    }

    canvas.addEventListener("mousedown", penDown);
    canvas.addEventListener("mouseup", penUp);
    canvas.addEventListener("mousemove", draw)


})