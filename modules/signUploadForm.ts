import { v2 as cloudinary } from 'cloudinary'
import { myConfig } from '../config'

const apiSecret = cloudinary.config().api_secret as string;

export const signUploadForm = () => {
  const timestamp = Math.round((new Date).getTime() / 1000);
  const eager = 'e_blur:400,h_100,w_100|c_fill,h_200,w_200|c_fill,h_800,w_800'
  const folder = process.env.CLOUDINARY_FOLDER;

  const signature = cloudinary.utils.api_sign_request({
    timestamp,
    eager,
    folder
  }, apiSecret);

  return { timestamp, signature, eager, folder }
}
