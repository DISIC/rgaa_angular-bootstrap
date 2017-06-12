# rgaa_angular-bootstrap

Corrections d'accessibilité sur les composants Angular Bootstrap.

[Tutoriel sur la mise en accessibilité](https://disic.github.io/rgaa_bibliotheques_javascript/tutoriels/angular-ui.html)

## Installation

```sh
npm install rgaa_angular-bootstrap
```

### Installation (suite)

Comme ceraines dépendances sont en peerDependencies, il ne faut pas oublier de les installer à la main

```sh
npm install angular-ui-bootstrap && npm install angular
```

## Usage

Le script ajoute directement les corrections à l'instance d'Angular déclarée dans la page courante. Il suffit donc de charger le script après Angular et Angular Bootstrap :

```html
<script src="./angular.js"></script>
<script src="./ui-bootstrap-tpls.js"></script>
<script src="./node_modules/rgaa_angular-bootstrap/dist/rgaa_angular-bootstrap.js"></script>
```

Ajouter ensuite le module dans les dépendances de votre application :

```js
const myApp = angular.module('myApp', ['rgaaAngularBootstrap']);
```
