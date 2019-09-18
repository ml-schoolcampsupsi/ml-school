---
title: "Risorse"
date: 2019-05-29T22:28:30+01:00
---

# Open instructable: le attività del ml@school camp

### 1) Benvenuto (15 minuti)
Gli studenti si presentano e i tutor raccontano gli obiettivi del camp e il programma dettagliato del camp. 

### 2) Introduzione al Machine Learning COSA, COME, PERCHÉ (45 minuti)
Cosa si intende per Machine Learning? Un po' di teoria per presentare cosa si può fare con questa nuova tecnologia.
Il Machine Learning si trova in molti strumenti digitali della nostra vita quotidiana: i tutor spiegano quando e perché le tecnologie di ML sono utili e presentano diversi progetti che utilizzano algoritmi di intelligenza artificiale, sia nel mondo industriale e scientifico, ma anche in campi più sperimentali come quello dell’arte e del design.
L'introduzione prevede un momento di discussione sulle diverse strategie di Machine Learning e quando queste possono essere usate.

- **RISORSE**
- 📖 [[SLIDES]](https://docs.google.com/presentation/d/1y0v19tApolSNb8qT6R_xuB5IoO96Lw9n4PFMs0ovnAc/edit?usp=sharing)

### 3) Addrestriamo la macchina
[Teachable machine](https://teachablemachine.withgoogle.com/) (macchine a cui si può insegnare), è una pagina web che permette di familiarizzare con uno dei concetti fondamentali dell'addresramento di reti neurali, il machine learning “teaching”.
Si chiede agli studenti di addrestrare la macchina a riconoscere diverse immagini fornite attraverso la webcam. Ad ogni "classe" di immagini gli studenti associeranno un suono. Al termine dell'attività gli studenti suoneranno tutti insieme controllando i suoni attraverso la webcam.

- **RISORSE**
- 🌐 [[TEACHABLE MACHINE by GOOGLE]](https://teachablemachine.withgoogle.com/)

### 4) Introduzione a ml5.js (1 ora)
[p5.js](https://p5js.org/) [ml5.js](https://ml5js.org/) sono i due principali strumenti del camp. Ml5.js è una libreria che permette di accedere ad algoritmi e modelli di Machine Learning tramite il browser sulla base di TensorFlow.js e senza altre dipendenze. P5.js è una libreria Javascript per realizzare esperienze grafiche e interattive sulla base dei principi chiave dell'ambiente di programmazione [[Processing]](https://processing.org).
Questa sessione punta a configurare questi strumenti sui computer degli studenti e a trasferire loro l'impostazione di un progetto di base utilizzando il [web editor di p5.js ](https://editor.p5js.org).
Il primo codice di esempio guida gli studenti all'utilizzo di  ml5.js per l'analisi del contenuto di immagini.

- **RISORSE**
- 📖 [p5.js reference page](https://p5js.org/reference)
- 📖 [ml5js.js reference page](https://ml5js.org/reference/)
- 🌐 [p5.js web editor](https://editor.p5js.org)
- 👨‍💻 [**ESEMPIO 0** - classificazione di immagini con ml5.js](https://editor.p5js.org/10r3n20/sketches/tOXHdAv01)

### 5) Demo: carta, forbice, sasso (2 ore)
Dopo aver imparato come si utilizza un modello addestrato per riconoscere delle immagini, si presenta una demo interattiva che spiega il funzionamento e il processo di creazione di un modello di training.
L'attività interattiva guidata introduce gli studenti al concetto di "supervised learning" per addestrare un deep neural network a classificare dei gesti. la demo interattiva introduce a concetti fondamentali come training/evaluation split, classifier evaluation, baseline accuarcy, overfitting, generalization, data augmentation.
L'attività consiste nella raccolta di immagini di mani che eseguono i gesti del gioco carta-forbice-sasso secondo gli standard che permettono ad una rete neurale di apprendere la differenza tra i diversi gesti. 

- **RISORSE**
- 📖 [descrizione dell'attività](https://github.com/alessandro-giusti/rock-paper-scissors/blob/master/EAAI%20Paper.pdf)
- 👨‍💻 [codice utilizzato](https://github.com/alessandro-giusti/rock-paper-scissors)

### 6) Classificazione continua di immagini via webcam (30 minuti)
Questa sessione propone una serie di attività pratiche che utilizzano i tutorial di base di ml5.js
L'obiettivo di questa attività è utilizzare lo stesso modello di classificazione delle immagini non su una singola foto, ma sui frame del video proveniente da una webcam.

- **RISORSE**
- 👨‍💻 [**ESEMPIO 1** - classificazione continua di immagini di una webcam](https://editor.p5js.org/10r3n20/sketches/ZtigL9CSe)

### 7)Riprogrammiamo Teachable Machine di Google con ml5.js  (1.30 ore)
In questa sessione guidata si utilizza un tutorial di ml5.js per programmare un'applicazione che funziona in maniera molto simile alla demo di Teachable Machines di Google (vedi attività 3). Per sviluppare quest'applicazione si introduce il concetto di Transfer Learning, una tecnica di Machine Learning che prevede l'utilizzo di un modello sviluppato per un certo assolvere un certo compito come punto di partenza per definire un nuovo modello che serve uno  scopo diverso (es. QUA LORE SCRIVI ESEMPIO).

- **RISORSE**
- 👨‍💻 [**ESEMPIO 2** - Classificazione Transfer Learning: addrestramento con le immagini di una webcam](https://editor.p5js.org/10r3n20/sketches/786J5eA6j)

### 8) Transfer learning - Regression (30 minuti)
In questa sessione si utilizza un tutorial pratico di ml5.js in cui l'applicazione sviluppata nella sessione precedente viene modificata tramite l'utilizzo di un'algoritmo di Regression, ovvero (LORE SCRIVI QUI UNa spiegazione comprensibile con esempio)

- **RISORSE**
- 👨‍💻 [**ESEMPIO 3** - Transfer Learning Regression](https://editor.p5js.org/10r3n20/sketches/Ij0noQGNB)
- 👨‍💻 [**ESEMPIO 4** - Transfer Learning Regression + audio](https://editor.p5js.org/10r3n20/sketches/XwkYWe3gA)

### 9) Hack the keyboard  (30 minuti)
Al fine di realizzare il progetto di controller per videogiochi basato su ML, in questa sessione si spiega l'utilzzo di un software esterno che permette di controllare la tastiera del computer da remoto via [mqtt](https://github.com/alessandro-giusti/rock-paper-scissors), un protocollo di connettività machine-to-machine utilizzato in ambito IoT.

- **RISORSE**
- 👨‍💻 [**STRUMENTO** - da mqtt_alla_tastiera](https://github.com/lorenzoromagnoli/mqtt_to_keyboard/releases/tag/1.0.0)
- 👨‍💻 ‍[**ESEMPIO 5** - inviare comandi della tastiera attraverso mqtt](https://editor.p5js.org/10r3n20/sketches/SyoYaCrjQ)
- 👨‍💻 ‍[**ESEMPIO 6** - classificatore webcam  + invio alla keyboard](https://editor.p5js.org/10r3n20/sketches/3CMu2RwLK)

### 10) Sketch&Pitch  (1 ora)
In questa sessione si chiede agli studenti di ideare delle possibili applicazioni di controller per videogiochi considerando le opportunità tecnologiche esplorate durante le sessioni pratiche con il codice. Durante la sessione si seleziona il videogioco da un catalogo online (lore link al catalogo) o si chiede agli studenti di selezionare il loro videogioco preferito. L'obiettivo della sessione e lavorare in gruppo per definire il funzionamento del controller rispetto alla logica del videogioco selezionato e gli elementi dell'interfaccia del progetto finale. Per stimolare la creatività e lo sviluppo di competenze creative e di comunicazione si chiede agli studenti di disegnare il progetto su dei fogli di carta e di presentarli alla classe in pochi minuti.


