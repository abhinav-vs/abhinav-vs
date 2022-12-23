const axios = require('axios');

/**
 * Sends asynchronous message into Google Chat
 * @return{obj} response
 */

const gChatWebhook = async () => {
  const webhookURL = 'https://chat.googleapis.com/v1/spaces/AAAAXY68114/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=qZruEL7Va4fJGvY5zhMwNcTFmTmRhEsQ9CNQyiH3wy8%3D';
  try {
    const data = JSON.stringify({
      'text': 'Hello from a Node script!',
    });
    const response = await axios(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      data: data,
    });
    console.log("gChatWebhook: response:: ", response);
    return response;
  } catch (err) {
    console.log("gChatWebhook: err: ", err);
  }
}
gChatWebhook();
