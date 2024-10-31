<template>
    <Header title="在线Learning" @tab-change="onTabChange"></Header>
    <router-view />
</template>
<script setup>
import Header from "@/components/Header";

/**
 * Header组件change事件
 * @param index
 */
const onTabChange = (index) => {
    console.log("Header组件index改变", index);
};
</script>
