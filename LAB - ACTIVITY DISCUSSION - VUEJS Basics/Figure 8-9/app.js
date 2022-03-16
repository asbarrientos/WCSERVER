// Name: Abigail Barrientos
// App Name: app.js (Figure 9 The JS File)
// Description: new version of app.js that will interpolate the following title, author, and age from the html parameters.

const app = Vue.createApp({
    //Create functions, data
    data(){
        return {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J. K. Rowling',
        age: 57
        }
    }
});

app.mount('#app')