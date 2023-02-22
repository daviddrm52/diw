export default {
    name: 'componentSignup',
    data() {
        return {
            email: '',
            nickname: '',
            password: '',
            confirmPassword: '',
        }
    },
    methods: {
        signUpUser: function(e){
            if (this.email === '' || this.nickname === '' || this.password === '' || this.confirmPassword === '') {
                document.getElementById("errorMessage").innerHTML = "There are inputs empty!";
            } else {
                if(this.password === this.confirmPassword){
                    var user = {nickname: this.nickname, password: this.password}
                    localStorage.setItem(this.email, JSON.stringify(user));
                    document.getElementById("errorMessage").innerHTML = "";
                    e.preventDefault();
                    this.signup = false;
                    this.login = false;
                    this.objects = true;
                    console.log(localStorage.getItem(this.email));
                    //document.getElementById("userWelcome").innerHTML = "Welcome "+ JSON.parse(localStorage.getItem(this.email)).nickname+"!";

                } else {
                    document.getElementById("errorMessage").innerHTML = "The two passwords don't match!";
                    e.preventDefault();
                }
            };
        },
    },
    template: `
    <div class="sign-up">
        <form autocomplete="off">
            <h2> Sign-up </h2>
            <input type="email" v-model="email" id="emailSignUp" required placeholder="Email...">
            <input type="text" v-model="nickname" id="nicknameSignUp" required placeholder="Nickname...">
            <input type="password" v-model="password" id="passwordSignUp" required placeholder="Password..." autocomplete="on">
            <input type="password" v-model="confirmPassword" id="confirmPasswordSignUp" required placeholder="Confirm password..." autocomplete="on">
            <div id="errorMessage"></div>
            <button class="form-btn" @click="signUpUser"><h4>Sign-up</h4></button>
        </form>
    </div>
    `,
}