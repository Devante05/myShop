const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {

      Bucket: 'plant-user-images-4629f688-052e-4492-8bfa-7227d9ffdc01',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer,
      ACL: 'public-read',
      
    };
  
    return imageParams;
  };

  module.exports = params;