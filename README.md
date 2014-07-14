# webapp

A WIP starter application for quick prototyping and demonstration.

### Dependencies

- Node

### Application structure

The main entry point is `index.html`. Files written in `JSX` may be placed inside the `/src` folder.

Node dependencies are listed in `package.json`.

### Installation

Clone the repo, `cd` into it, then run:

```sh
$ npm install
```

#### Developing

While developing the app, certain files will need to be transformed as you write them (such as the contents of the `/src` folder).

```sh 
$ gulp
```

#### Serving locally

```sh
$ node-server
```

#### Serving in a public staging URL

This allows you to view the application on the computers including mobile phones. Be sure to have the development server running in another tab before running this: 

```sh
$ lt --port 8080
```

# License

See LICENSE.txt