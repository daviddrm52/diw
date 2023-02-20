export default {
    name: 'componentLogin',
    props: [],
    template: `
    <div class="log-in" v-show="login">
        <form>
            <h2> Log-in </h2>
            <input type="email" v-model="email" id="emailLogin" placeholder="Email">
            <input type="password" v-model="password" id="passwordLogin" placeholder="Password">
            <div id="errorMessage"></div>
            <button class="form-btn" @click="logInUser"><h4>Log-in</h4></button>
        </form>
    </div>
    `,
}