# Task
We don't expect you to finish the task, but we do expect you to be able to explain your thought process and what you would do next.

Build a chat app where a user should be able to join a channel and send messages to other users in the channel as well as see messages from other users in the channel.

- a user should be able to join a channel with a username
- a user should be able to send messages to other users in the channel
- a user should be able to see messages from other users in the channel
- a user should be able to scroll up to see older messages (only those after joining the channel)

Nice to have:
- a user should be able to see a list of users in the channel
- a user should be able to see when other users join or leave the channel
- a user should be able to see when other users are typing
- a user should be able to distinguish between their own messages and other users’ messages
- a user should be able to distinguish between their own typing indicator and other users’ typing indicators
- a user should be able to see an error message if something goes wrong when sending a message
- a user should be able to see an error message if something goes wrong when joining a channel
- a user should be able to see an error message if something goes wrong when leaving a channel
- a user should be able to see an error message if something goes wrong when typing

### Events
## socket.emit
1. socket.emit('add user', <string>)
2. socket.emit('new message', <string>)
3. socket.emit('typing')
4. socket.emit('stop typing')

## socket.on
1. socket.on('user joined', {userName: <string>, numUsers: <number>})
2. socket.on('login', {numUsers: <number>})
3. socket.on('user left', {userName: <string>, numUsers: <number>})
4. socket.on('new message', {userName: <string>, message: <string>, numUsers: <number>})
5. socket.on('typing', {userName: <string>})
6. socket.on('stop typing', {userName: <string>})
7. socket.on('disconnect')