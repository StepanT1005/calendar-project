'use strict'

export default function createMessenger () {
    let message = 'Just learn it';
    let sender = 'Gromcode';
    function sendMessage (name) {
        console.log(`${name}, ${message}! Your ${sender}`)
    };
    function setMessage (text) {
        message = text;
    };
    function setSender (senderName){
        sender = senderName;
    };
    return {
        sendMessage,
        setMessage,
        setSender,
    }
}

const messenger1 = createMessenger();
messenger1.sendMessage('Bob');
messenger1.setMessage('Good job');
messenger1.setSender('Stalin');
messenger1.sendMessage('Bob');

