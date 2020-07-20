<?php
	if(isset($_COOKIE["Std"])){
		if($_COOKIE["Std"]!='sajhqdjksdhaskj'){
				header("Location: http://oberstufe.wasweisich.com/"); /* Browser umleiten */
				exit;
		}
	}
?>

<html>

<head>
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
  <script src="JavaScript2.js"></script>
  <meta charset="utf-8" />
  <link href="stylesheet.css" rel="stylesheet" />
  <title></title>
</head>

<body>
  <h1>
    Kurswahl
  </h1>
  <div class="border"></div>
  <center>
    <table id="all">
      <tr>
        <td>
          <p class="title">Bereich I</p>
        </td>
      </tr>

      <tr>
        <td class="head">
          Kurs
        </td>
        <td class="head">
          Leistungsfach
        </td>
        <td class="head">
          Grundkurs
        </td>
      </tr>

      <tr>
        <td>
          <p>Deutsch</p>
        </td>
        <td>
          <label class="container" >
            <input type="checkbox" id="de5" onchange="change(this);">
            <span class="checkmark" id="de9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="de3" onchange="change(this);">
            <span class="checkmark" id="de8"></span>
          </label>

        </td>
        <td>
          <p id="de"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Englisch</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="en5" onchange="change(this);">
            <span class="checkmark" id="en9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="en3" onchange="change(this);">
            <span class="checkmark" id="en8"></span>
          </label>

        </td>
        <td>
          <p id="en"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Französisch</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="fr5" onchange="change(this);">
            <span class="checkmark" id="fr9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="fr3" onchange="change(this);">
            <span class="checkmark" id="fr8"></span>
          </label>

        </td>
        <td>
          <p id="fr"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Latein</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="la5" onchange="change(this);">
            <span class="checkmark" id="la9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="la3" onchange="change(this);">
            <span class="checkmark" id="la8"></span>
          </label>

        </td>
        <td>
          <p id="la"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Italienisch</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="it5" onchange="change(this);">
            <span class="checkmark" id="it9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="it3" onchange="change(this);">
            <span class="checkmark" id="it8"></span>
          </label>

        </td>
        <td>
          <p id="it"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Bildende Kunst</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="bk5" onchange="change(this);">
            <span class="checkmark" id="bk9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="bk2" onchange="change(this);">
            <span class="checkmark" id="bk1"></span>
          </label>

        </td>
        <td>
          <p id="bk"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Musik</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="mu5" onchange="change(this);">
            <span class="checkmark" id="mu9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="mu2" onchange="change(this);">
            <span class="checkmark" id="mu1"></span>
          </label>

        </td>
        <td>
          <p id="mu"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Literatur und Theater</p>
        </td>
        <td>
          <p>----</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="lt7" onchange="change(this);">
            <span class="checkmark" id="lt6"></span>
          </label>


        </td>
        <td>
          <p id="lt"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Literatur</p>
        </td>
        <td>
          <p>----</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="li7" onchange="change(this);">
            <span class="checkmark" id="li6"></span>
          </label>

        </td>
        <td>
          <p id="li"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="title">Bereich II</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Geschichte</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="gs5" onchange="change(this);">
            <span class="checkmark" id="gs9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="gs2" onchange="change(this);">
            <span class="checkmark" id="gs1"></span>
          </label>

        </td>
        <td>
          <p id="gs"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Geographie</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="gg5" onchange="change(this);">
            <span class="checkmark" id="gg9"></span>
          </label>

        </td>
        <td>
          <p>----</p>
        </td>
        <td>
          <p id="gg"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Gemeinschaftskunde</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="gm5" onchange="change(this);">
            <span class="checkmark" id="gm9"></span>
          </label>

        </td>
        <td>
          <p>----</p>
        </td>
        <td>
          <p id="gm"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p id="spez">Gm/GG</p>
        </td>
        <td>
          <p>----</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="ggm7" onchange="change(this);">
            <span class="checkmark" id="ggm6"></span>
          </label>

        </td>
        <td>
          <p id="ggm"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Religion</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="re5" onchange="change(this);">
            <span class="checkmark" id="re9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="re2" onchange="change(this);">
            <span class="checkmark" id="re1"></span>
          </label>

        </td>
        <td>
          <p id="re"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Ethik</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="et5" onchange="change(this);">
            <span class="checkmark" id="et9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="et3" onchange="change(this);">
            <span class="checkmark" id="et8"></span>
          </label>

        </td>
        <td>
          <p id="et"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Wirtschaft</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="wi5" onchange="change(this);">
            <span class="checkmark" id="wi9"></span>
          </label>

        </td>
        <td>
          <p>----</p>
        </td>
        <td>
          <p id="wi"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Philosophie</p>
        </td>
        <td>
          <p>----</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="pi7" onchange="change(this);">
            <span class="checkmark" id="pi6"></span>
          </label>

        </td>
        <td>
          <p id="pi"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Psychologie</p>
        </td>
        <td>
          <p>----</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="ps7" onchange="change(this);">
            <span class="checkmark" id="ps6"></span>
          </label>

        </td>
        <td>
          <p id="ps"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Seminarfach</p>
        </td>
        <td>
          <p>----</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="sm7" onchange="change(this);">
            <span class="checkmark" id="sm6"></span>
          </label>

        </td>
        <td>
          <p id="sm"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="title">Bereich III</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Mathe</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="ma5" onchange="change(this);">
            <span class="checkmark" id="ma9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="ma3" onchange="change(this);">
            <span class="checkmark" id="ma8"></span>
          </label>

        </td>
        <td>
          <p id="ma"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>NwT</p>
        </td>
        <td>
          <p>----</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="nwt7" onchange="change(this);">
            <span class="checkmark" id="nwt6"></span>
          </label>

        </td>
        <td>
          <p id="nwt"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Biologie</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="bi5" onchange="change(this);">
            <span class="checkmark" id="bi9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="bi3" onchange="change(this);">
            <span class="checkmark" id="bi8"></span>
          </label>

        </td>
        <td>
          <p id="bi"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Chemie</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="ch5" onchange="change(this);">
            <span class="checkmark" id="ch9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="ch3" onchange="change(this);">
            <span class="checkmark" id="ch8"></span>
          </label>

        </td>
        <td>
          <p id="ch"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Physik</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="ph5" onchange="change(this);">
            <span class="checkmark" id="ph9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="ph3" onchange="change(this);">
            <span class="checkmark" id="ph8"></span>
          </label>

        </td>
        <td>
          <p id="ph"></p>
        </td>
      </tr>
      <tr>
      <tr>
        <td>
          <p>VK Mathe</p>
        </td>
        <td>
          <p>----</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="vkm7" onchange="change(this);">
            <span class="checkmark" id="vkm6"></span>
          </label>

        </td>
        <td>
          <p id="vkm"></p>
        </td>
      </tr>
      <tr>
      <tr>
        <td>
          <p>Inf</p>
        </td>
        <td>
          <p>----</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="if7" onchange="change(this);">
            <span class="checkmark" id="if6"></span>
          </label>

        </td>
        <td>
          <p id="if"></p>
        </td>
      </tr>
      <tr>
      <tr>
        <td>
          <p>Geometrie</p>
        </td>
        <td>
          <p>----</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="ge7" onchange="change(this);">
            <span class="checkmark" id="ge6"></span>
          </label>

        </td>
        <td>
          <p id="ge"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="title">Ohne Zuordung</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Sport</p>
        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="sp5" onchange="change(this);">
            <span class="checkmark" id="sp9"></span>
          </label>

        </td>
        <td>
          <label class="container">
            <input type="checkbox" id="sp2" onchange="change(this);">
            <span class="checkmark" id="sp1"></span>
          </label>

        </td>
        <td>
          <p id="sp"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p></p>
        </td>
        <td></td>
        <td></td>
        <td>
          <p id="gesa">0|0|0|0</p>
        </td>
      </tr>
    </table>
  </center>
  <div class="border"></div>

  <h4 id="a1">Zu wenige Leistungsfächer gewählt.</h4>
  <h4 id="a2">Mathematik und Deutsch müssen gewählt werden</h4>
  <h4 id="a3">0 Sprache(n) und 0 Naturwissenschaft(en) gewählt. (2 Spachen & 1 Nws oder umgekehrt)</h4>
  <h4 id="a4">Leistungsfachkombination ungültig: zwei der drei Leistungsfächer müssen aus D, M, FS, Nawi sein.</h4>
  <h4 id="a6">Folgende Fächer fehlen noch: Geschichte, Geographie und Gemeinschaftskunde, Religion oder Ethik, Bildende Kunst oder Musik, Sport.</h4>
  <h4 id="a7">Anzahl der gewählten Kurse müssen 42 ergeben. (0)</h4>

  <h1 id="a8" class="alert">Kurswahl ungültig</h1>

  <button class="btn" onclick="reset();">Reset</button>
  <button class="btn" onclick="drucken();">Print</button>
  
  
    <footer>
    <center>
      <table>
        <tr>
          <td>
            Entwickler: Jonas Haug
          </td>
          <td>
            Design: Vincent Wettengel
          </td>
          <td>
            © Jonas Haug
          </td>
          <td>
            <p id="date"></p>
            <script type="text/javascript">
              myFunction();

              function myFunction() {
                var d = new Date();
                var n = d.getFullYear();
                document.getElementById("date").innerHTML = n;
              }
            </script>
          </td>
          <td>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="wettengels@gmx.de" />
              <input type="hidden" name="item_name" value="SPENDE AN JONAS" />
              <input type="hidden" name="currency_code" value="EUR" />
              <input type="image" src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/de_DE/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </td>
        </tr>
      </table>
    </center>





  </footer>

</body>

</html>
