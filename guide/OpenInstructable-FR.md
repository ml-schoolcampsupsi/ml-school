
# **Machine Learning   @School Camp**

 

**Open Instructable** **V.0.1.** 
 
 

**Auteurs**

Lorenzo Romagnoli 
Serena Cangiano

22.10.2019
 
 

# **Open Instructable**

Machine Learning @School Camp est un cours pratique sur les concepts et les technologies de Machine Learning destiné aux étudiants des écoles professionnelles. Grâce à des ressources ouvertes, des démonstrations Web et des outils interactifs, les étudiants des écoles professionnelles font l'expérience d'un processus de conception au cours duquel ils acquièrent des compétences sur la manière de mettre en œuvre des projets numériques basés sur le Machine Learning et sur la manière de concevoir et de prototyper rapidement des solutions qui ont un impact sur la vie des personnes.

Dans cet Open Instructable, les activités et leurs ressources associées du camp de Machine Learning sont documentées @School - édition 2019. Organisé au FabLab SUPSI du 24 au 27 juin 2019. L’instructable a pour objectif de permettre aux enseignants des écoles professionnelles d’organiser le camp dans leur école et d’enseigner les principes du Machine Learning avec une approche didactique basée sur la création de prototypes et l’utilisation d’outils Web conviviaux et de codage.

# **Activités**

### 1. Bienvenue - 15 minutes

Les professeurs et les étudiants se présentent. Les enseignants décrivent les objectifs du camp et le programme détaillé des activités de la semaine.

### 2. Introduction au Machine Learning : quoi, comment, pourquoi - 45 minutes

Qu'entend-on par Machine Learning ? La première session vise à partager un peu de théorie et à présenter ce qui peut être fait avec cette nouvelle technologie. Le Machine Learning est présent dans de nombreux outils numériques de notre quotidien : lors de cette session, les enseignants expliquent quand et pourquoi les technologies de ML sont utiles et présentent des exemples de projets utilisant des algorithmes d'intelligence artificielle, tant dans le monde industriel que scientifique, ainsi que dans des domaines plus expérimentaux tels que l'art et de la créativité. L’introduction prévoit un moment de discussion sur les différentes stratégies de Machine Learning et sur leur utilisation dans un projet.

