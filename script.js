const elements = [
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false        
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
            rotation: 0,
            mirrored: false  
        },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,0],
                [1,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,1],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0,1,0],
                [1,1,1],
                [0,1,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [1,0,0],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,0,0],
                [1,1,1],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,1]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,0],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
]
let rossz=false;
let eddigiPontok=0;
let kuldiSzamok=[];
let egyes=0;
let kettes=0;
let harmas=0;
let negyes=0;
let otos=0;
let arr = [];
let arr2 = [];
let ido=0;
let evszakIdo=0;
let pontok=0;
let kuldetesekAlt = [];
let element;
let elements2 = [];
tablazatKiiras();
shuffle2();
kuldetesKiiras();
tablazatAlt();
shuffle();
aktualisElem();
lehelyezendoKiiras();

  function tablazatKiiras() {
    const tablazat = document.querySelector("#tabla");
    const hegyek = ["2,2", "4,9", "6,4", "9,10", "10,6"];
    for (let i = 1; i <= 11; i++) {
      const tr = document.createElement("tr");
      for (let j = 1; j <= 11; j++) {
        const td = document.createElement("td");
        const img = document.createElement("img");
        img.id = i + "," + j;
        if (hegyek.includes(img.id)) {
          img.src = "kepek/elemek/alap_hegy.png";
          img.alt = "alap_hegy";
        } else {
          img.src = "kepek/elemek/alap.png";
          img.alt = "alap";
        }
        img.addEventListener("mouseover", negyzetRe);
        img.addEventListener("mouseout", negyzetRol);
        img.addEventListener("click", lerak);
        td.appendChild(img);
        tr.appendChild(td);
      }
      tablazat.appendChild(tr);
    }
  }



const missions = 
{
  "basic": [
    {
      "title": "Az erdő széle",
      "description": "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz."
    },
    {
      "title": "Álmos-völgy",
      "description": "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz."
    },
    {
      "title": "Krumpliöntözés",
      "description": "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz."
    },
    {
      "title": "Határvidék",
      "description": "Minden teli sorért vagy oszlopért 6-6 pontot kapsz."
    },

    {
      "title": "Fasor",
      "description": "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért."
    },
    {
      "title": "Gazdag város",
      "description": "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz."
    },
    {
      "title": "Öntözőcsatorna",
      "description": "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte."
    },
    {
      "title": "Mágusok völgye",
      "description": "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz."
    },
    {
      "title": "Üres telek",
      "description": "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz."
    },
    {
      "title": "Sorház",
      "description": "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz."
    },
    {
      "title": "Páratlan silók",
      "description": "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz."
    },
    {
      "title": "Gazdag vidék",
      "description": "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz."
    }],
  
}

function kuldetesKiiras(){
    const tablazat = document.querySelector("#kuldetesek");
    let seged=0;
    for (let i = 1; i <= 2; i++) {
      const tr = document.createElement("tr");
      for (let j = 1; j <= 2; j++) {
        const td = document.createElement("td");
        const img = document.createElement("img");
          img.id= kuldiSzamok[seged];
          img.src = "kepek/kuldetesek/kuldetes"+kuldiSzamok[seged]+".png";
          img.alt = "kuldetes"+kuldiSzamok[seged];
        td.appendChild(img);
        tr.appendChild(td);
        seged++;
      }
      tablazat.appendChild(tr);
    }
    document.getElementById(kuldiSzamok[0]+"").style.border = '4px solid #ff0000';
    document.getElementById(kuldiSzamok[1]+"").style.border = '4px solid #ff0000';

}







function shuffle() {
  let currentIndex = elements.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [elements[currentIndex], elements[randomIndex]] = [
      elements[randomIndex], elements[currentIndex]];
  }
}




function shuffle2() {
  while(kuldiSzamok.length < 4){
    var r = Math.floor(Math.random() * 12) + 1;
    if(kuldiSzamok.indexOf(r) === -1) kuldiSzamok.push(r);
  }
  
}


