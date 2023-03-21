//Almacen para los usuarios

const store = Pinia.defineStore('counter', {
    state: () => {
        return {
            count: 0
        }
    },
    getters: {

    },
    actions: {
        increment() {
            this.count++
        },
    },
});

export default store;