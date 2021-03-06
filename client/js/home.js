//Hàm tạo cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//Hàm lấy cookie từ usename
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
var table1, table2;

function table1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            table1 = this.responseText;
            document.getElementById("table_1").innerHTML = null;
            document.getElementById("noData_1").innerHTML = "";
            for (var iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadHomeTable1", true);
    xhttp.send();
}


function table2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            table2 = this.responseText;
            document.getElementById("table_2").innerHTML = null;
            document.getElementById("noData_2").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                document.getElementById("table_2").innerHTML += text;
            }
        }
    };

    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadHomeTable2", true);
    xhttp.send();
}

function table3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_3").innerHTML = "";
            for (let iResult = 0; iResult < 5; iResult++) {
                var text = "<tr><td class='getLink' scope='row' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].sumRate + "</td></tr>";
                document.getElementById("table_3").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadHomeTable3", true);
    xhttp.send();

}

function table4() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_4").innerHTML = "";
            for (let iResult = 0; iResult < 5; iResult++) {
                var text = "<tr><td class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].rate + "</td></tr>";
                document.getElementById("table_4").innerHTML += text;
            }
        }
    };

    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadHomeTable4", true);
    xhttp.send();
}

function table5() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_5").innerHTML = "";
            for (let iResult = 0; iResult < 5; iResult++) {
                var text = "<tr><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].postShare + "</td></tr>";
                document.getElementById("table_5").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadHomeTable5", true);
    xhttp.send();
}

function home() {
    table1();
    table2();
    table3();
    table4();
    table5();
}