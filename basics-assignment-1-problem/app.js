const app = Vue.createApp({
    data(){
        return{
            name: 'Abel',
            age: 24,
            img: 'https://cms.rootstack.com/sites/default/files/inline-images/Vue%2520JS.png'
        }
    },
    methods:{
        edadSumada(){
            return this.age + 5
        },

        numRandom(){
            var random = Math.random()
            return random.toFixed()
        }

    }
});

app.mount('#assignment');