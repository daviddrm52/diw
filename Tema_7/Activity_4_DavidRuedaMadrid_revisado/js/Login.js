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
            if(this.email === '' || this.password === ''){
                //document.getElementById("errorMessage").innerHTML = "There are inputs empty!";
                this.errorMessage = "There are inputs empty!";
            } else {
                if(this.email === localStorage.key(this.email)){
                    if(this.password === JSON.parse(localStorage.getItem(this.email)).password){
                        localStorage.setItem("user_logged", JSON.parse(localStorage.getItem(this.email)).nickname);
                        this.$router.push("/products");
                        this.$emit("updateuserlogged");
                        //console.log(JSON.parse(localStorage.getItem(this.email)).nickname);
                        //console.log(this.$emit("updateuserlogged"));
                    }                    
                } else {
                    //document.getElementById("errorMessage").innerHTML = "The email or the password are not correct!";
                    this.errorMessage = "The email or the password are not correct!";
                }
            }
        }  
    },
    template: `
    <div class="log-in">
        <form>
            <h2> Log-in </h2>
            <input type="email" v-model="email" id="emailLogin" placeholder="Email">
            <input type="password" v-model="password" id="passwordLogin" placeholder="Password" autocomplete="on">
            <div id="errorMessage">{{errorMessage}}</div>
            <button class="form-btn" @click="logInUser"><h4>Log-in</h4></button>
        </form>
    </div>
    `,
}