const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel(process.env.MODEL_URL='https://storage.googleapis.com/submission-mgce-aridwi/model-in-prod/model.json');
}
module.exports = loadModel;