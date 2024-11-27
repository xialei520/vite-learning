import { Vue } from "vue";
import { Button, Select, Loading } from "element-plus";
const install = () => {
    Vue.component(Select.name, Select);

    Vue.use(Button);

    Vue.prototype.$loading = Loading.service;
};

export default install;
