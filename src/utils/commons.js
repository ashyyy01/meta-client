import Vue from 'vue';

Vue.mixin({
    methods: {
        showSuccess(data) {
            this.$buefy.snackbar.open({
                type: "is-success",
                duration: 2000,
                position: 'is-top',
                message: data
            })
        },
        showError(data) {
            this.$buefy.snackbar.open({
                type: "is-danger",
                duration: 2000,
                position: 'is-top',
                message: data
            })
        }

    }
})