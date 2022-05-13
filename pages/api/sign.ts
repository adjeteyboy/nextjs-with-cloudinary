import { NextApiRequest, NextApiResponse } from 'next';
import { signUploadForm } from '../../modules/signUploadForm';
import { v2 as cloudinary } from 'cloudinary'
import { myConfig } from '../../config';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {

    const cloudName = cloudinary.config().cloud_name;
    const apiKey = cloudinary.config().api_key;

    myConfig

    const sig = signUploadForm()

    res.json({
      folder: sig.folder,
      signature: sig.signature,
      timestamp: sig.timestamp,
      cloudname: cloudName,
      apikey: apiKey,
      eager: sig.eager
    });

  } catch (error) {
    console.log('error when signin', error)
  }
}