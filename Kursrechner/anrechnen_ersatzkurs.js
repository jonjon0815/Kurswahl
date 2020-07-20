var pflicht = [], mund = [], angfaecher = [], gwsl = [], v = [], fsl = [], nwsl = [];
var mubk;
var kurse = 0;
var nws = 0, gws = 0, spr = 0;
var angerechnet = false;
var need = ["de", "ma", "gs", "fs", "nw", "fn", "mg", "bm"];
var registriert = [];
var hj1a = 0, hj2a = 0, hj3a = 0, hj4a = 0;

function anrechnungspflichtig(faecher, muendlich) {
    reset_anrechnen();
    split(faecher);
    Schreiben("mund", mund);
    for (var i in v) {
        var fach = v[i];
        fach = fach.replace("1", "");
        fach = fach.replace("2", "");
        
        anrechnen(fach, true, true, true, true);
    }
    if (pflicht.includes("de2")) {
        anrechnen("de", true, true, true, true);
    }
    if (pflicht.includes("ma2")) {
        anrechnen("ma", true, true, true, true);
    }
    if (pflicht.includes("gs2")) {
        anrechnen("gs", true, true, true, true);
    }
    if (pflicht.includes("mg3")) {
        if (v.includes("wi1")) {
            anrechnen("mg", false, true, true, false);
        } else if (v.includes("gg1")) {

            anrechnen("mg", false, false, true, true);
        } else if (v.includes("gm1")) {

            anrechnen("mg", true, true, false, false);
        } else {
            anrechnen("mg", true, true, true, true);
        }
        //need.reverse("mg");
        //registriert.push("mg2");
    }

    mubk = "";
    if (faecher.includes("bk2")) {
        mubk = "bk";
        if (faecher.includes("bk4")) {
            anrechnen(mubk, true, true, true, true);
            mubk = "";
        }
    }
    if (faecher.includes("mu2")) {
        mubk = "mu";
        if (faecher.includes("mu4")) {
            anrechnen(mubk, true, true, true, true);
            mubk = "";
        }
    }

    if (mubk != "") {
        if (v.includes("wi1")) {
            anrechnen(mubk, true, false, false, true);
        } else if (v.includes("gg1")) {
            anrechnen(mubk, true, true, false, false);
        } else if (v.includes("gm1")) {
            anrechnen(mubk, false, false, true, true);
        } else {
            anrechnen(mubk, true, true, false, false);
        }
    }

    fs = fsl.length;
    nws = nwsl.length;

    if (fs > 1) {
        if (fs == 2) {
            if (nws > 1) {
                if (nws == 1) {
                    //nws 1 fs 2
                    if (nwsl[0].includes("1") == false) {
                        anrechnen(nwsl[0], true, true, true, true);
                    }

                    for (var i in fsl) {
                        if (fsl[i].includes("1") == false) {
                            anrechnen(fsl[i], true, true, true, true);
                        }
                    }
                } else {
                    //nws >1 fs 2
                    if (fsl[0].includes("1") == false) {
                        anrechnen(fsl[0], true, true, true, true);
                    }
                    if (fsl[1].includes("1") == false) {
                        anrechnen(fsl[1], true, true, true, true);
                    }
                    for (var i in nwsl) {
                        if (nwsl[i].includes("1") == false) {
                            anrechnen(nwsl[i], true, true, true, true);
                        }
                    }
                }
            } else {
                if (nws < 1) {
                    //error
                }
            }
        } else {
            if (nws > 1) {
                if (nws == 1) {
                    //fs> 3 nws 1
                    if (nwsl[0].includes("1") == false) {
                        anrechnen(nwsl[0], true, true, true, true);
                    }
                    for (var i in fsl) {
                        if (fsl[i].includes("1") == false) {
                            anrechnen(fsl[i], true, true, true, true);
                        }
                    }
                } else {
                    //fs> 3 nws >1
                    for (var i in nwsl) {
                        if (nwsl[i].includes("1") == false) {
                            anrechnen(nwsl[i], true, true, true, true);
                        }
                    }
                    for (var i in fsl) {
                        if (fsl[i].includes("1") == false) {
                            anrechnen(fsl[i], true, true, true, true);
                        }
                    }
                }
            } else {
                //error
            }
        }
    } else if (fs == 1) {
        if (nws > 1) {
            if (nws == 2) {
                // fs 1 nws 2
                if (fsl[0].includes("1") == false) {
                    anrechnen(fsl[0], true, true, true, true);
                }
                for (var i in nwsl) {
                    if (nwsl[i].includes("1") == false) {
                        anrechnen(nwsl[i], true, true, true, true);
                    }
                }
            } else {
                if (nws < 1) {
                    //error
                } else {
                    // fs 1 nws >2
                    if (fsl[0].includes("1") == false) {
                        anrechnen(fsl[0], true, true, true, true);
                    }
                    for (var i in nwsl) {
                        if (nwsl[i].includes("1") == false) {
                            anrechnen(nwsl[i], true, true, true, true);
                        }
                    }
                }
            }
        }
    }

    for (var i in mund) {
        if (angfaecher.includes(mund[i]) == false) {
            if (mund[i].includes('li') || mund[i].includes('pi') || mund[i].includes('ps') || mund[i].includes('sm')) {
                anrechnen(mund[i], true, true, false, false);
            } else {
                anrechnen(mund[i], true, true, true, true);
            }
            
        }
    }

    if ((hj1a + hj2a + hj3a + hj4a) < 40) {
        document.getElementById("a12").innerHTML = "Du musst zusätzlich zu den Verpflichtenden noch " + (40 - (hj1a + hj2a + hj3a + hj4a)) + " Kurse zusätzlich anrechnen. Anrechnungspflichtige Kurse sind grün markiert.";
        return true;

    } else {
        document.getElementById("a12").innerHTML = "Anrechnungspflichtige Kurse sind grün markiert.";
        return true;
    }

}



