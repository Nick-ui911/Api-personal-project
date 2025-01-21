const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample data Instamart data
let Instamart = [
  {
    id: 1,
    name: "Sugar",
    image:
      "https://cdn.justgotochef.com/uploads/1543058675-Uttam%20Sugar%20Sulphurless%20Sugar-Front.jpg",
    price: 100,
  },
  {
    id: 2,
    name: "Peanut",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/l3rmzrk0/pulses/n/b/o/3000-peanut-moongfali-3kg-pack-of-1-1-raw-peanut-groshaat-original-imageth24w4hhqqv.jpeg?q=90&crop=false",
    price: 80,
  },
  {
    id: 3,
    name: "Soap",
    image:
      "https://images-cdn.ubuy.co.in/6607680a6a06e01dd737e62a-4-pack-dove-white-travel-size-bar-soap.jpg",
    price: 89,
  },
  {
    id: 4,
    name: "Rice",
    image:
      "https://www.jamoona.com/cdn/shop/files/Daawat-5kg-Original-Basmatireis-991189_1.png?v=1704206799",
    price: 180,
  },
  {
    id: 5,
    name: "Toor dal",
    image: "https://m.media-amazon.com/images/I/61KodoDQzLL.jpg",
    price: 140,
  },
  {
    id: 6,
    name: "Poha",
    image:
      "https://www.tatanutrikorner.com/cdn/shop/files/1_4b9a3f72-399c-4667-bee2-d0d84e7b606a.jpg?v=1731513549&width=1445",
    price: 60,
  },
  {
    id: 7,
    name: "Biscuit",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/pista-and-badam-britannia-good-day-biscuit-packaging-type-packet-2217351399-syz5bl0n.jpg",
    price: 100,
  },
  {
    id: 8,
    name: "Tea",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/kk8mcnk0/tea/t/y/j/250-regular-tea-box-regular-tea-leaves-red-label-original-imafzmp7syzvdbmb.jpeg?q=90&crop=false",
    price: 250,
  },
  {
    id: 9,
    name: "Turmeric",
    image: "https://m.media-amazon.com/images/I/71AK6ErhjhL.jpg",
    price: 99,
  },
  {
    id: 10,
    name: "Salt",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/3/WQ/FT/ID/3642811/1kg-tata-salt-packet.jpg",
    price: 85,
  },
  {
    id: 11,
    name: "Red chilli Powder",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/7/VR/FT/VK/9367840/whatsapp-image-2022-07-20-at-6-21-45-pm.jpeg",
    price: 60,
  },
  {
    id: 12,
    name: "Garam masala",
    image:
      "https://www.bigbasket.com/media/uploads/p/xl/268943_3-everest-garam-masala.jpg",
    price: 75,
  },
  {
    id: 13,
    name: "Refined Oil ",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/6/FH/IP/UF/45780338/1-litre-fortune-refined-sunflower-oil.jpg",
    price: 120,
  },
  {
    id: 14,
    name: "musturd Oil",
    image: "https://m.media-amazon.com/images/I/71wVU7pgwAL.jpg",
    price: 165,
  },
  {
    id: 15,
    name: "Olive Oil",
    image: "https://m.media-amazon.com/images/I/7160BMJzK2L.jpg",
    price: 1100,
  },
  {
    id: 16,
    name: "Aloo Bhujiya",
    image:
      "https://5.imimg.com/data5/FV/EM/JP/SELLER-95280623/haldiram-aloo-bhujia-500x500.jpg",
    price: 68,
  },
];
let trending = [
  {
    id: 1,
    name: "Sugar",
    image:
      "https://cdn.justgotochef.com/uploads/1543058675-Uttam%20Sugar%20Sulphurless%20Sugar-Front.jpg",
    price: 100,
  },
  {
    id: 2,
    name: "Peanut",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/l3rmzrk0/pulses/n/b/o/3000-peanut-moongfali-3kg-pack-of-1-1-raw-peanut-groshaat-original-imageth24w4hhqqv.jpeg?q=90&crop=false",
    price: 85,
  },
  {
    id: 3,
    name: "Soap",
    image:
      "https://images-cdn.ubuy.co.in/6607680a6a06e01dd737e62a-4-pack-dove-white-travel-size-bar-soap.jpg",
    price: 80,
  },
  {
    id: 4,
    name: "Rice",
    image:
      "https://www.jamoona.com/cdn/shop/files/Daawat-5kg-Original-Basmatireis-991189_1.png?v=1704206799",
    price: 110,
  },
  {
    id: 5,
    name: "Baby Oil",
    image:
      "https://images.ctfassets.net/3vnc73o2e0fb/5LBWRhvetbZq5vbGRLZ6hu/7ab8a8e8a59009e2772afe56997b5d1b/jns_381370033202_baby_oil_20oz_0000_1000wx1000h.jpeg",
    price: 15,
  },
  {
    id: 6,
    name: "Purple Frock",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/Baby_Girl_Frocks_Designs.jpg",
    price: 45,
  },
  {
    id: 7,
    name: "Green Frock",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/download_(9).jpg",
    price: 49,
  },
  {
    id: 8,
    name: "Pink Frock",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/Shop_Qu%E1%BA%A7n_%C3%A1o_Tr%E1%BA%BB_Em,_Th%E1%BB%9Di_Trang_Tr%E1%BA%BB_Em_Tutupetti.jpg",
    price: 55,
  },
  {
    id: 9,
    name: "Banarasi Sarees",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/Beautiful_dull_blue_satin_georgette_saree_with_unstitched_designer_net_blouse_piece.jpg",
    price: 90,
  },
  {
    id: 10,
    name: "Patola Saree",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/Beautiful_dusty_mauve_purple_georgette_saree_with_glitter_work_and_running_blouse_piece.jpg",
    price: 79,
  },
  {
    id: 11,
    name: "Kurta",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/Wistful_Whisper7.jpg",
    price: 59,
  },
  {
    id: 12,
    name: "Grey Shirt",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/Shirt.jpg",
    price: 49,
  },
  {
    id: 13,
    name: "Nude Lipstick",
    image:
      "https://sdcdn.io/mac/in/mac_sku_S4K065_1x1_0.png?width=1440&height=1440",
    price: 15,
  },
  {
    id: 14,
    name: "Blush",
    image:
      "https://m.media-amazon.com/images/I/51wNImUr18L._AC_UF1000,1000_QL80_.jpg",
    price: 39,
  },
  {
    id: 15,
    name: "Foundation",
    image: "https://tiimg.tistatic.com/fp/1/008/999/makeup-foundation-631.jpg",
    price: 32,
  },
  {
    id: 16,
    name: "Punjabi Tadka",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/haldiram-punjabi-tadka-150-gms-271268697-j610jxdw.jpg",
    price: 15,
  },
];

