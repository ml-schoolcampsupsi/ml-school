---
title: "Risorse"
date: 2019-05-29T22:28:30+01:00
---

# Open Instructable
In questo Open Instructable sono documentate le attività del camp e le relative risorse. L' instructable punta ad essere una guida che abilita altri docenti delle scuole professionali ad organizzare il camp presso la loro scuola.
La guida è disponibile in quattro lingue:

- [🇮🇹 ITALIANO](content/Guide/guida-it.md)
- [🇬🇧 ENGLISH](https://docs.google.com/presentation/d/1y0v19tApolSNb8qT6R_xuB5IoO96Lw9n4PFMs0ovnAc/edit?usp=sharing)
- [🇫🇷 FRANÇAIS](https://docs.google.com/presentation/d/1y0v19tApolSNb8qT6R_xuB5IoO96Lw9n4PFMs0ovnAc/edit?usp=sharing)
- [🇩🇪 DEUTSCH](https://docs.google.com/presentation/d/1y0v19tApolSNb8qT6R_xuB5IoO96Lw9n4PFMs0ovnAc/edit?usp=sharing)

Siete dei docenti innovatori e volete portare l’intelligenza artificiale a scuola con un approccio basato sulla pratica e il coding? Potete proporre il camp nella vostra scuola e utilizzare le risorse di questa guida. Per saperne di più scrivete a:
Serena Cangiano FabLab SUPSI [serena.cangiano@supsi.ch]( [serena.cangiano@supsi.ch](mailto:serena.cangiano@supsi.ch) 

## Attività
### 1_Benvenuto (15 minuti)
I docenti e gli studenti e si presentano. I docenti raccontano gli obiettivi del camp e il programma dettagliato delle attività della settimana.

### 2_Introduzione al Machine Learning: <br> cosa, come, perché (45 minuti)
Cosa si intende per Machine Learning? La prima sessione punta a condividere un po’ di teoria e a presentare cosa si può fare con questa nuova tecnologia. Il Machine Learning si trova in molti strumenti digitali della nostra vita quotidiana: in questa sessione i docenti spiegano quando e perché le tecnologie di ML sono utili e presentando esempi di progetti che utilizzano algoritmi di intelligenza artificiale, sia nel mondo industriale e scientifico, ma anche in campi più sperimentali come quello dell’arte e della creatività. L’introduzione prevede un momento di discussione sulle diverse strategie di Machine Learning e quando queste possono essere usate in un progetto.

- 📖&nbsp;&nbsp;[SLIDES](https://docs.google.com/presentation/d/1y0v19tApolSNb8qT6R_xuB5IoO96Lw9n4PFMs0ovnAc/edit?usp=sharing)

### 3)_Addrestriamo la macchina
[Teachable machine](https://teachablemachine.withgoogle.com/) è una pagina web che permette di familiarizzare con uno dei concetti fondamentali del Machine Learning: l'addestramento (il training) di un algoritmo. Si chiede agli studenti di addestrare la macchina a riconoscere diverse immagini fornite attraverso la webcam. Ad ogni “classe” di immagini gli studenti assoceranno un suono. Al termine dell’attività gli studenti suonano tutti insieme come in una orchestra controllando l’esecuzione dei suoni attraverso la webcam del loro computer.

- 🌐&nbsp;&nbsp;[Teachable Machine by Google](https://teachablemachine.withgoogle.com/)

### 4)_Introduzione a ml5.js (1 ora)
[p5.js](https://p5js.org/) e [ml5.js](https://ml5js.org/) sono i due principali strumenti di sviluppo utilizzati nel camp. ml5.js è una libreria che permette di accedere ad algoritmi e modelli di Machine Learning fruibili mediante web browser. p5.js è una libreria Javascript utilizzata per sviluppare esperienze grafiche e interattive sulla base dei principi chiave dell’ambiente di programmazione open source [Processing](https://processing.org).
Questa sessione punta a configurare questi strumenti sui computer degli studenti e a trasferire loro l'impostazione di un progetto di base utilizzando il [web editor di p5.js ](https://editor.p5js.org).
Il primo progetto di esempio guida gli studenti all'utilizzo di ml5.js per l'analisi del contenuto di immagini.

- 📖&nbsp;&nbsp;[p5.js reference page](https://p5js.org/reference)
- 📖&nbsp;&nbsp;[ml5js.js reference page](https://ml5js.org/reference/)
- 🌐&nbsp;&nbsp;[p5.js web editor](https://editor.p5js.org)
- 👨‍💻&nbsp;&nbsp;[**ESEMPIO 0** - classificazione di immagini con ml5.js](https://editor.p5js.org/FabLabSUPSI/sketches/RKlh1CmFD)

### 5)_Demo: carta, forbice, sasso (2 ore)
Dopo aver imparato come si utilizza un modello addestrato per riconoscere delle immagini, si presenta una demo interattiva che spiega il funzionamento e il processo di creazione di un modello di training.
L'attività interattiva guidata introduce gli studenti al concetto di *supervised learning* per addestrare un deep neural network a classificare dei gesti. la demo interattiva introduce a concetti fondamentali come *training/evaluation split, classifier evaluation, baseline accuarcy, overfitting, generalization, data augmentation*.
L'attività consiste nella raccolta di immagini di mani che eseguono i gesti del gioco carta-forbice-sasso secondo gli standard che permettono ad una rete neurale di apprendere la differenza tra i diversi gesti. 

- 📖&nbsp;&nbsp;[Descrizione dell'attività](https://github.com/alessandro-giusti/rock-paper-scissors/blob/master/EAAI%20Paper.pdf)
- 👨‍💻&nbsp;&nbsp;[Codice utilizzato](https://github.com/alessandro-giusti/rock-paper-scissors)

### 6)_Classificazione continua di immagini via webcam (30 minuti)
Questa sessione propone una serie di attività pratiche che utilizzano i tutorial di base di ml5.js L’obiettivo di questa attività è utilizzare lo stesso modello di classificazione delle immagini non su una singola foto, ma sui frame del video proveniente dalla webcam del computer.

- 👨‍💻&nbsp;&nbsp;[**ESEMPIO 1** - classificazione continua di immagini di una webcam](https://editor.p5js.org/FabLabSUPSI/sketches/wrP1UGMdg)

### 7)_Riprogrammiamo Teachable Machine di Google con ml5.js  (1.30 ore)
In questa sessione guidata si utilizza un tutorial di ml5.js per programmare un’applicazione che funziona in maniera molto simile alla demo di Teachable Machines di Google (vedi attività 3). Per sviluppare questa applicazione si introduce il concetto di Transfer Learning, una tecnica di Machine Learning che prevede l’utilizzo di un modello già sviluppato per assolvere un certo compito come punto di partenza per la definizione di un nuovo modello che serve ad uno scopo diverso. Per esempio utilizzeremo un modello utilizzato per classificare delle immagini che è già addestrato su un dataset molto grande e generico: il modello non lo si utilizza per ottenere le etichette che descrivono il contenuto dell’immagine, ma per estrarre i dati grezzi che descrivono le qualità (features) di un’immagine e per definire un nuovo modello.

- 👨‍💻&nbsp;&nbsp;[**ESEMPIO 2** - Classificazione Transfer Learning: addrestramento con le immagini di una webcam](https://editor.p5js.org/FabLabSUPSI/sketches/HpfHZZTMg)

### 8)_Transfer learning - Regression (30 minuti)
In questa sessione si utilizza un tutorial pratico di ml5.js in cui l’applicazione sviluppata nella sessione precedente viene modificata tramite l’utilizzo di un algoritmo di regressione. Nell’esempio precedente, ogni volta che è mostrata una nuova immagine alla webcam, l’algoritmo è programmato per restituire una classe, e la percentuale di compatibilità con i dati di addestramento utilizzati per la definizione della classe stessa. Tramite l’algoritmo di regressione possiamo invece chiedere al sistema di “immaginarsi” una transizione tra una certa classe ed un’altra. Possiamo dunque, per esempio addestrare la macchina a riconoscere la posizione (XY) senza dover addestrare l’algoritmo a riconoscere tutte le possibili posizioni della mano e le rispettive coordinate.  

- 👨‍💻&nbsp;&nbsp;[**ESEMPIO 3** - Transfer Learning Regression](https://editor.p5js.org/FabLabSUPSI/sketches/T4Fr7Tjol)
- 👨‍💻&nbsp;&nbsp;[**ESEMPIO 4** - Transfer Learning Regression + audio](https://editor.p5js.org/FabLabSUPSI/sketches/SKMlcH5CH)

### 9)_Hack the keyboard  (30 minuti)
Al fine di realizzare il progetto di controller per videogiochi basato su ML, in questa sessione si spiega l’utilizzo di un software esterno che permette di controllare la tastiera del computer da remoto via [mqtt](https://en.wikipedia.org/wiki/MQTT), un protocollo di connettività machine-to-machine utilizzato in ambito IoT.

- 👨‍💻&nbsp;&nbsp;[**STRUMENTO** - da mqtt_alla_tastiera](https://github.com/lorenzoromagnoli/mqtt_to_keyboard/releases/tag/1.0.0)
- 👨‍💻&nbsp;&nbsp;[**ESEMPIO 5** - inviare comandi della tastiera attraverso mqtt](https://editor.p5js.org/FabLabSUPSI/sketches/FRdFDkcpS)
- 👨‍💻&nbsp;&nbsp;[**ESEMPIO 6** - classificatore webcam  + invio alla keyboard](https://editor.p5js.org/FabLabSUPSI/sketches/4YPqKBVyJ)

### 10_Sketch&Pitch  (1 ora)
In questa sessione si chiede agli studenti di ideare delle possibili applicazioni di controller per videogiochi considerando le opportunità tecnologiche esplorate durante le sessioni pratiche con il codice. Durante la sessione si seleziona il videogioco da un [catalogo online](https://archive.org/details/internetarcade) o si chiede agli studenti di selezionare il loro videogioco preferito. L’obiettivo della sessione e lavorare in gruppo per definire il funzionamento del controller rispetto alla logica del videogioco selezionato e gli elementi dell’interfaccia del progetto finale. Per stimolare la creatività e lo sviluppo di competenze creative e di comunicazione si chiede agli studenti di disegnare il progetto su dei fogli di carta e di presentarli alla classe in pochi minuti.

### 11_Lavoro indipendente di gruppo (4 ore)
Al fine di realizzare i prototipi funzionanti dei controller, gli studenti lavorano in gruppo e in maniera autonoma allo sviluppo del codice e al training dell’algoritmo di riconoscimento dei gesti.

### 12_Presentazione e mostra dei progetti (1 ora)
Saper comunicare un progetto tecnologico e interattivo che usa Machine Learning è una competenza fondamentale per portare un’idea al livello di un progetto imprenditoriale che potrebbe avere un futuro riscontro sul mercato. Per questo motivo, in questa sessione finale si chiede agli studenti di presentare il prototipo funzionante alla classe e di condividere le difficoltà e il modo in cui sono state risolte dal punto di vista tecnico e progettuale. Questa presentazione aiuta a trasferire i saperi e le competenze acquisite in maniera peer-to-peer.

### 13_Consegna del certificato di partecipazione
Il camp si conclude con la consegna dei certificati di partecipazione. Un gesto simbolico per ringraziare tutti per il loro impegno e partecipazione.

- 👨‍💻&nbsp;&nbsp;[**CERTIFICATO**](https://docs.google.com/presentation/d/1gqzZglKz6R-phzhNsW3Yn4QvbQosBkNlk6Ot6O17b5g/edit?usp=sharing)


