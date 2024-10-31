<template>
    <div>{{ count }}</div>
    <div>计算属性：{{ plusOne }}</div>
    <button @click="plus">+1</button>
    <router-view />
</template>
<script setup>
import { ref, computed, watch, onMounted, onUnmounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const count = ref(10);
const plusOne = computed(() => count.value + 1);

const plus = () => {
    console.log("日志输出", "kkk");
    count.value++;

    router.push("/");
};
watch(count, (newVal, preVal) => {
    console.log("newVal", newVal);
    console.log("preVal", preVal);
});
onMounted(() => {
    console.log("已挂载");
});
onBeforeUnmount(() => {
    console.log("卸载之前");
});
onUnmounted(() => {
    console.log("已卸载");
});
</script>
