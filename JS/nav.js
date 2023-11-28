$("#navigation").hide();

var hauteur = 590;
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > hauteur) {
            $("#navigation").fadeIn('slow').css('display', 'flex');
        } else {
            $("#navigation").fadeOut('slow').css('display', 'none');
        }
    });
});

const Accueil = document.getElementById("Accueil");
const Concernant = document.getElementById("Concernant");
const Qualité = document.getElementById("Qualité");
const Skill = document.getElementById("Skill");
const Contact = document.getElementById("Contact");

Accueil = ()=> {
    smoothScrolling(Accueil);
}
Concernant = ()=> {
    smoothScrolling(Concernant);
}
Qualité = ()=> {
    smoothScrolling(Qualité);
}
Skill = ()=> {
    smoothScrolling(Skill);
}
Contact = ()=> {
    smoothScrolling(Contact);
}

// fait défiler la page jusqu'à l'élément cible
smoothScrolling(cible);


