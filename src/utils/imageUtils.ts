
import { removeBackground, loadImage } from './backgroundRemoval';

export const processLogoImage = async (imageUrl: string): Promise<string> => {
  try {
    // Load the image
    const response = await fetch(imageUrl);
    const imageBlob = await response.blob();
    const image = await loadImage(imageBlob);
    
    // Remove background
    const processedBlob = await removeBackground(image);
    
    // Convert to data URL
    return URL.createObjectURL(processedBlob);
  } catch (error) {
    console.error('Error processing logo:', error);
    return imageUrl; // Return original URL if processing fails
  }
};