function aktualisElem(){
  //let rand = Math.floor(Math.random() * elements.length);
  //element=elements[rand];
  element=elements[0];
  elements2.push(elements[0]);
  elements.shift();
  if(elements.length==0){
    element=elements2[0];
    elements2.shift();
  }
}

function lehelyezendoKiiras(){
  const tablazat = document.querySelector("#lehelyezendo");
  
  lehelyezendo.innerHTML = "";
  
  for (let i = 0; i <= 2; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j <= 2; j++) {
       const td = document.createElement("td");
        const img = document.createElement("img");
      if(element.shape[i][j]==1){
        img.src="kepek/elemek/"+element.type+".png"
      }else{
        img.src = "kepek/elemek/alap.png";
      }
      td.appendChild(img);
      tr.appendChild(td);
    }
    tablazat.appendChild(tr);
  }
  document.getElementById("lehelyezendo2").innerHTML=("Lehelyezendő elem: "+element.time+" időegységbe kerül");
  

}


forgat.addEventListener("click", () => {
  let N = 3;
  let m = element.shape;
  for (let i = 0; i < N / 2; i++) {
    for (let j = i; j < N - i - 1; j++) {
      let temp = m[i][j];
      m[i][j] = m[N - 1 - j][i];
      m[N - 1 - j][i] = m[N - 1 - i][N - 1 - j];
      m[N - 1 - i][N - 1 - j] = m[j][N - 1 - i];
      m[j][N - 1 - i] = temp;
    }
  }
  lehelyezendoKiiras(element);
});

tavasz.addEventListener("click", () => {
  document.getElementById("kuldik").innerHTML=("");
console.log("asd");
const tablazat = document.querySelector("#kuldik");
    for (let i = 1; i <= 5; i++) {
      const tr = document.createElement("tr");
      for (let j = 1; j <= 2; j++) {
        const td = document.createElement("td");
        const p = document.createElement("p");
        p.id = (i+20)+"-"+j;
        if(j%2==0 && i==1){
          p.innerHTML=(egyes);
        }else if(j%2==0 && i==2){
          p.innerHTML=(kettes);
        }else if(j%2==0 && i==3){
          p.innerHTML=(harmas);
        }else if(j%2==0 && i==4){
          p.innerHTML=(negyes);
        }else if(j%2==0 && i==5){
          p.innerHTML=(kuldetes4());
        }
        else{
          p.innerHTML=(i+". Küldetés pontjai:")
        }
        td.appendChild(p);
        tr.appendChild(td);
      }
      tablazat.appendChild(tr);
    }


});

tukroz.addEventListener("click", () => {
  for (let i = 0; i < element.shape.length; i++) {
    element.shape[i].reverse();
  }
  lehelyezendoKiiras(element);
});



function negyzetRe(e){
  rossz=false;
  let id = e.target.id;
  let sor = id.split(",")[0];
  let oszlop = id.split(",")[1];
      if(element.shape[0].includes(1) && sor==1){
        rossz=true;

      }else if(element.shape[2].includes(1) && sor==11){
        rossz=true;

      }
      else if((element.shape[0][2]==1 || element.shape[1][2]==1 || element.shape[2][2]==1) && oszlop==11){
        rossz=true;
      }else if((element.shape[0][0]==1 || element.shape[1][0]==1 || element.shape[2][0]==1) && oszlop==1){
        rossz=true;

      }

      else{
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          let ujsor= parseInt(sor)+parseInt(i);
          let ujoszlop= parseInt(oszlop)+parseInt(j);
          if(ujsor<=0 || ujsor>=12 || ujoszlop <=0 || ujoszlop>=12){
            
          }

          else if(document.getElementById(ujsor+","+ujoszlop).alt=="alap" && element.shape[i+1][j+1]==1){
            document.getElementById(ujsor+","+ujoszlop).src = "kepek/elemek/alap_jo.png";

          }else if(document.getElementById(ujsor+","+ujoszlop).alt!="alap" && element.shape[i+1][j+1]==1){rossz=true;}
          

          
        }
        
      }
    }
      if(rossz){
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            let ujsor= parseInt(sor)+parseInt(i);
            let ujoszlop= parseInt(oszlop)+parseInt(j);
            
            if(ujsor<=0 || ujsor>=12 || ujoszlop <=0 || ujoszlop>=12){
              
            }
  
              else if(element.shape[i+1][j+1]==1){
              document.getElementById(ujsor+","+ujoszlop).src = "kepek/elemek/alap_rossz.png";}
  
          
      }

    }

}
}
function negyzetRol(e){
  rossz=false;
  let id = e.target.id;
  let sor = id.split(",")[0];
  let oszlop = id.split(",")[1];
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let ujsor= parseInt(sor)+parseInt(i);
      let ujoszlop= parseInt(oszlop)+parseInt(j);
      
      if(ujsor<=0 || ujsor>=12 || ujoszlop <=0 || ujoszlop>=12){
        
      }
        else{
          document.getElementById(ujsor+","+ujoszlop).src = "kepek/elemek/"+document.getElementById(ujsor+","+ujoszlop).alt+".png";}

        }


    
}

}

