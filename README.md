# placehold-imager
# placehold_imager

A lightweight JavaScript utility for generating and manipulating placeholder images from Lorem Picsum.

## Installation

```bash
npm install placehold-imager
```

## Usage

### Importing
```javascript
import placehold_imager from 'placehold-imager';
```

### Generating Random Images
```javascript
// Random 300x300 image
const randomImage = placehold_imager.random(300);

// Random 400x200 image
const customSizeImage = placehold_imager.random(400, 200);
```

### Specific Image Methods

#### Get Specific Image
```javascript
// Image with specific ID, 500x500
const specificImage = placehold_imager.specific(1084, 500);
```

#### Seed-based Image
```javascript
// Consistent image based on seed
const seededImage = placehold_imager.seed('hello', 300);
```

### Image Modifications

#### Grayscale
```javascript
const grayImage = placehold_imager.grayscale(randomImage);
```

#### Blur
```javascript
// Default blur
const blurredImage = placehold_imager.blur(randomImage);

// Custom blur level (1-10)
const customBlurImage = placehold_imager.blur(randomImage, 5);
```

#### Format
```javascript
const webpImage = placehold_imager.format(randomImage, 'webp');
```

#### Prevent Caching
```javascript
const noCacheImage = placehold_imager.preventCache(randomImage);
```

### Async Methods

#### List Images
```javascript
const images = await placehold_imager.listImages({
  page: 1,
  limit: 30
});
```

#### Get Image Info
```javascript
const imageInfo = await placehold_imager.getImageInfo(1084);
```

## API Reference

### Static Methods
- `random(width, height?)`: Generate random image
- `specific(imageId, width, height?)`: Get image by ID
- `seed(seed, width, height?)`: Generate consistent image
- `grayscale(url)`: Convert image to grayscale
- `blur(url, blurAmount?)`: Add blur effect
- `format(url, format?)`: Change image format
- `preventCache(url)`: Add random query parameter
- `listImages(options?)`: Fetch image list
- `getImageInfo(imageId)`: Retrieve specific image details

## License
MIT