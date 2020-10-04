function voyage(num,depart,dest,date,prix)
{
     this.num=num;
     this.depart=depart;
     this.dest=dest;
     this.date=date;
     this.prix=prix;
}





var TanAga=new Array(4);

TanAga[0]=new voyage(172521,"Tan-Tan","Agadir","24/09/2020 08:00","150DH");
TanAga[1]=new voyage(223234,"Tan-Tan","Agadir","24/09/2020 10:30","150DH");
TanAga[2]=new voyage(333333,"Tan-Tan","Agadir","24/09/2020 14:00","150DH");
TanAga[3]=new voyage(443444,"Tan-Tan","Agadir","25/09/2020 00:00","150DH");


var AgaTan=new Array(4);
AgaTan[0]=new voyage(121221,"Agadir","Tan-Tan","24/09/2020 07:00","150DH");
AgaTan[1]=new voyage(223234,"Agadir","Tan-Tan","24/09/2020 12:30","150DH");
AgaTan[2]=new voyage(345633,"Agadir","Tan-Tan","24/09/2020 16:00","150DH");
AgaTan[3]=new voyage(445644,"Agadir","Tan-Tan","25/09/2020 02:00","150DH");




function afficherHoraires()
{
    var indexDepart=document.getElementById('depart').selectedIndex;
    var indexDest=document.getElementById('destination').selectedIndex;

    if(indexDepart<=0 || indexDest<=0 || indexDest==indexDepart)
    {
        alert('Veillez entrer le trajet de votre voyage (depart et destination)');
        return false;
    }
    var depart=document.getElementById('depart')[indexDepart].value;
    var destination=document.getElementById('destination')[indexDest].value;

    var horiareTab=document.getElementById('horiareTab');

    switch(depart)
    {
        case "Tan-Tan":
                switch(destination)
                {
                    case "Agadir":
                        document.getElementById('msg1').innerText="Les voyages de Tan-Tan à Agadir sont: ";

                        for(var i=0;i<AgaTan.length;i++)
                    {
                        if(i==0)
                        {
                        horiareTab.innerHTML="<tr><th>Numéro de voyage</th><th>Départ</th><th>Arrivé</th><th>Date</th><th>Prix</th></tr>";
                        horiareTab.innerHTML+="<tr><td>"+TanAga[i].num+"</td><td>"+TanAga[i].depart+"</td><td>"+TanAga[i].dest+"</td><td>"+TanAga[i].date+"</td><td>"+TanAga[i].prix+"</td></tr>";
                        }
                        else
                        horiareTab.innerHTML+="<tr><td>"+TanAga[i].num+"</td><td>"+TanAga[i].depart+"</td><td>"+TanAga[i].dest+"</td><td>"+TanAga[i].date+"</td><td>"+TanAga[i].prix+"</td></tr>";
                    }
                    break;
                    default:
                        alert("Pas encore");
                }
        break;
        case "Agadir":
            switch(destination)
            {
                case "Tan-Tan":
                    document.getElementById('msg1').innerText="Les voyages de Agadir à Tan-Tan sont: ";
                    for(var i=0;i<AgaTan.length;i++)
                    {
                        if(i==0)
                        {
                        horiareTab.innerHTML="<tr><th>Numéro de voyage</th><th>Départ</th><th>Arrivé</th><th>Date</th><th>Prix</th></tr>";
                        horiareTab.innerHTML+="<tr><td>"+AgaTan[i].num+"</td><td>"+AgaTan[i].depart+"</td><td>"+AgaTan[i].dest+"</td><td>"+AgaTan[i].date+"</td><td>"+AgaTan[i].prix+"</td></tr>";
                        }
                        else
                        horiareTab.innerHTML+="<tr><td>"+AgaTan[i].num+"</td><td>"+AgaTan[i].depart+"</td><td>"+AgaTan[i].dest+"</td><td>"+AgaTan[i].date+"</td><td>"+AgaTan[i].prix+"</td></tr>";
                    }
                break;
                default:
                    alert("Pas encore");
            }

        break;
        default:
                        alert("Pas encore");
    }   
}


