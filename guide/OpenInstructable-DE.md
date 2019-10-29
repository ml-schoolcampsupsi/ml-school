

#  

# **Machine Learning   @School Camp**

 

**Open Instructable** **V.0.1.** 
 
 

#  

#  

#  

**Autoren
** Lorenzo Romagnoli 

Serena Cangiano

22.10.2019
 
 

 

 

 

**Open Instructable**

Machine Learning @School Camp ist ein praktischer Kurs zu maschinellen Lernkonzepten und -technologien für Berufsschüler. Durch den Einsatz offener Ressourcen, Webdemos und interaktiver Tools erfahren die Schüler von Berufsschulen einen Entwurfsprozess, in dem sie lernen, wie sie digitale Projekte basierend auf Machine Learning umsetzen und schnell Lösungen entwerfen und Prototypen erstellen können, die sich auf das Leben der Menschen auswirken.

In diesem Open Instructable sind die Aktivitäten und zugehörigen Ressourcen des Camps der Machine Learning @School - 2019 (Ausgabe 2019) dokumentiert. Organisiert im SUPSI FabLab vom 24. bis 27. Juni 2019. Das Instructable zielt darauf ab, Lehrern von Berufsschulen zu ermöglichen, das Camp an ihrer Schule zu organisieren und die Prinzipien des Machine Learning mit einem didaktischen Ansatz zu unterrichten, der auf der Erstellung von Prototypen und der Verwendung des Codings und benutzerfreundlichen Webtools basiert.

# **Tätigkeit**

### 1. Begrüßung - 15 Minuten

Die Lehrer und die Schüler stellen sich vor. Die Lehrer beschreiben die Ziele des Camps und das detaillierte Aktivitätenprogramm der Woche.

### 2. Einführung in das Machine Learning: Was, wie, warum - 45 Minuten

Was ist mit Machine Learning gemeint? Die erste Sitzung zielt darauf ab, etwas Theorie zu teilen und zu präsentieren, was mit dieser neuen Technologie getan werden kann. Machine Learning ist in vielen digitalen Werkzeugen unseres täglichen Lebens zu finden: In dieser Sitzung erklären die Lehrer, wann und warum ML-Technologien nützlich sind; sie präsentieren Beispiele für Projekte, die Algorithmen der künstlichen Intelligenz sowohl in der Industrie als auch in der Wissenschaft in experimentelleren Bereichen wie Kunst und Kreativität einsetzen. Die Einführung sieht eine Gesprächsrunde über die verschiedenen Strategien des Machine Learning vor und wann diese in einem Projekt verwendet werden können.

