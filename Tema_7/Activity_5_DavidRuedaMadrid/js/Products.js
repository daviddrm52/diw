export default {
    name: 'componentProducts',
    data () {
        return {
            products: products
        }
    },
    template: `
        <div class="items">
            <div v-for="item in products" v-bind:item="item" class="scpObject">
                <h1>{{item.product}}</h1>
                <img class="images" :src="item.picture">
                <h2>Price: {{item.price}} €</h2>
                <h3>Items in stock: {{item.stock}}</h3>
                <ul>
                    <h4><i>Tags: <h5 v-for="tag in item.tags">{{tag}}</h5> </i></h4>
                </ul>
            </div>
        </div>
    `,
}