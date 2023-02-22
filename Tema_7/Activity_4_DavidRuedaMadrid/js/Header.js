export default {
    name: 'componentHeader',
    emits: ['goToSignUp'],
    methods: {
        goToLogin: function(){
            this.$router.push("/login");
        },
        goToSignUp: function(){
            this.$router.push("/sign-up");
        }
    },
    template: `
    <div class="header">
        <nav>
            <ul>
                <li class="left"><h1><a href="./index.html">SCP Items shop</a></h1></li>
                <li><a @click="$emit('')"> <h3>Log-out</h3> </a></li>
                <li><a @click="goToSignUp"> <h3>Sign-up</h3> </a></li>
                <li><a @click="goToLogin"> <h3>Log-in</h3> </a></li>
            </ul>
        </nav>
    </div>
    `,
}