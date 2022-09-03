import express from 'express'
import obavijesti from './obavijesti'
import FAQ from './FAQ'
import glasovanje from './glasovanje'

const app = express();

const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//Za demonstraciju ispravnosti

app.get('/', (req, res) => {
    res.send("Pozdrav iz web preglednika!")
    console.log("Pozdrav iz konzole!")
})

//Obavijesti  

//GET metoda

app.get('/obavijesti', (req, res) => {  //dohvaćanje svih obavijesti 
    res.status(200);
    res.send(obavijesti)
})

app.get('/obavijesti/:id', (req, res) => { //dohvaćanje jedne nove obavijesti

    let obavijest = {
        id: 256388,
        tekst: "U utorak 20.rujna započinju prijave kandidature za novog direktora poduzeća.Zaposlenici prijavljuju svoje kandidature na stranici Prijava kandidature gdje ispunjavaju obrazac prijave. Prijave se primaju do 1.10.2022. Naknadna prijava nije moguća."
    }
    res.status(200);
    res.send(obavijest);
});

//POST metoda  

app.post('/obavijesti', (req, res) => { //upis i objava nove obavijesti 
    res.status(201);
    res.send(req.body);
});

//PUT metoda 

app.put('/obavijesti/:id', (req, res) => { //izmjena postojeće obavijesti 
    res.json({
        id: req.params.id,
        tekst: req.body.tekst
    });
})

//DELETE metoda   

app.delete('/obavijesti/:id', (req, res) => {   //brisanje postojeće obavijesti 

    res.json({ msg: `Poruka ${req.params.id} je obrisana` });

})


// Česta pitanja   

//GET metoda   

app.get('/FAQ', (req, res) => {  //Dohvaćanje svih čestih pitanja 
    res.status(200);
    res.json(FAQ)
});

app.get('/FAQ/:id', (req, res) => { // Dohvaćanje novog učestalog pitanja

    console.log(req.query.pitanje)

    let pitanje =
    {
        id: '9',
        question: 'Tko su kandidati ?',
        answer: 'Kandidati su svi oni koji prijave kanidaturu u definiranom roku'
    }
    res.json(pitanje);

});

//POST metoda  

app.post('/FAQ', (req, res) => { //Objava novog učestalog pitanja 
    res.status(201);
    res.send(req.body);
})


// Glasovanje  


//GET metoda   

app.get('/glasovanje', (req, res) => {  //dohvaćanje svih imena glasača
    res.status(200);
    res.json(glasovanje);
})

app.get('/glasovanje/:OIB', (req, res) => { //dohvaćanje glasača po zadanom OIB-u

    res.status(200);
    res.json(glasovanje);

});

//POST metoda  

app.post('/glasovanje', (req, res) => {  //uvođenje novog glasača 
    res.status(200);
    res.json(req.body);
});

app.post('/glasovanje-ime', (req, res) => { //navođenje imena jednog glasača 

    if (!req.body.ime) {
        return res.status(400).send('Potrebno je navesti ime');
    }
    res.status(201).send(`Hvala ${req.body.ime}`);
});


app.post('/glasovanje-prezime', (req, res) => { //navođenje prezimena jednog glača

    if (!req.body.prezime) {
        return res.status(400).send('Potrebno je navesti prezime');
    }
    res.status(201).send(`Hvala ${req.body.prezime}`);
});

app.post('/glasovanje-email', (req, res) => { //provjera prijave glasača, njegov email

    if (!req.header('x-auth-token')) {
        return res.status(400).send('No token');
    }

    if (req.header('x-auth-token') !== 'mvidov@uniri.hr') {
        return res.status(401).send('Not authorised');
    }

    res.send('Logged in');

});

app.post('/glasovanje-password', (req, res) => { //provjera prijave glasača, njegova lozinka

    if (!req.header('x-auth-token')) {
        return res.status(400).send('No token');
    }

    if (req.header('x-auth-token') !== 'vidov61') {
        return res.status(401).send('Not authorised');
    }

    res.send('Logged in');

});


//PUT metoda  

app.put('/glasovanje/:OIB', (req, res) => {

    res.json({
        ime: "Toma",
        prezime: "Tomić",
        grad_prebivališta: "Zagreb",
        status_korisnika: "zaposlenik",
        ustanova: "Vrtići, škole, sveučilište i fakulteti"

    });

})





































app.listen(port, () => console.log(`Slusam na portu ${port}`))