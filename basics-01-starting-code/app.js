const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finalizar el curso y aprender Vue!',
            courseGoalB: 'Master Vue y construir app impresionantes!',
            vueLink:  'https://vuejs.org/'
        };
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return courseGoalA;
            }else{
                return courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');