export default {
    name: 'componentHeader',
    props: ['logOutButton', 'signUpButton', 'logInButton'],
    template: `
    <div class="header">
        <nav>
            <ul>
                <li class="left"><h1><a href="./index.html">SCP Items shop</a></h1></li>
                <li><a> <h3>Log-out</h3> </a></li>
                <li><a @click="$emit('showSignUpForm')"> <h3>Sign-up</h3> </a></li>
                <li><a @click="$emit('showLogInForm')"> <h3>Log-in</h3> </a></li>
                <h3 id="userWelcome"> </h3>
            </ul>
        </nav>
    </div>
    `,
}