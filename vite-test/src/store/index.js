import { defineStore } from "pinia";

const useStore = defineStore("pina", {
    state: () => {
        return {
            name: "个人应用"
        };
    },
    getters: {
        nickName(state) {
            return `@@${state.name}@@`;
        }
    },
    // persist: true
    persist: {
        key: "my-custom-key",
        storage: sessionStorage,
        paths: ["save.me", "saveMeToo"],
        serializer: {
            serialize: (state) => JSON.stringify(state),
            deserialize: (data) => JSON.parse(data)
        },
        beforeRestore: (context) => {
            // 在恢复数据之前执行操作
        },
        afterRestore: (context) => {
            // 在恢复数据之后执行操作
        },
        debug: true
    }
});
export { useStore };
