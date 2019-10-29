#  

# **Machine Learning   @School Camp**

 

**Open Instructable** **V.0.1.** 
 
#  

**Authors** 

Lorenzo Romagnoli

Serena Cangiano

22/10/2019
 

#  **Open Instructable**

Machine Learning @School Camp is a practical course on Machine Learning concepts and technologies addressed to students attending technical schools. Technical school students will gain experience on a design-driven process through the use of open educational resources, web demos and interactive tools. During this process, they will acquire skills on how to create digital projects based on Machine Learning. They will also learn how to come up with ideas and quickly prototype solutions that will have an impact on people’s lives.

This Open Instructable reports the activities and the corresponding resources of the Machine Learning @School Camp – 2019 Edition organised at FabLab SUPSI from 24 to 27 June 2019. The instructable aims at enabling teachers of professional schools to organise the camp at their school and teach Machine Learning principles using an educational approach based on the creation of prototypes and the use of coding and easy-to-use web tools.

# **Activities**

### 1. Greetings – 15 minutes

Tutors and students introduce themselves. Tutors explain the camp objectives and the detailed activity programme for the week.

### 2. Introduction to Machine Learning: what, how, why – 45 minutes

What does Machine Learning mean? The first session aims at sharing a bit of theory and showing what can be done using this new technology. Machine Learning can be found in many digital tools in our everyday life. In this session, tutors explain when and why ML technologies are useful and show some project examples that use AI algorithms, both in industrial and scientific applications, but also in more experimental fields such as art and creativity. The introduction foresees a discussion on various Machine Learning strategies and when these can be employed in a project.