function verifier()
{
        var numZone=document.getElementById("numTrip");
        var num=numZone.value;
        var indexDepart=document.getElementById('depart').selectedIndex;
        var indexDest=document.getElementById('destination').selectedIndex;
        if(indexDepart<=0 || indexDest<=0 || indexDest==indexDepart)
        {
            alert("Vous n'avez pas choisit un trajet");
            return false;
        }

        var nom=document.getElementById("nom").value;
        var prenom=document.getElementById("prenom").value;
        var tel=document.getElementById("tel").value;
        var cin=document.getElementById("cin").value;
        
        var depart=document.getElementById('depart')[indexDepart].value;
        var destination=document.getElementById('destination')[indexDest].value;
        
        if(num=="")
            {
                numZone.style.borderColor="red";
                numZone.focus;
                alert("Veiller donner le numéro du voyage");
                return false;
            }
        else
                if(num!="")
                {
                    var indice;
                    var exist=false;
                    var tab;
                   switch(depart)
                   {
                       case "Tan-Tan":
                                switch(destination)
                                {
                                    case "Agadir":
                                        tab="TanAga";
                                        for(elmnt in TanAga)
                                        {
                                            if(TanAga[elmnt].num==parseInt(num))
                                            {
                                                numZone.style.borderColor="black";
                                                exist=true;                                                
                                                indice=elmnt; 
                                            }
                                        }
                                        if(!exist)
                                        {
                                        alert("le numéro ne correspond à aucun voyage");
                                        numZone.style.borderColor="red";
                                        return false;
                                        }
                                    break;
                                    default:
                                        alert("PAS encore");
                                        numZone.style.borderColor="red";
                                        return false;
                                }
                       break;

                       case "Agadir":
                        switch(destination)
                        {
                            case "Tan-Tan":
                                tab="AgaTan";
                                for(elmnt in AgaTan)
                                {
                                    if(AgaTan[elmnt].num==parseInt(num))
                                    {
                                        numZone.style.borderColor="black";
                                        exist=true;
                                        indice=elmnt; 
                                    }
                                }
                                if(!exist)
                                        {
                                        alert("le numéro ne correspond à aucun voyage");
                                        numZone.style.borderColor="red";
                                        return false;
                                        }
                            break;
                            default:
                                alert("PAS encore");
                                numZone.style.borderColor="red";
                                return false;
                        }


                       break;

                       default:
                           alert("PAS encore");
                           numZone.style.borderColor="red";
                           return false;

                   }

                }
    

 
                if(nom=="" || !isNaN(nom))
                {
                    alert("Donner votre nom");
                    return false;
                }

                if(prenom=="" || !isNaN(prenom))
                {
                    alert("Donner votre prénom");
                    return false;
                }
                

                if(cin=="" || !isNaN(cin))
                {
                    alert("Donner votre CIN");
                    return false;
                }

                if(tel=="" || isNaN(tel) || tel.length<10 || tel.length>10)
                {
                    alert("Donner votre numéro de téléphone");
                    return false;
                }



                switch(tab)
                {
                    case "TanAga":
                        return insertInfo(TanAga[indice].num,TanAga[indice].date,TanAga[indice].prix,nom,prenom,cin,tel);
                    case "AgaTan":
                        return insertInfo(AgaTan[indice].num,AgaTan[indice].date,AgaTan[indice].prix,nom,prenom,cin,tel);

                }

}


function insertInfo(NO,D,P,NOM,PN,C,T)
{
        var synNom=document.getElementById("synNom");
        var synPrenom=document.getElementById("synPrenom");
        var synCin=document.getElementById("synCin");
        var synTel=document.getElementById("synTel");
        var synPrix=document.getElementById("synPrix");
        var synDate=document.getElementById("synDate");
        var synNum=document.getElementById("synNumVoy");

        var info=document.getElementById("info");
        var synthese=document.getElementById("synthese");
        var control=document.getElementById("controls");

        info.style.display="none";
        control.style.display="none";

         synNom.innerText=NOM;
         synPrenom.innerText=PN;
         synCin.innerText=C;
         synTel.innerText=T;
         synPrix.innerText=P;
         synDate.innerText=D;
         synNum.innerText=NO;

        synthese.style.display="inline";

}

function effacer()
{
    
        document.getElementById("nom").value="";
        document.getElementById("prenom").value="";
        document.getElementById("tel").value="06";
        document.getElementById("cin").value="";
        document.getElementById("numTrip").value="";
}