function lerak(e){
  if(!rossz){
    ido= ido+element.time;
    evszakIdo=evszakIdo+element.time;
    let id = e.target.id;
    let sor = id.split(",")[0];
    let oszlop = id.split(",")[1];
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let ujsor= parseInt(sor)+parseInt(i);
        let ujoszlop= parseInt(oszlop)+parseInt(j);
        if(ujsor<=0 || ujsor>=12 || ujoszlop <=0 || ujoszlop>=12){
        
        }
        else if(document.getElementById(ujsor+","+ujoszlop).alt=="alap" && element.shape[i+1][j+1]==1){
        document.getElementById(ujsor+","+ujoszlop).src = "kepek/elemek/"+element.type+".png";
        document.getElementById(ujsor+","+ujoszlop).alt = ""+element.type;
        }
      }
    }
      
	tablazatAlt();

    if(ido==7 || (ido==8 && element.time!=1)){
      egyes=eval(kuldetesekAlt[0])();
      pontok+=egyes;
      kettes=eval(kuldetesekAlt[1])();
      pontok+=kettes;
      pontok+=hegybekerites();
      jelenEvszak
      document.getElementById("jelenEvszak").innerHTML=("Jelenlegi évszak: Nyár");
      document.getElementById("tavaszP").innerHTML=(pontok+" pont");
      document.getElementById("osszPont").innerHTML=("Összesen: "+pontok+" pont");
      document.getElementById(kuldiSzamok[0]+"").style.border = '';
      document.getElementById(kuldiSzamok[2]+"").style.border = '4px solid #ff0000';

      
    }else if(ido==14 || (ido==15 && element.time!=1)){
      eddigiPontok=pontok;
      kettes+=eval(kuldetesekAlt[1])();
      harmas+=eval(kuldetesekAlt[2])();
      pontok+=eval(kuldetesekAlt[1])();
      pontok+=eval(kuldetesekAlt[2])();
      pontok+=hegybekerites();
      document.getElementById("jelenEvszak").innerHTML=("Jelenlegi évszak: Ősz");
      document.getElementById("nyarP").innerHTML=(Math.abs(pontok-eddigiPontok)+" pont");
      document.getElementById("osszPont").innerHTML=("Összesen: "+pontok+" pont");
      document.getElementById(kuldiSzamok[1]+"").style.border = '';
      document.getElementById(kuldiSzamok[3]+"").style.border = '4px solid #ff0000';

    }else if(ido==21 || (ido==22 && element.time!=1)){
      eddigiPontok=pontok;
      harmas+=eval(kuldetesekAlt[2])();
      negyes+=eval(kuldetesekAlt[3])();
      pontok+=eval(kuldetesekAlt[2])();
      pontok+=eval(kuldetesekAlt[3])();
      pontok+=hegybekerites();
      document.getElementById("jelenEvszak").innerHTML=("Jelenlegi évszak: Tél");
      document.getElementById("oszP").innerHTML=(Math.abs(pontok-eddigiPontok)+" pont");
      document.getElementById("osszPont").innerHTML=("Összesen: "+pontok+" pont");
      document.getElementById(kuldiSzamok[2]+"").style.border = '';
      document.getElementById(kuldiSzamok[0]+"").style.border = '4px solid #ff0000';

    }else if(ido==28 || (ido==29 && element.time!=1)){
      eddigiPontok=pontok;
      pontok+=eval(kuldetesekAlt[3])();
      pontok+=eval(kuldetesekAlt[0])();
      egyes+=eval(kuldetesekAlt[0])();
      negyes+=eval(kuldetesekAlt[3])();
      pontok+=hegybekerites();
      document.getElementById("telP").innerHTML=(Math.abs(pontok-eddigiPontok)+" pont");
      document.getElementById("osszPont").innerHTML=("Összesen: "+pontok+" pont");
      document.getElementById(kuldiSzamok[3]+"").style.border = '';
      document.getElementById(kuldiSzamok[0]+"").style.border = '';
      alert("Játék vége, pontszámod: "+pontok);
      

    }



  if(evszakIdo==7){
    evszakIdo=0;
  }else if(evszakIdo>7){
    evszakIdo=1;
  }
    document.getElementById("idoKeret").innerHTML=(7-evszakIdo+"/7");
  rossz=true;
    aktualisElem();
      lehelyezendoKiiras();
      
  }
}


