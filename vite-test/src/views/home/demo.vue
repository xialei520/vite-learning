<template>
    <div>demo</div>
    <div>{{ count }}</div>
    <div>计算属性：{{ plusOne }}</div>
    <button @click="plus">+1</button>
</template>
<script setup>
import { ref, computed, watch, onMounted, onUnmounted, onBeforeUnmount } from "vue";
import { useStore } from "@/store";
const count = ref(10);
const plusOne = computed(() => count.value + 1);

const store = useStore();
const plus = () => {
    count.value++;
    store.name = "123";
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
