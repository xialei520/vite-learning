<template>
    <header>{{ title }}{{ store.name }}</header>
    <ul class="list">
        <li
            class="list-item"
            :class="{ active: isActive === index }"
            v-for="(item, index) in list"
            @click="onClick(item)"
        >
            {{ item.name }}
        </li>
    </ul>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "@/store";
import { useRouter } from "vue-router";
const router = useRouter();

const store = useStore();

const { title } = defineProps({
    title: {
        type: String,
        default: ""
    }
});

const emit = defineEmits(["tabChange"]);

const list = ref([
    {
        name: "首页",
        path: "/",
        index: 0
    },
    {
        name: "Demo",
        path: "/demo",
        index: 1
    },
    {
        name: "Help",
        path: "/help",
        index: 2
    }
]);
const isActive = ref(0);

const onClick = ({ path, index }) => {
    if (isActive.value === index) return;
    isActive.value = index;
    emit("tabChange", index);
    router.push({
        path
    });
    console.log("日志输出", index);
};
</script>
<style lang="less">
header {
    height: 50px;
    text-align: left;
    line-height: 50px;
    font-size: 30px;
    font-weight: 800;
    color: orange;
}
.list {
    display: flex;
    .list-item {
        width: 100px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        list-style: none;
    }
    .active {
        border-bottom: 2px solid red;
    }
}
</style>
