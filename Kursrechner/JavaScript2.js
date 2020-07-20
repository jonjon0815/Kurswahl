function Schreiben(n, w) {
    var a = new Date();

    a = new Date(a.getTime() + 1000 * 3600 * 24 * 365);

    document.cookie = n + '=' + w + '; expires=' + a.toGMTString() + ';';
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function Lesen(n) {
    a = document.cookie;
    res = '';

    while (a != '') {
        while (a.substr(0, 1) == ' ') {
            a = a.substr(1, a.length);
        }

        cookiename = a.substring(0, a.indexOf('='));

        if (a.indexOf(';') != -1) {
            cookiewert = a.substring(a.indexOf('=') + 1, a.indexOf(';'));
        }
        else {
            cookiewert = a.substr(a.indexOf('=') + 1, a.length);
        }

        if (n == cookiename) {
            res = cookiewert;
        }

        i = a.indexOf(';') + 1;

        if (i == 0) {
            i = a.length
        }

        a = a.substring(i, a.length);
    }

    return (res)
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function Loeschen(n) {
    document.cookie = n + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
}
var lf_ausblenden;
var spez_fach = 0, mundl_var = 0;
var facher, leistungsfach;
var hj1 = 0, hj2 = 0, hj3 = 0, hj4 = 0;
var kurse = 0;
var hf = 0;
var a1 = false, a2 = false, a3 = false, a4 = false, a6 = false, a7 = false, a8 = false, a10 = false; 
function onStart(){
    leistungsfach = ['de', 'en', 'fr', 'la', 'it', 'bk', 'mu', 'gm', 'gg', 'gs', 're', 'et', 'ma', 'bi', 'ch', 'ph', 'sp', 'wi'];
    mundl_gm = ['gs', 'mg', 're', 'et', 'sm', 'pi'];
    mundl_free = ['en', 'fr', 'la', 'it', 'bk', 'mu', 'lt', 'li', 'pi', 'ps', 'sm', 'mg', 're', 'et', 'nw', 'bi', 'ch', 'ph', 'sp', 'vk', 'in', 'ge', 'sp', 'gs'];

    document.getElementById("wi7").style.display = 'none';
    document.getElementById("gg7").style.display = 'none';
    document.getElementById("gm7").style.display = 'none';
    //Schreiben("faecher", "");

    facher = new Map();
    facher.set("de1", 1);
    facher.set("de2", 2);

    facher.set("en1", 1);
    facher.set("en2", 2);

    facher.set("fr1", 1);
    facher.set("fr2", 2);

    facher.set("la1", 1);
    facher.set("la2", 2);

    facher.set("it1", 1);
    facher.set("it2", 2);

    facher.set("bk1", 1);
    facher.set("bk2", 3);

    facher.set("mu1", 1);
    facher.set("mu2", 3);

    facher.set("lt1", 0);
    facher.set("lt2", 3);

    facher.set("li1", 0);
    facher.set("li2", 4);



    facher.set("gs1", 1);
    facher.set("gs2", 3);

    facher.set("gg1", 1);
    facher.set("gg2", 0);

    facher.set("gm1", 1);
    facher.set("gm2", 0);

    facher.set("mg1", 0);
    facher.set("mg3", 3);

    facher.set("re1", 1);
    facher.set("re2", 3);

    facher.set("et1", 1);
    facher.set("et2", 3);

    facher.set("wi1", 1);
    facher.set("wi2", 0);

    facher.set("pi1", 0);
    facher.set("pi2", 4);

    facher.set("ps1", 0);
    facher.set("ps2", 4);

    facher.set("sm1", 0);
    facher.set("sm2", 5);



    facher.set("ma1", 1);
    facher.set("ma2", 2);

    facher.set("nw1", 0);
    facher.set("nw2", 2);

    facher.set("bi1", 1);
    facher.set("bi2", 2);

    facher.set("ch1", 1);
    facher.set("ch2", 2);

    facher.set("ph1", 1);
    facher.set("ph2", 2);

    facher.set("vk1", 0);
    facher.set("vk2", 3);

    facher.set("in1", 0);
    facher.set("in2", 3);

    facher.set("ge1", 0);
    facher.set("ge2", 3);



    facher.set("sp1", 1);
    facher.set("sp2", 3);

    
    mdl_ausblenden();
    
    //grundkurs ausblenden
    /*for (var i in grundkurs){
        var row = document.getElementById(grundkurs[i] + '9');
        
        if(row==null){
            continue;
        }
        row.style.display = 'none';
    }*/
}

function leistung(show) {
    if (show) {
        lf_ausblenden = false;
        for (var i in leistungsfach) {
            var row = document.getElementById(leistungsfach[i] + '8');

            if (row == null) {
                continue;
            }
            if (document.getElementById(leistungsfach[i] + '2') != null) {
                if (document.getElementById(leistungsfach[i] + '2').checked) {
                    continue;
                }
            }
            row.style.display = '';
            
            
        }
    } else {
        lf_ausblenden = true;
        for (var i in leistungsfach) {
            var row = document.getElementById(leistungsfach[i] + '8');

            if (row == null) {
                continue;
            }
            if (!document.getElementById(leistungsfach[i] + '1').checked) {
                row.style.display = 'none';
            }
            
        }
    }
    
}
function change_real(element) {
    if (element.id == "gg1" || element.id == "gm1" || element.id == "wi1") {
        ggm(true);
    }
    if (element.id.includes('1')) {
        if (a10 == true) {
            reset_anrechnen();
            reset_mdl();
        }
        if (element.checked) {
            check1(element);
            unsee(element.id.replace("1", ""), true);
        } else {
            uncheck1(element);
            see(element.id.replace("1", ""), true);
        }
    }
    if (element.id.includes('2')) {
        if (document.getElementById(element.id.replace("2", "") + '4').checked) {
            var string = Lesen("faecher");
            var array = [];
            array = string.split(",", 50);
            var newarray = [];
            for (var i in array) {
                if (array[i] == (element.id.replace("2", "") + '4')) {
                    continue;
                }
                newarray.push(array[i]);
            }
            if (array.length == 1) {
                newarray = [];
            }
            Schreiben("faecher", newarray);
        }
        if (a10 == true) {
            reset_anrechnen();
            reset_mdl();
        }
        if (element.checked) {
            check2(element);
            unsee(element.id.replace("2", ""), false);

        } else {
            uncheck2(element);
            see(element.id.replace("2", ""), false);
        }
    }
    if (element.id == "mg3") {
        if (a10 == true) {
            reset_anrechnen();
            reset_mdl();
        }
        if (element.checked) {
            if (spez_fach == 0) {
                kurss(4);
                hj(2, 2, 2, 2);
                document.getElementById("mg").innerHTML = "2|2|2|2";
            }
            if (spez_fach == 1) {
                kurss(2);
                hj(0, 0, 2, 2);
                document.getElementById("mg").innerHTML = "0|0|2|2";
            }
            if (spez_fach == 2) {
                kurss(2);
                hj(2, 2, 0, 0);
                document.getElementById("mg").innerHTML = "2|2|0|0";
            }
            if (spez_fach == 3) {
                kurss(2);
                hj(0, 2, 2, 0);
                document.getElementById("mg").innerHTML = "0|2|2|0";
            }
        } else {
            if (spez_fach == 0) {
                kurss(-4);
                hj(-2, -2, -2, -2);
                document.getElementById("mg").innerHTML = "";
            }
            if (spez_fach == 1) {
                kurss(-2);
                hj(0, 0, -2, -2);
                document.getElementById("mg").innerHTML = "";
            }
            if (spez_fach == 2) {
                kurss(-2);
                hj(-2, -2, 0, 0);
                document.getElementById("mg").innerHTML = "";
            }
            if (spez_fach == 3) {
                kurss(-2);
                hj(0, -2, -2, 0);
                document.getElementById("mg").innerHTML = "";
            }
        }

    }
    
    checkall();
    specialcheck();
    
    if (element.id.includes('4')) {
        checkall();
        check_mdl();
        //check_muend_dema();
    }


}
function change(element) {
    if (!window.location.hash) {
        window.location = window.location + '#dated';
        var d = new Date();
        var n = "";
        if (String(d.getDate()).length == 1) {
            n = n + "0" + d.getDate();
        } else {
            n = n + d.getDate();
        }
        n = n + ".";
        if (String(((d.getMonth()) + 1)).length == 1) {
            n = n + "0" + ((d.getMonth()) + 1);
        } else {
            n = n + ((d.getMonth()) + 1);
        }
        var n = n + "." + d.getFullYear();
        Schreiben("date", n);
    }
    //Schreiben("onEdit", "true");
    

    var string = Lesen("faecher");
    var array = [];
    if (string == "") {
        array = [];
    } else {
        array = string.split(",", 50);
    }
    
    if (element.checked) {
        array.push(element.id);
        Schreiben("faecher", array);
    } else {
        
        var newarray = [];
        for (var i in array) {
            if (array[i] == element.id) {
                continue;
            }
            newarray.push(array[i]);
        }
        if (array.length == 1) {
            newarray = [];
        }
        Schreiben("faecher", newarray);
    }
    change_real(element);
}

function load() {
    closeNav();
    var string = Lesen("faecher");
    var array = [];
    if (string == "") {
        array = [];
    } else {
        array = string.split(",", 50);
    }
    for (var i in array) {
        document.getElementById(array[i]).checked = true;
        change_real(document.getElementById(array[i]));
    }
   
    check_mdl();
    
}
function check1(element){
    var fach = element.id;
    var art = facher.get(fach);
    if(art==1){
        document.getElementById(fach.replace("1", "")).innerHTML = "5|5|5|5";
        hj(5, 5, 5, 5);
        hf = hf + 1;
        kurss(4);
        
    }
}

function uncheck1(element){
    var fach = element.id;
    var art = facher.get(fach);
    if(art==1){
        document.getElementById(fach.replace("1", "")).innerHTML = "";
        hj(-5, -5, -5, -5);
        hf = hf - 1;
        kurss(-4);
        
    }
}

function check2(element){
    var fach = element.id;
    var art = facher.get(fach);
    if (art==2){
        document.getElementById(fach.replace("2", "")).innerHTML = "3|3|3|3";
        hj(3, 3, 3, 3);
        kurss(4);
    }
    if (art==3){
        document.getElementById(fach.replace("2", "")).innerHTML = "2|2|2|2";
        hj(2, 2, 2, 2);
        kurss(4);
    }
    if (art == 4) {
        document.getElementById(fach.replace("2", "")).innerHTML = "2|2|0|0";
        hj(2, 2, 0, 0);
        kurss(2);
    }
    if (art == 5) {
        document.getElementById(fach.replace("2", "")).innerHTML = "3|3|0|0";
        hj(3, 3, 0, 0);
        kurss(2);
    }
}

function uncheck2(element){
    var fach = element.id;
    var art = facher.get(fach);
    if (art == 2) {
        document.getElementById(fach.replace("2", "")).innerHTML = "";
        hj(-3, -3, -3, -3);
        kurss(-4);
    }
    if (art == 3) {
        document.getElementById(fach.replace("2", "")).innerHTML = "";
        hj(-2, -2, -2, -2);
        kurss(-4);
    }
    if (art == 4) {
        document.getElementById(fach.replace("2", "")).innerHTML = "";
        hj(-2, -2, 0, 0);
        kurss(-2);
    }
    if (art == 5) {
        document.getElementById(fach.replace("2", "")).innerHTML = "";
        hj(-3, -3, 0, 0);
        kurss(-2);
    }
}
function unsee(fach, neun) { //fachkennung, ist fach neun wenn nicht 8
    if (neun) {
        if (document.getElementById(fach + '9') != null) {
            document.getElementById(fach + '9').style.display = 'none';
        }   
    } else {
        if (document.getElementById(fach + '8') != null) {
            document.getElementById(fach + '8').style.display = 'none';
        }
        
    }
    
}
function see(fach, neun) {
    if (neun) {
        if (document.getElementById(fach + '9') != null) {
            document.getElementById(fach + '9').style.display = '';
        } 
    } else {
        if (document.getElementById(fach + '8') != null) {
            document.getElementById(fach + '8').style.display = '';
        }
    }
}

function reloadstd() {
    document.getElementById("gesa").innerHTML = hj1 + "|" + hj2 + "|" + hj3 + "|" + hj4;
    document.getElementById("a7").innerHTML = "Anzahl der gewählten Kurse müssen 42 ergeben. (" + kurse + ")";
    document.getElementById("a1").innerHTML = "Zu wenige Leistungsfächer gewählt. ("+hf+"/3)";
}

function specialcheck() { //fachkennung, boolean
    ggm(false);
}

function ggm(checked) {
    var gg = document.getElementById("gg1").checked;
    var gm = document.getElementById("gm1").checked;
    var wi = document.getElementById("wi1").checked;
    var mg = document.getElementById("mg3").checked;
    if (gg || gm || wi) {
        if (checked) {
            if (document.getElementById("mg3").checked) {
                if (gg) {
                    kurss(-2);
                    hj(0, 0, 2, 2);
                    hj(-2, -2, -2, -2);
                    document.getElementById("mg").innerHTML = "0|0|2|2";
                }
                if (gm) {
                    kurss(-2);
                    hj(2, 2, 0, 0);
                    hj(-2, -2, -2, -2);
                    document.getElementById("mg").innerHTML = "2|2|0|0";
                }
                if (wi) {
                    kurss(-2);
                    hj(0, 2, 2, 0);
                    hj(-2, -2, -2, -2);
                    document.getElementById("mg").innerHTML = "0|2|2|0";
                }
            }
        }
        
        if (gg) {
            document.getElementById("gm8").style.display = 'none';
            document.getElementById("wi8").style.display = 'none';
            document.getElementById("spez").innerHTML = "Gm (verm*)";
            spez_fach = 1;
        }
        if (gm) {
            document.getElementById("gg8").style.display = 'none';
            document.getElementById("wi8").style.display = 'none';
            document.getElementById("spez").innerHTML = "GG (verm*)";
            spez_fach = 2;
        }
        if (wi) {
            document.getElementById("gm8").style.display = 'none';
            document.getElementById("gg8").style.display = 'none';
            document.getElementById("spez").innerHTML = "Gm/GG (verm*)";
            spez_fach = 3;
        }
    } else {
        if (spez_fach != 0) {
            if (document.getElementById("mg3").checked) {
                if (spez_fach == 1) {
                    kurss(2);
                    hj(0, 0, -2, -2);
                    hj(2, 2, 2, 2);
                    document.getElementById("mg").innerHTML = "2|2|2|2";
                    spez_fach = 0;
                }
                if (spez_fach == 2) {
                    kurss(2);
                    hj(-2, -2, 0, 0);
                    hj(2, 2, 2, 2);
                    document.getElementById("mg").innerHTML = "2|2|2|2";
                    spez_fach = 0;
                }
                if (spez_fach == 3) {
                    kurss(2);
                    hj(0, -2, -2, 0);
                    hj(2, 2, 2, 2);
                    document.getElementById("mg").innerHTML = "2|2|2|2";
                    spez_fach = 0;
                }
            }
        }
        if (!lf_ausblenden) {
            document.getElementById("gm8").style.display = '';
            document.getElementById("gg8").style.display = '';
            document.getElementById("wi8").style.display = '';
            document.getElementById("spez").innerHTML = "Gm/GG";
            spez_fach = 0;
        }
        
    }
}

function hj(h1, h2, h3, h4) {
    hj1 = hj1 + h1;
    hj2 = hj2 + h2;
    hj3 = hj3 + h3;
    hj4 = hj4 + h4;
    reloadstd();
}
function kurss(anzahl) {
    kurse = kurse + anzahl;
    reloadstd();
}

function checkall(){
    check_hauptfaecher();
    check_mathedeutsch();
    check_sprachennws();
    check_lfkombi();
    check_faecher();
    check_kurse();
    check_hinweis();
    check_muend_dema();

    check_mdl();
    ckeck_kurswahl();
}
function check_muend_dema() {
    if (document.getElementById("de2").checked) {
        document.getElementById("de4").checked = true;
    } else {
        document.getElementById("de4").checked = false;
    }
    if (document.getElementById("ma2").checked) {
        document.getElementById("ma4").checked = true;
    } else {
        document.getElementById("ma4").checked = false;
    }
}
function check_hauptfaecher() {
    if (hf >= 3) {
        document.getElementById("a1").style.color = 'rgb(59, 130, 78)';
        document.getElementById("a1").innerHTML = "Genug Leistungsfächer gewählt. (" + hf + "/3)";
        leistung(false);
        a1 = true;
    } else {
        document.getElementById("a1").style.color = 'rgb(164, 15, 0)';
        document.getElementById("a1").innerHTML = "Zu wenige Leistungsfächer gewählt. (" + hf + "/3)";
        leistung(true);
        a1 = false;
    }
}
function check_mathedeutsch() {
    var deutsch = document.getElementById('de1').checked || document.getElementById('de2').checked;
    var mathe = document.getElementById('ma1').checked || document.getElementById('ma2').checked;
    if (mathe && deutsch) {
        document.getElementById("a2").style.color = 'rgb(59, 130, 78)';
        document.getElementById("a2").innerHTML = "Mathematik und Deutsch sind gewählt";
        a2 = true;
    } else {
        document.getElementById("a2").style.color = 'rgb(164, 15, 0)';
        document.getElementById("a2").innerHTML = "Mathematik und Deutsch müssen gewählt werden";
        a2 = false;
    }
}

function check_sprachennws() {
    var sprachen = 0;
    var nws = 0;
    if (document.getElementById('en1').checked || document.getElementById('en2').checked) {
        sprachen = sprachen + 1;
    }
    if (document.getElementById('fr1').checked || document.getElementById('fr2').checked) {
        sprachen = sprachen + 1;
    }
    if (document.getElementById('la1').checked || document.getElementById('la2').checked) {
        sprachen = sprachen + 1;
    }
    if (document.getElementById('it1').checked || document.getElementById('it2').checked) {
        sprachen = sprachen + 1;
    }
    if (document.getElementById('bi1').checked || document.getElementById('bi2').checked) {
        nws = nws + 1;
    }
    if (document.getElementById('ch1').checked || document.getElementById('ch2').checked) {
        nws = nws + 1;
    }
    if (document.getElementById('ph1').checked || document.getElementById('ph2').checked) {
        nws = nws + 1;
    }
    if (document.getElementById('nw2').checked) {
        if (document.getElementById('ph1').checked || document.getElementById('ch1').checked || document.getElementById('bi1').checked) {
            nws = nws + 1;
        }
        
    }
    if ((sprachen >= 2 && nws >= 1) || (sprachen >= 1 && nws >= 2)) {
        document.getElementById("a3").style.color = 'rgb(59, 130, 78)';
        document.getElementById("a3").innerHTML = "Nws und Sprachen Kombination stimmt. (2 Spachen & 1 Nws oder umgekehrt)";
        a3 = true;
    } else {
        document.getElementById("a3").style.color = 'rgb(164, 15, 0)';
        document.getElementById("a3").innerHTML = sprachen + " Sprache(n) und " + nws + " Naturwissenschaft(en) gewählt. (2 Spachen & 1 Nws oder umgekehrt)";
        a3 = false;
    }
}
function check_lfkombi() {
    var zaehler = 0;
    
    if (document.getElementById('en1').checked) {
        zaehler = zaehler + 1;
    }
    if (document.getElementById('fr1').checked) {
        zaehler = zaehler + 1;
    }
    if (document.getElementById('la1').checked) {
        zaehler = zaehler + 1;
    }
    if (document.getElementById('it1').checked) {
        zaehler = zaehler + 1;
    }

    if (document.getElementById('bi1').checked) {
        zaehler = zaehler + 1;
    }
    if (document.getElementById('ch1').checked) {
        zaehler = zaehler + 1;
    }
    if (document.getElementById('ph1').checked) {
        zaehler = zaehler + 1;
    }
    if (document.getElementById('ma1').checked) {
        zaehler = zaehler + 1;
    }
    if (document.getElementById('de1').checked) {
        zaehler = zaehler + 1;
    }
    if (a1 && (zaehler >= 2)) {
        document.getElementById("a4").style.color = 'rgb(59, 130, 78)';
        document.getElementById("a4").innerHTML = "Leistungsfachkombination gültig.";
        a4 = true;
    } else {
        document.getElementById("a4").style.color = 'rgb(164, 15, 0)';
        document.getElementById("a4").innerHTML = "Leistungsfachkombination ungültig: zwei der drei Leistungsfächer müssen aus D, M, FS, Nws sein.";
        a4 = false;
    }
}
function drucken() {
    if (a8 == true) {
        Schreiben("mg", spez_fach);
        Schreiben("stda", kurse);
        Schreiben("stdb", hj1 + "|" + hj2 + "|" + hj3 + "|" + hj4 + "*");
        window.location = '/print.html';
    } else {
        window.alert("Du kannst nur gültige Kurswahlen drucken");
    }

}
function check_faecher() {
    var pruefsumme = 0;
    var error = "";
    if (document.getElementById('gs1').checked || document.getElementById('gs2').checked) {
        pruefsumme = pruefsumme + 1;
    } else {
        error = error + "Geschichte, "
    }
    if (document.getElementById('gg1').checked || document.getElementById('gm1').checked) {
        if (document.getElementById('mg3').checked) {
            pruefsumme = pruefsumme + 1;
        } else {
            error = error + "Gemeinschaftsfach GG/Gm, "
        }
    } else {
        if (document.getElementById('mg3').checked) {
            pruefsumme = pruefsumme + 1;
        } else {
            error = error + "Geographie und Gemeinschaftskunde, "
        }
    }
    if (document.getElementById('re1').checked || document.getElementById('re2').checked || document.getElementById('et1').checked || document.getElementById('et2').checked) {
        pruefsumme = pruefsumme + 1;
    } else {
        error = error + "Religion oder Ethik, "
    }
    if (document.getElementById('bk1').checked || document.getElementById('bk2').checked || document.getElementById('mu1').checked || document.getElementById('mu2').checked) {
        pruefsumme = pruefsumme + 1;
    } else {
        error = error + "Bildende Kunst oder Musik, "
    }
    if (document.getElementById('sp1').checked || document.getElementById('sp2').checked) {
        pruefsumme = pruefsumme + 1;
        error = error.replace(/.$/, "");
        error = error.replace(/.$/, "");
    } else {
        error = error + "Sport"
    }
    
    if (pruefsumme == 5) {
        document.getElementById("a6").style.color = 'rgb(59, 130, 78)';
        document.getElementById("a6").innerHTML = "Pflichfächer sind gewählt.";
        a6 = true;
    } else {
        document.getElementById("a6").style.color = 'rgb(164, 15, 0)';
        document.getElementById("a6").innerHTML = "Folgende Fächer fehlen noch: " + error;
        a6 = false;
    }
}
function check_kurse() {
    if (kurse >= 42) {
        document.getElementById("a7").style.color = 'rgb(59, 130, 78)';
        document.getElementById("a7").innerHTML = "Anzahl der gewählten Kurse ergibt 42 oder darüber. (" + kurse + ")";
        a7 = true;
    } else {
        document.getElementById("a7").style.color = 'rgb(164, 15, 0)';
        document.getElementById("a7").innerHTML = "Anzahl der gewählten Kurse müssen 42 ergeben. (" + kurse + ")";
        a7 = false;
    }
}
function mabi_anzeigen(anzeigen, gw) {
    
    if (anzeigen) {
        if (document.getElementById("de2").checked) {
            document.getElementById("de7").style.display = '';
        } else {
            document.getElementById("de7").style.display = 'none';
        }
        if (document.getElementById("ma2").checked) {
            document.getElementById("ma7").style.display = '';
        } else {
            document.getElementById("ma7").style.display = 'none';
        }
        document.getElementById("mabi").style.display = '';
        if (gw) {
            mundl_var = 1;
            for (var i in mundl_gm) {
                var row = document.getElementById(mundl_gm[i] + '7');

                if (row == null) {
                    continue;
                }
                if (mundl_gm[i] == "mg") {
                    if (document.getElementById("mg3").checked) {
                        row.style.display = '';
                        continue;
                    }
                }
                if (document.getElementById(mundl_gm[i] + '2').checked) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            }
        } else {
            mundl_var = 2;
            //all
            for (var i in mundl_free) {
                var row = document.getElementById(mundl_free[i] + '7');

                if (row == null) {
                    continue;
                }
                if (mundl_free[i] == "mg") {
                    if (document.getElementById("mg3").checked) {
                        row.style.display = '';
                        continue;
                    }
                }
                if (document.getElementById(mundl_free[i] + '2').checked) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            }
        }
    } else {
        mundl_var = 0;
        document.getElementById("mabi").style.display = 'none';
        for (var i in mundl_free) {
            var row = document.getElementById(mundl_free[i] + '7');

            if (row == null) {
                continue;
            }

            row.style.display = 'none';
        }
        document.getElementById("de7").style.display = 'none';
        document.getElementById("ma7").style.display = 'none';
    }
}

function mundl(status) {
    if (status) {
        var aenderung = 2;
        if (document.getElementById("de2").checked) {
            aenderung = aenderung - 1;
        }
        if (document.getElementById("ma2").checked) {
            aenderung = aenderung - 1;
        }
        if (aenderung == 0) {
            if (spez_fach != 0 || document.getElementById("gs1").checked) { //reli einfügen wenn gesellschaftwissenschaft

                document.getElementById("a11").style.display = 'none';
                document.getElementById("a10").style.display = 'none';
                mabi_anzeigen(true, false);
                anrechnen_check();
                check_mdl();
            } else {
                document.getElementById("a11").style.display = '';
                a8 = false;
                mabi_anzeigen(false, false);

            }
        } else if (aenderung == 1) {
            if (spez_fach != 0 || document.getElementById("gs1").checked) {
                //alles frei
                mabi_anzeigen(true, false);
            } else {
                //gw frei
                mabi_anzeigen(true, true);
            }
        } else {
            mabi_anzeigen(true, false);
        }
       
    } else {
        mabi_anzeigen(false, true);
        a10 = false;
        
    }
}

function ckeck_kurswahl() {
    if ((a1 && a2 && a3 && a4 && a6 && a7) == false) {
        a10 = false;
    }
    if (a10 == true) {
        anrechnen_check();

    } else {
        a8 = false;
        document.getElementById("a12").innerHTML = '';
        document.getElementById("a10").innerHTML = 'Bitte Gws im mündlichen Abitur wählen';
        document.getElementById("a10").style.color = 'rgb(164, 15, 0)';

        reset_anrechnen();
        if (a1 && a2 && a3 && a4 && a6 && a7) {
            mund_abi = true;
            document.getElementById("a10").style.display = '';
            mundl(true);
        } else {
            mund_abi = false;
            document.getElementById("a10").style.display = 'none';
            mundl(false);
            a8 = false;
            a10 = false;

            document.getElementById("a12").innerHTML = "";
        }
    }
    
    
    if (a8) {
        document.getElementById("a8").style.color = 'rgb(59, 130, 78)';
        document.getElementById("a8").innerHTML = "Kurswahl gültig";
    } else {
        document.getElementById("a8").style.color = 'rgb(164, 15, 0)';
        document.getElementById("a8").innerHTML = "Kurswahl ungültig";
    }
}
function anrechnen_check() {
    var string = Lesen("faecher");
    var array = [];
    if (string == "") {
        array = [];
    } else {
        array = string.split(",", 50);
    }

    var array2 = [];
    if (string == "") {
        array2 = [];
    } else {
        if (string.includes('4')) {
            array2 = string.split(",", 50);
        }
    }
    if (anrechnungspflichtig(array, array2)) {
        a8 = true;
    } else {
        a8 = false;
        document.getElementById("a_error").innerHTML = "Dein mündliches Abitur lässt diese Kurswahl nicht zu, wähle entweder ein weiteres Fach oder ein anderes mündliches Abitur. Bitte spreche das bei deinem Oberstufenberater an. Eventuell fehlt ein Sport Ersatzkurs";
    }
    
}
function check_hinweis() {
    if (((hj1 + hj2 + hj3 + hj4) > 152) || (kurse >= 50)) {
        document.getElementById("a9").innerHTML = "Achte darauf, dass du nicht zu viele Wochenstunden oder Kurse belgst.";
    } else {
        document.getElementById("a9").innerHTML = "";
    }
}

function check_mdl() {
    var gws = spez_fach != 0 || document.getElementById("gs1").checked;
    //var mundl_free2 = ['en', 'fr', 'la', 'it', 'bk', 'mu', 'lt', 'li', 'pi', 'ps', 'sm', 'mg', 're', 'et', 'nw', 'bi', 'ch', 'ph', 'sp', 'vk', 'in', 'ge', 'sp', 'gs'];
    var checked = [];
    var zaehler = 0;
    for (var i in mundl_free) {
        if (document.getElementById(mundl_free[i] + "4").checked) {
            zaehler = zaehler + 1;
            checked.push(mundl_free[i]);
        }
    }
    if (document.getElementById("de4").checked) {
        zaehler = zaehler + 1;
        checked.push("de");
    }
    if (document.getElementById("ma4").checked) {
        zaehler = zaehler + 1;
        checked.push("ma");
    }
    if (zaehler >= 2) {
        mdl_ausblenden();
    }
    a10 = false;
    if (mundl_var == 1) {
        if (checked.includes("gs") || checked.includes("mg") || checked.includes("et") || checked.includes("re")) {
            document.getElementById("a10").innerHTML = 'Mündliches Abitur gewählt';
            document.getElementById("a10").style.color = 'rgb(59, 130, 78)';
            a10 = true;
        } else {
            document.getElementById("a10").innerHTML = 'Bitte Gws im mündlichen Abitur wählen';
            document.getElementById("a10").style.color = 'rgb(164, 15, 0)';
            a10 = false;
        }
    } else if (mundl_var == 2) {
        if (gws) {
            if (zaehler >= 2) {
                document.getElementById("a10").innerHTML = 'Mündliches Abitur gewählt';
                document.getElementById("a10").style.color = 'rgb(59, 130, 78)';
                a10 = true;
            }
        } else {
            if (checked.includes("gs") || checked.includes("mg") || checked.includes("et") || checked.includes("re")) {
                if (zaehler >= 2) {
                    document.getElementById("a10").innerHTML = 'Mündliches Abitur gewählt';
                    document.getElementById("a10").style.color = 'rgb(59, 130, 78)';
                    a10 = true;
                } else {
                    document.getElementById("a10").innerHTML = 'Bitte zweites Fach für mündliches Abitur wählen';
                    document.getElementById("a10").style.color = 'rgb(164, 15, 0)';
                    a10 = false;
                }
            } else {
                document.getElementById("a10").innerHTML = 'Bitte Gws im mündlichen Abitur wählen';
                document.getElementById("a10").style.color = 'rgb(164, 15, 0)';
                a10 = false;
            }
        }
    }
    ckeck_kurswahl();
}
function mdl_ausblenden() {
    var mundl_free2 = ['en', 'fr', 'la', 'it', 'bk', 'mu', 'lt', 'li', 'pi', 'ps', 'sm', 'mg', 're', 'et', 'nw', 'bi', 'ch', 'ph', 'sp', 'vk', 'in', 'ge', 'sp', 'gs', 'de', 'ma'];
    for (var i in mundl_free2) {
        
        if (document.getElementById(mundl_free2[i] + "4").checked == false) {
            var element = document.getElementById(mundl_free2[i] + '7');
            element.style.display = 'none';
        }
        
    }
}
function reset_mdl() {
    var mundl_free2 = ['en', 'fr', 'la', 'it', 'bk', 'mu', 'lt', 'li', 'pi', 'ps', 'sm', 'mg', 're', 'et', 'nw', 'bi', 'ch', 'ph', 'sp', 'vk', 'in', 'ge', 'sp', 'gs', 'de', 'ma'];
    for (var i in mundl_free2) {
        document.getElementById(mundl_free2[i] + "4").checked = false;
    }
}
function reset() {
    Loeschen("faecher");
    Schreiben("faecher", "");
    window.location = '/3std.html';
}

function remove_mdl_cookie() {
    var string = Lesen("faecher");
    var array = [];
    if (string == "") {
        array = [];
    } else {
        array = string.split(",", 50);
    }
    var arraynew = [];
    for (var i in array) {
        if (array[i].includes('4')) {
            console.log(array[i]);
            continue;
        } else {
            arraynew.push(array[i]);
        }
        
    }
    Schreiben("faecher", arraynew);
}