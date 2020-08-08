function divisor(nSquares) {
    let size = 600 / nSquares ;
    console.log(size)  
    for (var i = 0; i < (nSquares*nSquares); i++) {
        const obj = document.createElement('div');
        Object.assign(obj.style,{float:"left",width: size + "px",height: size + "px"});
        
        obj.classList.add("sand")
        document.getElementById('container').appendChild(obj)
        if (i % nSquares == 0) {
            obj.style.clear = "both";  
        }  
    }
}

function reset() {
    let nSquares = prompt("How many squares would you like?");
    const myNode = document.getElementById("container");
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild)
    }
    divisor(nSquares);
    blackWhite();
}

function blackWhite() {
    let container = document.getElementById('container');
    container.addEventListener('mouseover', function(e) {
    if (e.target.className ==  "sand") {
        e.target.className += " sandhover"
    } else {
        e.target.className = "sand"
            }
    })
}

function randomHue() {
    return Math.floor(Math.random() * 360);
}
  
function color() {
    let container = document.getElementById('container')
    let hue = randomHue();
    let light = 50;
    container.addEventListener('mouseover', function(e) {
       if (light <= 10) {
            hue = randomHue();
            light = 50;
    } else {
        light = light * 0.9;
    }
        
        
        let def = "hsl(" + hue + ", 50%, " + light + "%)";
        console.log("2º")
        console.log(def);
        console.log(typeof(def)) 
        e.target.style.backgroundColor = def;                
                })
}

function rand() {
    let container = document.getElementById('container')   
    container.addEventListener('mouseover', function(e) {
        let hue = randomHue();      
        let def = "hsl(" + hue + ", 50%, 50%)";
        e.target.style.backgroundColor = def;                
        })
}