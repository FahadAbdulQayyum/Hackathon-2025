## Expected Output:

**1. A fully functional product listing page displaying dynamic data from Sanity CMS or APIs:**
![alt text](image.png)

**2. Individual product detail pages implemented using dynamic routing:**
![alt text](image-2.png)

**3.  Advanced category filters to refine and segment product views dynamically:**
![alt text](image-1.png)

**4. A search bar that eƯectively filters products by name or tags:**
Before Searching: ![alt text](image-3.png)

After Searching: ![alt text](image-4.png)

**5. Additional features like pagination and related products on detail pages:**
![alt text](image-5.png)

**6. Components styled to ensure responsiveness and a professional look across devices:**
![alt text](image-6.png)

**7. Modular and reusable components for future scalability:**
![alt text](image-7.png)
```bash
export const fetchApiResult = createAsyncThunk('service/fetchServices', async (collectionType, ...specificFields) => {
    const data = await client.fetch(`
        *[_type == '${collectionType}']{
            ${specificFields}
        }
`);

    return data;
});
```
