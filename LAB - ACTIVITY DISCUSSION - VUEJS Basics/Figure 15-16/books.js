// Name: Abigail Barrientos
// App Name: books.js (Figure 16. The JS code embedded in the books.js file.)
// Description: books.js that will interpolate the message from the html parameters.

const books = Vue.createApp ({
    //Create functions, data
    data(){
        return {
            showBooks: true,
            btitle: 'Harry Potter and the Goblet of Fire',
            bauthor: 'J. K. Rowling',
            year: 2005
        }
    },
methods:{
    toggleShowBooks(){
        this.showBooks = !this.showBooks
    }
}
});

books.mount('#books')