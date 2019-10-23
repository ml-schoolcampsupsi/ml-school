# **Machine Learning @School Camp**

 

## **Open Instructable V.0.1.** 

### Autori

Lorenzo Romagnoli
Serena Cangiano
22.10.2019

Machine Learning @School Camp è un corso pratico sui concetti e le tecnologie di Machine Learning indirizzato a studenti delle scuole professionali. Tramite l’utilizzo di risorse aperte, demo web e strumenti interattivi, studenti di scuole professionali fanno esperienza di un processo progettuale durante il quale acquisiscono delle competenze su come realizzare progetti digitali basati sul Machine Learning e su come ideare e prototipare velocemente delle soluzioni che hanno un impatto sulle vite delle persone.

In questo Open Instructable sono documentate le attività e le relative risorse del camp Machine Learning @School - edizione 2019. Organizzato presso il FabLab SUPSI dal 24 al 27 giugno 2019. L’ instructable punta ad abilitare i docenti delle scuole professionali ad organizzare il camp presso la propria scuola e ad insegnare i principi del Machine Learning con un approccio didattico basato sulla realizzazione di prototipi e l’uso del coding e di strumenti web di facile utilizzo.

# **Attività**

### 1. Benvenuto - 15 minuti

I docenti e gli studenti e si presentano. I docenti raccontano gli obiettivi del camp e il programma dettagliato delle attività della settimana.

### 2. Introduzione al Machine Learning: cosa, come, perché - 45 minuti

Cosa si intende per Machine Learning? La prima sessione punta a condividere un po’ di teoria e a presentare cosa si può fare con questa nuova tecnologia. Il Machine Learning si trova in molti strumenti digitali della nostra vita quotidiana: in questa sessione i docenti spiegano quando e perché le tecnologie di ML sono utili e presentando esempi di progetti che utilizzano algoritmi di intelligenza artificiale, sia nel mondo industriale e scientifico, ma anche in campi più sperimentali come quello dell’arte e della creatività. L’introduzione prevede un momento di discussione sulle diverse strategie di Machine Learning e quando queste possono essere usate in un progetto.

