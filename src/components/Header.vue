<template>
    <header class="header">
        <g-link :to="{ name: 'home' }" class="circle-button">
            <g-image alt="Example image" src="~/svgs/KR-Logo-FINAL.svg" width="30" />
        </g-link>
        <button class="circle-button" id="triggerNav" @click="toggleNav()">...</button>
        <nav class="nav">
            <g-link class="nav__link" :to="{ name: 'home' }">Home</g-link>
            <g-link class="nav__link" :to="{ name: 'about' }">About</g-link>
        </nav>
    </header>
</template>

<static-query>
query {
    metaData {
        siteName
    }
}
</static-query>

<script>
export default {
    name: 'Header',
    methods: {
        toggleNav: function () {
            console.log('clicked')
        }
    },
}
</script>

<style lang="scss" scoped>
.circle-button {
    cursor: pointer;
    border: none;
    outline: none;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: whitesmoke;
    border-radius: 50%;

    transition: transform 350ms, box-shadow 350ms;
    transform: translateY(0);
    box-shadow: 0 2px 5px -2px transparentize($color: #000000, $amount: 0.5);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 7px -2px transparentize($color: #000000, $amount: 0.7);
    }
}
</style>

