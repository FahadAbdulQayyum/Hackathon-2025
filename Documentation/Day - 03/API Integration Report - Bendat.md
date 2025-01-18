# Sanity Migration

**Data Sent to Sanity**
![alt text](image.png)

**Schema Modified As per my project**
```bash
export default {
    name: 'service',
    type: 'document',
    title: 'Service',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Service Name',
        },
        {
            name: 'variation',
            type: 'string',
            title: 'Variation'
        },
        {
            name: 'city_available',
            type: 'string',
            title: 'City Available'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Service Price',
        },
        {
            name: 'currently_offered',
            type: 'boolean',
            title: 'Currently Offered',
        },
        {
            name: 'pic',
            type: 'image',
            title: 'Service Image',
            options: {
                hotspot: true // Enables cropping and focal point selection
            }
        }
    ]
};
```

```bash
export default {
    name: 'location',
    type: 'document',
    title: 'Location',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Location Name',
        },
    ]
};
```


![alt text](image-1.png)

**Images Reflected in frontend**
![alt text](image-2.png)

**API Tested with Data Fetched Successfully Using Thunder-Client Tool**
![alt text](image-3.png)

**Loader Appears while Data are Fetched Successfully**
![alt text](image-4.png)

**Code snippets for API integration**
```bash
...
            const data: dataType[] = await client.fetch(`
                *[_type=='service']{
                    _id, 
                    name, 
                    variation, 
                    city_available, 
                    price, 
                    currently_offered, 
                    "pic": pic.asset->url
                }
            `);
            setFetchedData(data);
...
```

**Migration Script**
```bash
  import axios from 'axios';
  import { client } from './sanityClient.js';

  async function uploadImageToSanity(imageUrl: string): Promise<string> {

    try {
      // Fetch the image from the URL and convert it to a buffer
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(response.data);

      // Upload the image to Sanity
      const asset = await client.assets.upload('image', buffer, {
        filename: imageUrl.split('/').pop(), // Extract the filename from URL
      });

      // Debugging: Log the asset returned by Sanity
      console.log('Image uploaded successfully:', asset);

      return asset._id; // Return the uploaded image asset reference ID
    } catch (error) {
      console.error('❌ Failed to upload image:', imageUrl, error);
      throw error;
    }
  }

  async function importData() {
      try {
        // Fetch data from external API
        const response = await axios.get('https://fakestoreapi.com/products');
        const products = response.data;

        // Iterate over the products
        for (const product of products) {
          let imageRef = '';

          // Upload image and get asset reference if it exists
          if (product.image) {
            imageRef = await uploadImageToSanity(product.image);
          }

          const sanityProduct = {
            _id: `service-${product.id}`, // Prefix the ID to ensure validity
            _type: 'service',
            name: product.title,
            price: product.price,
            pic: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef, // Set the correct asset reference ID
              },
            },
            variation: product.description,
          };

          // Log the product before attempting to upload it to Sanity
          console.log('Uploading product:', sanityProduct);

          // Import data into Sanity
          await client.createOrReplace(sanityProduct);
          console.log(`✅ Imported product: ${sanityProduct.name}`);
        }

        console.log('✅ Data import completed!');
      } catch (error) {
        console.error('❌ Error importing data:', error);
      }
  }

  importData();
```
