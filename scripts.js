function removeClassYeet(elementid){
    document.getElementById(elementid)
        .classList.remove("yeet")
    if(elementid === "goToPark"){
        document.getElementById("somewhereelse")
        .style.display="none"
    } else if(elementid === "goSomewhereElse"){
        document.getElementById("park")
        .style.display="none"
    }
    
    if(elementid === "Ignore"){
        document.getElementById("dontignore")
        .style.display="none"
    } else if(elementid === "dontIgnore"){
        document.getElementById("ignore")
        .style.display="none"
    }

    if(elementid === "doHomework"){
        document.getElementById("spore")
        .style.display="none"
        document.getElementById("wip")
        .style.display="none"
    } else if(elementid === "playSpore"){
        document.getElementById("wip")
        .style.display="none"
        document.getElementById("hw")
        .style.display="none"
    } else if(elementid === "worksInProgress"){
        document.getElementById("hw")
        .style.display="none"
        document.getElementById("spore")
        .style.display="none"
    }

    if(elementid === "eatApple"){
        document.getElementById("no")
        .style.display="none"
    } else if(elementid === "eatNothing"){
        document.getElementById("yes")
        .style.display="none"
    }

    if(elementid === "yesShower"){
        document.getElementById("dontshower")
        .style.display="none"
    } else if(elementid === "noShower"){
        document.getElementById("shower")
        .style.display="none"
    }
    if(elementid === "Next3"){
        document.getElementById("next3")
        .style.display="none"
    }
}

// let choice1 = document.getElementById("tomorrow")
// choice1.addEventListener("click", removeClassYeet("maybeTomorrow"))