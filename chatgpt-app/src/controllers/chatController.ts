class ChatController {
    private messages: Array<{ user: string; message: string }> = [];

    sendMessage(user: string, message: string) {
        this.messages.push({ user, message });
        return { user, message };
    }

    receiveMessages() {
        return this.messages;
    }
}

export default ChatController;