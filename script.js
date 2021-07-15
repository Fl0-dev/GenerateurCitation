let btn = document.querySelector('button');
let quote = document.querySelector('p');
let auteur = document.querySelector('cite');

let citations = [
    ["Rien ne sert de courir, il faut partir à point","Jean De La Fontaine"],
    ["Je suis ton père","Dark Vador"],
    ["Tu vois, le monde se divise en2 catégories : ceux qui ont un pistolet chargé et ceux qui creusent. Toi tu creuses","Blondin"],
    ["I'll be back","T-800"],
    ["Ecraser ses ennemis, les voir mourir devant soi et entendre les lamentations de leurs femmes","Conan"],
    ["I am the danger!","Walter White"],
    ["Surprise, motherfucker!","James Doakes"],
    ["Tu ne le sais pas encore, mais tu es déjà mort", "Ken"],
    ["Oh mon dieu! Ils ont tué Kenny!", "Cartman"],
    ["J'aime l'odeur du napalm au petit matin","colonel Kilgore"],
    ["La vie c'est comme une boîte de chocolat : on ne sait jamais sur quoi on va tomber"],
    ["Je mets les pieds où je veux, Little John... et c'est souvent dans la gueule","colonel Braddock"],
    ["Le train de tes injures roule sur le rail de mon indifférence","George Abitbol"],
    ["Je pense que quand on mettra les cons sur orbite, t'as pas fini de tourner","commissaire Louis Joss"],
    ["Un problème sans solution est un problème mal posé","Albert Einstein"],
    ["A vaincre sans péril, on triomphe sans gloire","Pierre Corneille"],
    ["J'parle pas aux cons, ça les instruit","Michel Audiard"],
    ["Les promesses n'engagent que ceux qui les recoivent","Jacques Chirac"],
    ["A l'état de nature, l'homme est un loup pour l'homme","John Adams"],
    ["La justice nique sa mère. Le dernier juge que j'ai vu avait plus de viceque le dealer de ma rue","Rockin'Squat"],
    ["Lorqu'on se cogne la tête contre un pot et que cela sonne creux, ça n'est pas forcément le pot qui est vide","Confucius"],
    ["Je ne connaîtra pas la peur, car la peur tue l'esprit. La peur est la petite mort qui conduit à l'oblitération totale. J'affontrai ma peur. Je lui permettrai de passer sur moi. Et lorsqu'elle sera passée, je tournerai mon oeil intérieur sur son chemein. Et là où elle sera passée, il n'y aura plus rien. Rien que moi","Soeur Bene Gesserit"]
];

let dernier = citations[0];
let nbAleatoire; 
btn.addEventListener('click',()=>{
    do{
    nbAleatoire = Math.floor(Math.random()*Math.floor(citations.length));
    }while(nbAleatoire==dernier);
    quote.textContent = citations[nbAleatoire][0];
    auteur.textContent = citations[nbAleatoire][1];

});