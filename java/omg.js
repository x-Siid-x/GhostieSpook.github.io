document.addEventListener('click', function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.copy-alt')) return;

    // Don't follow the link
    event.preventDefault();

    // Select image
    var image = event.target;

    // Create input
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = image.alt;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    var toolTip = image.parentNode.childNodes[2];

    var copiedSuccess = `<span class="tooltiptext tooltip-success">Succesfully coppied <b>${image.alt}</b></span>`;

    toolTip.outerHTML = copiedSuccess;
}, false);


document.addEventListener("mouseover", function (event) {

    if (!event.target.matches('.copy-alt')) return;

    // Select image
    var image = event.target;

    var tooltip = `<span class="tooltiptext">Click to copy: ${image.alt}</span>`;

    image.insertAdjacentHTML("afterend", tooltip);
    console.log('hover');
}, false);


document.addEventListener("mouseout", function (event) {

    if (!event.target.matches('.copy-alt')) return;

    // Select image
    var image = event.target;

    var toolTip = image.parentNode.childNodes[2];
    toolTip.remove();

}, false);
