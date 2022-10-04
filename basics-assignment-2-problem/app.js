const app = Vue.createApp({
    data(){
        return{
            nombre:'',
            nombre2:'',
            mostrar: ''
        }
    },
    methods:{
       enviarAlerta(){
        alert('Enviado!');
       },

       addNombre(event){
        this.nombre = event.target.value;
       },

       addNombre2(event){
        this.nombre2 = event.target.value;
       },

       pulsarEnter(){
        this.mostrar = this.nombre2;
       }
    }
});

app.mount('#assignment');