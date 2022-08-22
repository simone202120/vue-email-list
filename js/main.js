var app = new Vue ({
    el: '#app',
    data:{
        emailGenerate:null,
        arrayEmail:[]
    },


    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

        for(let i=0; i< 10; i++){
            .then(response => {
                this.emailGenerate=response.data.response;
            })
        }
    }




})