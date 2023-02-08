<script setup lang="ts">

</script>

<template>
    <button class="btn btn__block">
        <slot/>
    </button>
</template>

<style scoped lang="scss">
.btn {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 0;
    width: 110px;
    height: 40px;
    border: 1px solid #fff;
    cursor: pointer;
    background: transparent;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #fff; 
}

.btn__block {
    margin: 10px;
}
</style>