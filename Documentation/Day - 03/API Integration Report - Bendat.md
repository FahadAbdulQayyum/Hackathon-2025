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

![alt text](image-1.png)

**Images Reflected in frontend**
![alt text](image-2.png)

**API Tested with Data Fetched Successfully Using Thunder-Client Tool**
![alt text](image-3.png)

**Loader Appears while Data are Fetched Successfully**
![alt text](image-4.png)