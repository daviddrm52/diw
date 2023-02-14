export default {
    name: 'Integer',
    props: ['int'],
    template :
    `
    <div>
        <h1> List of numbers </h1>
        <button @click="$emit('infoInteger')">  </button>
    </div>
    `,
}