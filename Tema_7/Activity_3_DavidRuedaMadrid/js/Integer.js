export default {
    name: 'Integer',
    props: {
        value: Number
    },
    methods: {
        selected: function(s){
            this.$emit('selectedNumInter', s);
        }
    },
    template :
    `
    <div>
        <button @click="selectedNumInter"> {{value}} </button>
    </div>
    `,
}