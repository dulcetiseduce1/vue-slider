const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

/*
1. Al click sulle frecce Su e Giù, l'immagine principale deve cambiare
*/

new Vue({
    el: "#app",
    data: {
      slidesList: slides,
      // Rappresenta l'indice dell'immagine attualmente visualizzata
      currentIndex: 0,
    },
    methods: {
      changeActiveImg(direction) {
        if (direction === "next") {
          // Incremento l'indice.
          // Controllo se l'indice scritto è valido
          this.currentIndex++;
  
          if (this.currentIndex >= this.slidesList.length) {
            this.currentIndex = 0;
          }
        } else if (direction === "prev") {
          this.currentIndex--;
  
          if (this.currentIndex < 0) {
            this.currentIndex = this.slidesList.length - 1;
          }
        }
      },
    },
  });