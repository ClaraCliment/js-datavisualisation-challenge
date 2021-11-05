// NE PAS LIRE CE CODE _______________________ code "caca" 



// Code erroné car la manière d'extraire les données est erronée
// Néanmoins je garde ceci pour rappel perso !! 

var contenu_chart1 = [];

function loadDoc() {
    // on créé la request
    const xhttp = new XMLHttpRequest();


    // que faut-il faire s'il y a bien la data
    xhttp.onload = function(data) {
        var myData = data.target.responseText;

        var replacedata = myData.replace(/[\[]|[\]]/gm,"");
        var splitdata = replacedata.split(","); // les chiffres sont bien séparés mais ce sont des strings
        var numbersdata = [];
        var cleandata = [];

        for(var i=0; i < splitdata.lenght; i++) {
            parseInt(splitdata[i]);
        }

        // for(var i=0; i < splitdata.lenght; i++) {
        //     numbersdata.push(parseInt(splitdata[i]));
        // }

        // for(var j=0; j < numbersdata.lenght; j++) {
        //     if((numbersdata[i]%2) === 0) {
        //         cleandata.push(numbersdata[i]);
        //     }
        // }

        console.log(data);
        //console.log(replacedata); 
        console.log(replacedata[3]);
        console.log(splitdata)
        //console.log(numbersdata[3]);
        //console.log(cleandata)

    }

    // où aller chercher la data
    xhttp.open("GET", "https://canvasjs.com/services/data/datapoints.php", true);
    xhttp.send();
}

loadDoc();



  const myChart1 = new Chart(newCanvas1, {
    type: 'line',
    data: {
        labels: "", // Country
        datasets: [{
            label: 'Crimes Statistics In Europe',
            data: [0], // Extraire infos du tableau
            borderColor: 
                'blue',
                // getRandomColor(),
            borderWidth: 2
        }]
    },
    options: {
        // pointRadius: 0,
        responsive: true,
        indexAxis: 'x',
        scales: {
            yS: {
                beginAtZero: true
            },
        }
    }
});
