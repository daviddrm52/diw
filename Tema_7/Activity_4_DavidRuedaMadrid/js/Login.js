export default {
    name: 'componentLogin',
    props: ['userlogged'],
    emits: ['updateuserlogged'],
    data() {
        return{
            email: '',
            password: '',
            errorMessage: ''
        }
    },
    methods: {
        logInUser: function(e){
            e.preventDefault();
            if(this.email != '' || this.password != ''){                
                var registedPassword = JSON.parse(localStorage.getItem(this.email)).password;
                var registredEmail = JSON.parse(localStorage.getItem(this.email)).email;
                
                console.log(this.email);
                console.log(this.password);
                console.log(registredEmail);
                console.log(registedPassword);

                if(this.email === registredEmail){
                    if(this.password === registedPassword){
                        localStorage.setItem("user_logged", JSON.parse(localStorage.getItem(this.email)).nickname);
                        this.$router.push("/products");
                        this.$emit("updateuserlogged");
                    }                    
                } else {
                     this.errorMessage = "The email or the password are not correct!";
                }
            } else {
                this.errorMessage = "There are inputs empty!";

                //TODO: fixear el login, si no es posible, cambiar estructura del localStorage


                // var passwordLocalStorage = JSON.parse(localStorage.getItem(this.email)).password;
                // console.log(passwordLocalStorage);
                // var emailLocalStorage = localStorage.key(this.email);
                // console.log(emailLocalStorage);
                // console.log(this.email);

                // var bol;
                // if(this.email == emailLocalStorage){
                //     bol = true;
                //     console.log(bol);
                // } else {
                //     bol = false;
                //     console.log(bol);
                // };

                // if(this.email === localStorage.key(this.email)){
                //     if(this.password === passwordLocalStorage){
                //         localStorage.setItem("user_logged", JSON.parse(localStorage.getItem(this.email)).nickname);
                //         this.$router.push("/products");
                //         this.$emit("updateuserlogged");
                //     }                    
                // } else {
                //     this.errorMessage = "The email or the password are not correct!";
                // }
            }
        }  
    },
    template: `
    <div class="log-in">
        <form>
            <h2> Log-in </h2>
            <input type="email" v-model="email" id="emailLogin" placeholder="Email">
            <div id="errorMessage"></div>
            <input type="password" v-model="password" id="passwordLogin" placeholder="Password" autocomplete="on">
            <div id="errorMessage">{{errorMessage}}</div>
            <button class="form-btn" @click="logInUser"><h4>Log-in</h4></button>
        </form>
    </div>
    `,
}