function autreReserve()
{
    effacer();
    var horiareTab=document.getElementById('horiareTab');
    var msg1=document.getElementById('msg1');
    document.getElementById('depart').selectedIndex=0;
    document.getElementById('destination').selectedIndex=0;   
    var synthese=document.getElementById('synthese');
    var info=document.getElementById('info');
    var controls=document.getElementById('controls');
    horiareTab.innerHTML="<tr><th>Numéro de voyage</th><th>Départ</th><th>Arrivé</th><th>Date</th><th>Prix</th></tr>";
    msg1.innerText="Veillez choisir un trajet et cliquer sur le botton Valider.";

    synthese.style.display="none";
    info.style.display="inline";
    controls.style.display="inline";

}



// Partie messagerie:

var infos=["info1","info2","info3","syntheseMessagerie"];


var parcour=1;
function suivant()
{
        console.log(parcour);
               if(verifierInfos(parcour))
                        {
                            document.getElementById(infos[parcour-1]).style.display='none';
                            if(parcour==1)
                            {
                                document.getElementById('prev').disabled=0;
                            }
                            if(parcour==3)
                            {
                                document.getElementById('next').style.display="none";
                                document.getElementById('prev').style.display="none";
                                document.getElementById('oth').style.display="inline";
                                var date=document.getElementById('dateEnvoie').value;
                                document.getElementById('syndate').innerText=date;
                               
                            }
                            document.getElementById('hr'+parcour).style.backgroundColor='mediumspringgreen';
                            document.getElementById(infos[parcour++]).style.display='block';
                            document.getElementById('etape'+parcour).style.backgroundColor='mediumspringgreen';
                        }
        

}

function precedant()
{
        console.log(parcour);
        if(parcour==4)
        {
            document.getElementById('next').disabled=0;
        }
        if(parcour==1)
        {
            document.getElementById('prev').disabled=1;
        }
                            document.getElementById(infos[--parcour-1]).style.display='block';
                            document.getElementById('hr'+parcour).style.backgroundColor='orange';
                            document.getElementById(infos[parcour]).style.display='none';
                            document.getElementById('etape'+(parcour+1)).style.backgroundColor='orange';
        

}



