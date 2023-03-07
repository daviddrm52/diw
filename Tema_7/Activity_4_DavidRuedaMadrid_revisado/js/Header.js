export default {
    name: 'componentHeader',
    props: ['userlogged'],
    emits: ['updateuserlogged'],
    methods: {
        goToLogin: function(){
            this.$router.push("/login");
        },
        goToSignUp: function(){
            this.$router.push("/sign-up");
        },
        goToLogOut: function(){
            localStorage.removeItem("user_logged");
            this.$router.push("/login");
            //Aquí falta hacer un emit para actualizar el valor de userlogged desde el padre:
            //También se podría llamar a verifing_user, en lugar de hacer el this.$router.push aquí
            this.$emit("updateuserlogged");
        },
    },
    template: `
    <div class="header">
        <nav>
            <ul>
                <li class="left"><h1><a href="./index.html">SCP Items shop</a></h1></li>
                <li v-if="userlogged" class="left"><h3 id="user_info">Welcome {{userlogged}} </h3></li>
                <li><a @click="goToLogOut"> <h3>Log-out</h3> </a></li>
                <li><a @click="goToSignUp"> <h3>Sign-up</h3> </a></li>
                <li><a @click="goToLogin"> <h3>Log-in</h3> </a></li>
            </ul>
        </nav>
    </div>
    `,
}