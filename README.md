[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9317120&assignment_repo_type=AssignmentRepo)


Gränssnittet/sidans utseende ska vara intuitivt.
Det ska gå att utföra hela beställningsförfarandet med hjälp av enbart tangentbordet (tillgängligt).
Produkterna ska gå att sortera utifrån pris
När man tryckt på beställ-knappen så ska en bekräftelse-ruta visas med information om beställningen och leveranstid

Beställningssammanfattning#
Totalsumman ska uppdateras baserat på ändringar som sker i antal beställda munkar i realtid
Det ska finnas en varukorgssammanställning som visar endast de munkar som har beställts. Denna ska alltså vara skild från själva beställningsformuläret. Se referensbilder längre ner.


Gottfrids specialregler#
På måndagar innan kl. 10 ges 10 % rabatt på hela beställningssumman. Detta visas i varukorgssammanställningen som en rad med texten "Måndagsrabatt: 10 % på hela beställningen".
På fredagar efter kl. 15 och fram till natten mellan söndag och måndag kl. 03.00 tillkommer ett helgpåslag på 15 % på alla munkar. Detta ska inte framgå för kunden att munkarna är dyrare, utan priset ska bara vara högre i "utskriften" av munkarna.
Om kunden har beställt för totalt mer än 800 kr ska det inte gå att välja faktura som betalsätt.
Om kunden har beställt minst 10 munkar av samma sort, ska munkpriset för just denna munksort rabatteras med 10 %
Om kunden beställer totalt mer än 15 munkar så blir frakten gratis. I annat fall är fraktsumman 25 kr plus 10% av totalbeloppet i varukorgen.
Om kunden inte har lagt beställningen inom 15 minuter så ska beställningsformuläret tömmas/rensas och kunden ska meddelas att denne är för långsam.

Formulär för kunduppgifter#
Formuläret där köparen fyller i sina uppgifter skall ha:

Val för betalsätt: kort eller faktura
Om faktura valts som betalsätt ska ett formulärfält för svenskt personnummer visas. Även detta fält ska valideras innan formuläret går att skicka iväg, dvs. att man fyllt i korrekt personnummer.
Om kort väljs som betalsätt, visas fält för kortnummer, datum/år och CVC. Dessa behöver inte valideras!
Checkbox för godkännande av behandling av personuppgifter
Checkbox för beställning av nyhetsbrev (ska vara iklickad som default)
Samtliga formulärfält ska valideras och formuläret/beställningen ska inte gå att skicka om det finns några fel
Felen ska markeras och kommuniceras tydligt (t.ex. ej enbart med röd färg, tag i beaktande a11y)
När formuläret är korrekt ifyllt ska Skicka-/Beställ-knappen aktiveras, innan det är den utgråad


Övrigt#
Det ska ges någon from av visuell feedback på när varukorgens totalsumma uppdateras. Med detta menas exempelvis någon visuell förändring, såsom en färg-skiftning, storleksskiftning, eller motsv.

Städa knappar 


