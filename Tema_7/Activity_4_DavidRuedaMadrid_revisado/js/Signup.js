export default {
    name: 'componentSignup',
    props: ['userlogged'],
    emits: ['updateuserlogged'],
    data() {
        return {
            email: '',
            nickname: '',
            password: '',
            confirmPassword: '',
            errorMessage: ''
        }
    },
    methods: {
        signUpUser: function(e){
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            e.preventDefault();
            if (this.email === '' || this.nickname === '' || this.password === '' || this.confirmPassword === '') {
                //document.getElementById("errorMessage").innerHTML = "There are inputs empty!";
                this.errorMessage = "There are inputs empty!";
            } else if (this.email.match(validRegex)) {
                if(this.password === this.confirmPassword){
                    var user = {nickname: this.nickname, password: this.password}
                    localStorage.setItem(this.email, JSON.stringify(user));
                    //document.getElementById("errorMessage").innerHTML = "";
                    this.errorMessage = "";
                    //Añadir localStorage para ver si hay un usuario logeado
                    localStorage.setItem("user_logged", this.nickname);
                    this.$router.push("/products");
                    this.$emit("updateuserlogged")
                } else {
                  this.errorMessage = "The two passwords don't match!";
                    //document.getElementById("errorMessage").innerHTML = "The two passwords don't match!";
                }
            } else {
                this.errorMessage = "There are inputs that are incorrect!"
            };
        },
    },
    template: `
    <div class="sign-up">
        <form>
            <h2> Sign-up </h2>
            <input type="email" v-model="email" id="emailSignUp" required placeholder="Email...">
            <input type="text" v-model="nickname" id="nicknameSignUp" required placeholder="Nickname...">
            <input type="password" v-model="password" id="passwordSignUp" required placeholder="Password..." autocomplete="on">
            <input type="password" v-model="confirmPassword" id="confirmPasswordSignUp" required placeholder="Confirm password..." autocomplete="on">
            <div id="errorMessage">{{errorMessage}}</div>
            <button class="form-btn" @click="signUpUser"><h4>Sign-up</h4></button>
        </form>
    </div>
    `,
}