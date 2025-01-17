import { Router } from 'express';
import ChatController from '../controllers/chatController';

const router = Router();
const chatController = new ChatController();

export function setChatRoutes(app) {
    app.use('/chat', router);

    router.post('/send', chatController.sendMessage.bind(chatController));
    router.post('/receive', chatController.receiveMessage.bind(chatController));
}