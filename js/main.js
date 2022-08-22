var app = new Vue ({
    el: '#app',
    data:{
        emailGenerate:null,
        arrayEmail:[]
    },


    mounted(){

        for(let i=0; i< 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.emailGenerate=response.data.response;
                this.arrayEmail.push(this.emailGenerate)
                this.emailGenerate=''
            })
        }
    }




})