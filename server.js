const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000

// Middleware to parse JSON bodies
app.use(express.json());


//Sample data to send
const data = {
  carousel1: {
    data: [
      {
        "url":
          "https://i.pinimg.com/736x/51/d3/88/51d38806d50482762c700eca5717a32f.jpg",

        "description": "This is product description lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        "discount": "40",
        "category": "electronics"
      },
      {
        "url": "https://media.istockphoto.com/id/171302954/photo/groceries.jpg?s=612x612&w=0&k=20&c=D3MmhT5DafwimcYyxCYXqXMxr1W25wZnyUf4PF1RYw8=",

        "description": "This is product description lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        "discount": "50",
        "category": "groceries"
      },
      {
        "url": "https://www.cosmeticsdesign-europe.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/cosmetics/cosmeticsdesign-europe.com/article/2020/10/19/waste-management-in-beauty-can-be-improved-if-brands-add-value-and-step-up-communication-says-certified-sustainable/11863453-1-eng-GB/Waste-management-in-beauty-can-be-improved-if-brands-add-value-and-step-up-communication-says-Certified-Sustainable.jpg",

        "description": "This is product description lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        "discount": "60",
        "category": "beauty"
      }
    ]
  },

  carousel2: {
    data: [
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

  categoryCarousel: {
    data: [
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

  categoryView: {
    data: [
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

  //electronicsListView
  electronicsListview: {
    data: [
      {
        "imageURL": "https://hiraoka.com.pe/media/mageplaza/blog/post/m/a/macbook_air_vs._macbook_pro-_cuales_son_sus_diferencias.jpg",
        "heading": "Laptop",
        "subHeading": "Apple MacBook Pro",
        "timeToReach": "5 days",
        "textLocation": "Online",
        "textFoodType": "Electronics",
        "distance": "N/A",
        "price": "$1499",
        "starRating": "4.8",
        "totalRating": "5000",
        "offerPercent": "5%",
        "maxOfferValue": "$50"
      },
      {
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k3h3B-gsvh51N2A9FmRf7SVqZwJ8OhChmw&usqp=CAU",
        "heading": "Smartphone",
        "subHeading": "Samsung Galaxy S21",
        "timeToReach": "3 days",
        "textLocation": "Online",
        "textFoodType": "Electronics",
        "distance": "N/A",
        "price": "$899",
        "starRating": "4.6",
        "totalRating": "4500",
        "offerPercent": "8%",
        "maxOfferValue": "$70"
      },
      {
        "imageURL": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/galaxy_tab_s8_3.jpg",
        "heading": "Tablet",
        "subHeading": "Galaxy Tab 4",
        "timeToReach": "4 days",
        "textLocation": "Online",
        "textFoodType": "Electronics",
        "distance": "N/A",
        "price": "$1099",
        "starRating": "4.7",
        "totalRating": "4800",
        "offerPercent": "10%",
        "maxOfferValue": "$80"
      },
      {
        "imageURL": "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large.jpg",
        "heading": "Smartwatch",
        "subHeading": "Apple Watch Series 7",
        "timeToReach": "2 days",
        "textLocation": "Online",
        "textFoodType": "Electronics",
        "distance": "N/A",
        "price": "$399",
        "starRating": "4.9",
        "totalRating": "5200",
        "offerPercent": "3%",
        "maxOfferValue": "$30"
      },
      {
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVA9dY1OCFVWFKX9ip0scMkfG8T25U2mOqDx9aChz_isSvnx_8qiNGSvK5S_3r37jrV5Y&usqp=CAU",
        "heading": "Wireless Earbuds",
        "subHeading": "Sony WF-1000XM4",
        "timeToReach": "6 days",
        "textLocation": "Online",
        "textFoodType": "Electronics",
        "distance": "N/A",
        "price": "$279",
        "starRating": "4.5",
        "totalRating": "4200",
        "offerPercent": "12%",
        "maxOfferValue": "$40"
      }
    ]
  },

  DetailLaptop: {
    data: [
      {
        "imageURL": "https://hiraoka.com.pe/media/mageplaza/blog/post/m/a/macbook_air_vs._macbook_pro-_cuales_son_sus_diferencias.jpg",
        "heading": "Laptop",
        "subHeading": "Apple MacBook Pro",
        "timeToReach": "5 days",
        "textLocation": "Online",
        "textFoodType": "Electronics",
        "distance": "N/A",
        "price": "$1499",
        "starRating": "4.8",
        "totalRating": "5000",
        "offerPercent": "5%",
        "maxOfferValue": "$50"
      }
    ]
  },

  DetailSmartphone: {
    data: {
      "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k3h3B-gsvh51N2A9FmRf7SVqZwJ8OhChmw&usqp=CAU",
      "heading": "Smartphone",
      "subHeading": "Samsung Galaxy S21",
      "timeToReach": "3 days",
      "textLocation": "Online",
      "textFoodType": "Electronics",
      "distance": "N/A",
      "price": "$899",
      "starRating": "4.6",
      "totalRating": "4500",
      "offerPercent": "8%",
      "maxOfferValue": "$70"
    },
  },

  DetailTablet: {
    data: {
      "imageURL": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/galaxy_tab_s8_3.jpg",
      "heading": "Tablet",
      "subHeading": "Galaxy Tab 4",
      "timeToReach": "4 days",
      "textLocation": "Online",
      "textFoodType": "Electronics",
      "distance": "N/A",
      "price": "$1099",
      "starRating": "4.7",
      "totalRating": "4800",
      "offerPercent": "10%",
      "maxOfferValue": "$80"
    },
  },

  // groceriesListView   
  groceriesListview: {
    data: [
      {
        "imageURL": "https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg",
        "heading": "Fresh Vegetables",
        "subHeading": "Organic Produce",
        "timeToReach": "1 day",
        "textLocation": "Local Market",
        "textFoodType": "Groceries",
        "distance": "10 min",
        "price": "$15",
        "starRating": "N/A",
        "totalRating": "N/A",
        "offerPercent": "10%",
        "maxOfferValue": "$5"
      },
      {
        "imageURL": "https://5.imimg.com/data5/SELLER/Default/2023/5/307757468/YO/AF/VK/21163179/2-l-liquid-packaging-carton-box-500x500.jpg",
        "heading": "Milk",
        "subHeading": "Fresh Dairy",
        "timeToReach": "1 day",
        "textLocation": "Local Market",
        "textFoodType": "Groceries",
        "distance": "10 min",
        "price": "$3",
        "starRating": "N/A",
        "totalRating": "N/A",
        "offerPercent": "5%",
        "maxOfferValue": "$1"
      },
      {
        "imageURL": "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyZWFkfGVufDB8fDB8fHww",
        "heading": "Bread",
        "subHeading": "Whole Wheat",
        "timeToReach": "1 day",
        "textLocation": "Local Market",
        "textFoodType": "Groceries",
        "distance": "10 min",
        "price": "$2",
        "starRating": "N/A",
        "totalRating": "N/A",
        "offerPercent": "15%",
        "maxOfferValue": "$0.50"
      },
      {
        "imageURL": "https://images.theconversation.com/files/372017/original/file-20201130-21-zuzh18.jpg?ixlib=rb-1.1.0&rect=8%2C17%2C5888%2C2944&q=45&auto=format&w=1356&h=668&fit=crop",
        "heading": "Eggs",
        "subHeading": "Free-Range",
        "timeToReach": "1 day",
        "textLocation": "Local Market",
        "textFoodType": "Groceries",
        "distance": "10 min",
        "price": "$4",
        "starRating": "N/A",
        "totalRating": "N/A",
        "offerPercent": "8%",
        "maxOfferValue": "$1"
      },
      {
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNYd6vlp4fkJ71ATBGDhVm6tFdt78a76fwAS8co2oCQ&sI",
        "heading": "Fruits",
        "subHeading": "Seasonal Selection",
        "timeToReach": "1 day",
        "textLocation": "Local Market",
        "textFoodType": "Groceries",
        "distance": "10 min",
        "price": "$10",
        "starRating": "N/A",
        "totalRating": "N/A",
        "offerPercent": "12%",
        "maxOfferValue": "$3"
      }
    ]

  },

  DetailFreshVegetables: {
    data: [
      {
        "imageURL": "https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg",
        "heading": "Fresh Vegetables",
        "subHeading": "Organic Produce",
        "timeToReach": "1 day",
        "textLocation": "Local Market",
        "textFoodType": "Groceries",
        "distance": "10 min",
        "price": "$15",
        "starRating": "N/A",
        "totalRating": "N/A",
        "offerPercent": "10%",
        "maxOfferValue": "$5"
      },
    ]
  },

  DetailMilk: {
    data: [
      {
        "imageURL": "https://5.imimg.com/data5/SELLER/Default/2023/5/307757468/YO/AF/VK/21163179/2-l-liquid-packaging-carton-box-500x500.jpg",
        "heading": "Milk",
        "subHeading": "Fresh Dairy",
        "timeToReach": "1 day",
        "textLocation": "Local Market",
        "textFoodType": "Groceries",
        "distance": "10 min",
        "price": "$3",
        "starRating": "N/A",
        "totalRating": "N/A",
        "offerPercent": "5%",
        "maxOfferValue": "$1"
      },
    ]
  },

  DetailBread: {
    data: [
      {
        "imageURL": "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyZWFkfGVufDB8fDB8fHww",
        "heading": "Bread",
        "subHeading": "Whole Wheat",
        "timeToReach": "1 day",
        "textLocation": "Local Market",
        "textFoodType": "Groceries",
        "distance": "10 min",
        "price": "$2",
        "starRating": "N/A",
        "totalRating": "N/A",
        "offerPercent": "15%",
        "maxOfferValue": "$0.50"
      },
    ]
  },

  //beautyListView
  beautyListview: {
    data: [
      {
        "imageURL": "https://us.123rf.com/450wm/vichzh/vichzh2309/vichzh230904700/212633404-modern-beauty-product-beauty-cream-for-skin-care-and-moisturizing-anti-aging-cream-jar-top-close-up.jpg?ver=6",
        "heading": "Moisturizer",
        "subHeading": "Hydrating Cream",
        "timeToReach": "2 days",
        "textLocation": "Online Store",
        "textFoodType": "Beauty",
        "distance": "N/A",
        "price": "$25",
        "starRating": "4.5",
        "totalRating": "1200",
        "offerPercent": "15%",
        "maxOfferValue": "$5"
      },
      {
        "imageURL": "https://t3.ftcdn.net/jpg/05/33/57/46/360_F_533574640_yn5N7owRVh8677uTycfP7WsEirRUNU6Q.jpg",
        "heading": "Lipstick",
        "subHeading": "Long-lasting Matte",
        "timeToReach": "2 days",
        "textLocation": "Online Store",
        "textFoodType": "Beauty",
        "distance": "N/A",
        "price": "$15",
        "starRating": "4.2",
        "totalRating": "800",
        "offerPercent": "10%",
        "maxOfferValue": "$3"
      },
      {
        "imageURL": "https://www.bigbasket.com/media/uploads/p/m/40233171-4_2-naturali-hair-fall-arrest-shampoo-reduces-hair-fall-by-boosting-scalp-health-red-onion-bhringraj.jpg",
        "heading": "Shampoo",
        "subHeading": "Gentle Cleansing",
        "timeToReach": "2 days",
        "textLocation": "Local Store",
        "textFoodType": "Beauty",
        "distance": "N/A",
        "price": "$12",
        "starRating": "4.7",
        "totalRating": "1500",
        "offerPercent": "8%",
        "maxOfferValue": "$2"
      },
      {
        "imageURL": "https://cdn.shopify.com/s/files/1/0657/0219/9540/products/165.png?v=1694595814&width=533",
        "heading": "Perfume",
        "subHeading": "Eau de Parfum",
        "timeToReach": "2 days",
        "textLocation": "Local Store",
        "textFoodType": "Beauty",
        "distance": "N/A",
        "price": "$50",
        "starRating": "4.8",
        "totalRating": "2000",
        "offerPercent": "20%",
        "maxOfferValue": "$10"
      },
      {
        "imageURL": "https://www.stylish1ndia.com/wp-content/uploads/2022/04/BeautyGlazedMix_Match68ColorsEyeshadowPalette_4b830b17-5d9a-4821-9846-9d5363fe4941.jpg",
        "heading": "Eyeshadow Palette",
        "subHeading": "Neutral Shades",
        "timeToReach": "2 days",
        "textLocation": "Online Store",
        "textFoodType": "Beauty",
        "distance": "N/A",
        "price": "$30",
        "starRating": "4.6",
        "totalRating": "1000",
        "offerPercent": "12%",
        "maxOfferValue": "$6"
      }
    ]
  },

  DetailMoisturizer: {
    data: [
      {
        "imageURL": "https://us.123rf.com/450wm/vichzh/vichzh2309/vichzh230904700/212633404-modern-beauty-product-beauty-cream-for-skin-care-and-moisturizing-anti-aging-cream-jar-top-close-up.jpg?ver=6",
        "heading": "Moisturizer",
        "subHeading": "Hydrating Cream",
        "timeToReach": "2 days",
        "textLocation": "Online Store",
        "textFoodType": "Beauty",
        "distance": "N/A",
        "price": "$25",
        "starRating": "4.5",
        "totalRating": "1200",
        "offerPercent": "15%",
        "maxOfferValue": "$5"
      },
    ]
  },

  DetailLipstick: {
    data: [
      {
        "imageURL": "https://t3.ftcdn.net/jpg/05/33/57/46/360_F_533574640_yn5N7owRVh8677uTycfP7WsEirRUNU6Q.jpg",
        "heading": "Lipstick",
        "subHeading": "Long-lasting Matte",
        "timeToReach": "2 days",
        "textLocation": "Online Store",
        "textFoodType": "Beauty",
        "distance": "N/A",
        "price": "$15",
        "starRating": "4.2",
        "totalRating": "800",
        "offerPercent": "10%",
        "maxOfferValue": "$3"
      },
    ]
  },

  DetailShampoo: {
    data: [
      {
        "imageURL": "https://www.bigbasket.com/media/uploads/p/m/40233171-4_2-naturali-hair-fall-arrest-shampoo-reduces-hair-fall-by-boosting-scalp-health-red-onion-bhringraj.jpg",
        "heading": "Shampoo",
        "subHeading": "Gentle Cleansing",
        "timeToReach": "2 days",
        "textLocation": "Local Store",
        "textFoodType": "Beauty",
        "distance": "N/A",
        "price": "$12",
        "starRating": "4.7",
        "totalRating": "1500",
        "offerPercent": "8%",
        "maxOfferValue": "$2"
      },
    ]
  },

  // electronicsCategoryView
  electronicsCategoryview: {
    data: [
      {
        "imgUrl": "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg",
        "headerText": "HeadPhones"
      },
      {
        "imgUrl": "https://m.economictimes.com/thumb/msid-102726769,width-1200,height-900,resizemode-4,imgsize-121318/6-best-redmi-mobiles-under-10000.jpg",
        "headerText": "Mobiles"
      },
      {
        "imgUrl": "https://www.cnet.com/a/img/resize/7ee4c4356006305a4107e61641a2edd48c0cf937/hub/2022/12/16/11c5ee0a-5c4b-4384-9ec7-cd8dc0b977db/smart.jpg?auto=webp&fit=crop&height=675&width=1200",
        "headerText": "Smart Watches"
      },
      {
        "imgUrl": "https://hd.wallpaperswide.com/thumbs/smart_tv-t2.jpg",
        "headerText": "Tv"
      },
      {
        "imgUrl": "https://consumer.huawei.com/content/dam/huawei-cbg-site/en/support/laptop-user-guide/img/laptop.png",
        "headerText": "LapTops"
      },
      {
        "imgUrl": "https://zebronics.com/cdn/shop/files/Soundbar_Collection_Grid.png?v=1690347489&width=1106",
        "headerText": "Home Audio"
      },
      {
        "imgUrl": "https://www.zdnet.com/a/img/resize/7c591697e1820251e16f46fd17208e5610485a11/2023/03/21/6bf47018-7a32-4782-8cbf-1b424e93e9fc/lenovo-tab-11-plus-removebg-preview-1.png?auto=webp&fit=crop&height=900&width=1200",
        "headerText": "Tablets"
      },
      {
        "imgUrl": "https://media.istockphoto.com/id/185278433/photo/black-digital-slr-camera-in-a-white-background.jpg?s=612x612&w=0&k=20&c=OOCbhvOF0W-eVhhrm-TxbgLfbKhFfs4Lprjd7hiQBNU=",
        "headerText": "Camera"
      }
    ]
  },

  // beautyCategoryView
  beautyCategoryview: {
    data: [
      {
        "imgUrl": "https://media.istockphoto.com/id/1462119292/photo/happy-with-her-skincare-routine-woman-in-her-20s-applies-beauty-cream-on-her-face.webp?b=1&s=170667a&w=0&k=20&c=UlxH19TPRwvS_vGuhHyLAdvRzaWYjheI2f3HCliApEU=",
        "headerText": "Skin Care"
      },
      {
        "imgUrl": "https://www.anveya.com/cdn/shop/articles/mens_hair_care_375342676_1_RESIZED_1.jpg?v=1600935550",
        "headerText": "Hair Care"
      },
      {
        "imgUrl": "https://images.healthshots.com/healthshots/hi/uploads/2023/03/03212821/makeup-1-1600x900.jpg",
        "headerText": "MakeUp"
      },
      {
        "imgUrl": "https://5.imimg.com/data5/SELLER/Default/2023/6/314957471/XO/EM/QQ/892232/1.jpg",
        "headerText": "Fragrances"
      }
    ]
  },

  // groceryCategoryView
  groceriesCategoryview: {
    data: [
      {
        "imgUrl": "https://5.imimg.com/data5/SELLER/Default/2022/10/NK/DL/UX/1651149/household-cleaning-products-formulation-consulting.jpeg",
        "headerText": "Cleaning"
      },
      {
        "imgUrl": "https://www.quicklly.com/upload_images/blog/1602662265-best-indian-grocery-store-in-naperville-%E2%80%93-indiaco.jpg",
        "headerText": "Grocery"
      },
      {
        "imgUrl": "https://plus.unsplash.com/premium_photo-1668806642968-c6bebdab7c4c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGJhYnl8ZW58MHx8MHx8fDA%3",
        "headerText": "Baby Care"
      },
      {
        "imgUrl": "https://thumb.photo-ac.com/ce/ce0e7e6d97b0d2ead027a640a1cb3752_t.jpeg",
        "headerText": "Nutrition"
      },
      {
        "imgUrl": "https://cdn2.stylecraze.com/wp-content/uploads/2021/07/Body-Wash-And-Bar-Soap.jpg",
        "headerText": "Body Wash"
      }
    ]



  },

};

const masterData = {
  home_screen: {
    componentsList: [
      {
        "type": "CarouselView",
        "id": "carousel1",
        "navigationId": "master_screen"

      },
      {
        "type": "CarouselView",
        "id": "carousel2",
        "navigationId": "master_screen"
      }
    ]
  },

  master_screen: {
    componentsList: [
      {
        "type": "CategoryView",
        "id": "Categoryview",
        "navigationId": "foodDetailScreen",
      },
      {
        "type": "ListView",
        "id": "Listview",
        "navigationId": "foodDetailScreen",
      },
    ]
  },

  detail_screen: {
    componentsList: [
      {
        "type": "DetailView",
        "id": "ProductDetailView",
        "navigationId": "",
      },
      {
        "type": "AddToCartView",
        "id": "ProductAddToCartView",
        "navigationId": "addtocart_screen",
      },
    ]
  },

  // Add more data as needed
};


app.get('/api/getlayout/:id', (req, res) => {
  const id = req.params.id;
  const resource = masterData[id];
  if (resource) {
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