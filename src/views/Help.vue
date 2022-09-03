<template>
  <br />
  <br />
  <br />
  <div class="accordions">
    <dl v-for="item in items" :key="item">
      <dt v-on:click="item.open = !item.open">{{ item.question }}</dt>
      <dd v-if="item.open">{{ item.answer }}</dd>
    </dl>
  </div>
  <br />
</template>  

<script>
export default {
  data() {
    return {
      items: {
        q1: {
          question: "Što je elektroničko glasovanje?",
          answer:
            "Elektroničko glasovanje označava sustav glasovanja koji koristi elektroničke uređaje ili računala u barem nekoj od faza glasovanja.Postoji puno različitih vrsta sustava za e- glasovanja. Neki koriste elektroničke uređaje za prebrojavanje glasova danih putem listića,neki izravno bilježe glasove, a neki glasove prenose javnim mrežama. To su sustavi za internet ili online glasanje.",
        },
        q2: {
          question:
            "Koji su načini pristupa aplikaciji elektroničkog glasovanja?",
          answer:
            "Aplikaciji za elektroničko glasovanje moći će se pristupiti na tri načina. Prvi način je pristupiti klasično, putem url adrese.Drugi način je pristupiti putem GitHub linka kojeg objavi korisnik u obliku http-a. Treći način je putem loklanog servera kojeg isto tako će objaviti korisnik ",
        },
        q3: {
          question: "Tko ima pravo glasovati ?",
          answer:
            "Pravo glasa imaju prvenstveno sve punoljetne osobe.Aplikaciju Vlast je slast  u svakom poduzeću je korisničko vlasništvo direktora i administratora te oni imaju pravo postavljati izmjene i pravila korištenja.Zatim pravo glasovanja imaju osobe koje su zaposlene u instituciji ili poduzeću.Osoba koja odluči dati glas putem ove aplikacije, aplikacija će tražiti ispunu obrasca te na taj način provjeriti da li ta osoba ima ili nema pravo elektronički glasovati. Pravo glasovanja imaju glasači zaposlenici i glasači kandidati koje ih ostale osobe biraju za neku važnu funkciju.",
        },
        q4: {
          question: "Koji su koraci elektroničkog glasovanja ?",
          answer:
            "Prvi korak je pronaći i pristupiti aplikaciji Vlast je slast. Drugi korak je pristupiti navigacijskom linku prijava, ukoliko se prvi puta prijavljujete, morate se registrirati. Nakon registracije treći korak otvara vam se link izbornoj listo, no prvo vam se otvara obrazac ispune za provjeru pristupa glasovanja. Ukoliko ostvarujete pristup glasovanju otvara vam se izborna lista kao četvrti korak gdje odabirete samo jednog kandidata. Nakon toga sustav vas pita za pohranu odabira, ukoliko želite promjeniti vraća vas na izbornu listu za promjenu, ukoliko vaš odabir konačan, sustav vam šalje poruku da je vaš glas zabilježen.",
        },
        g5: {
          question:
            "Kada i gdje se dobivaju konačni rezultati elektroničkog glasovanja ?",
          answer:
            "Konačni rezultati se dobivaju nakon što istekne određeno vrijeme kada korisnici mogu elektronički glasovati. Rezultati glasovanja biti će dostupni na navigacijskom linku pod obavijesti i promjene",
        },
        g6: {
          question: "Koji su koraci prijave kandidature ?",
          answer:
            "Prvi korak je pristupiti aplikaciji i navigacijskom linku za prijavu kanidature. Drugi korak je ispuniti prvi dio obrazca ispune gdje vas traži osobne podatke ime, prezime OIB i sl. Nadalje sustav traži da kratko navedete posebne kvalifikacije koje će se naknadno analizirati. Nakon što ispunte obrazac sustav će ispisati poruku da je kandidatura zaprimljena.",
        },
        g7: {
          question:
            "Kada i gdje će biti vidljiva konačna lista prijavljenih kandidata ?",
          answer:
            "Lista prijavljenih kandidata biti će vidljivo nakon što se prijavi dovoljno kandidata i nakon što istekne vrijeme mogućnosti prijave kandidature. Lista prijavljenih kandidata biti će vidljiva na naslovnici aplikacije po stavke obavijesti i promjene",
        },
      },
    };
  },
};
</script>

<style>
.accordions {
  width: 1500px;
  margin: 0px auto;
  position: absolute;
  top: 200px;
  left: 800px;
  align-items: center;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50px);
}

.accordions dt {
  padding: 15px 25px;
  border: 1px solid #d5d5d5;
  text-align: center;
  background: rgb(162, 248, 162);
  border-radius: 4px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
}
.accordions dd {
  box-shadow: 0 0 25px #ddd;
  padding: 15px;
  font-size: 20px;
  margin: 0px;
  background: #fff;
  text-align: justify;
}

.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style> 



