// Name: Abigail Barrientos
// App Name: twoway.js (Figure 12. The code of the JS file, twoway.js)
// Description: twoway.js that will interpolate the message from the html parameters.

const TwoWayBinding = {
    //Create functions, data
    data(){
        return {
            message: 'Hello Vue!'
        }
    }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')