●   📖 [SLIDES](https://docs.google.com/presentation/d/1y0v19tApolSNb8qT6R_xuB5IoO96Lw9n4PFMs0ovnAc/edit?usp=sharing)

###  

### 3. Addrestriamo la macchina - 1 ora

[Teachable machine](https://teachablemachine.withgoogle.com/) è una pagina web che permette di familiarizzare con uno dei concetti fondamentali del Machine Learning: l'addestramento (il training) di un algoritmo. Si chiede agli studenti di addestrare la macchina a riconoscere diverse immagini fornite attraverso la webcam. Ad ogni “classe” di immagini gli studenti assoceranno un suono. Al termine dell’attività gli studenti suonano tutti insieme come in una orchestra controllando l’esecuzione dei suoni attraverso la webcam del loro computer.

●   🌐 [Teachable Machine by Google](https://teachablemachine.withgoogle.com/)

###  

### 4. Introduzione a ml5.js - 1 ora

[p5.js](https://p5js.org/) e[ ](https://ml5js.org/)[ml5.js](https://ml5js.org/) sono i due principali strumenti di sviluppo utilizzati nel camp. ml5.js è una libreria che permette di accedere ad algoritmi e modelli di Machine Learning fruibili mediante web browser. p5.js è una libreria Javascript utilizzata per sviluppare esperienze grafiche e interattive sulla base dei principi chiave dell’ambiente di programmazione open source[ ](https://processing.org)[Processing](https://processing.org). Questa sessione punta a configurare questi strumenti sui computer degli studenti e a trasferire loro l’impostazione di un progetto di base utilizzando il[ ](https://editor.p5js.org)[web editor di p5.js](https://editor.p5js.org) . Il primo progetto di esempio guida gli studenti all’utilizzo di ml5.js per l’analisi del contenuto di immagini.

●   📖 [p5.js reference page](https://p5js.org/reference)

●   📖 [ml5js.js reference page](https://ml5js.org/reference/)

●   🌐 [p5.js web editor](https://editor.p5js.org)

●   👨‍💻 [**ESEMPIO 0**](https://editor.p5js.org/FabLabSUPSI/sketches/RKlh1CmFD)[ - classificazione di immagini con ml5.js](https://editor.p5js.org/FabLabSUPSI/sketches/RKlh1CmFD)

### 5. Demo: carta, forbice, sasso - 2 ore

Dopo aver imparato come si utilizza un modello addestrato per riconoscere delle immagini, si presenta una demo interattiva che spiega il funzionamento e il processo di creazione di un modello di addestramento (training). L’attività interattiva introduce gli studenti al concetto di “supervised learning” per addestrare un *deep neural network* a classificare dei gesti. la demo interattiva introduce a concetti fondamentali come *training/evaluation split, classifier evaluation, baseline accuracy, overfitting, generalization, data augmentation*. L’attività consiste nella raccolta di immagini di mani che eseguono i gesti del gioco carta-forbice-sasso secondo gli standard che permettono ad una rete neurale di apprendere la differenza tra i diversi gesti.

●   📖 [Descrizione dell’attività](https://github.com/alessandro-giusti/rock-paper-scissors/blob/master/EAAI Paper.pdf)

●   👨‍💻 [Codice utilizzato](https://github.com/alessandro-giusti/rock-paper-scissors)



### 6. Classificazione continua di immagini via webcam - 30 minuti

Questa sessione propone una serie di attività pratiche che utilizzano i tutorial di base di ml5.js L’obiettivo di questa attività è utilizzare lo stesso modello di classificazione delle immagini non su una singola foto, ma sui frame del video proveniente dalla webcam del computer.

👨‍💻 [**ESEMPIO 1**](https://editor.p5js.org/FabLabSUPSI/sketches/wrP1UGMdg)[ - classificazione continua di immagini di una webcam](https://editor.p5js.org/FabLabSUPSI/sketches/wrP1UGMdg)

### 7. Riprogrammiamo Teachable Machine di Google con ml5.js - 1.30 ore

In questa sessione guidata si utilizza un tutorial di ml5.js per programmare un’applicazione che funziona in maniera molto simile alla demo di Teachable Machines di Google (vedi attività 3). Per sviluppare questa applicazione si introduce il concetto di Transfer Learning, una tecnica di Machine Learning che prevede l’utilizzo di un modello già sviluppato per assolvere un certo compito come punto di partenza per la definizione di un nuovo modello che serve ad uno scopo diverso. Per esempio utilizzeremo un modello utilizzato per classificare delle immagini che è già addestrato su un dataset molto grande e generico: il modello non lo si utilizza per ottenere le etichette che descrivono il contenuto dell’immagine, ma per estrarre i dati grezzi che descrivono le qualità (features) di un’immagine e per definire un nuovo modello.

●   👨‍💻 [**ESEMPIO 2**](https://editor.p5js.org/FabLabSUPSI/sketches/HpfHZZTMg)[ - Classificazione Transfer Learning: addestramento con le immagini di una webcam](https://editor.p5js.org/FabLabSUPSI/sketches/HpfHZZTMg)

### 8. Transfer learning - Regression - 30 minuti

In questa sessione si utilizza un tutorial pratico di ml5.js in cui l’applicazione sviluppata nella sessione precedente viene modificata tramite l’utilizzo di un algoritmo di regressione. Nell’esempio precedente, ogni volta che è mostrata una nuova immagine alla webcam, l’algoritmo è programmato per restituire una classe, e la percentuale di compatibilità con i dati di addestramento utilizzati per la definizione della classe stessa. Tramite l’algoritmo di regressione possiamo invece chiedere al sistema di “immaginarsi” una transizione tra una certa classe ed un’altra. Possiamo dunque, per esempio addestrare la macchina a riconoscere la posizione (XY) senza dover addestrare l’algoritmo a riconoscere tutte le possibili posizioni della mano e le rispettive coordinate.

●   👨‍💻 [**ESEMPIO 3**](https://editor.p5js.org/FabLabSUPSI/sketches/T4Fr7Tjol)[ - Transfer Learning Regression](https://editor.p5js.org/FabLabSUPSI/sketches/T4Fr7Tjol)

●   👨‍💻 [**ESEMPIO 4**](https://editor.p5js.org/FabLabSUPSI/sketches/SKMlcH5CH)[ - Transfer Learning Regression + audio](https://editor.p5js.org/FabLabSUPSI/sketches/SKMlcH5CH)

### 9. Hack the keyboard - 30 minuti

Al fine di realizzare il progetto di controller per videogiochi basato su ML, in questa sessione si spiega l’utilizzo di un software esterno che permette di controllare la tastiera del computer da remoto via[ ](https://en.wikipedia.org/wiki/MQTT)[mqtt](https://en.wikipedia.org/wiki/MQTT), un protocollo di connettività machine-to-machine utilizzato in ambito IoT.

●   👨‍💻 [**STRUMENTO**](https://github.com/lorenzoromagnoli/mqtt_to_keyboard/releases/tag/1.0.0)[ - da mqtt_alla_tastiera](https://github.com/lorenzoromagnoli/mqtt_to_keyboard/releases/tag/1.0.0)

●   👨‍💻 [**ESEMPIO 5**](https://editor.p5js.org/FabLabSUPSI/sketches/FRdFDkcpS)[ - inviare comandi della tastiera attraverso mqtt](https://editor.p5js.org/FabLabSUPSI/sketches/FRdFDkcpS)

●   👨‍💻 [**ESEMPIO 6**](https://editor.p5js.org/FabLabSUPSI/sketches/4YPqKBVyJ)[ – classif icatore webcam + invio alla keyboard](https://editor.p5js.org/FabLabSUPSI/sketches/4YPqKBVyJ)

### 10. Sketch&Pitch - 1 ora

In questa sessione si chiede agli studenti di ideare delle possibili applicazioni di controller per videogiochi considerando le opportunità tecnologiche esplorate durante le sessioni pratiche con il codice. Durante la sessione si seleziona il videogioco da un[ ](https://archive.org/details/internetarcade)[catalogo online](https://archive.org/details/internetarcade) o si chiede agli studenti di selezionare il loro videogioco preferito. L’obiettivo della sessione e lavorare in gruppo per definire il funzionamento del controller rispetto alla logica del videogioco selezionato e gli elementi dell’interfaccia del progetto finale. Per stimolare la creatività e lo sviluppo di competenze creative e di comunicazione si chiede agli studenti di disegnare il progetto su dei fogli di carta e di presentarli alla classe in pochi minuti.

### 11. Lavoro indipendente di gruppo (4 ore)

Al fine di realizzare i prototipi funzionanti dei controller, gli studenti lavorano in gruppo e in maniera autonoma allo sviluppo del codice e al training dell’algoritmo di riconoscimento dei gesti.

### 12. Presentazione e mostra dei progetti (1 ora)

Saper comunicare un progetto tecnologico e interattivo che usa Machine Learning è una competenza fondamentale per portare un’idea al livello di un progetto imprenditoriale che potrebbe avere un futuro riscontro sul mercato. Per questo motivo, in questa sessione finale si chiede agli studenti di presentare il prototipo funzionante alla classe e di condividere le difficoltà e il modo in cui sono state risolte dal punto di vista tecnico e progettuale. Questa presentazione aiuta a trasferire i saperi e le competenze acquisite in maniera peer-to-peer.

### 13. Consegna del certificato di partecipazione

Il camp si conclude con la consegna dei certificati di partecipazione. Un gesto simbolico per ringraziare tutti per il loro impegno e partecipazione.

●   👨‍💻 [**CERTIFICATO**](https://github.com/lorenzoromagnoli/mqtt_to_keyboard/releases/tag/1.0.0)

 

# **Il programma**

 

**Giorno 1: lunedì 24** 

08:30 - 08:45: 👂Presentazione degli obiettivi del camp, dei tutor e dei partecipanti

08:45 - 09:30: 👂Introduzione al Machine Learning.

09:30 - 10:30: 🖐️Trainable machine orchestra: realizzazione di un mini progetto

10:30 - 10:45: 🍕**Pausa**

10:45 - 11:30: 👂🖐️Introduzione agli strumenti del camp: ml5.js e p5.js. Installazione degli strumenti e demo sul riconoscimento delle immagini.
 11.30 - 12:00: 👂🖐️Demo per creare un dataset: sasso carta forbice.

12:00 - 13:00: 🍕**Pausa pranzo**

13:00 - 14:00: 👂🖐️Attività di training del dataset e discussione dei risultati 

14:00 - 14:10: 🍕**Pausa**

14.10 - 15:00: 👂🖐️Approfondimento di ml5.js: la classificazione e il continuous camera feed.

 

**Giorno 2: martedì 25** 

08:30 - 10:30: 👂🖐️Transfer learning: come insegnare alle macchine a riconoscere gli oggetti

10:30 - 12:00: 👂🖐️introduzione a diversi controlli (controlla shapes, sounds, keyboard)

12:00 - 13:00: 🍕**Pausa pranzo**

13:00 - 14:00: 👂🖐️Divisione in gruppi e sfida 

14:00 - 15:00: 👂🖐️Presentazione delle idee

 

**Giorno 3: mercoledì 26**

08:30 - 15:00: 🖐️Lavoro autonomo 

 

**Giorno 4: mercoledì 26**

08:30 - 12:00: 🖐️Debuggiamo i progetti insieme

13:00 - 14:00: 🖐️Preparazione delle demo dei progetti

14:00 - 15:00: 🎭SHOW

 

# **Contatti**

Siete dei docenti innovatori e volete portare l’intelligenza artificiale a scuola con un approccio basato sulla pratica e il coding?
 Potete proporre il camp nella vostra scuola e utilizzare le risorse di questa guida.
 Per saperne di più scrivete a:

Serena Cangiano FabLab SUPSI 
 [serena.cangiano@supsi.ch](mailto:serena.cangiano@supsi.ch)

# **Crediti**

Il progetto Machine Learning @School Camp è stato ideato e promosso da Laboratorio cultura visiva in collaborazione con SAMT Scuola Arte e Mestieri Trevano - Sezione Informatica e Istituto Dalle Molle di studi sull’intelligenza artificiale USI-SUPSI, con il supporto di Gebert Rüf Stiftung.

 

# **Licenza**

Tutti i contenuti della guida, e dove non indicato diversamente, sono rilasciati con licenza Creative Commons - BY - Share Alike - Non Commercial.