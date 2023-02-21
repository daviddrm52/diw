export default {
    name: 'componentSignup',
    props: [],
    template: `
    <div class="sign-up">
        <form>
            <h2> Sign-up </h2>
            <input type="email" v-model="email" id="emailSignUp" required placeholder="Email...">
            <input type="text" v-model="nickname" id="nicknameSignUp" required placeholder="Nickname...">
            <input type="password" v-model="password" id="passwordSignUp" required placeholder="Password...">
            <input type="password" v-model="confirmPassword" id="confirmPasswordSignUp" placeholder="Confirm password...">
            <div id="errorMessage"></div>
            <button class="form-btn" @click="signUpUser"><h4>Sign-up</h4></button>
        </form>
    </div>
    `,
}