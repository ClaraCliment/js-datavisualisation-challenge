#  Javascript Challenge : "Data Visualisation"

- Mode: `solo`  

- Type: `consolidation challenge`  

- Durée: `5 jours`  (08/11/21)

- Contexte: `formation BeCode` 

- Voici le résultat: [découvrez le projet](https://claracliment.github.io/js-datavisualisation-challenge/)


#### Création et gestion de graphiques:
* Utilisation de Chart.js
* Création & gestion de graphiques donc le contenu est présent dans la page HTML (tableaux)
* Création & gestion d'un graphique dynamique donc le contenu est présent dans un lien externe (utilisation d'Ajax) => ce graphique doit s'actualiser toutes les secondes.


## AUTO-EVALUATION
Voici les différents points du briefing et mon auto-évaluation: 

#### 1. Handling of the DOM:

- [x] I was able to find the right selector to do it.
- [x] I was able to inject the graph in the right place on the page via javascript.
- [x] I was able to retrieve the html data in a format adapted to my javascript code.

### 2. Request ajax/fetch:
- [x] I was able to receive the answer from the remote server in json.
- [x] Then, I was able to build a callback function to process this data.

### 3. Use of **third party libraries**:
- [x] I was able to integrate the third-party library into my application.
- [x] I used the documentation provided by the library.
- [x] I was able to generate the 2 inline data graphs.
- [x] I was able to generate the "remote data" graph.

### 4. Problem-solving:

- [x] Syntactic rigor: I was able to translate the processes I imagined into javascript syntax.
- [x] Logical thinking: Through iterations and trial and error, I was able to find a logical path that works to address the issues raised by the client's request. Specifically:
  - [x] I was able to generate the 2 inline data graphs.
	- [x]  I was able to generate the "remote data" graph.
  - [x]  I was able to build a callback function to process remote data (received via ajax).
	- [x]  I was able to make the realtime graph refresh in real time.
	- [x]  I was able to display the detailed data when I hover the mouse.

### 5. Debugging:

  - [x]  I use the console to understand what is happening and compare what I am trying to program with what the machine is doing.

### 6. Separation of concerns:

 - [x]  If I disable javascript, the user experience is satisfactory, the user has access to data and content
 - [x]  If I enable javascript, the tables are enhanced with an interactive graph.


#### Difficultés rencontrées durant ce projet:
Au début mes graphiques ne s'affichaient pas correctement **=>** Il s'est avéré que "pusher" le contenu directement dans un graph qu'on a déjà déclaré n'était pas très malin! (les données ne s'affichent que si je clickais sur la légende, la tableau s'affiche donc au début mais aucune donnée n'est présente, mince!).

Grâce à mes supers collègues et à bcp de test/erreurs j'ai constaté que je devais d'abord extraire les données du tableau et les placer dans des variables, puis déclarer le graphique et y placer les variables! Là, ça marchait. Ufffff!!!! Mais sacré casse tête au début. 

**Plus compliqué:** le graphique en temps réel **=>** même  avec l'aide des collègues qui avaient déjà fini (sorry Ivan pour toute cette souffrance gratuite! 😅) on ne trouvait pas où était le soucis. J'arrivais (avec Ajax) à récupérer les données souhaitées, j'arrivais à créer mon graph et le placer au bon endroit... mais pas de mise à jour des données! Une fois de plus: l'ordre des éléments dans le code m'a joué des tours. Vendreid soir 22h... il semblerait que l'obstination paie.





