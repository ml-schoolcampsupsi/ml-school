---
title: "Risorse"
date: 2019-05-29T22:28:30+01:00
---

# Cosa si fa al ml@scholl camp?

### 1) Benvenuti (15 minutes)
Gli studenti vengono accolti al camp, i docenti si presentano e raccontano gli obiettivi del camp e cosa si farà nei prossimi 4 giorni.

### 2) Machine Learning WHAT, HOW, WHY (45 minutes)
La prima ora del camp è dedicata a spiegare che cosa si può fare con il machine learning.
Si inizia raccontando quando e perché le tecnologie di machine learning sono utili.
Dopodichè vengono mostrati e raccontati vari progetti che utilizzano algoritmi di intelligenza artificiale, sia nel mondo industriale e scientifico, ma anche in campi più sperimentali come quello dell’arte e del design.
In fine si discutono varie strategie di machine learning e quando queste possono essere usate.

- **RISORSE**
- 📖 [[SLIDES]](https://docs.google.com/presentation/d/1y0v19tApolSNb8qT6R_xuB5IoO96Lw9n4PFMs0ovnAc/edit?usp=sharing)

### 3) Alleniamo la macchina
[Teachable machine](https://teachablemachine.withgoogle.com/) (macchine a cui si può insegnare), è una pagina web che permette di familiarizzare con uno dei concept fondamentali legato al machine learning “teaching”.
Gli studenti saranno richiesti di allenare la macchina a riconoscere diverse immagini fornite attraverso la webcam. Ad ogni "classe" di immagini gli studenti associeranno un suono. Al termine dell'attività gli studenti suoneranno tutti insieme controllando i suoni attraverso la webcam.

- **RISORSE**
- 🌐 [[TEACHABLE MACHINE]](https://teachablemachine.withgoogle.com/)

### 4) Introduzione a ml5.js (1h)
[p5.js](https://p5js.org/) [ml5.js](https://ml5js.org/) sono i due principali strumenti che verranno utilizzati durante il workshop.
Durante la prima ora di workshop pratico gli studenti configurano i tools sui loro computer e apprendono come impostare un progetto base di ml5js utilizzando il [web editor di p5.js ](https://editor.p5js.org).
Il primo codice di esempio guida gli studenti ad utilizzare ml5.js per analizzare il contenuto di immagini.

- **RISORSE**
- 📖 [p5.js reference page](https://p5js.org/reference)
- 📖 [ml5js.js reference page](https://ml5js.org/reference/)
- 🌐 [p5.js web editor](https://editor.p5js.org)
- 👨‍💻 [**EXAMPLE 0** - image classification with ml5.js](https://editor.p5js.org/10r3n20/sketches/tOXHdAv01)

### 5) Carta forbice sasso (2h)
Una volta appreso attraverso la prima demo di p5.js come utilizzare un modello trainato per riconoscere delle immagini.
Alessandro Giusti (IDSIA, USI-SUPSI) guiderò l'attività didattica chiamata carta forbice sasso, che potrerà gli studenti a partecipare al processo di creazione e training di un modello.
L'attività interattiva guidata proposta, introdurrà gli studenti al concetto di "supervized learning by training a deep neural network to classify hand gestures".
L'attività coprirà importanti concetti come: "training/evaluation split", classifier evaluation, baseline accuarcy, overfitting, generalization, data augmentation.

- **RISORSE**
- 📖 [descrizione dell'attività](https://github.com/alessandro-giusti/rock-paper-scissors/blob/master/EAAI%20Paper.pdf)
- 👨‍💻 [codice utilizzato](https://github.com/alessandro-giusti/rock-paper-scissors)

### 6) Classificazione continua di immagini via webcam (30m)
Continuano i tutorial pratici di ml5.js
L'obbiettivo di questa attività è utilizzare lo stesso modello di image classification, non su una singola foto ma sui frames del video proveniente dalla webcam.

- **RISORSE**
- 👨‍💻 [**EXAMPLE 1** - Continuos image classification of webcam images](https://editor.p5js.org/10r3n20/sketches/ZtigL9CSe)

### 7) Teachable machine con ml5.js  (1.30h)
In questo tutorial pratico di ml5.js si ricostruisce un programma che funziona in maniera molto simile alla demo di Teachable machine mostrata in precedenza. Per ottenere il risultato viene introdotto il concetto di transfer learning (una tecnica di machine learning dove si utilizza un modello sviluppato per un certo task come punto di partenza per costruire un nuovo modello serve un diverso scopo.)

- **RISORSE**
- 👨‍💻 [**EXAMPLE 2** - Transfer learning: training with webcam images](https://editor.p5js.org/10r3n20/sketches/786J5eA6j)
