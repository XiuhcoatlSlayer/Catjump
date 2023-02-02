module.exports = {
    name: `ready`,
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}!`);

        //Setting user activity
        client.user.setActivity(`with kittens!`, { type: 'PLAYING' });
    }
};