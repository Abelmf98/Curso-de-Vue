const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'',
      confirmedName: '',
      //fullname:'',
      lastName:''
    };
  },
  watch:{
    counter(value){
      if(value>50){
        const that = this;
        setTimeout(function (){
          that.counter = 0;
        }, 2000);
      }
    }
    /* name(value){
      if(value === ''){
        this.fullname = '';  
      } else {
        this.fullname = value + ' ' + this.lastName;
      }
    },
    lastName(value){
      if(value === ''){
        this.fullname = '';  
      } else {
        this.fullname = this.name + ' ' + value;
      }
    } */
  },
  computed: {
    fullname(){
      console.log('Again...');
      if(this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' + this.lastName; 
    }
  },
  methods: {
    outputFullName(){
      /* console.log('Again...');
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Mansilla'; */
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(){
      alert('Submitted!');
    },
    setName(event){
      this.name = event.target.value; 
    },
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');
