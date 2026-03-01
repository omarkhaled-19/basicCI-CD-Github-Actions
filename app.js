const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const dotenv = require('dotenv');
dotenv.config();
const s3Client = new S3Client({
  region: "us-east-1",
  endpoint: process.env.AWS_ENDPOINT_URL || undefined,
  forcePathStyle: true, // Necessary for LocalStack
});

async function uploadFile() {
  const params = {
    Bucket: "my-test-bucket",
    Key: "test-file.txt",
    Body: "Hello from the DevOps Pipeline!",
  };

  try {
    const data = await s3Client.send(new PutObjectCommand(params));
    console.log("Success! File uploaded.");
    console.log("A new change has been made to the app.js file.");
  } catch (err) {
    console.error("Error", err);
  }
}

uploadFile();