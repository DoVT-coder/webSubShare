function table1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResult = JSON.parse(this.responseText);
            document.getElementById("table_1").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td id='getLinkProfile' class='getLink' onclick='getLinkProfile()'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };

    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadCategoryTable1", true);
    xhttp.send();
}

function table2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResult = JSON.parse(this.responseText);
            document.getElementById("table_2").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td id='getLinkProfile' class='getLink' onclick='getLinkProfile()'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_2").innerHTML += text;
            }
        }
    };

    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadCategoryTable2", true);
    xhttp.send();
}

function table3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResult = JSON.parse(this.responseText);
            document.getElementById("table_3").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td id='getLinkProfile' class='getLink' onclick='getLinkProfile()'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_3").innerHTML += text;
            }
        }
    };

    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadCategoryTable3", true);
    xhttp.send();
}

function table4() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResult = JSON.parse(this.responseText);
            document.getElementById("table_4").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td id='getLinkProfile' class='getLink' onclick='getLinkProfile()'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_4").innerHTML += text;
            }
        }
    };

    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadCategoryTable4", true);
    xhttp.send();
}
onload = function home() {
    table1();
    table2();
    table3();
    table4();
}