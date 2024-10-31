import { defineStore } from "pinia";

const useStore = defineStore("pina", {
    state: () => {
        return {
            name: "个人应用"
        };
    }
});
export { useStore };
