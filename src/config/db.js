const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
/**
 * AWS configuration object.
 * @typedef {Object} DynamoDBClientConfig
 * @property {string} accessKeyId - AWS access key ID.
 * @property {string} secretAccessKey - AWS secret access key.
 * @property {string} region - AWS region.
 */
const config = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
};
/**
 * DynamoDB client instance
 * @type {import('@aws-sdk/client-dynamodb').DynamoDBClient}
 * @param {DynamoDBClientConfig} config - Configuration object for DynamoDB client.
 */
const client = new DynamoDBClient(config);

module.exports = client;