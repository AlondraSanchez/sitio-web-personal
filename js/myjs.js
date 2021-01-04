function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("message");
    tooltip.style.display = "inline";
}

function outFunc() {
    var tooltip = document.getElementById("message");
    tooltip.style.display = "none";
}