function split(faecher) {
    for (var i in faecher) {
        if (faecher[i].includes('4')) {
            mund.push(faecher[i].replace("4",""));
            continue;
        }
        var fach = faecher[i];
        if (fach.includes("1")) {
            v.push(fach);
        }
        /*if (fach.includes("en") || fach.includes("fr") || fach.includes("la") || fach.includes("it")) {
            fs.push(fach);
        }*/
        if (fach.includes("de2") || fach.includes("ma2") || fach.includes("gs2") || fach.includes("mg3")) {
            pflicht.push(fach);
        }

        
        /*if (fach.includes("lt") || fach.includes("li")) {
            auffuellen.push(fach);
        }
        if (fach.includes("bk2") || fach.includes("mu2")) {
            auffuellen.push(fach);
        }
        if (fach.includes("ps") || fach.includes("pi") || fach.includes("sm") || fach.includes("re") || fach.includes("et")) {
            gsw.push(fach);
            auffuellen.push(fach);
        }
        if (fach.includes("ph") || fach.includes("ch") || fach.includes("bi") || fach.includes("nw")) {
            nws.push(fach);
        }
        if (fach.includes("in") || fach.includes("vk") || fach.includes("ge")) {
            auffuellen.push(fach);
        }
        if (fach.includes("sp2")) {
            auffuellen.push(fach);
        }*/
        if (fach.includes("bi2") || fach.includes("ph2") || fach.includes("ch2")) {
            nwsl.push(fach);
            
        }
        if (fach.includes("en2") || fach.includes("fr2") || fach.includes("la2") || fach.includes("it2") || fach.includes("en1") || fach.includes("fr1") || fach.includes("la1") || fach.includes("it1")) {
            fsl.push(fach);
        }
        
    }
    if (document.getElementById("nw2").checked == true) {
        if (document.getElementById("ph1").checked == true || document.getElementById("ch1").checked == true || document.getElementById("bi1").checked == true) {
            nwsl.push("nw2");
        }
    }
    if (document.getElementById("ph1").checked == true) {
        nwsl.push("ph1");
    }
    if (document.getElementById("ch1").checked == true) {
        nwsl.push("ch1");
    }
    if (document.getElementById("bi1").checked == true) {
        nwsl.push("bi1");
    }
}

function anrechnen(fach, hj11, hj22, hj33, hj44) {
    if (hj11) {
        hj1a = hj1a + 1;
    }
    if (hj22) {
        hj2a = hj2a + 1;
    }
    if (hj33) {
        hj3a = hj3a + 1;
    }
    if (hj44) {
        hj4a = hj4a + 1;
    }

    var fache;
    angerechnet = true;
    fache = fach.toString();
    fache = fache.replace("2", "");
    fache = fache.replace("1", "");

    angfaecher.push(fache);

    var string = document.getElementById(fache).innerHTML;
    var arrOfStr = [];
    arrOfStr = string.split("|", 4);
    var end = "";
    if (hj11) {
        end = end + "<span style='color: green;'>" + arrOfStr[0] + "</span>";
    } else {
        end = end + "<span style='color: rgb(185, 185, 185);'>" + arrOfStr[0] + "</span>";
    }
    end = end + "|";
    if (hj22) {
        end = end + "<span style='color: green;'>" + arrOfStr[1] + "</span>";
    } else {
        end = end + "<span style='color: rgb(185, 185, 185);'>" + arrOfStr[1] + "</span>";
    }
    end = end + "|";
    if (hj33) {
        end = end + "<span style='color: green;'>" + arrOfStr[2] + "</span>";
    } else {
        end = end + "<span style='color: rgb(185, 185, 185);'>" + arrOfStr[2] + "</span>";
    }
    end = end + "|";
    if (hj44) {
        end = end + "<span style='color: green;'>" + arrOfStr[3] + "</span>";
    } else {
        end = end + "<span style='color: rgb(185, 185, 185);'>" + arrOfStr[3] + "</span>";
    }
    document.getElementById(fache).innerHTML = end;
}

function reset_anrechnen() {
    nwsl = [];
    fsl = [];
    gwsl = [];
    v = [];
    angfaecher = [];
    mund = [];
    hj1a = 0;
    hj2a = 0;
    hj3a = 0;
    hj4a = 0;
    Loeschen("mund");
    if (angerechnet) {
        var f = ['de', 'en', 'fr', 'la', 'it', 'bk', 'mu', 'lt', 'li', 'pi', 'ps', 'sm', 'mg', 're', 'et', 'nw', 'bi', 'ch', 'ph', 'sp', 'vk', 'in', 'ge', 'sp', 'gs', 'wi', 'gm', 'gg', 'ma'];
        for (var i in f) {
            if (document.getElementById(f[i]).innerHTML != "") {
                var m = document.getElementById(f[i]).innerHTML;
                while (m.includes('green') || m.includes('rgb(185, 185, 185)')) {
                    m = m.replace('<span style="color: green;">', "");
                    m = m.replace('<span style="color: rgb(185, 185, 185);">', "");
                    m = m.replace('</span>', "");
                }
                document.getElementById(f[i]).innerHTML = m;
            }
        }
        angerechnet = false;
    }

    
}