function kuldetesAlt(){
  for (let i = 0; i < 4; i++) {
    kuldetesekAlt[i]= document.getElementById(String(kuldiSzamok[i])).alt;

  }

}
kuldetesAlt();

function tablazatAlt(){
  for (let i = 0; i < 11; i++) {
    arr[i]=[];
    for (let j = 0; j < 11; j++) {
      arr[i][j]=document.getElementById((i+1)+","+(j+1)).alt;
      
    }
    
  }

  arr2 = arr[0].map((val, index) => arr.map(row => row[index]).reverse());
}

function kuldetes4(){
  console.log("Határvidék");
  let pont=0;
  for (let i = 0; i < 11; i++) {
    if(!arr[i].includes("alap")){
      pont+=6;
    }
    if(!arr2[i].includes("alap")){
      pont+=6;
    }
  }
  return pont;


}
function kuldetes1(){
  console.log("erdő széle");
  let pont=0;
  for (let i = 0; i <11; i++) {
    if(arr[0][i]=="forest"){
      pont+=1;
    }
    if(arr[10][i]=="forest"){
      pont+=1;
    }
    if(arr2[0][i]=="forest"){
      pont+=1;
    }
    if(arr2[10][i]=="forest"){
      pont+=1;
    }
  }
  return pont;
}
function kuldetes2(){
  console.log("álmos völgy");
  let pont=0;
  for (let i = 0; i < 11; i++) {
    if(arr[i].filter((word) => word == "forest").length==3){
      pont+=4;
    }
    
  }
  return pont;
}
function kuldetes3(){
  console.log("krumpliontozes");
  let pont=0;
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if(arr[i][j]== "farm"){
        
        for (let g = -1; g <= 1; g+=2) {
            if((i+g)<0 || (i+g)>10){}
            else if(arr[(i+g)][j]=="water"){
              pont+=2;
            }

        }
        for (let g = -1; g <= 1; g+=2) {
          if((j+g)<0 || (j+g)>10){}
          else if(arr[i][(j+g)]=="water"){
            pont+=2;
          }

      }


      }
    }
    
  }
  return pont;

}

