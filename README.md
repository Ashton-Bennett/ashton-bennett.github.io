# Amp Guitar

#### Description: I started my CS50 final project using the popular design tool Figma. It was very easy to learn and within a few days I felt comfortable using it to create a mockup for my web application. Creating a logo was also easy and having already determined the color scheme, font, and element spacing made development a lot smoother!

#### Amp Guitar is a single page web application that provides tools to amplify guitarists' skills. The first tool provided is a scale finder. The finder feature will help the user/guitarist write melodies and solos for any particular section of a song.

#### The scale finder will prompt the user to complete a form. Once the form is submitted. The chords entered will go into a function that determines what scales will sound good, while being played over the top of the provided chords.(The function uses various music theory formulas that have been stored in arrays and objects.) Then render those scales on the screen in the form of buttons.

#### When a scale button is pressed the app will take in the root chord and compare it to a scale formula to determine what notes are in that particular scale. Onced the notes are identified the app will map over the fretboard object to determine the coordinates of those notes and render a diagram.

#### This diagram will inform the user/guitarist of all the places they can play over the fretboard that will sound good with the chords that were given when the form was submitted.

#### I have created this application using “create- react-app”. I chose React.js because I would like to gain more experience working with a modern framework. Working in React has been enjoyable. I like the ability to create small reusable components. Being able to use CSS in the Javascript file passed in as an object was a new way for me to learn how to style components. Unfortunately, I wasn't able to use this styling method for all styles. I ended up needing to add a styles.css file to implement various hover effects.

#### Adding in a contact page seemed like a good way to create a more positive experience for users. I am excited to deploy this app and see what other guitarists' reactions are. Having other guitarists try it out will help me develop more useful tools.

#### In the future I will work towards building an API and backend for this application as well as a database to store all the various music theory formulas, scales and chord information. I plan to use Node.js,MongoDB, and Express to implement a full stack application.

#### There are a few other items that make up the foundation of this application, like: contact and about us pages. I will continue to build on this application over the next few months. I would like to implement more features that will help guitarists understand and implement music theory into their creative process.