let DineIn = [
  {
    id: 10,
    price: 4900,
    name: "WoW Crest",
    address: "707 Sweet St, Dessert Town",
    time: " 07:30 pm to 11:30 pm",
    image:
      "https://t3.ftcdn.net/jpg/06/37/16/64/360_F_637166455_RZOHg6K3M6noLPKQmOHH5ZI70zXEyDaq.jpg",
  },
  {
    id: 2,
    price: 4900,
    name: "Bombay Bistro",
    address: "456 Fish Ave, Sushi Town",
    time: " 06:00 pm to 11:00 pm",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/9a/68/49/caper-s-roof-top-fine.jpg?w=600&h=400&s=1",
  },
  {
    id: 3,
    price: 4433,
    name: "Masala Mela",
    address: "789 Taco Blvd, Taco Town",
    time: " 08:30 pm to 12:30 am",
    image:
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chanwalrus-941861.jpg&fm=jpg",
  },
  {
    id: 4,
    price: 4443,
    name: "Chutney Corner",
    address: "101 Spice Rd, Curry City",
    time: " 05:30 pm to 10:30 pm",
    image:
      "https://images.affordableseating.net/dpr_1.0,f_auto,q_auto/afd/media/contenttype/fine_dining_definition.jpg",
  },
  {
    id: 5,
    price: 4900,
    name: "Spice Pavilion",
    address: "202 St, Beef City",
    time: " 08:30 pm to 01:30 am",
    image:
      "https://duongsrestaurant.com/wp-content/uploads/2019/07/what-is-fine-dining-restaurants.jpg",
  },
  {
    id: 6,
    price: 4900,
    name: "Naan Nomad",
    address: "303 Ave, Dim Sum City",
    time: " 07:15 pm to 11:15 pm",
    image:
      "https://assets.eventflare.io/eventflare.io/ea4ebb4b39d577ae18aacc8b333f9ef5.webp?updated_at=2023-02-24T11:02:00.672Z",
  },
  {
    id: 7,
    price: 4900,
    name: "Mediterranean Munch",
    address: "404 Olive Way, Mediterranean Town",
    time: " 06:15 pm to 12:15 am",
    image:
      "https://imgmedia.lbb.in/media/2019/08/5d43d83bca10992d055cc50d_1564727355126.jpg",
  },
  {
    id: 8,
    price: 4900,
    name: "BBQ Bliss",
    address: "505 Grill Rd, BBQ City",
    time: " 07:20 pm to 11:30 pm",
    image:
      "https://thumbs.dreamstime.com/b/elegant-fine-dining-restaurant-interior-ambiance-lighting-art-decor-334006704.jpg",
  },
  {
    id: 9,
    price: 4900,
    name: "Vegan Vibes",
    address: "606 Green St, Vegan City",
    time: " 09:30 pm to 02:30 am",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQFRKxwd6WLqcA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691154425343?e=2147483647&v=beta&t=3TqAXxz_rCgJXpinaamwHRo9rc5SgqGYqTEayUMbgIg",
  },
  {
    id: 1,
    price: 4900,
    name: "Biryani Bliss",
    address: "123 jack St, pune City",
    time: " 07:05 pm to 11:05 pm",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/0e/c2/e7/yi-jing.jpg?w=600&h=400&s=1",
  },
  {
    id: 11,
    price: 4900,
    name: "Midnight Tavern",
    address: "111 Tandoor Lane, Spice City",
    time: " 09:35 pm to 01:35 pm",
    image:
      "https://www.gleeca.in/wp-content/uploads/2022/12/Fine-dine-in-in-a-restaurant-scaled.jpeg",
  },
  {
    id: 12,
    price: 4900,
    name: "Brigantine",
    address: "222 Biryani Rd, Flavor Town",
    time: " 07:30 pm to 11:30 pm",
    image:
      "https://assets.architecturaldigest.in/photos/65eae121c9a4d9a4adf21375/16:9/w_2560%2Cc_limit/Untitled%2520design.jpg",
  },
  {
    id: 13,
    price: 4900,
    name: "Uptown Devil",
    address: "333 Curry St, Flavor City",
    time: " 06:25 pm to 10:25 pm",
    image:
      "https://media.istockphoto.com/id/483869370/photo/table-set-for-an-event-party-or-wedding.jpg?s=612x612&w=0&k=20&c=y176Vo3I8sF5bs9sVrs5n-unIEDIozZM-cygxbYmy-8=",
  },
  {
    id: 14,
    price: 4900,
    name: "Boundless Bite",
    address: "444 Chicken Ave, Tikka Town",
    time: " 04:30 pm to 08:30 pm",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/b6/30/26/city-view-sunset.jpg?w=600&h=-1&s=1",
  },
  {
    id: 99650,
    price: 4900,
    name: "The Great Spread",
    address: "555 Bread Blvd, Naan City",
    time: " 10:30 pm to 02:30 am",
    image:
      "https://imgmedia.lbb.in/media/2019/12/5de4d3e5d6c5ac59bbeb0fe5_1575277541956.jpg",
  },
  {
    id: 15,
    price: 4900,
    name: "Palate Paradise",
    address: "555 Bread Blvd, Naan City",
    time: " 11:30 pm to 04:30 am",
    image: "https://luxebook.in/wp-content/uploads/2023/01/Prive.jpg",
  },
];
let Restaurants = [
  {
    id: 320,
    name: "Dessert Dream",
    address: "707 Sweet St, Dessert Town",
    cuisine: "Desserts",
    image:
      "https://www.allrecipes.com/thmb/_ynTUbGciS9uRG3WzvdToQdSOXg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50050-five-minute-ice-cream-DDMFS-2x1-077-c9d38152e1c1490284371890762ce600.jpg",
    menu: [
      {
        id: 18,
        item: "kulfi",
        price: 6.99,
        image:
          "https://5.imimg.com/data5/SELLER/Default/2023/4/301519897/NY/IU/KT/46239995/kulfi-ice-cream-500x500.jpg",
      },
      {
        id: 21,
        item: "cassata",
        price: 2.49,
        image:
          "https://media.istockphoto.com/id/1292626078/photo/colorful-cassata-ice-cream-is-served-in-a-white-plate-over-a-rustic-wooden-table-thumbnail.jpg?s=612x612&w=0&k=20&c=Qj1gQxCjQJebcspB7Ixev4a9JrS4skJTSjwtBg4ZyKc=",
      },
      {
        id: 41,
        item: "butterscotch",
        price: 4.99,
        image:
          "https://ik.imagekit.io/wlfr/wellness/images/products/344518-1.jpg/tr:w-3840,c-at_max,cm-pad_resize,f-auto,q-70,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end",
      },
    ],
  },
  {
    id: 2,
    name: "Sushi World",
    address: "456 Fish Ave, Sushi Town",
    cuisine: "Japanese",
    image:
      "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VzaGl8ZW58MHx8MHx8fDA%3D",
    menu: [
      {
        id: 12,
        item: "tuna sushi",
        price: 61.99,
        image:
          "https://static.vecteezy.com/system/resources/previews/022/263/428/non_2x/a-rolls-with-salmon-avocado-tuna-and-cucumber-isolated-on-white-background-fresh-hosomaki-pieces-with-rice-and-nori-closeup-of-delicious-japanese-food-with-sushi-roll-generative-ai-photo.jpg",
      },
      {
        id: 221,
        item: "samon sushi",
        price: 22.49,
        image:
          "https://www.shutterstock.com/image-photo/closeup-shot-mouthwatering-maki-sushi-260nw-2524703473.jpg",
      },
      {
        id: 441,
        item: "Regular sushi",
        price: 14.99,
        image:
          "https://www.allrecipes.com/thmb/vtF4Zlk1oLveyrJth1zOOSdGEn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6648154-spicy-tuna-sushi-roll-Judy-Kyser-4x3-1-0d66a33e48c748b2890bcadc597db050.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Taco Haven",
    address: "789 Taco Blvd, Taco Town",
    cuisine: "Mexican",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-traditional-taco-mexican-food-vector_53876-161373.jpg",
    menu: [
      {
        id: 541,
        item: "Maxican Taco",
        price: 9.99,
        image:
          "https://lanesbbq.com/cdn/shop/articles/chicken-tacos-with-peach-salsa-rec.jpg?v=1655298724&width=2048",
      },
      {
        id: 331,
        item: "Salsa Taco",
        price: 5.49,
        image:
          "https://www.foodandwine.com/thmb/rvFdWu1OuulLXgfvDAzulZV6JqM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-chicken-tinga-tacos-hero-04-b2a938b4dd724b308c9ff581ffa23067.jpg",
      },
      {
        id: 231,
        item: "Chicken Taco",
        price: 8.99,
        image:
          "https://i0.wp.com/flavorfulife.com/wp-content/uploads/2024/02/Blackened-chicken-tacos.jpg?fit=1200%2C1600&ssl=1",
      },
    ],
  },
  {
    id: 4,
    name: "Curry Corner",
    address: "101 Spice Rd, Curry City",
    cuisine: "Indian",
    image:
      "https://kitchenofdebjani.com/wp-content/uploads/2023/04/easy-indian-chicken-curry-Recipe-for-beginners-Debjanir-rannaghar.jpg",
    menu: [
      {
        id: 41,
        item: "chicken curry",
        price: 26.99,
        image:
          "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Chicken-Curry-Recipe.jpg",
      },
      {
        id: 571,
        item: "mutton curry",
        price: 32.49,
        image:
          "https://themustardspecialist.wordpress.com/wp-content/uploads/2023/09/tmsl-postcard-4-3.jpg",
      },
      {
        id: 201,
        item: "Fish curry",
        price: 24.99,
        image:
          "https://www.teaforturmeric.com/wp-content/uploads/2023/06/Fish-Curry-Fish-Masala-21-728x1092.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Burger Barn",
    address: "202 Burger St, Beef City",
    cuisine: "American",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    menu: [
      {
        id: 541,
        item: "Cheeseburger",
        price: 7.99,
        image:
          "https://media.istockphoto.com/id/1149596729/photo/classic-cheeseburger-on-a-brioche-bun-with-fries-and-a-milkshake.jpg?s=612x612&w=0&k=20&c=QuZqpd3tjwev1xndqUMu2MSXjrNM0CuiI8XqCW5Lj_0=",
      },
      {
        id: 831,
        item: "Fries",
        price: 2.6,
        image:
          "https://www.theskburger.com/wp-content/uploads/2022/08/Copycat-McDonalds-French-Fries-500x500-1.jpg",
      },
      {
        id: 1453,
        item: "Milkshake",
        price: 5.99,
        image:
          "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2020-07-how-to-make-a-milkshake-at-home%2F2020-06-08_AT-K19388",
      },
    ],
  },
  {
    id: 6,
    name: "Dim Sum Delight",
    address: "303 Dumpling Ave, Dim Sum City",
    cuisine: "Chinese",
    image:
      "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-1297854-2474661.jpg&fm=jpg",
    menu: [
      {
        id: 5551,
        item: "paneer Dim sum",
        price: 5.99,
        image:
          "https://cookingperfected.com/wp-content/uploads/2021/03/Air-Fryer-Dim-Sims-v4-no-wm.jpg",
      },
      {
        id: 1543,
        item: "Sweet Dim sum",
        price: 8.49,
        image:
          "https://us.santokuknives.co.uk/cdn/shop/articles/Untitled_design_1-655467.jpg?v=1713904349",
      },
      {
        id: 134,
        item: "Japanese Dim sum",
        price: 3.99,
        image:
          "https://images.eatsmarter.com/sites/default/files/styles/max_size/public/steamed-dim-sum-493553.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Mediterranean Munch",
    address: "404 Olive Way, Mediterranean Town",
    cuisine: "Mediterranean",
    image:
      "https://media.istockphoto.com/id/1148039529/photo/middle-eastern-arabic-or-mediterranean-appetizers-table-concept.jpg?s=612x612&w=0&k=20&c=SG7bjlsr1jd69fkhshottayvW1EKb0DxoKf0tNq0naI=",
    menu: [
      {
        id: 451,
        item: "crab curry",
        price: 61.99,
        image:
          "https://img-global.cpcdn.com/recipes/211c2bfde5ba8c90/400x400cq70/photo.jpg",
      },
      {
        id: 731,
        item: "mussele curry",
        price: 42.49,
        image:
          "https://www.eatingbirdfood.com/wp-content/uploads/2017/03/Coconut-Curry-Mussels-4.jpg",
      },
      {
        id: 76231,
        item: "French Toast",
        price: 2.99,
        image:
          "https://www.allrecipes.com/thmb/GHsW45mTpy_2EFSjCNEPdeo7Tek=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-16895-fluffy-french-toast-hero-01-ddmfs-4x3-7fd61e054f2c4f0f868b7ab0dd8767ae.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "BBQ Bliss",
    address: "505 Grill Rd, BBQ City",
    cuisine: "Barbecue",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-EaLHB00i2VHxeerOhBCR8SlNqkIS29IqA&s",
    menu: [
      {
        id: 49761,
        item: "Chicken BBQ",
        price: 26.99,
        image:
          "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Barbeque-Kebab.jpg",
      },
      {
        id: 3451,
        item: "Beef BBQ",
        price: 32.49,
        image:
          "https://static.vecteezy.com/system/resources/previews/035/811/665/non_2x/ai-generated-ribs-barbeque-bbq-food-photo.jpg",
      },
      {
        id: 6421,
        item: "Sausages",
        price: 43.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAN4jiKj42h0MAX33QEiwiLWzmKGUtzj95sg&s",
      },
    ],
  },
  {
    id: 9,
    name: "Vegan Vibes",
    address: "606 Green St, Vegan City",
    cuisine: "Vegan",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    menu: [
      {
        id: 94731,
        item: "Green Beans",
        price: 12.99,
        image:
          "https://www.shockinglydelicious.com/wp-content/uploads/2013/11/Sweet-and-Savory-Green-Beans-on-ShockinglyDelicious.jpg",
      },
      {
        id: 7371,
        item: "Green salad",
        price: 9.49,
        image:
          "https://saladswithanastasia.com/wp-content/uploads/2021/12/radish-green-salad-land1.jpg",
      },
      {
        id: 83521,
        item: "Papaya salad",
        price: 14.99,
        image:
          "https://assets.bonappetit.com/photos/644819df047251c7e5ee250b/1:1/w_3665,h_3665,c_limit/042523-green-papaya-salad-lede.jpg",
      },
    ],
  },
  {
    id: 1,
    name: "Pasta Palace",
    address: "123 Noodle St, Pasta City",
    cuisine: "Italian",
    image:
      "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?semt=ais_hybrid",
    menu: [
      {
        id: 75241,
        item: "Italian pasta",
        price: 16.99,
        image:
          "https://media.vyaparify.com/vcards/blogs/66036/Italian-Pasta-Creations.jpg",
      },
      {
        id: 341,
        item: "White sauce Pasta",
        price: 22.49,
        image:
          "https://www.indianveggiedelight.com/wp-content/uploads/2022/12/white-sauce-pasta-featured.jpg",
      },
      {
        id: 5641,
        item: "Spaghetti carbonara",
        price: 14.99,
        image:
          "https://familystylefood.com/wp-content/uploads/2022/07/Italian-Meat-Sauce-Pasta.jpg",
      },
    ],
  },
  {
    id: 11,
    name: "Spicy Tandoor",
    address: "111 Tandoor Lane, Spice City",
    cuisine: "Indian",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YHhy10IMaGS2aTew2R6Ii6FGfKi6HcxQMQ&s",
    menu: [
      {
        id: 561,
        item: "Chicken tandoor",
        price: 23.99,
        image:
          "https://www.easycookingwithmolly.com/wp-content/uploads/2023/11/air-fryer-whole-tandoori-chicken-3.jpg",
      },
      {
        id: 98711,
        item: "Chicken Bhuna",
        price: 29.49,
        image:
          "https://theyummydelights.com/wp-content/uploads/2019/11/chicken-bhuna-masala.jpg",
      },
      {
        id: 98721,
        item: "mutton sorma",
        price: 41.99,
        image: "https://i.ytimg.com/vi/rh4Gh-gl9PQ/sddefault.jpg",
      },
    ],
  },
  {
    id: 12,
    name: "Biryani House",
    address: "222 Biryani Rd, Flavor Town",
    cuisine: "Indian",
    image:
      "https://content3.jdmagicbox.com/v2/comp/mumbai/k7/022pxx22.xx22.140505120111.g2k7/catalogue/biryani-house-viviana-mall-thane-west-thane-biryani-restaurants-h83uoiju5w.jpg",
    menu: [
      {
        id: 20451,
        item: "Chicken Biryani",
        price: 18.99,
        image:
          "https://yeyfood.com/wp-content/uploads/2024/08/WEB1indian_chicken_biryani._served_on_a_white_plate._s_77c8f1ca-f01e-4a4d-9f2c-61bce785c1d7_3-720x720.jpg",
      },
      {
        id: 431,
        item: "Mutton Biryani",
        price: 26.49,
        image:
          "https://www.licious.in/blog/wp-content/uploads/2022/06/mutton-hyderabadi-biryani-01-750x750.jpg",
      },
      {
        id: 231,
        item: "Egg Biryani",
        price: 14.99,
        image:
          "https://i0.wp.com/kitchenrings.com/wp-content/uploads/Mutton-Biryani.jpg?fit=550%2C550&ssl=1",
      },
    ],
  },
  {
    id: 13,
    name: "Masala Magic",
    address: "333 Curry St, Flavor City",
    cuisine: "Indian",
    image:
      "https://i0.wp.com/masalamagicsharjah.com/wp-content/uploads/2023/05/cropped-logo.jpeg?fit=812%2C755&ssl=1",
    menu: [
      {
        id: 9751,
        item: "Masala Maggie",
        price: 6.0,
        image:
          "https://spoonsofflavor.com/wp-content/uploads/2019/09/Simple-Maggi-Masala-Noodles-At-Home.jpg",
      },
      {
        id: 5661,
        item: "Vegetable maggie",
        price: 3.0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7Dt0rYuYavS_LIV-6ibQOWcYpiToZ659aw&s",
      },
      {
        id: 661,
        item: "Pahadi maggie",
        price: 4.0,
        image:
          "https://content.jdmagicbox.com/v2/comp/jaunpur/v1/9999p5452.5452.240406054941.n2v1/catalogue/pahari-maggi-point-husainabad-jaunpur-coffee-shops-xzx4o8q2uo.jpg?fit=around%7C350:350&crop=350:350;*,*",
      },
    ],
  },
  {
    id: 14,
    name: "Tikka Treats",
    address: "444 Chicken Ave, Tikka Town",
    cuisine: "Indian",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqeOn6WUMBVHXsfibGF4j-bZZ1jbOZ5yZBA&s",
    menu: [
      {
        id: 331,
        item: "Chicken tikka",
        price: 16.0,
        image:
          "https://t4.ftcdn.net/jpg/08/97/18/55/360_F_897185587_GdCrh6tfc58FR3ihsJmrK1ak3D3KWcL0.jpg",
      },
      {
        id: 551,
        item: "Mutton tikka",
        price: 22.0,
        image:
          "https://glebekitchen.com/wp-content/uploads/2016/12/chickentikkakebab.jpg",
      },
      {
        id: 551,
        item: " Butter Naan",
        price: 2.0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbhIBt1bfid1hVKLprQyN3Xd31fHVTyfmKg&s",
      },
    ],
  },
  {
    id: 15,
    name: "Naan Nation",
    address: "555 Bread Blvd, Naan City",
    cuisine: "Indian",
    image:
      "https://photos.tryotter.com/cdn-cgi/image/fit=crop,width=640,height=429,quality=60,format=auto/storefront-photos/03f2d394-1a00-433d-88f1-414231767dc3.jpeg",
    menu: [
      {
        id: 46621,
        item: "Rumali Naan",
        price: 4.0,
        image:
          "https://www.shutterstock.com/image-photo/tandoori-roti-traditional-indian-flatbread-600nw-2280405317.jpg",
      },
      {
        id: 5541,
        item: "Tandoori Naan",
        price: 2.0,
        image:
          "https://static.toiimg.com/thumb/53338316.cms?width=1200&height=900",
      },
      {
        id: 321,
        item: "Kashmiri Naan",
        price: 5.0,
        image:
          "https://saltedmint.com/wp-content/uploads/2024/01/Naan-Bread-2.jpg",
      },
    ],
  },
  {
    id: 16,
    name: "Punjab grill",
    address: "555 East Mohali, Mohali",
    cuisine: "Indian",
    image:
      "https://photos.tryotter.com/cdn-cgi/image/fit=crop,width=640,height=429,quality=60,format=auto/storefront-photos/03f2d394-1a00-433d-88f1-414231767dc3.jpeg",
    menu: [
      {
        id: 150,
        item: "Butter Chicken",
        price: 4.0,
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400",
      },
      {
        id: 1390,
        item: "Chicken 65",
        price: 2.0,
        image:
          "https://myfoodstory.com/wp-content/uploads/2021/05/Chicken-65-Spicy-Crispy-3.jpg",
      },
      {
        id: 145,
        item: "Bagheli Chicken",
        price: 5.0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrkGuxGcTciZXk9ku-bJwakMeCUvkXAyhZYA&s",
      },
    ],
  },
];
let MenFashion = [
  {
    id: 1,
    name: "Track Pant",
    image: "https://berge.co.in/wp-content/uploads/2022/06/KP10-BLACK-1-v3.jpg",
    price: "$99",
    size: "M",
  },
  {
    id: 2,
    name: "Cap",
    image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg",
    price: " 80",
    size: "S",
  },
  {
    id: 3,
    name: "Denim",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/5/QV/ZJ/IV/38809070/denim-fabric-500x500.jpg",
    price: "$70",
    size: "L",
  },
  {
    id: 4,
    name: "Jacket",
    image:
      "https://www.mrporter.com/variants/images/1647597331238803/in/w2000_q60.jpg",
    price: "$69",
    size: "M",
  },
  {
    id: 5,
    name: "T-shirt",
    image:
      "https://cdn.mainlinemenswear.co.uk/images/w_900,h_900/f_auto,q_auto/mainlinemenswear/shopimages/products/205969/Mainimage.jpg/EA7%20Emporio%20Armani%20Logo%20T%20Shirt%20Black",
    price: "$49",
    size: "L",
  },
  {
    id: 6,
    name: "Loose Fit Jeans",
    image: "https://offduty.in/cdn/shop/files/IMG_8015_540x.jpg?v=1695925884",
    price: "$45",
    size: "S",
  },
  {
    id: 7,
    name: "Loose Fit Shirt",
    image:
      "https://www.westside.com/cdn/shop/products/300899568BLACK_2.jpg?v=1700645301",
    price: "$49",
    size: "M",
  },
  {
    id: 8,
    name: "Cargo",
    image: "https://m.media-amazon.com/images/I/71mqVXQ+U+L._AC_UY1100_.jpg",
    price: "$55",
    size: "L",
  },
  {
    id: 9,
    name: "Jogger",
    image:
      "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019386676_437Wx649H_202309241921301.jpeg",
    price: "$30",
    size: "M",
  },
  {
    id: 10,
    name: "Black Jeans",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/3/39623585-12811364.jpg?auto=format&w=390",
    price: "Price: $89",
    size: "S",
  },
  {
    id: 17,
    name: "Black-Jacket",
    image:
      "https://www.mrporter.com/variants/images/1647597331238803/in/w2000_q60.jpg",
    price: "$69",
    size: "L",
  },
  {
    id: 11,
    name: "Kurta",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/Wistful_Whisper7.jpg",
    price: "$39",
    size: "S",
  },
  {
    id: 12,
    name: "SweatShirt",
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/25154390/2023/9/25/2d330ce2-d3d1-4fb8-9fe3-42e0ffea02f81695647436879HMRelaxed-FitDrop-ShoulderSweatshirt1.jpg",
    price: "$49",
    size: "S",
  },
  {
    id: 13,
    name: "Hoddie",
    image:
      "https://veirdo.in/cdn/shop/files/Grey_Plain_Regular_Hoodie.jpg?v=1729761295",
    price: "$15",
    size: "L",
  },
  {
    id: 14,
    name: "Dark Blue Shirt",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/r/h/y/m-blue-formal-shirt-m-atlanta-impex-original-imaggf2c8shzajgk.jpeg?q=90&crop=false",
    price: "$59",
    size: "M",
  },
  {
    id: 15,
    name: "White Shirt",
    image:
      "https://rukminim2.flixcart.com/image/750/900/xif0q/shirt/t/v/c/xl-kcsh-fo-1647-wh-fubar-original-imah4zensmpmzgbn.jpeg?q=20&crop=false",
    price: "$23",
    size: "S",
  },
  {
    id: 16,
    name: "Black Shirt",
    image:
      "https://blackberrys.com/cdn/shop/files/formal-shirt-in-black-dawn-blackberrys-clothing-1.jpg?v=1685950192",
    price: "$75",
    size: "L",
  },
];
let WomenFashion = [
  {
    id: 1,
    name: "Track Pant",
    image:
      "https://rukminim2.flixcart.com/image/750/900/xif0q/track-pant/l/p/7/l-cottan-lower-lakshita-original-imagzvjgxwyae5ka.jpeg?q=20&crop=false",
    price: "$99",
    size: "S",
  },
  {
    id: 2,
    name: "Cap",
    image:
      "https://www.cockatooindia.com/cdn/shop/files/0_a6091d28-fc95-45f2-ab34-0ba1e933d0e3.jpg?v=1696562091",
    price: "$80",
    size: "S",
  },
  {
    id: 3,
    name: "Denim",
    image:
      "https://sassafras.in/cdn/shop/files/SFTOPS42056_SFJEAN0575-1_6c755c76-d8ce-4b69-b89a-b04851c673de_1800x.jpg?v=1736168969",
    price: "$70",
    size: "L",
  },
  {
    id: 4,
    name: "Jacket",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/jacket/r/p/m/l-no-oa-0005-carrot-m-ellipse-original-imagpfpz9hrvvddq.jpeg?q=90&crop=false",
    price: "$69",
    size: "M",
  },
  {
    id: 5,
    name: "T-shirt",
    image:
      "https://muselot.in/cdn/shop/products/Plain-t-shirts---Brown-plain-women_s-t-shirt---MUSELOT.jpg?v=1658090229",
    price: "$49",
    size: "M",
  },
  {
    id: 6,
    name: "Loose Fit Jeans",
    image:
      "https://images.bestsellerclothing.in/data/only/13-july-2023/122566501_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
    price: "$45",
    size: "S",
  },
  {
    id: 7,
    name: "Loose Fit Shirt",
    image:
      "https://levi.in/cdn/shop/files/A50910005_01_Elevated_bda80ebe-132e-4ead-ab10-4c3cde5a4478.jpg?v=1725604079",
    price: "$49",
    size: "L",
  },
  {
    id: 8,
    name: "Cargo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQ4w9fAs7wIz2tahQdRqYhuylVkgJF6DWkQ&s",
    price: "$55",
    size: "S",
  },
  {
    id: 17,
    name: "Jacket",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/jacket/r/p/m/l-no-oa-0005-carrot-m-ellipse-original-imagpfpz9hrvvddq.jpeg?q=90&crop=false",
    price: "$69",
    size: "S",
  },
  {
    id: 9,
    name: "Jogger",
    image:
      "https://www.jiomart.com/images/product/original/rvtwyyyfcx/buynewtrend-black-toko-lycra-jogger-pant-for-women-product-images-rvtwyyyfcx-2-202205152022.jpg?im=Resize=(500,630)",
    price: "$30",
    size: "M",
  },
  {
    id: 10,
    name: "Black Jeans",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20231128/1gkf/65658ae8afa4cf41f5a50fbd/-473Wx593H-469537014-black-MODEL.jpg",
    price: "Price: $89",
    size: "L",
  },
  {
    id: 11,
    name: "Kurti",
    image:
      "https://www.urbanwardrobe.in/cdn/shop/products/Dress5.jpg?v=1594824968",
    price: "$39",
    size: "S",
  },
  {
    id: 12,
    name: "SweatShirt",
    image: "https://images.meesho.com/images/products/345807383/fohx7_512.webp",
    price: "$49",
    size: "M",
  },
  {
    id: 13,
    name: "Hoddie",
    image:
      "https://punjabiadda.in/cdn/shop/files/punjabi-aagaye-oye-hoodie-black_1200x.jpg?v=1729581871",
    price: "$15",
    size: "L",
  },
  {
    id: 14,
    name: "Dark Blue Shirt",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230624/mHwl/64964ef3a9b42d15c9d9ec5b/-473Wx593H-465282949-navy-MODEL.jpg",
    price: "$59",
    size: "S",
  },
  {
    id: 15,
    name: "White Shirt",
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/14615110/2021/9/10/c4351ed5-9b83-41da-b81e-05faae0a13051631265003631-Roadster-Women-Shirts-6201631265003003-1.jpg",
    price: "$23",
    size: "M",
  },
  {
    id: 16,
    name: "Black Shirt",
    image:
      "https://www.lushlayers.in/cdn/shop/files/Untitleddesign-2024-01-10T155826.738.png?v=1704882740",
    price: "$75",
    size: "M",
  },
];
let KidsFashion = [
  {
    id: 1,
    name: "Track Pant",
    image: "https://sakuya.in/cdn/shop/products/41X56_xLg4L.jpg?v=1721381269",
    price: 99,
    size: "S",
  },
  {
    id: 2,
    name: "Cap",
    image:
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/12f3c9ec-3735-4efc-ba1b-d9032948988d/K+NK+CLUB+CAP+US+CB+BUBBLE.png",
    price: 80,
    size: "L",
  },
  {
    id: 3,
    name: "Denim",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2021/1/RE/SO/MU/96791297/product-jpeg-500x500.jpg",
    price: 70,
    size: "L",
  },
  {
    id: 4,
    name: "Jacket",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/1/SX/FN/TE/3310206/kids-winter-jacket-500x500.jpg",
    price: 69,
    size: "M",
  },
  {
    id: 17,
    name: "Boys Jacket",
    image:
      "https://www.shutterstock.com/image-photo/cute-little-boy-playing-outdoors-260nw-2515143295.jpg",
    price: 59,
    size: "S",
  },
  {
    id: 5,
    name: "T-shirt",
    image: "https://printnstyle.in/wp-content/uploads/2024/11/CRMS-KID-08.jpg",
    price: 49,
    size: "S",
  },
  {
    id: 6,
    name: "Loose Fit Jeans",
    image:
      "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/30144766/2024/7/8/2bfe6a50-677f-4a4b-9d65-73b203094ae71720413283849HMBoysLooseFitJeans1.jpg",
    price: 45,
    size: "L",
  },
  {
    id: 7,
    name: "Loose Fit Shirt",
    image: "https://images.meesho.com/images/products/283490788/negwt_512.webp",
    price: 39,
    size: "L",
  },
  {
    id: 8,
    name: "Cargo",
    image:
      "https://5.imimg.com/data5/CS/LB/UM/SELLER-3915900/chino-trousers-500x500.jpeg",
    price: 55,
    size: "M",
  },
  {
    id: 9,
    name: "Jogger",
    image:
      "https://sf-clothing.com/wp-content/uploads/2018/05/SM271_WHITEOXFORDNAVY_SM425_NAVY_24_01_exp2028-scaled.jpg",
    price: 30,
    size: "S",
  },
  {
    id: 10,
    name: "Black Jeans",
    image: "https://m.media-amazon.com/images/I/5175Q45iyiL._AC_UY350_.jpg",
    price: 64,
    size: "M",
  },
  {
    id: 11,
    name: "Kurta",
    image:
      "https://themomstore.in/cdn/shop/files/regal-white-girls-kurta-pajama-532912.jpg?v=1721710333",
    price: 102,
    size: "L",
  },
  {
    id: 12,
    name: "SweatShirt",
    image:
      "https://thebanyantee.com/cdn/shop/files/kids-hoodie-2-baby-pink.jpg?v=1721906574&width=1445",
    price: 61,
    size: "S",
  },
  {
    id: 13,
    name: "Hoddie",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDebkhy2EokqJI1eelN1bs-E1zcRyhPMEskw&s",
    price: 13,
    size: "M",
  },
  {
    id: 14,
    name: "Dark Blue Shirt",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/q/9/q/4-5-years-821-cloud-kids-original-imags245hgbaa8un.jpeg?q=90&crop=false",
    price: 29,
    size: "S",
  },
  {
    id: 15,
    name: "White Shirt",
    image: "https://m.media-amazon.com/images/I/61IFIBPVkAL._AC_UY1100_.jpg",
    price: 23,
    size: "L",
  },
  {
    id: 16,
    name: "Black Shirt",
    image: "https://homafy.com/wp-content/uploads/2024/05/polo-tshirt-set.webp",
    price: 75,
    size: "M",
  },
];
let Beauty = [
  {
    id: 1,
    name: "",
    image: "",
    price: 99,
   
  },
  {
    id: 2,
    name: "Cap",
    image: "",
    price: 80,
    size: "L",
  },
  {
    id: 3,
    name: "Denim",
    image:
      "",
    price: 70,
  
  },
  {
    id: 4,
    name: "Jacket",
    image:
      "",
    price: 69,
  
  },
  {
    id: 17,
    name: "Boys Jacket",
    image:
      "",
    price: 59,
  
  },
  {
    id: 5,
    name: "T-shirt",
    image: "",
    price: 49,
   
  },
  {
    id: 6,
    name: "Loose Fit Jeans",
    image:
      "",
    price: 45,
    
  },
  {
    id: 7,
    name: "Loose Fit Shirt",
    image: "",
    price: 39,
 
  },
  {
    id: 8,
    name: "Cargo",
    image:
      "",
    price: 55,
  
  },
  {
    id: 9,
    name: "Jogger",
    image:
      "",
    price: 30,
   
  },
  {
    id: 10,
    name: "Black Jeans",
    image: "",
    price: 64,
  
  },
  {
    id: 11,
    name: "Kurta",
    image:
      "",
    price: 102,

  },
  {
    id: 12,
    name: "SweatShirt",
    image:
      "",
    price: 61,
   
  },
  {
    id: 13,
    name: "Hoddie",
    image:
      "",
    price: 13,
   
  },
  {
    id: 14,
    name: "Dark Blue Shirt",
    image:
      "",
    price: 29,
   
  },
  {
    id: 15,
    name: "White Shirt",
    image: "",
    price: 23,
  
  },
  {
    id: 16,
    name: "Black Shirt",
    image: "",
    price: 75,
   
  },
];

// clothing API
app.get("/fashion", (req, res) => {
  const { section } = req.query;

  if (section === "men") {
    return res.json(MenFashion);
  } else if (section === "women") {
    return res.json(WomenFashion);
  } else if (section === "kids") {
    return res.json(KidsFashion);
  } else {
    return res.status(400).json({ error: "Invalid section" });
  }
});
app.get("/fashion/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);

  // Check which section is being requested
  let sectionData;
  if (req.query.section === "men") {
    sectionData = MenFashion;
  } else if (req.query.section === "women") {
    sectionData = WomenFashion;
  } else if (req.query.section === "kids") {
    sectionData = KidsFashion;
  } else {
    return res.status(400).json({ error: "Invalid section" });
  }

  // Find the product by ID in the selected section
  const product = sectionData.find((item) => item.id === productId);

  if (product) {
    res.json(product); // Return the specific product details
  } else {
    res.status(404).json({ message: "Product not found" }); // If not found, return 404
  }
});

// Get all Restaurants
app.get("/api/restaurants", (req, res) => {
  res.json(Restaurants);
});
app.get("/api/restaurants/:id", (req, res) => {
  const restaurantId = parseInt(req.params.id, 10);
  const restaurant = Restaurants.find((r) => r.id === restaurantId);

  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404).json({ message: "Restaurant not found" });
  }
});

// Get all DineIN
app.get("/api/dineout", (req, res) => {
  res.json(DineIn);
});
app.get("/api/dineout/:id2", (req, res) => {
  const restaurantId = parseInt(req.params.id2, 10);
  const restaurant = DineIn.find((r) => r.id === restaurantId);

  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404).json({ message: "Restaurant not found" });
  }
});

// Get all instaitem

app.get("/api/instamart", (req, res) => {
  res.json(Instamart);
});
app.get("/api/instamart/:id", (req, res) => {
  const restaurantId = parseInt(req.params.id, 10);
  const restaurant = Instamart.find((r) => r.id === restaurantId);

  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404).json({ message: "Restaurant not found" });
  }
});

// get all trending item;
app.get("/api/trending", (req, res) => {
  res.json(trending);
});
app.get("/api/trending/:id", (req, res) => {
  const trendingId = parseInt(req.params.id, 10);
  const trendingItem = trending.find((r) => r.id === trendingId);

  if (trendingItem) {
    res.json(trendingItem);
  } else {
    res.status(404).json({ message: "Trending not found" });
  }
});

app.listen(3500);
