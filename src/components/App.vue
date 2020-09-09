<template>
    <div>
        <h1>App Component displays {{ value }}</h1>
        <Gif />
    </div>
</template>

<script>
import Gif from './Gif';
export default {
    name: 'App',
    data() {
        return {
            value: 'Hello World',
        };
    },
    components: {
        Gif,
    },
};
</script>

<style></style>
