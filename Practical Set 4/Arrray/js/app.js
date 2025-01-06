let Arr = document.getElementById("inp");
let check = document.getElementById("check");
let dup = document.getElementById("Dupcheck");
let cin = document.getElementById("check_input");
let checkEle = document.getElementById("checkEle");
let output = document.getElementById("oname");

function check_now() {
    var array = Arr.value.split(",");
    var dupped = [];
    var array2 = [];
    array.forEach(element => {
        if ((array2.includes(element)) && !dupped.includes(element)) {
            dupped.push(element);
        }
        else if (!(array2.includes(element))) {
            array2.push(element);
        }
    });
    return [array2, dupped];
}

check.onclick = function () {
    let op = check_now()
    if (Arr.value == "") {
        output.innerHTML = "Please enter a Array first";
        output.style.color = "red";
    } else if (op[1].join() == "") {
        output.style.color = "red";
        output.innerHTML = "No Duplicates found";
    } else {
        output.style.color = "white";
        output.innerHTML = `${check_now()[1].join(",")} occurs more than once.`;
    }
}

dup.onclick = function () {
    let op = check_now()
    if (Arr.value == "") {
        output.innerHTML = "Please enter a Array first";
        output.style.color = "red";
    } else {
        output.style.color = "white";
        output.innerHTML = `${check_now()[0].join(",")} Duplicates removed (if any)`;
    }
}

checkEle.onclick = function () {
    if (Arr.value == "") {
        output.innerHTML = "Please enter a Array first";
        output.style.color = "red";
    } else if (cin.value == "") {
        output.style.color = "red";
        output.innerHTML = "Enter value to search";
    }
    else if (Arr.value.includes(cin.value)) {
        output.style.color = "white";
        output.innerHTML = `${cin.value} is present in input.`;
    }else{
        output.style.color = "white";
        output.innerHTML = `${cin.value} is not present in input.`;
    }
}