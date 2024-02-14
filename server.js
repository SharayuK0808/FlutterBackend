const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000


// Middleware to parse JSON bodies
app.use(express.json());

//Sample data to send
const data = {
    carousel1 : { 
       data : [
            {
              "url":
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0bf19a82b109b40c2f5c56d00f071a33",
           
              "description": "This is product description lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
              "discount": "40"
            },
            {
              "url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/z2q4f94qulj4pb8p7kdq",
           
              "description": "This is product description lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
              "discount": "50"
            },
            {
              "url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iservsmulhi2ifzmxvco",
           
              "description": "This is product description lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
              "discount": "60"
            }
        ]
    },

    carousel2 : { 
        data :  [
            {
              "url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/poymismten2l3pbit1ui",
              "discount": "30",
            },
            {
              "url":
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/89741ecb1291788f128600a5da5f18b4",
              "discount": "20",
            },
            {
              "url":
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee4f041cd8611dccc19f4267783ab5ea",
              "discount": "40",
            },
          ]
     },

     categoryCarousel : { 
        data :  [
            {
              "url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/poymismten2l3pbit1ui",
              "discount": "30",
            },
            {
              "url":
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/89741ecb1291788f128600a5da5f18b4",
              "discount": "20",
            },
            {
              "url":
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee4f041cd8611dccc19f4267783ab5ea",
              "discount": "40",
            },
          ]
     },

     categoryView : { 
        data :  [
            {
              "url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/poymismten2l3pbit1ui",
              "discount": "30",
            },
            {
              "url":
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/89741ecb1291788f128600a5da5f18b4",
              "discount": "20",
            },
            {
              "url":
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee4f041cd8611dccc19f4267783ab5ea",
              "discount": "40",
            },
          ]
     },

     electronicsListview : { 
        data :  [
            {
              "url": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/poymismten2l3pbit1ui",
              "discount": "30",
            },
            {
              "url":
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/89741ecb1291788f128600a5da5f18b4",
              "discount": "20",
            },
            {
              "url":
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee4f041cd8611dccc19f4267783ab5ea",
              "discount": "40",
            },
          ]
     },
    // Add more data as needed
};

const masterData = {
    home_screen : { 
       componentsList : [
        {
            "type": "CarouselView",
            "id": "carousel1",
            "navigationId": "foodDetailScreen",
            "screenId":"master_screen"
        },
        {
            "type": "CarouselView",
            "id": "carousel2",
            "navigationId": "foodDetailScreen"
        }
     ]
    },

    master_screen : { 
        componentsList :   [
            {
              "type": "CarouselView",
              "id": "categoryCarousel",
              "navigationId": "foodDetailScreen",
            },
            {
              "type": "CategoryView",
              "id": "categoryView",
              "navigationId": "foodDetailScreen",
            },
          {
              "type": "ListView",
              "id": "electronicsListview",
              "navigationId": "foodDetailScreen",
            },
          ]
     },
    // Add more data as needed
};


app.get('/api/getlayout/:id',(req,res) => {
    const id = req.params.id;
    const resource = masterData[id];
    if(resource ) {
        res.json(resource);
    } else {
        res.status(404).json({ error: 'Resource not found' });
    }
    // const response = {
    //     "componentsList": [
    //         {
    //             "type": "CarouselView",
    //             "id": "carousel1",
    //             "navigationId": "foodDetailScreen"
    //         },
    //         {
    //             "type": "CarouselView",
    //             "id": "carousel2",
    //             "navigationId": "foodDetailScreen"
    //         }
    //     ]
    // }

    // res.json(response);
});

// GET route with path parameter
app.get('/api/getlayoutData/:id', (req, res) => {
    const id = req.params.id;
    const resource = data[id];
    if (resource) {
        res.json(resource);
    } else {
        res.status(404).json({ error: 'Resource not found' });
    }
});

// Endpoint to read data from JSON file
app.get('/api/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint to add data to JSON file
app.post('/api/data', (req, res) => {
    const newData = req.body;
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        data.clearJSONFile;
        // let jsonData = JSON.parse(data);
        // jsonData.push(newData);


        // const jsonData = JSON.stringify(newDataParse, null, 2);

        fs.writeFile('data.json', JSON.stringify(newData, null, 2), (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.json({ message: 'Data added successfully' });
        });
    });
});

function clearJSONFile(filePath) {
    // Create an empty array as the initial data
    const initialData = [];

    // Write the initial data to the file
    fs.writeFile(filePath, JSON.stringify(initialData, null, 2), (err) => {
        if (err) {
            console.error(`Error clearing file: ${err}`);
            return;
        }
        console.log('JSON file cleared successfully.');
    });
}

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
});