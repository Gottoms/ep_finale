 window.addEventListener('load', function(){
     
    let collectionBtnNouvelle = document.querySelectorAll('.lirePost');
 let collectionNouvelle = collectionBtnNouvelle;
console.log(collectionBtnNouvelle)
console.log('this');
if (collectionBtnNouvelle)
{
    for (let btn of collectionBtnNouvelle){
            console.log(btn.id)
            btn.addEventListener('click',Ajax)
    }
}
 });


function Ajax(evt) {
    
    //  instructions ici
    console.log(evt.target);
    let maRequete = new XMLHttpRequest();
    console.log(maRequete)
    maRequete.open('GET', 'http://localhost/vcd_veille/wp-json/wp/v2/posts?per_page=100'); // modifier ici
    maRequete.onload = function () {
        
        
        if (maRequete.status >= 200 && maRequete.status < 400) {
            let data = JSON.parse(maRequete.responseText);
           
            // instructions ici
            creationHTML(data, evt.target);  // paramètres à ajouter
        } else {
            console.log('La connexion est faite mais il y a une erreur')
        }
    }
    maRequete.onerror = function () {
        console.log("erreur de connexion");
    }
    maRequete.send();
    }

    // instructions à ajouter


///////////////////////////////////////////////////////

function creationHTML(postsData, objet){
    if(objet.classList.contains('active')){
        console.log('this');
        let contenuNouvelle = document.querySelector('.divInfo');
        let parent = contenuNouvelle.parentNode;
        parent.removeChild(contenuNouvelle);
        objet.classList.remove('active');
    }

    else{
        let monHtmlString = '';
        let aoBoutons = document.querySelectorAll('.lirePost');
        
        for(let i = 0;i<aoBoutons.length;i++){
            if(aoBoutons[i].classList.contains('active')){
                console.log(aoBoutons[i]);
                let contenuNouvelle = document.querySelector('.divInfo');
                let parent = contenuNouvelle.parentNode;
                parent.removeChild(contenuNouvelle);
                aoBoutons[i].classList.remove('active');
            }
        }

        console.log(objet.parentNode);
        console.log(postsData.title);
        console.log(objet.getAttribute('data-id'));
        for(let i = 0;i<postsData.length;i++){
            if(postsData[i].id == objet.getAttribute('data-id')){
                monHtmlString += '<h2>' + postsData[i].title.rendered + '</h2>'
                monHtmlString += postsData[i].content.rendered;
            }
            
        }
        let contenuNouvelle = document.createElement('div');
        contenuNouvelle.classList.add('divInfo');
        let objetParent = objet.parentNode;
        objetParent.appendChild(contenuNouvelle);
        contenuNouvelle.innerHTML = monHtmlString; 
        objet.classList.add('active');
    }
    

}







