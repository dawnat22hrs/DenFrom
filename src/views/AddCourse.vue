<script setup lang="ts">
import Button from '@/components/Button.vue';
</script>

<template>
    <form class="form">
        <input type="text" placeholder="что-то" class="input__form">

        <Button>Кнопка</Button>
    </form>
</template>

<style scoped lang="scss">
.form {
    margin: 20px;

    .input__form {
        border: 1px solid #fff;
        height: 30px;
        font-size: 20px;
        color: #000;
        background-color: #fff;
    }
}
</style>