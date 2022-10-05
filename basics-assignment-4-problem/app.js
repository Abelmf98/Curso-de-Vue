const app = Vue.createApp({
    data(){
        return{
            userInput: '',
            parrafoVisible: true,
            inputBackgroundColor:''
        };
    },
    computed: {
        paraClasses(){
            return{
                user1: this.userInput === 'user1',
                user2: this.userInput === 'user2',
                visible: this.parrafoVisible,
                hidden: !this.parrafoVisible
            };
        },
    },
    methods: {
       aparrafoVisible(){
        this.parrafoVisible = !this.parrafoVisible;
       }
    }
});

app.mount('#assignment');