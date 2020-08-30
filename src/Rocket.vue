<template>
    <div class="rocket">
        <CardHolder/>
        <CardHolder/>
        <CardHolder/>
    </div>
</template>
<script>
    import CardHolder from "@/CardHolder"

    export default {
        name: 'Rocket',
        components: {CardHolder}
    }
</script>
<style scoped>
    .rocket {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>