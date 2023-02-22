export default {
    name: 'componentLogin',
    data() {
        return{
            email: '',
            password: '',
        }
    },
    methods: {
        logInUser: function(e){
            console.log("Entrado");
            console.log(email);
            if(this.email === '' || this.password === ''){
                document.getElementById("errorMessage").innerHTML = "There are inputs empty!";
            } else {
                if(this.email == localStorage.getItem(this.email)){
                    console.log("email verified");
                    password = JSON.parse(localStorage.getItem(this.email)).nickname;
                    console.log(password);
                    e.preventDefault();
                } else {
                    document.getElementById("errorMessage").innerHTML = "The email or the password are not correct!";
                    e.preventDefault();
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
            <div id="errorMessage"></div>
            <button class="form-btn" @click="logInUser"><h4>Log-in</h4></button>
        </form>
    </div>
    `,
}