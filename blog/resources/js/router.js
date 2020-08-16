import VueRouter from 'vue-router';

import Calculate from './components/CalculateComponent';

export default new VueRouter({
    routes : [
        {
            path: '/calculate',
            component : Calculate
        }
    ],
    mode: 'history'

});