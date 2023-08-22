function showhide(x) {
    var x = document.getElementById(x);
    x.classList.toggle("showw");

    }

function dateviewhide() {
    var datediv = document.getElementById("datefromto");
    var d = document.getElementById("date");
    var value = d.value;
    console.log("value : ", value);
    if (value == "spec")
        datediv.style.display = "block";
    else
        datediv.style.display = "none";
}


function updown(e) {
    var btn = document.getElementById(e);
    var btnsub = e.getElementsByTagName("i")[1];
    console.log(e);
    console.log(btn);
    console.log(btnsub);
    console.log("updated1");
    btnsub.classList.toggle("rotate");
    var rightbtns = document.getElementsByClassName("btnmenu");
    [].forEach.call(rightbtns, function (btns) {
        btns.classList.remove("active");
    });
    e.classList.toggle("active");
}

