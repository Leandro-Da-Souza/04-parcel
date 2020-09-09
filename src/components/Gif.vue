<template>
    <div>
        <div class="oneB">Gif Component {{ value }}</div>
        <div class="oneC"></div>
    </div>
</template>

<script>
export default {
    name: 'Gif',
    data() {
        return {
            value: '',
        };
    },
    methods: {
        envChange() {
            let nodeEnv = process.env.NODE_ENV;
            let element = document.querySelector('.oneC');
            element.style.width = '100px';
            element.style.height = '100px';
            console.log(element);
            if (nodeEnv !== 'prod') {
                element.innerHTML = `<p>${nodeEnv}</p>`;
            } else {
                let img = 'https://placekitten.com/100/100';
                //
                console.log(img);
                element.style.backgroundImage = `url('${img}')`;
            }
        },
    },
    created() {
        this.value = process.env.NODE_ENV;
    },
    mounted() {
        this.envChange();
    },
};
</script>

<style></style>
