function resetFlexbox() {
    let flexContainer = document.getElementById("flex-wrapper");
    flexContainer.style.gap = "initial";
    flexContainer.style.flexDirection = "row";
    flexContainer.style.justifyContent = "flex-start";
    flexContainer.style.alignItems = "stretch";

    document.getElementById("gapValue").value = "0";
    document.getElementById("grow1").value = "0";
    document.getElementById("grow2").value = "0";
    document.getElementById("grow3").value = "0";
}

function adjustGap() {
    let gapValue = document.getElementById("gapValue").value;
    let flexContainer = document.getElementById("flex-wrapper");
    flexContainer.style.gap = `${gapValue}px`;
}

function changeDirection(direction) {
    let flexContainer = document.getElementById("flex-wrapper");
    if (direction === 'ROW') {
        flexContainer.style.flexDirection = "row";
    } else if (direction === 'COLUMN') {
        flexContainer.style.flexDirection = "column";
    }
}

function justifyContent(justify) {
    let flexContainer = document.getElementById("flex-wrapper");
    switch (justify) {
        case 'START':
            flexContainer.style.justifyContent = "flex-start";
            break;
        case 'CENTER':
            flexContainer.style.justifyContent = "center";
            break;
        case 'END':
            flexContainer.style.justifyContent = "flex-end";
            break;
        case 'SPACE-BETWEEN':
            flexContainer.style.justifyContent = "space-between";
            break;
        case 'SPACE-AROUND':
            flexContainer.style.justifyContent = "space-around";
            break;
        case 'SPACE-EVENLY':
            flexContainer.style.justifyContent = "space-evenly";
            break;
    }
}

function alignItems(align) {
    let flexContainer = document.getElementById("flex-wrapper");
    switch (align) {
        case 'ALIGN-START':
            flexContainer.style.alignItems = "flex-start";
            break;
        case 'ALIGN-CENTER':
            flexContainer.style.alignItems = "center";
            break;
        case 'ALIGN-END':
            flexContainer.style.alignItems = "flex-end";
            break;
    }
}

function flexGrow(action) {
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");

    switch (action) {
        case 'RESET':
            box1.style.flexGrow = "0";
            box2.style.flexGrow = "0";
            box3.style.flexGrow = "0";
            document.getElementById("grow1").value = "0";
            document.getElementById("grow2").value = "0";
            document.getElementById("grow3").value = "0";
            break;
        case 'GROW-ALL':
            box1.style.flexGrow = "1";
            box2.style.flexGrow = "1";
            box3.style.flexGrow = "1";
            document.getElementById("grow1").value = "1";
            document.getElementById("grow2").value = "1";
            document.getElementById("grow3").value = "1";
            break;
        case 'GROW_BOX1':
            let grow1 = document.getElementById("grow1").value;
            box1.style.flexGrow = grow1;
            break;
        case 'GROW_BOX2':
            let grow2 = document.getElementById("grow2").value;
            box2.style.flexGrow = grow2;
            break;
        case 'GROW_BOX3':
            let grow3 = document.getElementById("grow3").value;
            box3.style.flexGrow = grow3;
            break;
    }
}
