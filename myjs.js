// variables utiles
// élément h1
var title = document.getElementById("firstHeading");
// first table
var table1 = document.getElementById("table1");
// second table
var table2 = document.getElementById("table2");


// create new canvas to implement in the HTML
var newCanvas1 = document.createElement("canvas");
//newCanvas1.style.backgroundColor = "red";
newCanvas1.style.height = "50vh";
newCanvas1.style.width = "100%";
newCanvas1.style.margin = "20px 0";


var newCanvas2 = document.createElement("canvas");
//newCanvas2.style.backgroundColor = "red";
newCanvas2.style.height = "150vh";
newCanvas2.style.width = "100vw";
newCanvas2.style.margin = "20px 0";

var newCanvas3 = document.createElement("canvas");
// newCanvas3.style.backgroundColor = "red";
newCanvas3.style.height = "200vh";
newCanvas3.style.width = "100vw";
//newCanvas3.style.margin = "20px 0";

// function to inset an element just after another that is already in the HTML file
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

// implementing a div element before the h1 - first argument: the h1 2d argument: the new element
insertAfter(title, newCanvas1);

// implementing a div element before table1
table1.parentNode.insertBefore(newCanvas2, table1);

// implementing a div element before table2
table2.parentNode.insertBefore(newCanvas3, table2);


// tableau 2 -------------------------------------------------------------------------

// Crimes (labels: années // label: pays et data: données par pays
// ANNEES : créer 1 boucle pour récupèrer les années 
var table1_tbody = table1.querySelector("tbody");
var table1_tr = table1_tbody.querySelectorAll("tr");
var table1_th = table1_tr[0].querySelectorAll("th");

var annees = [];
for (var i = 2; i < table1_th.length; i++) {
    annees[i-2] = table1_th[i].innerHTML;
}


// Random COLOR
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } 

// If NaN
function getNum(val) {
    if (isNaN(val)) val = ""; }


// Créer un objet qui reprend la structure d'un object dans dataset

var tous_data = [];

for (var i = 1; i < table1_tbody.rows.length; i++) {

    // objet pour graph
    let dataset_object = {
        label: "",    // pays précis 
        data: [], // infos du pays
        borderColor: 
        getRandomColor(),
        borderWidth: 3
    };
   
    // je recupère le pays
    dataset_object.label = table1_tbody.rows[i].cells[1].innerHTML;

    // je récupère les infos du pays
    for (var j=2; j < table1_th.length; j++) {
        var x = parseFloat(table1_tbody.rows[i].cells[j].innerHTML.replace(",","."));
        if (isNaN(x)) {
            dataset_object.data.push(); // is not a number, I replace it by nothing 
        } else { dataset_object.data.push(parseFloat(table1_tbody.rows[i].cells[j].innerHTML.replace(",","."))) } }

    
    tous_data.push(dataset_object)
}

// création du graph

const myChart2 = new Chart(newCanvas2, {
    type: 'line',
    data: {
        labels: annees, // Country
        datasets: tous_data
    },
    options: {
        pointRadius: 2,
        responsive: true,
        indexAxis: 'x',
        scales: {
            yS: {
                beginAtZero: true
            },
        }
    }
});



// tableau 3 -------------------------------------------------------------------------


// Prison (labels: pays // label_1= données 2007-09 // label_2: données 2010-12)

var table2_tbody = table2.querySelector("tbody");

// table2_tbody.rows[0].cells.length;   => 4 (4 colonnes)
// Obtenir liste pays:
var countries_list = [];
for (var i = 0; i < table2_tbody.rows.length; i++) {
    countries_list[i] = table2_tbody.rows[i].cells[1].innerHTML.replace(/( +)/gm," ").replace(/(\r\n|\n|\r|<br>)/gm,"");
}

// Obtenir données 2007-09:
var data_1 = [];
for (var i = 0; i < table2_tbody.rows.length; i++) {
    data_1[i] = table2_tbody.rows[i].cells[2].innerHTML;
  }

// Obtenir données 2010-12:
var data_2 = [];
for (var i = 0; i < table2_tbody.rows.length; i++) {
    data_2[i] = table2_tbody.rows[i].cells[3].innerHTML;
  }


// création graphique homicides
const myChart3 = new Chart(newCanvas3, {
    type: 'bar',
    data: {
        labels: countries_list, // Countries list
        datasets: [{
            label: '2007-2009',
            data: data_1, // Extraire infos du tableau
            backgroundColor: 
            getRandomColor(),
            // borderColor: 
            //     'red',
            // borderWidth: 1
        },
        {
            label: '2010-2012',
            data: data_2, // Extraire infos du tableau
            backgroundColor: 
            getRandomColor(),
            // borderColor: 
            //     'blue',
            // borderWidth: 1
        }
    
    ]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        scales: {
            yS: {
                beginAtZero: true
            },
        }
    }
});



// Tableau dynamique sous le titre du site ------------------------------------------------------
// utilisation d'Ajax (placement var title)



var contenu_chart1 = [];
var contenu_data = [];
var contenu_labels = [];

// création du graph statique

function static_chart() {
    // on créé la request
    const xhttp = new XMLHttpRequest();
    // que faut-il faire s'il y a bien la data
    xhttp.onload = function() {
        if (this.status == 200) {

            contenu_chart1 = JSON.parse(this.response);

            for (var i = 0; i < contenu_chart1.length; i++) {
                    contenu_data.push(contenu_chart1[i][1]);
                    contenu_labels.push(contenu_chart1[i][0]);
                    //console.log(contenu_chart1.length)
                    //console.log("Label: " + contenu_labels + "/ Data: " + contenu_data);
                    
            }
    
        } else { alert("Error loading the data :-(")}   
        
        
        // créa graphic statique
        
        update_chart();
   
    } 

    
    // où aller chercher la data
    xhttp.open("GET", "https://canvasjs.com/services/data/datapoints.php", true);
    xhttp.send();
}

    
var len= 9;   
    
function update_chart() {
    
    len++
    const xhttp_2 = new XMLHttpRequest
    xhttp_2.onload = function() {
        if (this.status == 200) {
            console.log("ok")
            let contenu_dyn = JSON.parse(this.response);
            contenu_labels.shift()
            contenu_labels.push(len)
    
            console.log(contenu_data)
            contenu_data.shift();
            console.log(contenu_data)
            contenu_data.push(contenu_dyn[0][1])
            console.log(contenu_dyn[0][1])
            console.log(contenu_data)
            
            myChart1.update('resize');
            setTimeout(update_chart, 1000);
        
        } 
    }
    xhttp_2.open("GET", "https://canvasjs.com/services/data/datapoints.php?xstart=" + (len) + "&ystart=10&length=1&type=json", true)
    xhttp_2.send()
    
    
}
static_chart();

const myChart1 = new Chart(newCanvas1, {
    type: 'line',
    data: {
        labels: contenu_labels, // Country
        datasets: [{
            label: 'Crimes Statistics In Europe',
            data: contenu_data, // Extraire infos du tableau
            borderColor: 
                '#C85C5C',
                // getRandomColor(),
            borderWidth: 4,
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'x',
    }
});
