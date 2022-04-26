import Vue from 'vue'
import http from './http-common'
Vue.mixin({
    methods: {
        getPrice() {
            console.log("called")
            return http({
                method: 'GET',
                url: '/v1/bpi/currentprice.json',
            })
        }
    }
})