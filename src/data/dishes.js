import saladaRavanello from "../assets/dishes/salada-ravanello.png";
import spaguettiGambe from "../assets/dishes/spaguetti-gambe.png";
import torradasDeParma from "../assets/dishes/torradas-de-parma.png";
import saladaMolla from "../assets/dishes/salada-molla.png";
import prugnaPie from "../assets/dishes/prugna-pie.png";
import peachyPastrie from "../assets/dishes/peachy-pastrie.png";
import macarons from "../assets/dishes/macarons.png";
import boloDeDamasco from "../assets/dishes/bolo-de-damasco.png";
import espresso from "../assets/dishes/espresso.png";
import sucoDeMaracuja from "../assets/dishes/suco-de-maracuja.png";
import teDautunno from "../assets/dishes/te-dautunno.png";
import pomoBourbon from "../assets/dishes/pomo-bourbon.png";

export const dishes = [
  { id: 1, category: "refeicoes", title: "Salada Ravanello", description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.", price: 49.97, image: saladaRavanello, ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "tomate"] },  { id: 2, category: "refeicoes", title: "Spaguetti Gambe", description: "Massa fresca com camarões e pesto.", price: 79.97, image: spaguettiGambe },
  { id: 3, category: "refeicoes", title: "Torradas de Parma", description: "Presunto de parma e rúcula em um pão com fermentação natural.", price: 25.97, image: torradasDeParma, ingredients: [] },
  { id: 4, category: "refeicoes", title: "Salada Molla", description: "Massa fresca com camarões e pesto.", price: 79.97, image: saladaMolla, ingredients: [] },
  { id: 5, category: "sobremesas", title: "Prugna Pie", description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.", price: 79.97, image: prugnaPie, ingredients: [] },
  { id: 6, category: "sobremesas", title: "Peachy pastrie", description: "Delicioso folheado de pêssego com folhas de hortelã.", price: 32.97, image: peachyPastrie, ingredients: [] },
  { id: 7, category: "sobremesas", title: "Macarons", description: "Farinha de amêndoas, manteiga, claras e açúcar.", price: 79.97, image: macarons, ingredients: [] },
  { id: 8, category: "sobremesas", title: "Bolo de damasco", description: "Damascos frescos em uma massa sem glúten.", price: 19.97, image: boloDeDamasco, ingredients: [] },
  { id: 9, category: "bebidas", title: "Espresso", description: "Café cremoso feito na temperatura ideal.", price: 15.97, image: espresso, ingredients: [] },
  { id: 10, category: "bebidas", title: "Suco de maracujá", description: "Suco de maracujá gelado, cremoso, docinho.", price: 13.97, image: sucoDeMaracuja, ingredients: [] },
  { id: 11, category: "bebidas", title: "Tê d'autunno", description: "Chá de anis, canela e limão. Sirva o outono italiano.", price: 19.97, image: teDautunno, ingredients: [] },
  { id: 12, category: "bebidas", title: "Pomo bourbon", description: "Maçã, whisky, canela. On the rocks.", price: 79.97, image: pomoBourbon, ingredients: [] },
];