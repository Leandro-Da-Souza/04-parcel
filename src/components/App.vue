<template>
    <div>
        <h1>App Component displays {{ value }}</h1>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            value: 'Hello World',
        };
    },
};
</script>

<style></style>