function verifierInfos(elm)
{
        switch(elm)
        {
            case 1:
                    var nomColis=document.getElementById('nomColis');
                    var poidsColis=document.getElementById('poids');
                    var typeColis=document.getElementById('type');
                    var dateEnvoie=document.getElementById('dateEnvoie');
                    var fragile1=document.getElementById('Fragile1');
                    var fragile2=document.getElementById('Fragile2');

                        if(nomColis.value=="")
                        {
                            alert('SVP donner un nom pour référencier votre colis');
                            return false;
                        }
                        else
                            if(isFinite(nomColis.value))
                            {
                                alert('SVP la référence de votre colis ne peut pas être un nombre');
                            return false;
                            }

                            if(typeColis.value=="")
                            {
                                alert('SVP donner le type de votre colis');
                                return false;
                            }
                            else
                                if(isFinite(nomColis.value))
                                {
                                    alert('SVP le type de votre colis ne peut pas être un nombre');
                                return false;
                                }

                        if(poidsColis.value=="")
                        {
                            alert('SVP donner le poids en KG de votre colis');
                            return false;
                        }
                        else
                        if(poidsColis.value<=0 ||poidsColis.value>400)
                        {
                            alert('SVP donner un poids correcte qui ne dépasse pas 400KG');
                            return false;
                        }

                        var today=new Date();
                        if(dateEnvoie.value=="")
                        {
                            alert('SVP donner la date d\'envoie de votre colis');
                            return false;   
                        }
                       else
                        {
                            var yearEnvoie=dateEnvoie.value.substring(0,4);
                            var monthEnvoie=dateEnvoie.value.substring(5,7);
                            var dayEnvoie=dateEnvoie.value.substring(8);
                                if(today.getFullYear()>yearEnvoie)
                                {
                                   alert('SVP donner une date correcte');
                                    return false;
                                }
                                else
                                if(today.getFullYear()==yearEnvoie)
                                {
                                    if((today.getMonth()+1)>monthEnvoie)
                                    {
                                       alert('SVP donner une date correcte');
                                       return false;
                                    }
                                    else
                                        if((today.getMonth()+1)==monthEnvoie)
                                        {
                                           if(today.getDate()>dayEnvoie)
                                             { 
                                               alert('SVP donner une date correcte');
                                                return false;
                                                }
                                            else
                                            if(today.getDate()==dayEnvoie)
                                            {
                                                alert('SVP Choisir un autre jour sauf ajourdh\'ui');
                                                return false;   
                                            }
                                    }

                                }
                                else
                                {
                                    alert('SVP la date doit être en même année');
                                    return false;
                                }
                                
                                
                                if(!fragile1.checked && !fragile2.checked)
                                {
                                    alert('SVP dire si le colis est fragile ou non car c\'est très important');
                                    return false;
                                }


             
                            }
                      
                        return true;
                case 2:
                    var nomPersoColis=document.getElementById("nomPersoColis").value;
                    var prenomPersoColis=document.getElementById("prenomPersoColis").value;
                    var telPersoColis=document.getElementById("telPersoColis").value;
                    var cinPersoColis=document.getElementById("cinPersoColis").value;
                    var adressePersoColis=document.getElementById("addresseDepart").value;
                
                if(nomPersoColis=="" || !isNaN(nomPersoColis))
                    {
                        alert("Donner votre nom");
                        return false;
                    }
    
                    if(prenomPersoColis=="" || !isNaN(prenomPersoColis))
                    {
                        alert("Donner votre prénom");
                        return false;
                    }
                    
    
                    if(cinPersoColis=="" || !isNaN(cinPersoColis))
                    {
                        alert("Donner votre CIN");
                        return false;
                    }
    
                    if(telPersoColis=="" || isNaN(telPersoColis) || telPersoColis.length<10 || telPersoColis.length>10)
                    {
                        alert("Donner votre numéro de téléphone");
                        return false;
                    }

                    if(adressePersoColis=="")
                    {
                        alert("Donner votre adresse");
                        return false;
                    }
                return true;

                case 3:
                    var nomDestColis=document.getElementById("nomDestColis").value;
                    var prenomDestColis=document.getElementById("prenomDestColis").value;
                    var telDestColis=document.getElementById("telDestColis").value;
                    var cinDestColis=document.getElementById("cinDestColis").value;
                    var adresseDestColis=document.getElementById("addresseArrive").value;
                
                if(nomDestColis=="" || !isNaN(nomDestColis))
                    {
                        alert("Donner le nom de votre destinataire");
                        return false;
                    }
    
                    if(prenomDestColis=="" || !isNaN(prenomDestColis))
                    {
                        alert("Donner le prénom de votre destinataire");
                        return false;
                    }
                    
    
                    if(cinDestColis=="" || !isNaN(cinDestColis))
                    {
                        alert("Donner le CIN de votre destinataire");
                        return false;
                    }
    
                    if(telDestColis=="" || isNaN(telDestColis) || telDestColis.length<10 || telDestColis.length>10)
                    {
                        alert("Donner le numéro de téléphone de votre destinataire");
                        return false;
                    }

                    if(adresseDestColis=="")
                    {
                        alert("Donner l'adresse de votre destinataire");
                        return false;
                    }
                return true;


        }



}






function reinitialiserColis()
{

    for(i=1;i<=3;i++)
    {   
        document.getElementById('hr'+i).style.backgroundColor="orange";
        document.getElementById('etape'+(i+1)).style.backgroundColor="orange";
    }


    document.getElementById("nomDestColis").value="";
    document.getElementById("prenomDestColis").value="";
    document.getElementById("telDestColis").value="";
    document.getElementById("cinDestColis").value="";
    document.getElementById("addresseArrive").value="";

    document.getElementById("nomPersoColis").value="";
    document.getElementById("prenomPersoColis").value="";
    document.getElementById("telPersoColis").value="";
    document.getElementById("cinPersoColis").value="";
    document.getElementById("addresseDepart").value="";

    document.getElementById('nomColis').value="";
    document.getElementById('poids').value="";
    document.getElementById('type').value="";
    document.getElementById('dateEnvoie').value="";
    document.getElementById('Fragile1').value="";
    document.getElementById('Fragile2').value="";

    document.getElementById(infos[0]).style.display="block";
    for(i=1;i<infos.length;i++)
    {   
        document.getElementById(infos[i]).style.display="none";
    }

    document.getElementById('next').style.display="inline";
    document.getElementById('prev').style.display="inline";
    document.getElementById('prev').disabled=1;
    document.getElementById('oth').style.display="none";
}