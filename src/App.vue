<template>
    <div id="app">
        <div class="space area">
        </div>
        <div class="rockets area">
            <Rocket/>
            <Rocket/>
        </div>
        <div class="drafting area">
            <div class="scrapyard">
                <CardHolder/>
            </div>
            <div class="drawPile">
                <CardHolder/>
            </div>
            <div class="draftingTable">
                <div class="draftingTable-top">
                    <CardHolder/>
                    <CardHolder/>
                    <CardHolder/>
                </div>
                <div class="draftingTable-bottom">
                    <CardHolder/>
                    <CardHolder/>
                    <CardHolder/>
                </div>
            </div>
        </div>
        <div class="hands area">
            <Hand
                    v-for="player in players"
                    :key="player.name"
                    :player-name="player.name"
            />
        </div>
    </div>
</template>

<script>
    import CardHolder from "@/CardHolder";
    import Rocket from "@/Rocket";
    import Hand from "@/Hand";


    export default {
        name: 'App',
        components: {
            Hand,
            Rocket,
            CardHolder
        },
        computed: {
            // ...mainStoreHelpers.mapState([
            //     'players'
            // ]),
            players() {
                // console.log('this.$store.state', this.$store.state);
                console.log(this.$store);
                return this.$store.state.main.players;
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px auto 0 auto;
        width: 800px;
    }

    .area {
        margin: 16px;
    }

    .rockets {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .drafting {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }

    .draftingTable {
        display: flex;
        flex-direction: column;
    }

    .draftingTable-top {
        display: flex;
        justify-content: space-between;
    }

    .draftingTable-bottom {
        display: flex;
        justify-content: space-between;
    }

    .hands {
        display: flex;
        justify-content: space-between;
    }
</style>
