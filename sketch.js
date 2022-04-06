var Combinada, Especial, Mexicana ,Napolitana, Pollo, Portenia, espinaca;
var CombinadaImg, EspecialImg, MexicanaImg ,NapolitanaImg, PolloImg, PorteniaImg, espinacaImg;
var CombinadaG, EspecialG, MexicanaG,NapolitanaG, PolloG, PorteniaG, espinacaG;
var Fugazzeta, Pizza, Calzone, Hamburguesa, Empanadas;
var FugazzetaImg, PizzaImg, CalzoneImg ,HamburguesaImg, EmpanadasImg;
var FugazzetaG, PizzaG, CalzoneG,HamburguesaG, EmpanadasG;

var Logotipo, logotipoImg;

function preload(){
  
 CombinadaImg = loadImage("COMBINADA.png");
 EspecialImg = loadImage("ADERESOS.png");
 MexicanaImg = loadImage("10-FLAN.png");
 NapolitanaImg = loadImage("4-HAMBURGUESA.png");
 PolloImg = loadImage("5-ENSALADA.png");
 PorteniaImg = loadImage("6-CALZONE.png");
 logotipoImg = loadImage("Logo.png");
 espinacaImg = loadImage("ADERESOS.png")

 FugazzetaImg = loadImage("fugazzeta.png");
 PizzaImg = loadImage("pizza.png");
 CalzoneImg = loadImage("calzone.png");
 HamburguesaImg = loadImage("hamburguesa.png");
 EmpanadasImg = loadImage("empanadas.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  Logotipo = createSprite(width/2, height/2, 50,50);
  Logotipo.addImage(logotipoImg);
  Logotipo.scale = width/1000;
  
  CombinadaG = new Group();
  EspecialG = new Group();
  MexicanaG = new Group();
  NapolitanaG = new Group();
  PolloG = new Group();
  PorteniaG = new Group();
  espinacaG = new Group();
  
  FugazzetaG = new Group();
  PizzaG = new Group();
  CalzoneG = new Group();
  HamburguesaG = new Group();
  EmpanadasG = new Group();

  edges = createEdgeSprites();
}

function draw() {
  background("black");
  
  
  var select_pizza = Math.round(random(0,10));
  
  if (World.frameCount % 10 == 0) {
    if (select_pizza == 1) {
      COMBINADA();
    } else if (select_pizza == 2) {
      ESPECIAL();
    } else if (select_pizza == 3) {
      MEXICANA();
    } else if (select_pizza == 4) {
      NAPOLITANA();
    } else if (select_pizza == 5) {
      POLLO();
    } else if (select_pizza == 6) {
      PORTENIA();
    } else if (select_pizza == 7) {
      Letrahamburguesa();
    } else if (select_pizza == 8) {
      Letrapizza();
    } else if (select_pizza == 9) {
      Letracalzone();
    } else if (select_pizza == 10) {
      Letraempanadas();
    } else if (select_pizza == 11) {
      Letrafugazzeta();
    }else {
      ESPINACA();
    }
  }
  
   CombinadaG.bounceOff(EspecialG);
   CombinadaG.bounceOff(NapolitanaG);
   CombinadaG.bounceOff(MexicanaG);
   CombinadaG.bounceOff(PolloG);
   CombinadaG.bounceOff(PorteniaG);
   CombinadaG.bounceOff(espinacaG);
  
   EspecialG.bounceOff(CombinadaG);
   EspecialG.bounceOff(NapolitanaG);
   EspecialG.bounceOff(MexicanaG);
   EspecialG.bounceOff(PolloG);
   EspecialG.bounceOff(PorteniaG);
   EspecialG.bounceOff(espinacaG);
  
   NapolitanaG.bounceOff(EspecialG);
   NapolitanaG.bounceOff(CombinadaG);
   NapolitanaG.bounceOff(MexicanaG);
   NapolitanaG.bounceOff(PolloG);
   NapolitanaG.bounceOff(PorteniaG);
   NapolitanaG.bounceOff(espinacaG);
  
   MexicanaG.bounceOff(EspecialG);
   MexicanaG.bounceOff(CombinadaG);
   MexicanaG.bounceOff(NapolitanaG);
   MexicanaG.bounceOff(PolloG);
   MexicanaG.bounceOff(PorteniaG);
   MexicanaG.bounceOff(espinacaG);
  
   PolloG.bounceOff(EspecialG);
   PolloG.bounceOff(CombinadaG);
   PolloG.bounceOff(NapolitanaG);
   PolloG.bounceOff(MexicanaG);
   PolloG.bounceOff(PorteniaG);
   PolloG.bounceOff(espinacaG);
  
   PorteniaG.bounceOff(EspecialG);
   PorteniaG.bounceOff(CombinadaG);
   PorteniaG.bounceOff(NapolitanaG);
   PorteniaG.bounceOff(MexicanaG);
   PorteniaG.bounceOff(PolloG);
   PorteniaG.bounceOff(espinacaG);
  
   espinacaG.bounceOff(EspecialG);
   espinacaG.bounceOff(CombinadaG);
   espinacaG.bounceOff(NapolitanaG);
   espinacaG.bounceOff(MexicanaG);
   espinacaG.bounceOff(PolloG);
   espinacaG.bounceOff(PorteniaG);
  
  drawSprites();
}

function COMBINADA() {
  var comb = createSprite(Math.round(random(20,1800)),height+70,50,50);
  comb.addImage(CombinadaImg);
  comb.velocityY = -3;
  comb.lifetime = 250;
  comb.scale = width/4000;
  comb.bounceOff(Logotipo);
  CombinadaG.add(comb);
}

function ESPECIAL() {
  var esp = createSprite(Math.round(random(20,1800)),height+70, 10, 10);
  esp.addImage(MexicanaImg);
  esp.velocityY = -3;
  esp.lifetime = 250;
  esp.scale = width/4000;
  EspecialG.add(esp);
}

function NAPOLITANA() {
  var nap = createSprite(Math.round(random(20,1800)),height+70, 10, 10);
  nap.addImage(NapolitanaImg);
  nap.velocityY = -3;
  nap.lifetime = 250;
  nap.scale = width/4000;
  NapolitanaG.add(nap);
}

function POLLO() {
  var poll = createSprite(Math.round(random(20,1800)),height+70, 10, 10);
  poll.addImage(PolloImg);
  poll.velocityY = -3;
  poll.lifetime = 250;
  poll.scale = width/4000;
  PolloG.add(poll);
}

function PORTENIA() {
  var port = createSprite(Math.round(random(20,1800)),height+70, 10, 10);
  port.addImage(PorteniaImg);
  port.velocityY = -3;
  port.lifetime = 250;
  port.scale = width/4000;
  PorteniaG.add(port);
}

function MEXICANA() {
  var mex = createSprite(Math.round(random(20,1800)),height+70, 10, 10);
  mex.addImage(EspecialImg);
  mex.velocityY = -3;
  mex.lifetime = 250;
  mex.scale = width/4000;
  MexicanaG.add(mex);
}

function ESPINACA() {
  var espin = createSprite(Math.round(random(20,1800)),height+70, 10, 10);
  espin.addImage(MexicanaImg);
  espin.velocityY = -3;
  espin.lifetime = 250;
  espin.scale = width/4000;
  espinacaG.add(espin);
}

function Letrapizza() {
  var Lpizza = createSprite(Math.round(random(20,1800)),height+70,50,50);
  Lpizza.addImage(PizzaImg);
  Lpizza.velocityY = -3;
  Lpizza.lifetime = 250;
  Lpizza.scale = width/4000;
  PizzaG.add(Lpizza);
}

function Letracalzone() {
  var Lcalzone = createSprite(Math.round(random(20,1800)),height+70,50,50);
  Lcalzone.addImage(CalzoneImg);
  Lcalzone.velocityY = -3;
  Lcalzone.lifetime = 250;
  Lcalzone.scale = width/4000;
  CalzoneG.add(Lcalzone);
}

function Letrafugazzeta() {
  var Lfuga = createSprite(Math.round(random(20,1800)),height+70,50,50);
  Lfuga.addImage(FugazzetaImg);
  Lfuga.velocityY = -3;
  Lfuga.lifetime = 250;
  Lfuga.scale = width/4000;
  FugazzetaG.add(Lfuga);
}

function Letraempanadas() {
  var Lemp = createSprite(Math.round(random(20,1800)),height+70,50,50);
  Lemp.addImage(EmpanadasImg);
  Lemp.velocityY = -3;
  Lemp.lifetime = 250;
  Lemp.scale = width/4000;
  EmpanadasG.add(Lemp);
}

function Letrahamburguesa() {
  var Lham = createSprite(Math.round(random(20,1800)),height+70,50,50);
  Lham.addImage(FugazzetaImg, PizzaImg, CalzoneImg ,HamburguesaImg, EmpanadasImg);
  Lham.velocityY = -3;
  Lham.lifetime = 250;
  Lham.scale = width/4000;
  HamburguesaG.add(Lham);
}