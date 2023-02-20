export default {
    name: 'componentHeader',
    props: [],
    template: `
    <div class="header">
        <nav>
            <ul>
                <li class="left"><h1><a href="./index.html">SCP Items shop</a></h1></li>
                <li><button v-on:click="showSignUpForm"> <h4>Sign-up</h4> </button></li>
                <li><button v-on:click="showLogInForm"> <h4>Log-in</h4> </button></li>
                <h3 id="userWelcome"> </h3>
            </ul>
        </nav>
    </div>
    `,
}