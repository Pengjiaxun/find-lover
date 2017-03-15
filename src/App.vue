<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'app'
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.mint-cell {
    min-height: 44px!important;
}

.mint-cell-title {
    text-align: left;
}

.mint-cell-text {
    font-size: 0.8rem;
}

.mint-field-core {
    font-size: 0.8rem!important;
}

.options-box {
    width: 100%;
}

.picker-items {
    background-color: #f0eff5;
}

.picker-toolbar {
    height: auto!important;
}
</style>
