const myFunction = function(smallImg) { 
        let expandedImg = document.getElementById("viewingImg");
        expandedImg.src = smallImg.src;
        expandedImg.parentElement.style.display="block";
    }
    