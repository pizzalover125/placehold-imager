class placehold_imager {
    static BASE_URL = 'https://picsum.photos';
  
    static random(width, height = width) {
      return `${this.BASE_URL}/${width}/${height}`;
    }
  
    static specific(imageId, width, height = width) {
      return `${this.BASE_URL}/id/${imageId}/${width}/${height}`;
    }
  
    static seed(seed, width, height = width) {
      return `${this.BASE_URL}/seed/${seed}/${width}/${height}`;
    }
  
    static grayscale(url) {
      return `${url}?grayscale`;
    }
  
    static blur(url, blurAmount = 1) {
      return blurAmount > 0 && blurAmount <= 10 
        ? `${url}?blur=${blurAmount}` 
        : `${url}?blur`;
    }
  
    static format(url, format = 'jpg') {
      return format === 'webp' ? `${url}.webp` : `${url}.jpg`;
    }
  
    static preventCache(url) {
      const randomValue = Math.floor(Math.random() * 1000);
      return `${url}${url.includes('?') ? '&' : '?'}random=${randomValue}`;
    }
  
    static async listImages(options = {}) {
      const { page = 1, limit = 30 } = options;
      const response = await fetch(`${this.BASE_URL}/v2/list?page=${page}&limit=${limit}`);
      return response.json();
    }
  
    static async getImageInfo(imageId) {
      const response = await fetch(`${this.BASE_URL}/id/${imageId}/info`);
      return response.json();
    }
  }
  
  export default placehold_imager;
