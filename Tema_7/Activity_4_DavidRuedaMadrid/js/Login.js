export default {
    name: 'componentLogin',
    props: ['userlogged'],
    emits: ['updateuserlogged'],
    data() {
        return{
            email: '',
            password: '',
            errorMessage: '',
            usersArray: JSON.parse(localStorage.getItem("users"))
        }
    },
    methods: {
        logInUser: function(e){
            e.preventDefault();
            console.log(this.usersArray);
            if(this.email != null || this.password != null){                
                
                var usersData = JSON.parse(localStorage.getItem("users"));
                let mapsEmail = usersData.map(a => a.email);
                let mapsPassword = usersData.map(a => a.password);
                console.log(usersData);
                console.log(mapsEmail);
                console.log(mapsPassword);

                console.log(this.email);
                console.log(this.password);

                if(this.email === mapsEmail){
                    if(this.password === mapsPassword){
                        localStorage.setItem("user_logged", JSON.parse(localStorage.getItem("users")).nickname);
                        this.$router.push("/products");
                        this.$emit("updateuserlogged");
                    }                    
                } else {
                     this.errorMessage = "The email or the password are not correct!";
                }
            } else {
                this.errorMessage = "There are inputs empty!";
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