●   📖 [SLIDES](https://docs.google.com/presentation/d/1y0v19tApolSNb8qT6R_xuB5IoO96Lw9n4PFMs0ovnAc/edit?usp=sharing) 

###  

### 3. Wir weisen das Auto an - 1 Stunde

[Teachable Machine](https://teachablemachine.withgoogle.com/) ist eine Webseite, auf der Sie sich mit einem der grundlegenden Konzepte des Machine Learning vertraut machen können: die Anweisung (Training) eines Algorithmus. Die Schüler werden gebeten, das Gerät so einzustellen, dass es verschiedene Bilder erkennt, die über die Webcam bereitgestellt werden. Jeder „Bildkategorie“ ordnen die Schüler einen Ton zu. Am Ende der Aktivität arbeiten die Schüler zusammen wie ein Orchester und überprüfen die Tonabfolge auf der Webcam ihres Computers.

●   🌐 [Teachable Machine by Google](https://teachablemachine.withgoogle.com/) 

###  

### 4. Einführung in ml5.js - 1 Stunde

[p5.js](https://p5js.org/) und[ ](https://ml5js.org/)[ml5.js](https://ml5js.org/) sind die beiden Hauptentwicklungstools, die im Camp verwendet werden. ml5.js ist eine Bibliothek, mit der Sie auf Algorithmen und Modelle für Machine Learning zugreifen können, auf die über einen Webbrowser zugegriffen werden kann. p5.js ist eine Javascript-Bibliothek, die verwendet wird, um grafische und interaktive Erfahrungen auf der Grundlage der Schlüsselprinzipien der Open-Source-Programmierumgebung[ Processing](https://processing.org) zu entwickeln. In dieser Sitzung sollen diese Tools auf den Computern der Schüler konfiguriert und mit dem Web-Editor von p5.js in ein[ ](https://editor.p5js.org)[Basisprojekt übertragen werden](https://editor.p5js.org) . Das erste Beispielprojekt leitet die Schüler an, ml5.js für die Analyse von Bildinhalten zu verwenden.

●   📖 [p5.js Referenzseite](https://p5js.org/reference) 

●   📖 [ml5js.js Referenzseite](https://ml5js.org/reference/) 

●   🌐 [p5.js Webeditor](https://editor.p5js.org) 

●   👨‍💻 [**BEISPIEL 0**](https://editor.p5js.org/FabLabSUPSI/sketches/RKlh1CmFD)[ - Klassifizierung von Bildern mit ml5.js](https://editor.p5js.org/FabLabSUPSI/sketches/RKlh1CmFD) 

### 5. Demo: Papier, Schere, Stein - 2 Stunden

Nach dem Erlernen der Verwendung eines Anweisungsmodells zum Erkennen von Bildern wird ein interaktives Demo vorgestellt, das die Funktionsweise und den Prozess der Erstellung eines Anweisungsmodells (Training) erläutert. Die interaktive Aktivität führt die Schüler in das Konzept des „ supervised learning“ ein, um ein tiefes *neuronales Netzwerk* in der Klassifizierung von Gesten zu unterweisen. Das interaktive Demo bietet grundlegende Konzepte wie *Split-Training/-Bewertung, Klassifikatorbewertung, Grundgenauigkeit, Überanpassung, Generalisierung und Datenerweiterung.* Die Aktivität besteht darin, Bilder von Händen zu sammeln, welche die Gesten des Spiels Schere, Papier, Stein entsprechend den Standards ausführen, die es einem neuronalen Netzwerk ermöglichen, den Unterschied zwischen den verschiedenen Gesten zu lernen.

●   📖 [Beschreibung der Aktivität](https://github.com/alessandro-giusti/rock-paper-scissors/blob/master/EAAI Paper.pdf) 

●   👨‍💻 [Benutzter Code](https://github.com/alessandro-giusti/rock-paper-scissors) 

 

### 6. Kontinuierliche Klassifizierung von Bildern per Webcam - 30 Minuten

In dieser Sitzung werden eine Reihe von praktischen Aktivitäten vorgeschlagen, welche die Basistutorials ml5.js verwenden. Ziel dieser Aktivität ist es, dasselbe Bildklassifizierungsmodell nicht auf ein einzelnes Foto, sondern auf die Frames des Videos anzuwenden, das von der Webcam des Computers stammt.

👨‍💻 [**BEISPIEL 1**](https://editor.p5js.org/FabLabSUPSI/sketches/wrP1UGMdg)[ - Kontinuierliche Klassifizierung von Bildern einer Webcam](https://editor.p5js.org/FabLabSUPSI/sketches/wrP1UGMdg) 

### 7. Wir programmieren Googles Teachable Machine mit ml5.js um - 1,30 Stunden

In dieser geführten Sitzung verwenden wir ein Tutorial von ml5.js zur Programmierung einer Anwendung, die dem Demo von Google Teachable Machines sehr ähnlich ist (siehe Aktivität 3). Um diese Anwendung zu entwickeln, führen wir das Konzept des Transfer Learning ein, eine Technik des Machine Learning, bei der ein bereits entwickeltes Modell zur Ausführung einer bestimmten Aufgabe als Ausgangspunkt für die Definition eines neuen Modells verwendet wird, das einem anderen Zweck dient. Zum Beispiel werden wir ein Modell verwenden, um Bilder zu klassifizieren, die bereits in einem sehr großen und generischen Datensatz unterwiesen wurden: Das Modell wird nicht verwendet, um die Beschriftungen zu erhalten, die den Inhalt des Bildes beschreiben, sondern um die Rohdaten zu extrahieren, welche die Eigenschaften eines Bildes (Merkmale) beschreiben und zur Definition eines neuen Modells.

●   👨‍💻 [**BEISPIEL 2**](https://editor.p5js.org/FabLabSUPSI/sketches/HpfHZZTMg)[ - Klassifizierung Transfer Learning: Training mit Webcam-Bildern](https://editor.p5js.org/FabLabSUPSI/sketches/HpfHZZTMg) 

### 8. Transfer Learning - Regression - 30 Minuten

In dieser Sitzung wird ein praktisches Tutorial zu ml5.js verwendet, in dem die in der vorherigen Sitzung entwickelte Anwendung mithilfe eines Regressionsalgorithmus geändert wird. Wenn im vorherigen Beispiel ein neues Webcam-Bild angezeigt wird, ist der Algorithmus so programmiert, dass er eine Klasse und den Prozentsatz der Kompatibilität mit den Anweisungsdaten zurückgibt, die zur Festlegung der Klasse selbst verwendet wurden. Durch den Regressionsalgorithmus können wir stattdessen das System auffordern, sich einen Übergang zwischen einer bestimmten Klasse und einer anderen „vorzustellen“. So können wir zum Beispiel der Maschine die Anweisung geben, die Position (XY) zu erkennen, ohne den Algorithmus anweisen zu müssen, um alle möglichen Positionen der Hand und die jeweiligen Koordinaten zu erkennen.

●   👨‍💻 [**BEISPIEL 3**](https://editor.p5js.org/FabLabSUPSI/sketches/T4Fr7Tjol)[ - Transfer Learning Regression](https://editor.p5js.org/FabLabSUPSI/sketches/T4Fr7Tjol) 

●   👨‍💻 [**BEISPIEL 4**](https://editor.p5js.org/FabLabSUPSI/sketches/SKMlcH5CH)[ - Transfer Learning Regression + Audio](https://editor.p5js.org/FabLabSUPSI/sketches/SKMlcH5CH) 

### 9. Hack the keyboard - 30 Minuten

Um das Projekt eines auf ML basierenden Videospiel-Controllers zu realisieren, wird in dieser Sitzung die Verwendung einer externen Software erläutert, mit der die Computertastatur über[ ](https://en.wikipedia.org/wiki/MQTT) [mqtt](https://en.wikipedia.org/wiki/MQTT), einem Computer-zu-Computer-Verbindungsprotokoll aus dem im IoT-Bereich ferngesteuert werden kann.

●   👨‍💻 [**TOOL**](https://github.com/lorenzoromagnoli/mqtt_to_keyboard/releases/tag/1.0.0)[ - von mqtt_zum_Keyboard](https://github.com/lorenzoromagnoli/mqtt_to_keyboard/releases/tag/1.0.0) 

●   👨‍💻 [**BEISPIEL 5**](https://editor.p5js.org/FabLabSUPSI/sketches/FRdFDkcpS)[ - Befehle des Keyboards mittels mqtt versenden](https://editor.p5js.org/FabLabSUPSI/sketches/FRdFDkcpS) 

●   👨‍💻 [**BEISPIEL 6**](https://editor.p5js.org/FabLabSUPSI/sketches/4YPqKBVyJ)[ - Webcam-Klassifizierer + Senden an das Keyboard](https://editor.p5js.org/FabLabSUPSI/sketches/4YPqKBVyJ) 

### 10. Sketch & Pitch - 1 Stunde

In dieser Sitzung werden die Schüler gebeten, mögliche Anwendungen für Videospiel-Controller zu entwickeln und dabei die technischen Möglichkeiten zu berücksichtigen, die während der praktischen Sitzungen mit dem Code erkundet wurden. Während der Sitzung wird das Videospiel aus einem[ ](https://archive.org/details/internetarcade)[Online-Katalog ausgewählt oder die](https://archive.org/details/internetarcade) Schüler werden gebeten, ihr Lieblingsvideospiel auszuwählen. Ziel der Sitzung ist es, in Gruppen die Funktionsweise des Controllers in Bezug auf die Logik des ausgewählten Videospiels und die Elemente der Benutzeroberfläche des endgültigen Projekts zu definieren. Um die Kreativität und die Entwicklung kreativer und kommunikativer Fähigkeiten zu fördern, werden die Schüler gebeten, das Projekt auf Papierbögen zu entwerfen und der Klasse in wenigen Minuten vorzustellen.

### 11. Selbstständige Gruppenarbeit (4 Stunden)

Um die funktionierenden Prototypen der Controller zu erstellen, arbeiten die Schüler in Gruppen und eigenständig an der Entwicklung des Codes und am Training des Gestenerkennungsalgorithmus.

### 12. Präsentation und Darstellung der Projekte (1 Stunde)

Ein technologisches und interaktives Projekt zu präsentieren, das Machine Learning einsetzt, ist eine Grundvoraussetzung, um eine Idee auf das Niveau eines skalierbaren Projekts zu bringen, das den Markt zukünftig beeinflussen könnte. Aus diesem Grund werden die Schüler in dieser Abschlussveranstaltung gebeten, der Klasse den funktionierenden Prototypen vorzustellen. Sie sollen dabei über die Probleme und die Art und Weise, wie sie aus technischer und gestalterischer Sicht gelöst wurden, berichten. Diese Präsentation hilft dabei, sich die erworbenen Kenntnisse und Fähigkeiten gegenseitig zu vermitteln.

### 13. Aushändigung der Teilnahmebescheinigung

Das Camp wird mit der Übergabe der Teilnahmebescheinigungen abgeschlossen. Eine symbolische Geste, um allen für ihren Einsatz und Teilnahme zu danken,

●   👨‍💻 [**ZERTIFIKAT**](https://github.com/lorenzoromagnoli/mqtt_to_keyboard/releases/tag/1.0.0) 

 

# **Das Programm**

 

**Tag 1: Montag, den 24.** 

08:30 bis 08:45 Uhr: 👂 Vorstellung der Ziele des Camps, der Tutoren und der Teilnehmer

08:45 bis 09:30 Uhr: Einführung in das Machine Learning.

9:30 bis 10:30 Uhr: 🖐️Trainable Machine Orchestra: Realisierung eines Miniprojekts

10:30 bis 10:45 Uhr: 🍕**Pause** 

10:45 bis 11:30 Uhr: 👂🖐️Einführung in die Tools des Camps: ml5.js e p5.js. Installation von Tools und Demo zur Bilderkennung.
 11.30 bis 12.00 Uhr: 👂🖐️Demo zum Erstellen eines Datensatzes: Schere, Papier, Stein.

12:00 bis 13:00 Uhr: 🍕**Mittagspause** 

13:00 bis 14:00 Uhr: 👂🖐️Anweisungsaktivitäten des Datensatzes und Besprechung der Ergebnisse 

14:00 bis 14:10 Uhr: 🍕**Pause** 

14.10 bis 15:00 Uhr: 👂🖐️Weitere Details über ml5.js: die Klassifizierung und der kontinuierliche Kameraaufnahme.

 

**Tag 2: Dienstag, den 25.** 

8:30 bis 10:30 Uhr: 👂🖐️Transfer Learning: wie man Maschinen das Erkennen von Objekten beibringt

10:30 bis 12:00 Uhr: 👂🖐️Einführung in verschiedene Steuerelemente (Formen, Sounds, Tastatur prüfen)

12:00 bis 13:00 Uhr: 🍕**Mittagspause** 

13:00 bis 14:00 Uhr: 👂🖐️ Einteilung in Gruppen und Wettbewerb 

14:00 bis 15:00 Uhr: 👂🖐️Präsentation der Idee

 

**Tag 3: Mittwoch, den 26.**

8:30 bis 15:00 Uhr: 🖐️Selbstständiges Arbeiten 

 

**Tag 4: Mittwoch, den 26.**

8:30 bis 12:00 Uhr: 🖐️Wir debuggen die Projekte gemeinsam

13:00 bis 14:00 Uhr: 🖐️Vorbereitung der Projektdemos 

14:00 bis 15:00 Uhr: 🎭SHOW 

 

# **Kontakt**

Sind Sie innovative Lehrer und möchten künstliche Intelligenz mit einem praxisorientierten und codebezogenen Ansatz in die Schule bringen?
 Sie können das Camp in Ihrer Schule vorschlagen und die Ressourcen dieses Leitfadens nutzen.
 Um mehr zu erfahren, schreiben Sie an:

Serena Cangiano FabLab SUPSI 
 [serena.cangiano@supsi.ch](mailto:serena.cangiano@supsi.ch) 

# **Credits**

Das Projekt Machine Learning @School Camp wurde vom Labor für visuelle Kultur in Zusammenarbeit mit der SAMT (Scuola Arte e Mestieri Trevano) und der Informatikabteilung und dem Istituto Dalle Molle für Studien zur künstlichen Intelligenz USI-SUPSI mit Unterstützung der Gebert Rüf Stiftung konzipiert und gefördert.

 

# **Lizenz**

Sämtliche Inhalte des Handbuchs werden, sofern nicht anders angegeben, unter der Creative Commons - BY - Share Alike-Non - Non Commercial als Lizenz veröffentlicht.

 

 

 

 