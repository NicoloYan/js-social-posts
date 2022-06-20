// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// Milestone 1

// Creo l'array di oggetti

let postsArray = [

    {
        id: 1,
        name: 'Joe Larson',
        author_picture: 'https://unsplash.it/300/300?image=<1>',
        date: 06/20/2022,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        post_picture: 'https://unsplash.it/300/300?image=<2>',
        likes: 34
    },
    {
        id: 2,
        name: 'Lara Field',
        author_picture: 'https://unsplash.it/300/300?image=<3>',
        date: 05/20/2022,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        post_picture: 'https://unsplash.it/300/300?image=<4>',
        likes: 51
    },
    {
        id: 3,
        name: 'Serena Obrien',
        author_picture: 'https://unsplash.it/300/300?image=<5>',
        date: 04/20/2022,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        post_picture: null,
        likes: 15
    },
    {
        id: 4,
        name: 'Dennis Schneider',
        author_picture: 'https://unsplash.it/300/300?image=<7>',
        date: 03/20/2022,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        post_picture: 'https://unsplash.it/300/300?image=<8>',
        likes: 134
    }
]