●   📖 [DIAPOSITIVES](https://docs.google.com/presentation/d/1y0v19tApolSNb8qT6R_xuB5IoO96Lw9n4PFMs0ovnAc/edit?usp=sharing) 

###  

### 3. Nous formons la machine - 1 heure

[Teachable machine](https://teachablemachine.withgoogle.com/) est une page Web qui vous permet de vous familiariser avec l’un des concepts fondamentaux du Machine Learning : la formation (l'entraînement) d’un algorithme. Les étudiants sont invités à entraîner la machine à reconnaître les différentes images fournies par la webcam. Les étudiants associeront un son à chaque « classe » d'images. À la fin de l'activité, les étudiants jouent tous ensemble, comme dans un orchestre, en vérifiant le son grâce à la webcam de leur ordinateur.

●   🌐 [Teachable Machine by Google](https://teachablemachine.withgoogle.com/) 

###  

### 4. Introduction à ml5.js - 1 heure

[p5.js](https://p5js.org/) et[ ](https://ml5js.org/)[ml5.js](https://ml5js.org/) sont les deux principaux outils de développement utilisés dans le camp. ml5.js est une bibliothèque qui vous permet d'accéder à des algorithmes et des modèles de Machine Learning accessibles à partir d'un navigateur Web. p5.js est une bibliothèque Javascript utilisée pour développer des expériences graphiques et interactives basées sur les principes clés de l'environnement de programmation open source[ ](https://processing.org)[Processing](https://processing.org). Cette session a pour objectif de configurer ces outils sur les ordinateurs des étudiants et de les transférer dans un projet de base à l'aide de [ ](https://editor.p5js.org)[l'éditeur Web p5.js](https://editor.p5js.org). Le premier exemple de projet guide les étudiants vers l'utilisation de ml5.js pour l'analyse du contenu des images.

●   📖 [p5.js reference page](https://p5js.org/reference) 

●   📖 [ml5js.js reference page](https://ml5js.org/reference/) 

●   🌐 [p5.js web editor](https://editor.p5js.org) 

●   👨‍💻 [**EXEMPLE 0**](https://editor.p5js.org/FabLabSUPSI/sketches/RKlh1CmFD)[ - classification d'images avec ml5.js](https://editor.p5js.org/FabLabSUPSI/sketches/RKlh1CmFD) 

### 5. Démo : pierre, papier, ciseau - 2 heures

Après avoir appris à utiliser un modèle formé pour reconnaître des images, une démonstration interactive est présentée pour expliquer le fonctionnement et le processus de création d'un modèle de formation (entraînement). L'activité interactive initie les étudiants au concept de « supervised learning » pour former un *deep neural network* permettant de classifier les gestes. La démo interactive présente des concepts fondamentaux tels que : *training/evaluation split, classifier evaluation, baseline accuracy, overfitting, generalization, data augmentation*. L’activité consiste à rassembler des images de mains qui exécutent les gestes du jeu pierre-feuille-ciseau selon les normes permettant à un réseau de neurones d’apprendre la différence entre les différents gestes.

●   📖 [Description de l'activité](https://github.com/alessandro-giusti/rock-paper-scissors/blob/master/EAAI Paper.pdf) 

●   👨‍💻 [Code utilisé](https://github.com/alessandro-giusti/rock-paper-scissors) 

 

### 6. Classification continue des images par webcam - 30 minutes

Cette session propose une série d'activités pratiques utilisant les tutoriels de base de ml5.js. L'objectif de cette activité est d'utiliser le même modèle de classification des images, non pas sur une seule photo, mais sur les images de la vidéo provenant de la webcam de l'ordinateur.

👨‍💻 [**EXEMPLE 1**](https://editor.p5js.org/FabLabSUPSI/sketches/wrP1UGMdg)[ - classification continue des images d'une webcam](https://editor.p5js.org/FabLabSUPSI/sketches/wrP1UGMdg) 

### 7. Nous reprogrammons Teachable Machine de Google avec ml5.js - 1 heure 30

Dans cette session guidée, nous utilisons un tutoriel de ml5.js pour programmer une application qui fonctionne de manière très similaire à la démonstration de Teachable Machines de Google (voir activité 3). Pour développer cette application, nous introduisons le concept de Transfer Learning, une technique de Machine Learning qui implique l'utilisation d'un modèle déjà développé pour effectuer une tâche donnée comme point de départ pour la définition d'un nouveau modèle ayant un objectif différent. Par exemple, nous allons utiliser un modèle utilisé pour classer les images qui est déjà formé sur un très grand ensemble de données et qui est générique : le modèle n'est pas utilisé pour obtenir les étiquettes qui décrivent le contenu de l'image, mais pour extraire les données brutes qui décrivent les qualités (caractéristiques) d’une image et définir un nouveau modèle.

●   👨‍💻 [**EXEMPLE 2**](https://editor.p5js.org/FabLabSUPSI/sketches/HpfHZZTMg)[ - Classification Transfer Learning : formation avec les images d'une webcam](https://editor.p5js.org/FabLabSUPSI/sketches/HpfHZZTMg) 

### 8. Transfer learning - Regression - 30 minutes

Dans cette session, nous utilisons un tutoriel pratique de ml5.js dans lequel l'application développée lors de la session précédente est modifiée par un algorithme de régression. Dans l'exemple précédent, chaque fois qu'une nouvelle image de webcam est affichée, l'algorithme est programmé pour renvoyer une classe et le pourcentage de compatibilité avec les données d'apprentissage utilisées pour définir la classe elle-même. Grâce à l’algorithme de régression, nous pouvons demander au système « de s’imaginer » une transition entre une classe déterminée et une autre. Nous pouvons donc, par exemple, entraîner la machine à reconnaître la position (XY) sans avoir à entraîner l'algorithme à reconnaître toutes les positions possibles de la main et les coordonnées respectives.

●   👨‍💻 [**EXEMPLE 3**](https://editor.p5js.org/FabLabSUPSI/sketches/T4Fr7Tjol)[ - Transfer Learning Regression](https://editor.p5js.org/FabLabSUPSI/sketches/T4Fr7Tjol) 

●   👨‍💻 [**EXEMPLE 4**](https://editor.p5js.org/FabLabSUPSI/sketches/SKMlcH5CH)[ - Transfer Learning Regression + audio](https://editor.p5js.org/FabLabSUPSI/sketches/SKMlcH5CH) 

### 9. Hack the keyboard - 30 minutes

Afin de réaliser le projet de contrôleur de jeu vidéo basé sur le ML, cette session explique l’utilisation d’un logiciel externe permettant de contrôler le clavier de l’ordinateur à distance via [ ](https://en.wikipedia.org/wiki/MQTT)[mqtt](https://en.wikipedia.org/wiki/MQTT), un protocole de connectivité machine-to-machine utilisé dans le domaine de l'IoT.

●   👨‍💻 [**OUTIL**](https://github.com/lorenzoromagnoli/mqtt_to_keyboard/releases/tag/1.0.0)[ - de mqtt_au_clavier](https://github.com/lorenzoromagnoli/mqtt_to_keyboard/releases/tag/1.0.0) 

●   👨‍💻 [**EXEMPLE 5**](https://editor.p5js.org/FabLabSUPSI/sketches/FRdFDkcpS)[ - envoyer des commandes au clavier par mqtt](https://editor.p5js.org/FabLabSUPSI/sketches/FRdFDkcpS) 

●   👨‍💻 [**EXEMPLE 6**](https://editor.p5js.org/FabLabSUPSI/sketches/4YPqKBVyJ)[ – classificateur webcam + envoi au clavier](https://editor.p5js.org/FabLabSUPSI/sketches/4YPqKBVyJ) 

### 10. Sketch&Pitch - 1 heure

Au cours de cette session, les étudiants sont invités à concevoir des applications possibles pour les contrôleurs de jeu vidéo en tenant compte des opportunités technologiques explorées au cours des sessions pratiques avec le code. Pendant la session, le jeu vidéo peut être sélectionné dans un[ ](https://archive.org/details/internetarcade)[catalogue en ligne](https://archive.org/details/internetarcade) ou les étudiants sont invités à sélectionner leur jeu vidéo préféré. L'objectif de la session est de travailler en groupes pour définir le fonctionnement du contrôleur par rapport à la logique du jeu vidéo sélectionné et les éléments de l'interface du projet final. Pour stimuler la créativité et le développement des compétences créatives et de communication, les étudiants sont invités à concevoir le projet sur des feuilles de papier et à les présenter à la classe en quelques minutes seulement.

### 11. Travail en groupe indépendant (4 heures)

Afin de créer les prototypes de travail des contrôleurs, les étudiants travaillent en groupe et de manière autonome sur le développement du code et l'entraînement de l'algorithme de reconnaissance des gestes.

### 12. Présentation et exposition des projets (1 heure)

Savoir communiquer sur un projet technologique et interactif qui utilise le Machine Learning est une compétence fondamentale pour amener une idée au niveau d'un projet entrepreneurial qui pourrait obtenir une réponse future sur le marché. C'est pourquoi, lors de cette dernière session, les étudiants doivent présenter le prototype de travail à la classe et partager les difficultés et les méthodes de résolution d'un point de vue technique et conceptuel. Cette présentation aide à transférer les connaissances et les compétences acquises par les pairs.

### 13. Remise du certificat de participation

Le camp se termine par la remise des certificats de participation. Un geste symbolique pour remercier toutes les personnes pour leur engagement et leur participation.

●   👨‍💻 [**CERTIFICAT**](https://github.com/lorenzoromagnoli/mqtt_to_keyboard/releases/tag/1.0.0) 

 

# **Le programme**

 

**Jour 1 : lundi 24** 

08 h 30 - 08 h 45: 👂Présentation des objectifs du camp, des tuteurs et des participants

08 h 45 - 09 h 30 : 👂Introduction au Machine Learning.

09 h 30 - 10 h 30 : 👂Trainable machine orchestre : réalisation d'un mini-projet

10 h 30 - 10 h 45 :  🍕**Pause** 

10 h 45 - 11 h 30 : 👂🖐️Introduction aux outils du camp : ml5.js et p5.js. Installation des outils et démonstration sur la reconnaissance d'images.
 11 h 30 - 12 h 00 : Démonstration pour créer un jeu de données : pierre feuille ciseau.

12 h 00 - 13 h 00 : 🍕**Pause déjeuner** 

13 h 00 - 14 h 00 : 👂🖐️Activités de training du dataset et discussion sur les résultats 

14 h 00 - 14 h 10 : 🍕**Pause** 

14 h 10 - 15 h 00 : 👂🖐️Approfondissement de ml5.js : la classification et l’alimentation continue de la caméra.

 

**Jour 2 : mardi 25** 

08 h 30 - 10 h 30 : 👂🖐️Transfer learning : comment apprendre aux machines à reconnaître les objets

10 h 30 - 12 h 00 : 👂🖐️Introduction à plusieurs commandes (commande shapes, sounds, keyboard)

12 h 00 - 13 h 00 : 🍕**Pause déjeuner** 

13 h 00 - 14 h 00 : 👂🖐️Répartition en groupes et défi 

14 h 00 - 15 h 00 : 👂🖐️Présentation des idées

 

**Jour 3 : mercredi 26**

08 h 30 - 15 h 00 : 🖐️Travail en autonomie 

 

**Jour 4 : mercredi 26**

08 h 30 - 12 h 00 : 🖐️Nous débuggons les projets ensemble

13 h 00 - 14 h 00 :🖐️Préparation des démonstrations des projets 

14 h 00 - 15 h 00 : 🎭SHOW 

 

# **Contacts**

Vous êtes un enseignant innovant et vous souhaitez apporter l'intelligence artificielle à l'école avec une approche basée sur la pratique et le codage ?
 Vous pouvez proposer le camp dans votre école et utiliser les ressources de ce guide.
 Pour en savoir plus, écrivez à :

Serena Cangiano FabLab SUPSI 
 [serena.cangiano@supsi.ch](mailto:serena.cangiano@supsi.ch) 

# **Crédits**

Le projet Machine Learning @School Camp a été conçu et promu par le Laboratoire de culture visuelle en collaboration avec la SAMT School of Arte e Mestieri Trevano - Section d'informatique, et l'Istituto Dalle Molle, institut d'études sur l'intelligence artificielle USI-SUPSI, avec le soutien de Gebert Rüf Stiftung.

 

# **Licence**

Tous les contenus de ce guide, et sauf indication contraire, sont diffusés sous la licence Creative Commons - BY - Share Alike - Non Commercial.

 
