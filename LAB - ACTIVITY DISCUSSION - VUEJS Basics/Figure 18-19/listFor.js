// Name: Abigail Barrientos
// App Name: listFor.js (Figure 19.  JS code using v-for)
// Description: listFor.js that will interpolate the message from the html parameters.

const ListRendering = {
    //Create functions, data
    data() {
        return {
            todos: [
                { text: 'Clean the House'},
                { text: 'Prepare Breakfast'},
                { text: 'Attend WCSERVER class'}
            ]

        }
    }
}

Vue.createApp(ListRendering).mount('#list-rendering')