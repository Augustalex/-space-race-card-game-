<template>
    <div class="hand">
        <template >
            <CardHolder v-for="card in hand" :key="card.id"/>
        </template>
    </div>
</template>
<script>
    import {createNamespacedHelpers} from 'vuex';
    import CardHolder from "@/CardHolder"

    const mainStoreHelpers = createNamespacedHelpers('main');

    export default {
        name: 'Hand',
        components: {CardHolder},
        props: {
            playerName: String
        },
        computed: {
            ...mainStoreHelpers.mapState([
                'handByPlayer'
            ]),
            hand() {
                // return this.$store.state.main.handByPlayer[this.playerName]
                return this.handByPlayer[this.playerName]
            }
        },
        state: {

        }
    }
</script>
<style scoped>
    .hand {
        display: flex;
        justify-content: space-between;
    }
</style>