function kuldetes5(){
  console.log("Fasor");
  let szamlalo=0;
  let legnagyobb=0;
  for (let i = 0; i < 11; i++) {
    szamlalo=0;
    for (let j = 0; j < 11; j++) {
      if(arr2[i][j]=="forest"){
        szamlalo++;
        if(szamlalo>legnagyobb){
          legnagyobb=szamlalo;
        }
      }else{
        szamlalo=0;
      }
      
    }
    
  }
  return (legnagyobb*2);
}
function kuldetes6(){
  console.log("Gazdag város");
  let eredmeny=0;
  let tomb=[];
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if(arr[i][j]== "town"){
       
        for (let g = -1; g <= 1; g+=2) {
            if((i+g)<0 || (i+g)>10){}
            else if(!tomb.includes(arr[(i+g)][j]) && arr[(i+g)][j]!="alap"){
              
              tomb.push(arr[(i+g)][j]);
            }

        }
        for (let g = -1; g <= 1; g+=2) {
          if((j+g)<0 || (j+g)>10){}
          else if(!tomb.includes(arr[(i)][j+g]) && arr[(i)][j+g]!="alap"){
            
            tomb.push(arr[(i)][j+g]);
          }

        } 

        if(tomb.length>=3){
          eredmeny+=1;
        }
      }
      tomb = [];
    }
    
  }
  return (eredmeny*3);
}
function kuldetes7(){
  console.log("Öntözőcsatorna");
  let pont=0;
  let viz=0;
  let farm=0;
  for (let i = 0; i < 11; i++) {
    viz=arr2[i].filter((word) => word == "water").length;
    farm=arr2[i].filter((word) => word == "farm").length;
    if(viz==farm && viz>=1){
      pont+=4;
    }
  }

  return pont;
}
function kuldetes8(){
  console.log("Mágusok völgye");
  let pont=0;
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if(arr[i][j]== "alap_hegy"){
        
        for (let g = -1; g <= 1; g+=2) {
            if((i+g)<0 || (i+g)>10){}
            else if(arr[(i+g)][j]=="water"){
              pont+=3;
            }

        }
        for (let g = -1; g <= 1; g+=2) {
          if((j+g)<0 || (j+g)>10){}
          else if(arr[i][(j+g)]=="water"){
            pont+=3;
          }

      }


      }
    }
    
  }
  return pont;
}
function kuldetes9(){
  console.log("Üres telek");
  let pont=0;
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if(arr[i][j]== "town"){
        
        for (let g = -1; g <= 1; g+=2) {
            if((i+g)<0 || (i+g)>10){}
            else if(arr[(i+g)][j]=="alap"){
              pont+=2;
            }

        }
        for (let g = -1; g <= 1; g+=2) {
          if((j+g)<0 || (j+g)>10){}
          else if(arr[i][(j+g)]=="alap"){
            pont+=2;
          }

      }


      }
    }
    
  }
  return pont;
}
function kuldetes10(){
  console.log("Sorház");
  let szamlalo=0;
  let legnagyobb=0;
  for (let i = 0; i < 11; i++) {
    szamlalo=0;
    for (let j = 0; j < 11; j++) {
      if(arr[i][j]=="town"){
        szamlalo++;
        if(szamlalo>legnagyobb){
          legnagyobb=szamlalo;
        }
      }else{
        szamlalo=0;
      }
      
    }
    
  }
  return (legnagyobb*2);

}
function kuldetes11(){
  console.log("Páratlan silók");
  let pont=0;

  for (let i = 0; i < 11; i+=2) {
    if(!arr2[i].includes("alap")){
      pont+=10;
    }
  }
  return pont;
}
function kuldetes12(){
  console.log("Gazdag vidék");
  let pont=0;
  let eredmeny=0;
  for (let i = 0; i < 11; i++) {
    if(new Set(arr[i]).size>=5){
      pont+=4;

    }
    
  }
  return pont;
}

function hegybekerites(){
  let szamlalo=0;
  let hegyek=0;
  
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if(arr[i][j]== "alap_hegy"){
        
        for (let g = -1; g <= 1; g+=2) {
            if((i+g)<0 || (i+g)>10){}
            else if(arr[(i+g)][j]!="alap"){
              
              szamlalo++;
            }

        }
        for (let g = -1; g <= 1; g+=2) {
          if((j+g)<0 || (j+g)>10){}
          else if(arr[i][(j+g)]!="alap"){
            
            szamlalo++;
          }

      }

        if(szamlalo>=4){
          hegyek++;
        }
      }
      szamlalo=0;
    }
    
  }
  return hegyek;

}