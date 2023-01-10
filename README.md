# Agenda
1. Introduce yourself
2. Give me an example of situation when you were confident about technical solution decision you’ve made, but it ends up being incorrect
were there any learnings from this situation?
3. Today's task is to get a feel of familiarity of React, React patterns as well ability to communicate with team when expectations are set but aren’t particularly clear.
4. We don't expect you to finish the task, but we do expect you to be able to explain your thought process and what you would do next.
5. We will be asking you to explain your code and thought process, so please be prepared to do so.

# Task
Build a chat app where a user should be able to join a channel and send messages to other users in the channel as well as see messages from other users in the channel.

### Events

1. "add user" -> send string -> broadcast to all users "login" with {numUsers: number} and "user joined" with {username: string, numUsers: number}
2. "new message" -> send string -> broadcast to all users "new message" with {username: string, message: string}
3. "typing" -> send string -> broadcast to all users "typing" with {username: string}
4. "stop typing" -> send string -> broadcast to all users "stop typing" with {username: string}
5. "disconnect" -> send string -> broadcast to all users "user left with {username: string, numUsers: number}