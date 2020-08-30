function MainStore({
    players = [{name: 'August'}, {name: 'Kiran'}]
} = {}) {
    return {
        namespaced: true,
        state: {
            players: players.slice(),
            handByPlayer: initialHands(players)
        },
        getters: {},
        actions: {}
    };
}

MainStore.moduleName = 'main';

export default MainStore;

function initialHands(players) {
    const handByPlayer = {};
    players.forEach(player => {
        const getRandomId = () => Math.round(Math.random() * 9999).toString();
        handByPlayer[player.name] = [{id: getRandomId()}, {id: getRandomId()}];
    });

    return handByPlayer;
}