●   📖 [SLIDES](https://docs.google.com/presentation/d/1y0v19tApolSNb8qT6R_xuB5IoO96Lw9n4PFMs0ovnAc/edit?usp=sharing)

###  

### 3. Let’s train the machine – 1 hour

[Teachable machine](https://teachablemachine.withgoogle.com/) is a web page that allows you to get to know one of the fundamental concepts of Machine Learning: the training of an algorithm. Students are asked to train the machine to recognise different images supplied by the webcam. Students will associate a sound to each “image” class. At the end of the activities, students will play all together like in an orchestra, controlling the emission of the sounds through the webcam on their computers.

●   🌐 [Teachable Machine by Google](https://teachablemachine.withgoogle.com/)

###  

### 4. Introduction to ml5.js – 1 hour

[p5.js](https://p5js.org/) and[ml5.js](https://ml5js.org/) are the main two development tools used in the camp. ml5.js is a library that allows you to access Machine Learning algorithms and models that are available via the web browser. p5.js is a Javascript library used to develop graphic and interactive experiences based on the key principles of the [Processing] (https://processing.org) open source programming environment. This session aims at setting up these tools on the students’ computers and at conveying them the notion of how to set a basic project using the[p5.js web editor](https://editor.p5js.org). The first example project guides the students towards the use of ml5.js for the image content analysis.

●   📖 [p5.js reference page](https://p5js.org/reference)

●   📖 [ml5js.js reference page](https://ml5js.org/reference/)

●   🌐 [p5.js web editor](https://editor.p5js.org)

●   👨‍💻 [**EXAMPLE 0**](https://editor.p5js.org/FabLabSUPSI/sketches/RKlh1CmFD)[ – Classification of images with ml5.js](https://editor.p5js.org/FabLabSUPSI/sketches/RKlh1CmFD)

### 5. Demo: Rock-paper-scissors – 2 hours

After learning how to use a trained model to recognise images, an interactive demo is shown, which explains the operation and creation process of a training model. The interactive activity introduces the students to the “supervised learning” concept to train a *deep neural network* to classify gestures. The interactive demo presents fundamental concepts, such as *training/evaluation split, classifier evaluation, baseline accuracy, overfitting, generalisation, data augmentation*. The activity consists of gathering images of hands performing rock-paper-scissors gestures according to the standards that enable a neural network to learn the difference between different gestures.

●   📖 [Activity description](https://github.com/alessandro-giusti/rock-paper-scissors/blob/master/EAAI%20Paper.pdf)

●   👨‍💻 [Code used](https://github.com/alessandro-giusti/rock-paper-scissors)

 

### 6. Continuous image classification via webcam – 30 minutes

This session proposes a series of practical activities that use basic ml5.js tutorials. The objective of this activity is to use the same image classification model not on a single picture, but on the video frames of the computer webcam.

👨‍💻 [**EXAMPLE 1**](https://editor.p5js.org/FabLabSUPSI/sketches/wrP1UGMdg)[ – Continuous webcam image classification](https://editor.p5js.org/FabLabSUPSI/sketches/wrP1UGMdg)

### 7. Let’s reprogram Google’s Teachable Machine with ml5.js – 1 hour and 30 minutes

This guided session uses an ml5.js tutorial to program an application that works in a similar way to Google’s Teachable Machines demo (see activity 3). In order to develop this application, the Transfer Learning concept is introduced. It consists of a Machine Learning technique that foresees the use of a model already developed to carry out a specific task. This task becomes the starting point for the definition of a new model that serves a different purpose. For example, we will use a model employed for image classification that is already trained on a very vast and generic dataset. The model will not be used to obtain labels describing the image content, but to extract raw data that describe the image features and to define a new model.

●   👨‍💻 [**EXAMPLE 2**](https://editor.p5js.org/FabLabSUPSI/sketches/HpfHZZTMg)[ – Transfer Learning Classification: Training using the webcam images](https://editor.p5js.org/FabLabSUPSI/sketches/HpfHZZTMg)

### 8. Transfer learning – Regression – 30 minutes

This session uses a practical ml5.js tutorial in which the application developed in the previous session is modified by means of a regression algorithm. In the previous example, each time a new image is shown to the webcam, the algorithm is programmed to return a class value and the compatibility percentage with the training data used for the definition of the class. Using the regression algorithm, instead, we can ask the system to “imagine” a transition between a certain class and another class. Therefore, we can, for example, train the machine to recognise the position (XY) without having to train the algorithm to recognise all possible hand positions and their coordinates.

●   👨‍💻 [**EXAMPLE 3**](https://editor.p5js.org/FabLabSUPSI/sketches/T4Fr7Tjol)[ – Transfer Learning Regression](https://editor.p5js.org/FabLabSUPSI/sketches/T4Fr7Tjol)

●   👨‍💻 [**EXAMPLE 4**](https://editor.p5js.org/FabLabSUPSI/sketches/SKMlcH5CH)[ – Transfer Learning Regression + audio](https://editor.p5js.org/FabLabSUPSI/sketches/SKMlcH5CH)

### 9. Hack the keyboard – 30 minutes

With a view to carry out a controller project for video games based on ML, this session explains the use of external software that allows you to control the computer keyboard remotely via [mqtt](https://en.wikipedia.org/wiki/MQTT), a machine-to-machine connectivity protocol used in the IoT area.

●   👨‍💻 [**TOOL**](https://github.com/lorenzoromagnoli/mqtt_to_keyboard/releases/tag/1.0.0)[ – from mqtt_to the_keyboard](https://github.com/lorenzoromagnoli/mqtt_to_keyboard/releases/tag/1.0.0)

●   👨‍💻 [**EXAMPLE 5**](https://editor.p5js.org/FabLabSUPSI/sketches/FRdFDkcpS)[ – Issuing keyboard commands via mqtt](https://editor.p5js.org/FabLabSUPSI/sketches/FRdFDkcpS)

●   👨‍💻 [**EXAMPLE 6**](https://editor.p5js.org/FabLabSUPSI/sketches/4YPqKBVyJ)[ – Webcam classifier + sending to the keyboard](https://editor.p5js.org/FabLabSUPSI/sketches/4YPqKBVyJ)

### 10. Sketch&Pitch – 1 hour

In this session, students are asked to come up with the idea of possible controller applications for video games, taking into account the technological opportunities explored so far during the practical sessions using the code. During this session, a video game is selected from an [online catalogue](https://archive.org/details/internetarcade) or students are asked to pick their favourite video game. The objective of this session is to work in a team to define the operation of the controller with respect to the logic of the selected video game and the final project interface elements. In order to boost creativity and the development of creative and communication skills, students are asked to sketch the project on sheets of paper and to present them to the class in a few minutes.

### 11. Independent teamwork (4 hours)

In order to create controller working prototypes, students work independently in a team for code development and gesture recognition algorithm training.

### 12. Presentation and display of projects (1 hour)

Knowing how to pitch a technological and interactive project that uses Machine Learning is a fundamental skill required to launch an idea at a business level that could receive future market feedback. For this reason, in this final session, students are asked to present their working prototype to the class, share the difficulties they encountered and how they were able to overcome them from a technical and design viewpoint. This presentation helps them to transfer the acquired know-how and skills in a peer-to-peer way.

### 13. Delivery of the attendance certificate

The camp ends with the delivery of the attendance certificates. A symbolic gesture to thank all for their commitment and participation.

●   👨‍💻 [**CERTIFICATE**](https://github.com/lorenzoromagnoli/mqtt_to_keyboard/releases/tag/1.0.0)

 

# **The programme**

 

**Day 1: Monday 24** 

08:30 – 08:45: 👂Presentation of the camp objectives, tutors and participants

08:45 – 09:30: 👂Introduction to Machine Learning

09:30 – 10:30: 🖐️Trainable machine orchestra: Creation of a mini project

10:30 – 10:45:🍕**Break**

10:45 – 11:30: 👂🖐️Introduction to the camp tools: ml5.js and p5.js. Installation of tools and demo for image recognition.
 11.30 – 12:00: 👂🖐️Demo on how to create a dataset: Rock-paper-scissors.

12:00 – 13:00: 🍕**Lunch break**

13:00 – 14:00: 👂🖐️Training activities on the dataset and discussion on the results 

14:00 – 14:10:🍕**Break**

14.10 – 15:00: 👂🖐️In-depth study of ml5.js: Classification and continuous camera feed.

 

**Day 2: Tuesday 25** 

08:30 – 10:30: 👂🖐️Transfer learning: How to teach machines to recognise objects

10:30 – 12:00: 👂🖐️Introduction to various controls (shapes, sounds, keyboard controls)

12:00 – 13:00: 🍕**Lunch break**

13:00 – 14:00: 👂🖐️Splitting into teams and challenge 

14:00 – 15:00: 👂🖐️Presentation of ideas

 

**Day 3: Wednesday 26**

08:30 – 15:00: 🖐️Independent work 

 

**Day 4: Thursday 27**

08:30 – 12:00: 🖐️Let’s debug projects together

13:00 – 14:00: 🖐️Preparation of project demos

14:00 – 15:00: 🎭SHOW

 

# **Contacts**

Are you innovative teachers who want to bring AI in your schools using a practical and coding-based approach?
 You can suggest this camp at your school and use the resources in this guide.
 For further information, please write to:

Serena Cangiano FabLab SUPSI 
 [serena.cangiano@supsi.ch](mailto:serena.cangiano@supsi.ch)

# **Credits**

The Machine Learning @School Camp project was conceived and promoted by the Laboratorio cultura visiva in collaboration with SAMT Scuola Arte e Mestieri Trevano – IT Department and the Dalle Molle di studi sull’intelligenza artificiale USI-SUPSI with the support of Gebert Rüf Stiftung.

 

# **Licence**

All contents of the guide, and where not indicated otherwise, are released with a Creative Commons – BY – Share Alike – Non Commercial licence.

 
