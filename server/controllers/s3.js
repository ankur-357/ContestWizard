const AWS = require('aws-sdk');
const asyncHandler = require('express-async-handler');
const dotenv = require("dotenv");
dotenv.config();
AWS.config.update({
  accessKeyId: process.env.AWS_IACCESS_KEY,
  secretAccessKey: process.env.AWS_ISECRET_KEY,
  region: process.env.AWS_BUCKET_REGION,
});

exports.uploadImage = asyncHandler(async (req, res, next) => {
  const files = req.files;
  const urlArray = [];

  if (files) {
    const s3 = new AWS.S3();

    for (const file of files) {
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Body: file.buffer,
        Key: `${req.user.id}/${file.originalname}`,
        ACL: 'public-read',
      };

      try {
        console.log('Before S3 upload:', params);
        const data = await s3.upload(params).promise();
        console.log('After S3 upload:', data);
        urlArray.push(data.Location);
      } catch (err) {
        console.error(err);
        return res.status(400).json({ error: 'Image upload failed' });
      }
    }

    res.status(200).json({
      success: {
        message: 'Your design images have been uploaded successfully',
        urlArray,
      },
    });
  } else {
    res.status(400).json({ error: 'No files to upload' });
  }
});
