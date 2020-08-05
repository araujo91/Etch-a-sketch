function divisor(nSquares) {
    let size = 600 / nSquares ;
    console.log(size)  
    for (var i = 0; i < (nSquares*nSquares); i++) {
        const obj = document.createElement('div');
        Object.assign(obj.style,{float:"left",width: size + "px",height: size + "px"});
        /*obj.style.float = 'left';
        obj.style.width = size;
        obj.style.height = size;*/
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
}

// hover function 
/*function hover() {
    let container = document.getElementById('container')
    container.addEventListener('mouseover', function(e) {
          e.target.className += 'permahover';
    })
}*/