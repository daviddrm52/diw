export default {
    name: 'componentHeader',
    emits: [],
    methods: {
        goToLogin: function(){
            this.$router.push("/login");
        },
        goToSignUp: function(){
            this.$router.push("/sign-up");
        },
        gotToLogOut: function(){
            localStorage.clear("user_logged");
            this.$router.push("/login");
        },
        verifing_user: function(){
            let user = localStorage.getItem("user_logged");
            //console.log(user);
            if(user != null){
                document.getElementById("user_info").innerHTML = "Welcome " + user + "!";
            } else {
                document.getElementById("user_info").innerHTML = "";
            }
        }
    },
    mounted() {
        this.verifing_user();
    },
    template: `
    <div class="header">
        <nav>
            <ul>
                <li class="left"><h1><a href="./index.html">SCP Items shop</a></h1></li>
                <li class="left"><h3 id="user_info"> </h3></li>
                <li><a @click="goToLogOut"> <h3>Log-out</h3> </a></li>
                <li><a @click="goToSignUp"> <h3>Sign-up</h3> </a></li>
                <li><a @click="goToLogin"> <h3>Log-in</h3> </a></li>
            </ul>
        </nav>
    </div>
    `,
}