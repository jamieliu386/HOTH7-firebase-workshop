# Introduction to Firestore (at HOTH7)

## Resources

<!-- TODO: View only link to slides -->

- [**Workshop Slides**]()

**Firebase Documentation**

- Setting up a Firebase Project
- Add Firebase to Application
  - [Web](https://firebase.google.com/docs/web/setup)
  - [iOS](https://firebase.google.com/docs/ios/setup)
  - [Android](https://firebase.google.com/docs/android/setup)
- Firestore [Data Model](https://firebase.google.com/docs/firestore/data-model)
- Using Firestore Database in App
  - [Add to Database](https://firebase.google.com/docs/firestore/manage-data/add-data)
  - [Delete from Database](https://firebase.google.com/docs/firestore/manage-data/delete-data)
  - [Fetch from Database](https://firebase.google.com/docs/firestore/query-data/get-data)
  - [Listen for Realtime Updates](https://firebase.google.com/docs/firestore/query-data/listen)
  - [Querying Database](https://firebase.google.com/docs/firestore/query-data/queries)

**Other Firebase Features**

- Firebase Hosting: [initalize firebase](https://firebase.google.com/docs/cli#initialize_a_firebase_project)
  then [test and deploy](https://firebase.google.com/docs/hosting/deploying) your app
- Firebase Cloud Storage: store files, images, etc.
- Firebase Authentication

## This workshop will cover the following topics:

- [What are Databases?](#firestore-but-first-databases)
- [Why Firestore?](#why-firestore)
- [Firestore Data Model](#understanding-the-firestore-data-model)
- Demo App: Integrate with React
  - [Setup](#before-we-get-started)
  - [Creating Firebase Project with Firestore](#creating-a-firebase-project)
  - [Using Firestore in Web App](#using-the-database-in-the-app)

## Firestore... But First, Databases!

Before we get into using Firestore, let's understand the service that it
provides us: a database!

At a very basic level, a database is simply a collection of organized data.
Databases are designed to store information that can be accessed or modified
later on. This ends up being very useful when building an app to implement
the idea of **"persistent storage."**

Having a database allows an application to store and update information that
can then be used at any time. In other words, a user can come back to the
application and expect all their changes to still be present, WOW!

## Why Firestore?

Firestore is a service developed by Firebase that allows you, as a developer,
to create a database that you can use in any application you want! If you're
familiar with other backend technologies like MySQL or PostgreSQL, you might
be thinking "Why should I use Firestore instead?"

The reason we are using Firestore is because of how easy it is to use and
integrate into your application. Usually, databases require a middleman
called a "server" which handles requests from an application to fetch the
specified data stored in the database.

<!-- TODO: Image of server to client communication -->

[IMAGE]

Firestore **ELIMINATES the need for server development**, hence why we say that
using Firestore lets us go "Serverless." While in reality, there still is a
server involved, this server is no longer something that you, the developer,
needs to worry about creating or maintaining.

## Advantages of "Serverless" Development

Now with Firestore, we no longer need to set up endpoints of communication
between databases and applications ourselves. This means we can
**develop without limits!** :0

For example, say we wanted to add a feature to a music player application
that allows users to create groups of songs from a library (playlist management).

Without Firestore, we would first need to create a place in our database to
support the storage of playlists and their associated songs for each user.
Then after that we would also need to implement server-side logic to let our
application make requests to fetch the playlist data for a given user, to
modify the available playlists for a specfic user (creation and deletion),
and to change the songs inside of one of the user's playlists.

With Firestore, this entire process is made faster and easier with a few key
library functions made available to us in any application that has Firebase
set up.

## Understanding the Firestore Data Model

As opposed to many SQL databases you may be familiar with, Firestore is what's
known as a NoSQL, Document-Oriented Database.

This means that instead of using tables to store related data, Firestore uses
"collections" of "documents," each containing some labeled pieces of data.

Woah, colllections? Documents? What does any of that mean? Let's take a look and
see if we can understand the way Firestore organizes its data a little better.

## Collections

Collections are pretty simple to understand, they simply act as **containers that
consist of multiple documents**. We usually use a collection to denote some set of
related documents.

## Documents

Okay, so if a collection just holds documents then what the heck is a document?

Documents are referred to as the **unit of storage in Firestore**. What this means
is that all physical data (names, dates, objects, etc) in your Firestore database
will be located inside some document.

Every document in your database is identified by some unique name within its
collection. Each document stores a set of data in the form of **key-value pairs,**
which might look something like this:

<!-- TODO: Screenshot of example Firestore database structure -->

[IMAGE]

Each piece of data is labeled by a field name or **key**, and this key identifies
what the **value** it maps to represents.

These are the basic parts of any Firestore database, if you want to dive a little
deeper I encourage you to look at the Firestore
[data model documentation](https://firebase.google.com/docs/firestore/data-model).

# Demonstration: Integrating Firestore with a React App

## Before We Get Started

Make sure you have [Node](https://nodejs.org/) installed, as well as a text
editor of your choice (we will be using
[Visual Studio Code](https://code.visualstudio.com/))

<!-- Choose one to get rid of or we can keep both, they should both work fine -->

## Setting Up the Project: Cloning Our Repository

Open up your terminal application (Terminal on MacOS, Powershell on Windows)
and execute the following commands in a directory of your choice. (Note: the
"\$" character is not part of the command).

```
$ git clone [URL] meme-app
$ cd meme-app/web-start
$ npm install firebase --save
$ npm start
```

You should see something that looks like this pop up in your browser:

![](images/base_app.png)

Try adding some memes to the page! Wow, memes are great. But oh no... when we
refresh the page, all of our precious memes disappear!! :0 :c

In order to make a meme page that actually stores and displays all the memes
we submitted, we'll need some sort of database. Enter... Firebase!!

## Setting Up the Project: Create React App

Open up your terminal application (Terminal on MacOS, Powershell on Windows)
and execute the following commands. (Note: the "\$" character is not part of
the command).

```
$ npx create-react-app meme-app
$ cd meme-app
$ npm install firebase --save
$ npm start
```

You should see something like this in your browser:

![](images/default_app.png)

Now open the project folder in your text editor. Navigate to the `src` folder
and replace the code in the following files with the code in the corresponding
link:

`App.js`: [code](web-start/src/App.js)

`App.css`: [code](web-start/src/App.css)

`index.css`: [code](web-start/src/index.css)

In addition, create two new files in the `src` directory and copy the linked code into them:

`Meme.js`: [code](web-start/src/Meme.js)

`Meme.css`: [code](web-start/src/Meme.css)

Make sure to save all of your changes! Then you should see something that looks
like this:

![](images/base_app.png)

Try adding some memes to the page! Wow, memes are great. But oh no... when we
refresh the page, all of our precious memes disappear!! :0 :c

In order to make a meme page that actually stores and displays all the memes
we submitted, we'll need some sort of database. Enter... Firebase!!

## Creating a Firebase Project

To get started, log in to [firebase](https://console.firebase.google.com/), and
you should get a screen that looks like this;

![](images/projects.png)

Click the **"Add Project"** button, which should prompt you to enter the project's
name.

![](images/create_project_0.png)

Then hit continue, and you'll be prompted to use Google Analytics. This will
require some additional setup, so I won't be enabling it. However, it is a
pretty useful tool for measuring app usage and user engagement, if that's
something you're interested in.

![](images/create_project_1.png)

## Adding an App to the Project

Now you should see the project overview. Since we're using a web app, let's
click the button to add a web app to the project.

![](images/project_overview.png)

Choose a nickname for your app, and then hit "register app"

![](images/add_app_0.png)

Next, we're going to need to add the firebase configuration to our app. Your screen
should look something like the image below.

![](images/add_app_1.png)

Create a `lib` folder inside your `src` folder, and create a `firebase.js` file
inside of it. Copy the code under the "Your web app's Firebase configuration"
and "Initialize Firebase" comments, and paste it into the `firebase.js` file.
Now modify the file to look like this (the config part should be from the code
you copied, not exactly the same as below!):

```js
import firebase from "firebase";

const config = {
	apiKey: "AIzaSyBVkHrj182dfk4NAEfwcRPN_DkC_HOOk8Q",
	authDomain: "hoth7-firebase-workshop.firebaseapp.com",
	databaseURL: "https://hoth7-firebase-workshop.firebaseio.com",
	projectId: "hoth7-firebase-workshop",
	storageBucket: "hoth7-firebase-workshop.appspot.com",
	messagingSenderId: "328418075634",
	appId: "1:328418075634:web:2b44d5c432aa54189c016b",
};

firebase.initializeApp(config);

export default firebase;
```

## Adding Firestore to the Project

On the left sidebar, click the "database" button, and you should see a screen
like this:

![](images/database_0.png)

Click create database, and for security rules, we are going to start
in test mode (although in production, you'll want more stringent security rules).

![](images/database_1.png)

For the Cloud Firestore location, I'm going to choose a server in the US west
region.

![](images/database_2.png)

## Firebase Databases

Now that we have our database, let's create some sample data for our app to use.
First, let's add a new collection by clicking "start collection".

![](images/add_collection_0.png)

I'm going to name my collection "memes". The name of the collection is what we'll
use to refer to it in our code later. After picking a name, click the "next" button.

![](images/add_collection_1.png)

Now we can add our first document to the "memes" collection. I'm going
to use an autogenerated ID. This document will have two fields, both strings.
The first will be a field called "name", which I'll set to "Jamie". In addition,
the document will have an "imgURL" field. Here, I'll input a link to [the image
that I want displayed](https://i.redd.it/f322t7u6sih41.jpg).

![](images/add_document.png)

## Using the Database in the App

Our final step will be to make our app use the database, and listen for changes
to it. First, we need to import the firebase file we made earlier. In the
`App.js` file, add the following line:

```js
import firebase from "./lib/firebase.js";
```

Next, copy the following code and paste it into the `listenForMemes` method:

```js
// Set up event listener for changes to "memes" collection
listenForMemes = () => {
	this.db = firebase.firestore();

	this.unsubscribeFromMemes = this.db
		.collection("memes")
		.onSnapshot((querySnapshot) => {
			let memeList = [];

			// Parse each document into our memeList
			querySnapshot.forEach(function(doc) {
				let meme = doc.data();
				let newMeme = {
					name: meme.name,
					imgURL: meme.imgURL,
				};
				memeList.push(newMeme);
			});

			// Update data with our new memeList
			this.setState({
				memes: memeList,
			});
		});
};
```

Additionally, add the following code into the `componentWillUnmount` method:

```js
componentWillUnmount = () => {
	// Stop listening for changes to "memes" collection
	this.unsubscribeFromMemes();
};
```

Woah. What exactly is going on here? The answer is: a lot, but we'll go through
it step by step.

First of all, you'll notice that we call the `listenForMemes()` method in
`componentDidMount`. This is some React stuff, and I encourage you to look
it up if you're making a React app. For the sake of this workshop,
basically the code in `componentDidMount` runs when the component/app is
first opened. Similarly, the code in `componentWillUnmount` gets run right
before the component/app is closed by the user.

```js
this.db = firebase.firestore();
```

This line creates a reference to our database, allowing us to access it using
`this.db`.

```js
this.unsubscribe = this.db.collection("memes")
    .onSnapshot((querySnapshot) => {
        ...
    });
```

Here, we are using `onSnapshot` method provided by firebase to listen for changes to the "memes" collection.
Each time a document is added, changed, or removed from the collection, we
recieve a query snapshot. This snapshot captures the current contents, and is
updated every time the contents change.

In addition, `onSnapshot` returns a method that allows us to detach the
listener (i.e. stop listening). Thus, we can call this method in
`componentWillUnmount` to detach the listener.

Every time our query snapshot gets changed, the function inside of the
`onSnapshot()` method gets called. Let's take a clsoer look at our function:

```js
(querySnapshot) => {
	let memeList = [];
	querySnapshot.forEach(function(doc) {
		let meme = doc.data();
		let newMeme = {
			name: meme.name,
			imgURL: meme.imgURL,
		};
		memeList.push(newMeme);
	});
	this.setState({
		memes: memeList,
	});
};
```

Here, we do some stuff with the snapshot data. First, we create a new empty
array called `memeList`. Then, we use `forEach` to do something with each
doc inside our "memes" collection snapshot. We first use the `.data()` method
to obtain the doc's data, and store this in `meme`. Then we create an object
called `newMeme`, and give it the necessary information. Finally, we push
this meme into the `memeList` array.

After the loop is finished, we use `setState` to change the state of our app to
the new `memeList` array that we created.

This is enough to allow our app to retrieve data from the database and display
it! However, we also want to be able to add memes to our database using our app.
We'll do this by modifying the `updateMemeCollection` method, which will allow
the `sendMeme()` method to also send meme data to the database.

Let's replace the current `updateMemeCollection` implementation with the following:

```js
// Add a document containing new meme information to "memes" collection
updateMemeCollection = (newMeme) => {
	this.db
		.collection("memes")
		.add(newMeme)
		.then(function(docRef) {
			// Successful update
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error) {
			// Error updating database
			console.error("Error adding document: ", error);
		});
};
```

Make sure to save the changes, and now let's try adding a meme to the app! If
we refresh the page, the meme we added should still be there!! Pretty neat.

Let's take a closer look at the portion of code that we added:

```js
this.db
	.collection("memes")
	.add(newMeme)
	.then(function(docRef) {
		console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
		console.error("Error adding document: ", error);
	});
```

First, we see that we're using the `this.db` reference to our database, and
we're accessing the "memes" collection within it. We're calling the `add` method
on this collection, with the `newMeme` object we created. This is what creates
a doc in the database for our new meme.

What about the `.then` and `.catch` parts? Basically, if the `add` succeeds, the
`.then` code gets executed, but if it doesn't, the `.catch` code executes.
