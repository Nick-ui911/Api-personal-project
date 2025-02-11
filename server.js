const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const data = {
  restaurants: [
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
  ],
  Instamart: [
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
  ],
  DineIn: [
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
  ],
  Trending: [
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
      image:
        "https://tiimg.tistatic.com/fp/1/008/999/makeup-foundation-631.jpg",
      price: 32,
    },
    {
      id: 16,
      name: "Punjabi Tadka",
      image:
        "https://images.jdmagicbox.com/quickquotes/images_main/haldiram-punjabi-tadka-150-gms-271268697-j610jxdw.jpg",
      price: 15,
    },
  ],
  Fitness: [
    {
      id: 1,
      name: "",
      image: "",
      price: 99,
    },
    {
      id: 2,
      name: "",
      image: "",
      price: 80,
      size: "L",
    },
    {
      id: 3,
      name: "",
      image: "",
      price: 70,
    },
    {
      id: 4,
      name: "",
      image: "",
      price: 69,
    },
    {
      id: 17,
      name: "",
      image: "",
      price: 59,
    },
    {
      id: 5,
      name: "",
      image: "",
      price: 49,
    },
    {
      id: 6,
      name: "",
      image: "",
      price: 45,
    },
    {
      id: 7,
      name: "",
      image: "",
      price: 39,
    },
    {
      id: 8,
      name: "",
      image: "",
      price: 55,
    },
    {
      id: 9,
      name: "",
      image: "",
      price: 30,
    },
    {
      id: 10,
      name: "",
      image: "",
      price: 64,
    },
    {
      id: 11,
      name: "",
      image: "",
      price: 102,
    },
    {
      id: 12,
      name: "",
      image: "",
      price: 61,
    },
    {
      id: 13,
      name: "",
      image: "",
      price: 13,
    },
    {
      id: 14,
      name: "",
      image: "",
      price: 29,
    },
    {
      id: 15,
      name: "",
      image: "",
      price: 23,
    },
    {
      id: 16,
      name: "",
      image: "",
      price: 75,
    },
  ],
  HomeKitchen: [
    {
      id: 1,
      name: "",
      image: "",
      price: 99,
    },
    {
      id: 2,
      name: "",
      image: "",
      price: 80,
      size: "L",
    },
    {
      id: 3,
      name: "",
      image: "",
      price: 70,
    },
    {
      id: 4,
      name: "",
      image: "",
      price: 69,
    },
    {
      id: 17,
      name: "",
      image: "",
      price: 59,
    },
    {
      id: 5,
      name: "",
      image: "",
      price: 49,
    },
    {
      id: 6,
      name: "",
      image: "",
      price: 45,
    },
    {
      id: 7,
      name: "",
      image: "",
      price: 39,
    },
    {
      id: 8,
      name: "",
      image: "",
      price: 55,
    },
    {
      id: 9,
      name: "",
      image: "",
      price: 30,
    },
    {
      id: 10,
      name: "",
      image: "",
      price: 64,
    },
    {
      id: 11,
      name: "",
      image: "",
      price: 102,
    },
    {
      id: 12,
      name: "",
      image: "",
      price: 61,
    },
    {
      id: 13,
      name: "",
      image: "",
      price: 13,
    },
    {
      id: 14,
      name: "",
      image: "",
      price: 29,
    },
    {
      id: 15,
      name: "",
      image: "",
      price: 23,
    },
    {
      id: 16,
      name: "",
      image: "",
      price: 75,
    },
  ],
  Stationary: [
    {
      id: 1,
      name: "",
      image: "",
      price: 99,
    },
    {
      id: 2,
      name: "",
      image: "",
      price: 80,
      size: "L",
    },
    {
      id: 3,
      name: "",
      image: "",
      price: 70,
    },
    {
      id: 4,
      name: "",
      image: "",
      price: 69,
    },
    {
      id: 17,
      name: "",
      image: "",
      price: 59,
    },
    {
      id: 5,
      name: "",
      image: "",
      price: 49,
    },
    {
      id: 6,
      name: "",
      image: "",
      price: 45,
    },
    {
      id: 7,
      name: "",
      image: "",
      price: 39,
    },
    {
      id: 8,
      name: "",
      image: "",
      price: 55,
    },
    {
      id: 9,
      name: "",
      image: "",
      price: 30,
    },
    {
      id: 10,
      name: "",
      image: "",
      price: 64,
    },
    {
      id: 11,
      name: "",
      image: "",
      price: 102,
    },
    {
      id: 12,
      name: "",
      image: "",
      price: 61,
    },
    {
      id: 13,
      name: "",
      image: "",
      price: 13,
    },
    {
      id: 14,
      name: "",
      image: "",
      price: 29,
    },
    {
      id: 15,
      name: "",
      image: "",
      price: 23,
    },
    {
      id: 16,
      name: "",
      image: "",
      price: 75,
    },
  ],
  Books: [
    {
      id: 1,
      name: "",
      image: "",
      price: 99,
    },
    {
      id: 2,
      name: "",
      image: "",
      price: 80,
      size: "L",
    },
    {
      id: 3,
      name: "",
      image: "",
      price: 70,
    },
    {
      id: 4,
      name: "",
      image: "",
      price: 69,
    },
    {
      id: 17,
      name: "",
      image: "",
      price: 59,
    },
    {
      id: 5,
      name: "",
      image: "",
      price: 49,
    },
    {
      id: 6,
      name: "",
      image: "",
      price: 45,
    },
    {
      id: 7,
      name: "",
      image: "",
      price: 39,
    },
    {
      id: 8,
      name: "",
      image: "",
      price: 55,
    },
    {
      id: 9,
      name: "",
      image: "",
      price: 30,
    },
    {
      id: 10,
      name: "",
      image: "",
      price: 64,
    },
    {
      id: 11,
      name: "",
      image: "",
      price: 102,
    },
    {
      id: 12,
      name: "",
      image: "",
      price: 61,
    },
    {
      id: 13,
      name: "",
      image: "",
      price: 13,
    },
    {
      id: 14,
      name: "",
      image: "",
      price: 29,
    },
    {
      id: 15,
      name: "",
      image: "",
      price: 23,
    },
    {
      id: 16,
      name: "",
      image: "",
      price: 75,
    },
  ],
  Toys: [
    {
      id: 1,
      name: "",
      image: "",
      price: 99,
    },
    {
      id: 2,
      name: "",
      image: "",
      price: 80,
      size: "L",
    },
    {
      id: 3,
      name: "",
      image: "",
      price: 70,
    },
    {
      id: 4,
      name: "",
      image: "",
      price: 69,
    },
    {
      id: 17,
      name: "",
      image: "",
      price: 59,
    },
    {
      id: 5,
      name: "",
      image: "",
      price: 49,
    },
    {
      id: 6,
      name: "",
      image: "",
      price: 45,
    },
    {
      id: 7,
      name: "",
      image: "",
      price: 39,
    },
    {
      id: 8,
      name: "",
      image: "",
      price: 55,
    },
    {
      id: 9,
      name: "",
      image: "",
      price: 30,
    },
    {
      id: 10,
      name: "",
      image: "",
      price: 64,
    },
    {
      id: 11,
      name: "",
      image: "",
      price: 102,
    },
    {
      id: 12,
      name: "",
      image: "",
      price: 61,
    },
    {
      id: 13,
      name: "",
      image: "",
      price: 13,
    },
    {
      id: 14,
      name: "",
      image: "",
      price: 29,
    },
    {
      id: 15,
      name: "",
      image: "",
      price: 23,
    },
    {
      id: 16,
      name: "",
      image: "",
      price: 75,
    },
  ],
  MenFashion: [
    {
      id: 1,
      name: "Track Pant",
      image:
        "https://berge.co.in/wp-content/uploads/2022/06/KP10-BLACK-1-v3.jpg",
      price: 99,
      size: "M",
    },
    {
      id: 2,
      name: "Cap",
      image:
        "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg",
      price: 80,
      size: "S",
    },
    {
      id: 3,
      name: "Denim",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/5/QV/ZJ/IV/38809070/denim-fabric-500x500.jpg",
      price: 70,
      size: "L",
    },
    {
      id: 4,
      name: "Jacket",
      image:
        "https://www.mrporter.com/variants/images/1647597331238803/in/w2000_q60.jpg",
      price: 59,
      size: "M",
    },
    {
      id: 5,
      name: "T-shirt",
      image:
        "https://cdn.mainlinemenswear.co.uk/images/w_900,h_900/f_auto,q_auto/mainlinemenswear/shopimages/products/205969/Mainimage.jpg/EA7%20Emporio%20Armani%20Logo%20T%20Shirt%20Black",
      price: 69,
      size: "L",
    },
    {
      id: 6,
      name: "Loose Fit Jeans",
      image: "https://offduty.in/cdn/shop/files/IMG_8015_540x.jpg?v=1695925884",
      price: 45,
      size: "S",
    },
    {
      id: 7,
      name: "Loose Fit Shirt",
      image:
        "https://www.westside.com/cdn/shop/products/300899568BLACK_2.jpg?v=1700645301",
      price: 49,
      size: "M",
    },
    {
      id: 8,
      name: "Cargo",
      image: "https://m.media-amazon.com/images/I/71mqVXQ+U+L._AC_UY1100_.jpg",
      price: 55,
      size: "L",
    },
    {
      id: 9,
      name: "Jogger",
      image:
        "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019386676_437Wx649H_202309241921301.jpeg",
      price: 30,
      size: "M",
    },
    {
      id: 10,
      name: "Black Jeans",
      image:
        "https://imagescdn.louisphilippe.com/img/app/product/3/39623585-12811364.jpg?auto=format&w=390",
      price: 89,
      size: "S",
    },
    {
      id: 17,
      name: "Black-Jacket",
      image:
        "https://www.mrporter.com/variants/images/1647597331238803/in/w2000_q60.jpg",
      price: 49,
      size: "L",
    },
    {
      id: 11,
      name: "Kurta",
      image:
        "https://alphasilver.productsalphawizz.com/uploads/media/2024/thumb-sm/Wistful_Whisper7.jpg",
      price: 39,
      size: "S",
    },
    {
      id: 12,
      name: "SweatShirt",
      image:
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/25154390/2023/9/25/2d330ce2-d3d1-4fb8-9fe3-42e0ffea02f81695647436879HMRelaxed-FitDrop-ShoulderSweatshirt1.jpg",
      price: 29,
      size: "S",
    },
    {
      id: 13,
      name: "Hoddie",
      image:
        "https://veirdo.in/cdn/shop/files/Grey_Plain_Regular_Hoodie.jpg?v=1729761295",
      price: 11,
      size: "L",
    },
    {
      id: 14,
      name: "Dark Blue Shirt",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/r/h/y/m-blue-formal-shirt-m-atlanta-impex-original-imaggf2c8shzajgk.jpeg?q=90&crop=false",
      price: 67,
      size: "M",
    },
    {
      id: 15,
      name: "White Shirt",
      image:
        "https://rukminim2.flixcart.com/image/750/900/xif0q/shirt/t/v/c/xl-kcsh-fo-1647-wh-fubar-original-imah4zensmpmzgbn.jpeg?q=20&crop=false",
      price: 23,
      size: "S",
    },
    {
      id: 16,
      name: "Black Shirt",
      image:
        "https://blackberrys.com/cdn/shop/files/formal-shirt-in-black-dawn-blackberrys-clothing-1.jpg?v=1685950192",
      price: 77,
      size: "L",
    },
  ],
  WomenFashion: [
    {
      id: 1,
      name: "Track Pant",
      image:
        "https://rukminim2.flixcart.com/image/750/900/xif0q/track-pant/l/p/7/l-cottan-lower-lakshita-original-imagzvjgxwyae5ka.jpeg?q=20&crop=false",
      price: 99,
      size: "S",
    },
    {
      id: 2,
      name: "Cap",
      image:
        "https://www.cockatooindia.com/cdn/shop/files/0_a6091d28-fc95-45f2-ab34-0ba1e933d0e3.jpg?v=1696562091",
      price: 60,
      size: "S",
    },
    {
      id: 3,
      name: "Denim",
      image:
        "https://sassafras.in/cdn/shop/files/SFTOPS42056_SFJEAN0575-1_6c755c76-d8ce-4b69-b89a-b04851c673de_1800x.jpg?v=1736168969",
      price: 70,
      size: "L",
    },
    {
      id: 4,
      name: "Jacket",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/jacket/r/p/m/l-no-oa-0005-carrot-m-ellipse-original-imagpfpz9hrvvddq.jpeg?q=90&crop=false",
      price: 11,
      size: "M",
    },
    {
      id: 5,
      name: "T-shirt",
      image:
        "https://muselot.in/cdn/shop/products/Plain-t-shirts---Brown-plain-women_s-t-shirt---MUSELOT.jpg?v=1658090229",
      price: 19,
      size: "M",
    },
    {
      id: 6,
      name: "Loose Fit Jeans",
      image:
        "https://images.bestsellerclothing.in/data/only/13-july-2023/122566501_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
      price: 54,
      size: "S",
    },
    {
      id: 7,
      name: "Loose Fit Shirt",
      image:
        "https://levi.in/cdn/shop/files/A50910005_01_Elevated_bda80ebe-132e-4ead-ab10-4c3cde5a4478.jpg?v=1725604079",
      price: 49,
      size: "L",
    },
    {
      id: 8,
      name: "Cargo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQ4w9fAs7wIz2tahQdRqYhuylVkgJF6DWkQ&s",
      price: 55,
      size: "S",
    },
    {
      id: 17,
      name: "Jacket",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/jacket/r/p/m/l-no-oa-0005-carrot-m-ellipse-original-imagpfpz9hrvvddq.jpeg?q=90&crop=false",
      price: 79,
      size: "S",
    },
    {
      id: 9,
      name: "Jogger",
      image:
        "https://www.jiomart.com/images/product/original/rvtwyyyfcx/buynewtrend-black-toko-lycra-jogger-pant-for-women-product-images-rvtwyyyfcx-2-202205152022.jpg?im=Resize=(500,630)",
      price: 31,
      size: "M",
    },
    {
      id: 10,
      name: "Black Jeans",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20231128/1gkf/65658ae8afa4cf41f5a50fbd/-473Wx593H-469537014-black-MODEL.jpg",
      price: 89,
      size: "L",
    },
    {
      id: 11,
      name: "Kurti",
      image:
        "https://www.urbanwardrobe.in/cdn/shop/products/Dress5.jpg?v=1594824968",
      price: 82,
      size: "S",
    },
    {
      id: 12,
      name: "SweatShirt",
      image:
        "https://images.meesho.com/images/products/345807383/fohx7_512.webp",
      price: 31,
      size: "M",
    },
    {
      id: 13,
      name: "Hoddie",
      image:
        "https://punjabiadda.in/cdn/shop/files/punjabi-aagaye-oye-hoodie-black_1200x.jpg?v=1729581871",
      price: 15,
      size: "L",
    },
    {
      id: 14,
      name: "Dark Blue Shirt",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230624/mHwl/64964ef3a9b42d15c9d9ec5b/-473Wx593H-465282949-navy-MODEL.jpg",
      price: 64,
      size: "S",
    },
    {
      id: 15,
      name: "White Shirt",
      image:
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/14615110/2021/9/10/c4351ed5-9b83-41da-b81e-05faae0a13051631265003631-Roadster-Women-Shirts-6201631265003003-1.jpg",
      price: 23,
      size: "M",
    },
    {
      id: 16,
      name: "Black Shirt",
      image:
        "https://www.lushlayers.in/cdn/shop/files/Untitleddesign-2024-01-10T155826.738.png?v=1704882740",
      price: 34,
      size: "M",
    },
  ],
  KidsFashion: [
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
      image:
        "https://printnstyle.in/wp-content/uploads/2024/11/CRMS-KID-08.jpg",
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
      image:
        "https://images.meesho.com/images/products/283490788/negwt_512.webp",
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
      image:
        "https://homafy.com/wp-content/uploads/2024/05/polo-tshirt-set.webp",
      price: 75,
      size: "M",
    },
  ],
  Mobiles: {
    Samsung: [
      {
        id: 1,
        name: "Samsung M35",
        description: "Great Dolby Vision and HDR",
        price: 100,
        image:
          "https://img.etimg.com/photo/msid-98945560,imgsize-18294/SamsungGalaxyM33.jpg",
      },
      {
        id: 2,
        name: "Samsung M55",
        description: "Best 4K Display",
        price: 140,
        image:
          "https://www.greenware.lk/wp-content/uploads/2024/08/samsung-galaxy-m55-8gb-ram-256-storage-price-in-sri-lanka.webp",
      },
      {
        id: 3,
        name: "Samsung F14",
        description: "Great value With great features",
        price: 200,
        image:
          "https://images.samsung.com/is/image/samsung/assets/in/galaxy-5g/smartphones/F_mobile.jpg?$ORIGIN_JPG$",
      },
      {
        id: 4,
        name: "Samsung A54",
        description: "Smart with great features",
        price: 160,
        image:
          "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/the-best-samsung-smartphones-for-students/050423-mobile-720x960.jpg?$FB_TYPE_J_F_MO_JPG$",
      },
      {
        id: 5,
        name: "Samsung Galaxy A35",
        description: "Smart with Bezel-Free Design",
        price: 150,
        image: "https://m.media-amazon.com/images/I/41mrY8kveeL._SL500_.jpg",
      },
      {
        id: 6,
        name: "Samsung Galaxy A16",
        description: "1 Billion Color Combination",
        price: 170,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjBwXuS2tvBzCIpIKR_J0LEJgoExkTSudILW3seLdbS-ClNpAwfDagzv8voh66UaNqAA&usqp=CAU",
      },
      {
        id: 7,
        name: "Samsung Galaxy S20",
        description: "Segment Biggest Screen",
        price: 180,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFJZAd_e4M57HFSZhm7tiTnZYL-PfcWnPVSo2XOGvYle756Nx_wUBwh-24OZFJ-U4eaY&usqp=CAU",
      },
      {
        id: 8,
        name: "Samsung Galaxy S22 Ultra",
        description: "Android with great features",
        price: 130,
        image:
          "https://images.hindustantimes.com/tech/img/2020/08/28/1600x900/273221c6dfa8416f9a4150ec9f90696c-273221c6dfa8416f9a4150ec9f90696c-1_1598627513527_1598627704851.jpg",
      },
      {
        id: 9,
        name: "Samsung Galaxy S23",
        description: "LED Amoled Display with Google Connectivity",
        price: 109,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMg8rUWoV78WBGDSc_PnaZEqEKtedPMCZu6oelQAMIvSjoXjv46sJJJUS-zvqiaa2T53c&usqp=CAU",
      },
      {
        id: 10,
        name: "Samsung Galaxy S23 Ultra",
        description: "4k crystal Vision",
        price: 110,
        image:
          "https://m.media-amazon.com/images/I/61QNWgHXuiL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        id: 11,
        name: "Samsung Galaxy S24",
        description: "With Dolby sound System",
        price: 290,
        image:
          "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$",
      },
      {
        id: 12,
        name: "Samsung Galaxy S24 Ultra",
        description: "Smart WebOs With Great Value",
        price: 300,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2sUvpdmt-Yn0aqW0udipIM6-OqtTEOMfVIT2juR24Ef7Dn1VBgae7A4t90txeGRCfLg&usqp=CAU",
      },
      {
        id: 13,
        name: "Samsung Galaxy S25 Ultra",
        description: "OLED Screen with 4K Resolution",
        price: 219,
        image:
          "https://images.samsung.com/is/image/samsung/assets/levant/galaxy-5g/5g-products/3P-MO_Note20_20plus.jpg?$720_N_JPG$",
      },
      {
        id: 14,
        name: "Samsung Galaxy S25",
        description: "OLED Screen with 8K Resolution",
        price: 199,
        image:
          "https://fdn.gsmarena.com/imgroot/static/headers/makers/samsung-2024-1.jpg",
      },
      {
        id: 15,
        name: "Samsung Galaxy S24 FE",
        description: "4k Google With REGZA Power Audio",
        price: 189,
        image:
          "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pdp/galaxy-s21-fe-5g/gallery/SM-G990U-graphite-1.png?$product-details-jpg$",
      },
    ],
    Oneplus: [
      {
        id: 1,
        name: "ONEPLUS 9 PRO",
        description: "Comes with Inbuilt Stabliser",
        price: 100,
        image:
          "https://fdn.gsmarena.com/imgroot/static/headers/makers/oneplus-2023-1.jpg",
      },
      {
        id: 2,
        name: "ONEPLUS 10 PRO",
        description: "Best In all Condition",
        price: 140,
        image:
          "https://resize.indiatvnews.com/en/resize/newbucket/400_-/2024/05/oneplus-smartphone-1716464585.webp",
      },
      {
        id: 3,
        name: "ONEPLUS 8 PRO",
        description: "Top Selling Refrigarator",
        price: 200,
        image:
          "https://image01-in.oneplus.net/shop/202104/27/1-M00-24-8B-rB8bwmCICquAAhrYAAQn2Z0kPJQ373.png",
      },
      {
        id: 4,
        name: "ONEPLUS 7 PRO",
        description: "Nice Looking and Compact design",
        price: 160,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkELQZJXcnJu6vZMsnX_d-5zFD5seXK28Eg&s",
      },
      {
        id: 5,
        name: "ONEPLUS 11 PRO",
        description: "Segment Most Affordable",
        price: 150,
        image:
          "https://www.cnet.com/a/img/resize/8ac7a66855041a03b81a81905089dd0ae66627e1/hub/2023/02/05/ab0655f7-6cf3-4d8c-9d05-35c537d310fb/oneplus-11-review-cnet-lanxon-promo-14.jpg?auto=webp&fit=crop&height=362&width=644",
      },
      {
        id: 6,
        name: "ONEPLUS 12 PRO",
        description: "Side by Side door Refrigarator",
        price: 170,
        image: "https://m.media-amazon.com/images/I/61BT6TG56vL.jpg",
      },
      {
        id: 7,
        name: "LONEPLUS 13 PRO",
        description: "401l Frost Free Double Door",
        price: 180,
        image:
          "https://image01-in.oneplus.net/media/202412/17/8ace7f0329d6b4f98f3f4194540623a5.png?x-amz-process=image/format,webp/quality,Q_80",
      },
      {
        id: 8,
        name: "ONEPLUS 9 ",
        description: "Frost Free And Convertible",
        price: 130,
        image:
          "https://images.moneycontrol.com/static-mcnews/2024/07/20240731080817_WhatsApp-Image-2024-07-31-at-13.11.59.jpeg?impolicy=website&width=770&height=431",
      },
      {
        id: 9,
        name: "ONEPLUS 10",
        description: "Comes With 180l capacity",
        price: 109,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZeWbFnFne7QvrElEFKvve3o9SEKKmEuJ5A&s",
      },
      {
        id: 10,
        name: "ONEPLUS 11",
        description: "Frost Free Double Door",
        price: 110,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcNMgUHopViD7xn6UA8dQzm6cotVuhD-_AQ&s",
      },
      {
        id: 11,
        name: "ONEPLUS 12",
        description: "Direct cooling System ",
        price: 290,
        image:
          "https://img.etimg.com/photo/msid-99124255,imgsize-14640/OnePlus10Pro5G.jpg",
      },
      {
        id: 12,
        name: "ONEPLUS 13",
        description: "5 Star Double Door",
        price: 300,
        image:
          "https://www.trustedreviews.com/wp-content/uploads/sites/54/2024/01/Best-OnePlus-phone-1.jpg",
      },
      {
        id: 13,
        name: "ONEPLUS Nord 3",
        description: "Convertible in Nature ",
        price: 219,
        image:
          "https://electronicparadise.in/cdn/shop/products/ONE-P-MOB-NORD-2T-CPH2401-J-FOG-12-256G1.jpg?v=1699387148&width=1500",
      },
      {
        id: 14,
        name: "ONEPLUS Nord 4",
        description: "Comes With Dual Freezer",
        price: 199,
        image:
          "https://image01-in.oneplus.net/ebp/202404/07/1-M00-52-A5-CpgM7mYR-t-AD9lKAAWYyOWBY10861.png?x-amz-process=image/format,webp/quality,Q_80",
      },
      {
        id: 15,
        name: "ONEPLUS Nord 3 CE",
        description: "Great Cooling In Segment ",
        price: 189,
        image:
          "https://www.androidauthority.com/wp-content/uploads/2022/02/OnePlus-Nord-CE-2-showing-back-in-hand.jpg",
      },
    ],
    Apple: [
      {
        id: 1,
        name: "Apple 11",
        description: "Comes With World Best Camera ,Best Display",
        price: 100,
        image:
          "https://m-cdn.phonearena.com/images/article/98169-wide-two_1200/Apple-iPhone-history-the-evolution-of-the-smartphone-that-started-it-all.jpg",
      },
      {
        id: 2,
        name: "Apple 12",
        description: "adjustable temperatures, and steam and sanitize cycles",
        price: 140,
        image:
          "https://aihome.com.my/wp-content/uploads/2023/12/Starlight-2.svg",
      },
      {
        id: 3,
        name: "Apple 13",
        description: "Comes With World Best Camera ,Best Display",
        price: 200,
        image:
          "https://controlz.world/cdn/shop/files/1_9b71ca73-e40f-4311-b194-3779d63471c2.png?v=1731921503",
      },
      {
        id: 4,
        name: "Apple 14",
        description: " Consider the material of the Titanium ",
        price: 160,
        image:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
      },
      {
        id: 5,
        name: "Apple 15",
        description: "Comes With World Best Camera ,Best Display",
        price: 150,
        image:
          "https://controlz.world/cdn/shop/files/1_9b71ca73-e40f-4311-b194-3779d63471c2.png?v=1731921503",
      },
      {
        id: 6,
        name: "Apple 16",
        description: "Great Piece of technology, Nothing Better Than it",
        price: 170,
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-plus.jpg",
      },
      {
        id: 7,
        name: "Apple 13 Pro",
        description: "Great Piece of technology, Nothing Better Than it",
        price: 180,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41oM9lJ9XVYPjrthmaJKF6Kf7A9hUEVWq_Q&s",
      },
      {
        id: 8,
        name: "Apple 14 Pro",
        description: "Comes With World Best Camera ,Best Display",
        price: 130,
        image:
          "https://5.imimg.com/data5/SELLER/Default/2023/9/341593572/KQ/KR/YQ/148978464/apple-iphone-14-pro-max-500x500.jpeg",
      },
      {
        id: 9,
        name: "Apple 15 Pro",
        description: " Consider Best Frame the material of the World ",
        price: 109,
        image:
          "https://imageio.forbes.com/specials-images/imageserve/65034bdac9e8c78c1728ff0b/Apple-iPhone-15-Pro-lineup-natural-titanium-geo/960x0.jpg?height=711&width=711&fit=bounds",
      },
      {
        id: 10,
        name: "Apple 12 Pro",
        description: "Consider Best Frame the material of the World ",
        price: 110,
        image:
          "https://media.istockphoto.com/id/2063514315/photo/hand-holding-iphone-14-pro-max-back-side-view-with-camera-block.jpg?s=612x612&w=0&k=20&c=qFpT2qXrynDZyDCxQRyxhdvdKPcYJxCPbVQb0vORcwg=",
      },
      {
        id: 11,
        name: "Apple 16 Pro",
        description: "Consider Best Frame the material of the World ",
        price: 290,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Zc6nqA3doH09uDTlQTj4jPOMzMlljO01Rg&s",
      },
      {
        id: 12,
        name: "Apple 15 Pro Max",
        description: "Consider Best Frame the material of the World ",
        price: 300,
        image:
          "https://tejarra-media.s3.amazonaws.com/20519/conversions/item_XXL_131938444_63e0d342870e0-medium.jpg",
      },
      {
        id: 13,
        name: "Apple 14 Pro Max",
        description: "Consider Best Frame the material of the World ",
        price: 219,
        image:
          "https://m.media-amazon.com/images/I/61PBLEFPoKL._AC_CR0%2C0%2C0%2C0_SX352_SY330_.jpg",
      },
      {
        id: 14,
        name: "Apple 16 Pro Max",
        description: "Consider Best Frame the material of the World ",
        price: 199,
        image:
          "https://tejarra-media.s3.amazonaws.com/20519/conversions/item_XXL_131938444_63e0d342870e0-medium.jpg",
      },
      {
        id: 15,
        name: "Apple 13 Pro Max",
        description: "Consider Best Frame the material of the World ",
        price: 189,
        image:
          "https://cdn.igp.com/f_auto,q_auto,t_pnopt19prodlp/products/p-apple-iphone-14-pro-128gb-206443-m.jpg",
      },
    ],
    Poco: [
      {
        id: 1,
        name: "Poco F5",
        description:
          "Consider the types of wash cycles available, such as fast spin cycles",
        price: 100,
        image:
          "https://static.toiimg.com/thumb/resizemode-4,msid-100110365,width-250/100110365.jpg",
      },
      {
        id: 2,
        name: "Poco F4",
        description: "adjustable temperatures, and steam and sanitize cycles",
        price: 140,
        image:
          "https://i02.appmifile.com/mi-com-product/fly-birds/poco-f4-gt/7a6612fe17f461a332e9a23a6d4595ec.jpg",
      },
      {
        id: 3,
        name: "Poco F3",
        description:
          "Front load washing machines are more energy efficient than older models, using less water and electricity",
        price: 200,
        image:
          "https://images-cdn.ubuy.co.in/659ecc41501b8c06272fab57-xiaomi-poco-f3-dual-sim-128gb-rom-6gb.jpg",
      },
      {
        id: 4,
        name: "Poco F2",
        description: " Consider the material of the drum ",
        price: 160,
        image:
          "https://www.gizmochina.com/wp-content/uploads/2020/03/poco_f2_pro-3-600x600.png",
      },
      {
        id: 5,
        name: "Poco F6",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 150,
        image: "https://static.digit.in/POCO-F6-300x300.jpg",
      },
      {
        id: 6,
        name: "Poco M5",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 170,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKztQEIGG6FD0bVhvzR8Zv3KnrhMIpBDDRKQ&s",
      },
      {
        id: 7,
        name: "Poco M4",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 180,
        image: "https://cdn.beebom.com/mobile/2024/02/Untitled-design-80.png",
      },
      {
        id: 8,
        name: "Poco M3",
        description:
          "Front load washing machines are more energy efficient than older models, using less water and electricity",
        price: 130,
        image:
          "https://images.hindustantimes.com/tech/img/2024/04/24/1600x900/After_OnePlus_Mobile_retailers_in_South_India_are__1713944507898_1713944508103.PNG",
      },
      {
        id: 9,
        name: "Poco X6 5G",
        description: " Consider the material of the drum ",
        price: 109,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3CDsjOATtbXwY_BQeo9TczIoc5qMTfMyDUhXdr-j5TL3UDHjkYuJv2oqjVCQzAzzki-o&usqp=CAU",
      },
      {
        id: 10,
        name: "Poco M7",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 110,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT19iFOK2o2TDnDlbn_643Hdnlj58Vwqn8_ezptzJEiPOy1f7O6YXAOhMwWFpFG_KAPs2c&usqp=CAU",
      },
      {
        id: 11,
        name: "Poco X7",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 290,
        image:
          "https://cdn1.smartprix.com/rx-iusiJUEbv-w1200-h1200/usiJUEbv.webp",
      },
      {
        id: 12,
        name: "Poco X6",
        description: " Consider the material of the drum ",
        price: 300,
        image: "https://m.media-amazon.com/images/I/412vT-AaI1L.jpg",
      },
      {
        id: 13,
        name: "Poco C3",
        description:
          "Front load washing machines are more energy efficient than older models, using less water and electricity",
        price: 219,
        image:
          "https://www.neolight.in/wp-content/uploads/2022/03/poco-c3-lime-green.jpeg",
      },
      {
        id: 14,
        name: "Poco C55",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 199,
        image:
          "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/y/9/g/-original-imagnfzyhh8gz8sd.jpeg?q=90&crop=false",
      },
      {
        id: 15,
        name: "Poco M6",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 189,
        image:
          "https://cdn.beebom.com/mobile/poco-x7-pro-5g/poco-x7-pro-5g-front-and-back-1.png",
      },
    ],
    Xiaomi: [
      {
        id: 1,
        name: "Redmi Note 9 pro",
        description:
          "Consider the types of wash cycles available, such as fast spin cycles",
        price: 100,
        image:
          "https://i02.appmifile.com/221_operatorx_operatorx_opx/10/04/2024/d7fc500ab13e4098303431e63578d1a8.png?thumb=1&w=500&q=85",
      },
      {
        id: 2,
        name: "Redmi Note 10 pro",
        description: "adjustable temperatures, and steam and sanitize cycles",
        price: 140,
        image:
          "https://i02.appmifile.com/998_operator_in/12/08/2021/3c3be7deaa0112fa9c5c4c0c3e1da35d.png",
      },
      {
        id: 3,
        name: "Redmi Note 11 pro",
        description:
          "Front load washing machines are more energy efficient than older models, using less water and electricity",
        price: 200,
        image:
          "https://images.fonearena.com/blog/wp-content/uploads/2024/07/Redmi-13-5G-1.jpg",
      },
      {
        id: 4,
        name: "Redmi Note 12 pro",
        description: " Consider the material of the drum ",
        price: 160,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JHWSNgwJ-iUOll8GFuYE-yk3ZMPBI_bKgaVbmPS2F5QlFXaGCJM5pBONJHXhhSCHuyU&usqp=CAU",
      },
      {
        id: 5,
        name: "Redmi Note 13 pro",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 150,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-65D1wIX8SgzBfvvygOeuRhqyoaQRAGe7Yw&s",
      },
      {
        id: 6,
        name: "Redmi Note 14 pro",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 170,
        image:
          "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733757689/Croma%20Assets/Communication/Mobiles/Images/312118_0_ze2flx.png",
      },
      {
        id: 7,
        name: "Redmi Note 15 pro",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 180,
        image:
          "https://www.91-img.com/gallery_images_uploads/4/5/45d5fe09cdac6210201ff84f13b85fcd0a0a4e45.jpg",
      },
      {
        id: 8,
        name: "Redmi Note 9 ",
        description:
          "Front load washing machines are more energy efficient than older models, using less water and electricity",
        price: 130,
        image:
          "https://i01.appmifile.com/webfile/globalimg/in/cms/BA2627B1-1735-7AE7-B5B3-304C3E73A99B.jpg",
      },
      {
        id: 9,
        name: "Redmi K20",
        description: " Consider the material of the drum ",
        price: 109,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZdPG0BQ9ZXnJz5v_bfl17P0Q35cHl3a1Og&s",
      },
      {
        id: 10,
        name: "Redmi K30",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 110,
        image:
          "https://ae01.alicdn.com/kf/S0c2d6356889242f9b17d7d66e16897a1r.jpg?width=1327&height=1000&hash=2327",
      },
      {
        id: 11,
        name: "Redmi K40",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 290,
        image:
          "https://i.gadgets360cdn.com/products/large/redmi-12-db-709x800-1686893414.jpg",
      },
      {
        id: 12,
        name: "Redmi Note 12",
        description: " Consider the material of the drum ",
        price: 300,
        image:
          "https://i02.appmifile.com/690_operator_sg/28/05/2023/f76d64842787c8a6df8c59858b19496f.png",
      },
      {
        id: 13,
        name: "Redmi Note 13",
        description:
          "Front load washing machines are more energy efficient than older models, using less water and electricity",
        price: 219,
        image:
          "https://i02.appmifile.com/836_operatorx_operatorx_uploadTiptapImage/15/01/2024/5aeb851382051e0b9a6049501e8888c5.jpg",
      },
      {
        id: 14,
        name: "Redmi Note 14",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 199,
        image:
          "https://i03.appmifile.com/979_item_in/17/12/2024/d065316191be257a48fb7516d78e6662.png?thumb=1&q=85",
      },
      {
        id: 15,
        name: "Redmi A4",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 189,
        image:
          "https://i03.appmifile.com/71_item_in/19/11/2024/2f234ba71bffb8735a01cf8f73c758d4.png",
      },
    ],
  },
  beautyAndCare: {
    hairCare: [
      {
        id: 1,
        name: "Shampoo",
        description: "Cleanses and nourishes hair.",
        price: 10,
        image:
          "https://orchidlifesciences.com/wp-content/uploads/2024/06/01-22_-01-1024x704.jpg",
      },
      {
        id: 2,
        name: "Conditioner",
        description: "Softens and moisturizes hair.",
        price: 14,
        image:
          "https://5.imimg.com/data5/SELLER/Default/2023/5/306033332/WN/CY/GZ/90725602/hair-care-products.jpg",
      },
      {
        id: 3,
        name: "Hair Oil",
        description: "Promotes hair growth and shine.",
        price: 20,
        image:
          "https://www.vilvahstore.com/cdn/shop/articles/d23265de0513497608026447779ab962.jpg?v=1688116642&width=1500",
      },
      {
        id: 4,
        name: "Antihairfall Serum",
        description: "Cleanses and nourishes hair.",
        price: 16,
        image:
          "https://www.hcpwellness.in/wp-content/uploads/2024/02/haircare.jpg",
      },
      {
        id: 5,
        name: "Conditioner",
        description: "Softens and moisturizes hair.",
        price: 15,
        image:
          "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/rockcms/2024-06/240610-beauty-awards-2024-hair-care-winners-kb-sociall-68fe8d.jpg",
      },
      {
        id: 6,
        name: "Hair Oil",
        description: "Promotes hair growth and shine.",
        price: 17,
        image:
          "https://images-static.naikaa.com/beauty-blog/wp-content/uploads/2023/01/Explore-The-Goodness-Of-Nature-With-These-Natural-Hair-Care-Brands_bb335.jpg",
      },
      {
        id: 7,
        name: "Shampoo",
        description: "Cleanses and nourishes hair.",
        price: 18,
        image:
          "https://cdn11.bigcommerce.com/s-63354/images/stencil/original/image-manager/haircare-top-brands-1-.png?t=1711726947",
      },
      {
        id: 8,
        name: "Conditioner",
        description: "Softens and moisturizes hair.",
        price: 13,
        image:
          "https://hips.hearstapps.com/hmg-prod/images/gh-012021-best-hair-products-1642523366.png?crop=0.502xw:1.00xh;0.250xw,0&resize=1200:*",
      },
      {
        id: 9,
        name: "Hair Oil",
        description: "Promotes hair growth and shine.",
        price: 19,
        image:
          "https://aromamagic.com/cdn/shop/products/dry-damage.jpg?v=1610107147",
      },
      {
        id: 10,
        name: "Shampoo",
        description: "Cleanses and nourishes hair.",
        price: 11,
        image:
          "https://static.vecteezy.com/system/resources/thumbnails/052/301/208/small_2x/discover-and-explore-an-extensive-array-of-organic-hair-care-products-and-essential-tools-that-are-perfect-for-achieving-a-professional-salonquality-finish-from-the-comfort-of-your-own-home-photo.jpg",
      },
      {
        id: 11,
        name: "Conditioner",
        description: "Softens and moisturizes hair.",
        price: 29,
        image:
          "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2024-10/Top%209%20Hair%20Care%20Brands%20in%20India%20For%20Men%20and%20Women%20%281%29.jpg",
      },
      {
        id: 12,
        name: "Hair Oil",
        description: "Promotes hair growth and shine.",
        price: 30,
        image:
          "https://nypost.com/wp-content/uploads/sites/2/2023/05/haircare-under-25-1.jpg?quality=75&strip=all",
      },
      {
        id: 13,
        name: "Shampoo",
        description: "Cleanses and nourishes hair.",
        price: 21,
        image:
          "https://img.freepik.com/free-photo/top-view-toilet-bag-table_23-2149879949.jpg?semt=ais_incoming",
      },
      {
        id: 14,
        name: "Conditioner",
        description: "Softens and moisturizes hair.",
        price: 19,
        image:
          "https://t4.ftcdn.net/jpg/03/59/35/47/360_F_359354700_9witgG0yfrLJM97jxfVqaf40vJAk4xr4.jpg",
      },
      {
        id: 15,
        name: "Hair Oil",
        description: "Promotes hair growth and shine.",
        price: 18,
        image:
          "https://images.unsplash.com/photo-1712112797786-d43620cac1fd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFpciUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      },
    ],
    skinCare: [
      {
        id: 1,
        name: "Moisturizer",
        description: "Hydrates and smoothens skin.",
        price: 19,
        image:
          "https://typsybeauty.com/cdn/shop/articles/types_of_skin_care_products.jpg?v=1723619039",
      },
      {
        id: 2,
        name: "Sunscreen",
        description: "Protects skin from UV rays.",
        price: 15,
        image:
          "https://theloveco.in/cdn/shop/articles/10-must-have-luxury-body-care-products-the-love-co.jpg?v=1729317123",
      },
      {
        id: 3,
        name: "Face Wash",
        description: "Removes dirt and impurities.",
        price: 12,
        image:
          "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2024-06/240610-beauty-awards-2024-skincare-winners-vl-social-91be20.jpg",
      },
      {
        id: 4,
        name: "Moisturizer",
        description: "Hydrates and smoothens skin.",
        price: 14,
        image:
          "https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
      },
      {
        id: 5,
        name: "Sunscreen",
        description: "Protects skin from UV rays.",
        price: 18,
        image:
          "https://www.vilvahstore.com/cdn/shop/articles/Choose_Natural_Skin_Care_Products.jpg?v=1721716430&width=2048",
      },
      {
        id: 6,
        name: "Face Wash",
        description: "Removes dirt and impurities.",
        price: 20,
        image:
          "https://orchidlifesciences.com/wp-content/uploads/2024/06/01-14-01-1024x704.jpg",
      },
      {
        id: 7,
        name: "Moisturizer",
        description: "Hydrates and smoothens skin.",
        price: 16,
        image:
          "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/rockcms/2024-01/240117-staff-skin-care-routines-social-2c85d8.jpg",
      },
      {
        id: 8,
        name: "Sunscreen",
        description: "Protects skin from UV rays.",
        price: 17,
        image:
          "https://www.bodytales.in/cdn/shop/products/Combo-5-Hydtrating-_Glowing-Skin-Care-Combo_Post.jpg?v=1678090122",
      },
      {
        id: 9,
        name: "Face Wash",
        description: "Removes dirt and impurities.",
        price: 29,
        image:
          "https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-start-a-skincare-line-glow-oasis.jpg?v=1666895341",
      },
      {
        id: 10,
        name: "Moisturizer",
        description: "Hydrates and smoothens skin.",
        price: 29,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0F2IzkX_Lf1xxoZnJblbGpv7sNVxvDM_E7Q&s",
      },
      {
        id: 11,
        name: "Sunscreen",
        description: "Protects skin from UV rays.",
        price: 24,
        image:
          "https://hips.hearstapps.com/hmg-prod/images/2-natural-skincare-brands-670eadb4e4fcf.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=1120:*",
      },
      {
        id: 12,
        name: "Face Wash",
        description: "Removes dirt and impurities.",
        price: 22,
        image:
          "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjVmNTBkNjk1ZmExMDkwYjVjNDEzNGM3LXNraW4tY2FyZS1wcm9kdWN0cy1zZXQtZ3JlZW4tdGVhLXNraW4uanBn.jpg",
      },
      {
        id: 13,
        name: "Moisturizer",
        description: "Hydrates and smoothens skin.",
        price: 21,
        image: "https://m.media-amazon.com/images/I/61xtviA5U4L.jpg",
      },
      {
        id: 14,
        name: "Sunscreen",
        description: "Protects skin from UV rays.",
        price: 31,
        image: "https://i.ytimg.com/vi/Twgc0ORBdDQ/maxresdefault.jpg",
      },
      {
        id: 15,
        name: "Face Wash",
        description: "Removes dirt and impurities.",
        price: 32,
        image:
          "https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg",
      },
    ],
  },

  Electronics: {
    TVs: [
      {
        id: 1,
        name: "Sony Bravia Next Gen Tv",
        description: "Great Dolby Vision and HDR",
        price: 100,
        image:
          "https://m.media-amazon.com/images/I/8159EvuNJaL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        id: 2,
        name: "LG Nanocell",
        description: "Best 4K TV",
        price: 140,
        image:
          "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/55qned88t6a-atr-eail-in-c/gallery/55QNED88T6A-DZ-03.jpg/_jcr_content/renditions/thum-1600x1062.jpeg",
      },
      {
        id: 3,
        name: "Haier TV",
        description: "Great value With great features",
        price: 200,
        image:
          "https://cdn.mos.cms.futurecdn.net/LMav3AW8YLsTQg5Ucz7U85-1200-80.jpg",
      },
      {
        id: 4,
        name: "REDMI Tv",
        description: "Smart TV with great features",
        price: 160,
        image:
          "https://vdaadmin.venusdigitalarcade.in/media/catalog/product/cache/a4aa45628d61667009e8bfd73fcc061b/1/7/17_14_58.jpg",
      },
      {
        id: 5,
        name: "LG QNED",
        description: "Smart TV with Bezel-Free Design",
        price: 150,
        image:
          "https://5.imimg.com/data5/SELLER/Default/2024/12/475493328/WU/UC/OZ/46183170/55-inch-sony-led-tv.jpeg",
      },
      {
        id: 6,
        name: "Aiwa OLED",
        description: "1 Billion Color Combination",
        price: 170,
        image:
          "https://static.toiimg.com/thumb/msid-99244997,imgsize-657260,width-400,resizemode-4/99244997.jpg",
      },
      {
        id: 7,
        name: "MI Tv",
        description: "Segment Biggest Screen",
        price: 180,
        image: "https://cdn.mos.cms.futurecdn.net/XMgVXWexgLztHWXmktXgPJ.jpg",
      },
      {
        id: 8,
        name: "Realme Techlife",
        description: "Android TV with great features",
        price: 130,
        image:
          "https://i.gadgets360cdn.com/products/televisions/large/1548153588_832_lg_55-inch-led-full-hd-tv-55la9700.jpg",
      },
      {
        id: 9,
        name: "Xiaomi TV",
        description: "LED smart TV with Google Connectivity",
        price: 109,
        image:
          "https://i.rtings.com/assets/products/bcKbP8uc/sony-x85k/design-medium.jpg?format=auto",
      },
      {
        id: 10,
        name: "Motorola Invision",
        description: "4k crystal Vision",
        price: 110,
        image:
          "https://rukminim2.flixcart.com/image/850/1000/xif0q/television/p/n/y/-original-imagxyxzyvweg64x.jpeg?q=90&crop=false",
      },
      {
        id: 11,
        name: "Sony Bravia",
        description: "With Dolby sound System",
        price: 290,
        image:
          "https://cdn.mos.cms.futurecdn.net/w7xUMcWX7BMUMzayo4SzYE-1200-80.jpg",
      },
      {
        id: 12,
        name: "Acer TV",
        description: "Smart WebOs TV",
        price: 300,
        image:
          "https://static.langimg.com/thumb/110895065/navbharat-times-110895065.jpg?width=540&resizemode=3",
      },
      {
        id: 13,
        name: "LG TV",
        description: "OLED Screen with 4K Resolution",
        price: 219,
        image:
          "https://www.hindustantimes.com/ht-img/img/2024/10/04/550x309/Best_4K_TV_1728035464483_1728035465095.jpeg",
      },
      {
        id: 14,
        name: "Samsung TV",
        description: "OLED Screen with 8K Resolution",
        price: 199,
        image: "https://m.media-amazon.com/images/I/51dPiXWFboL._SL500_.jpg",
      },
      {
        id: 15,
        name: "Sony Premium",
        description: "4k Google TV With REGZA Power Audio",
        price: 189,
        image:
          "https://www.digitaltrends.com/wp-content/uploads/2024/07/Sony-Bravia-9-Review-26.jpg?p=1",
      },
    ],
    Refrigerator: [
      {
        id: 1,
        name: "LG",
        description: "Comes with Inbuilt Stabliser",
        price: 100,
        image:
          "https://c.ndtvimg.com/2020-08/hq3r6of8_refrigerator_625x300_19_August_20.jpg",
      },
      {
        id: 2,
        name: "Samsung",
        description: "Best In all Condition",
        price: 140,
        image:
          "https://hips.hearstapps.com/hmg-prod/images/best-fridges-673bac80a584c.png?crop=0.502xw:1.00xh;0.250xw,0&resize=1200:*",
      },
      {
        id: 3,
        name: "Haier",
        description: "Top Selling Refrigarator",
        price: 200,
        image:
          "https://media.istockphoto.com/id/842160124/photo/refrigerator-with-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=j0W4TPOevBpp3mS6_X2FHV1uWVl3fcfdGAt2X3l8XzE=",
      },
      {
        id: 4,
        name: "Whirpool",
        description: "Nice Looking and Compact design",
        price: 160,
        image:
          "https://static.toiimg.com/thumb/msid-80010563,width-1070,height-580,imgsize-229684,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      },
      {
        id: 5,
        name: "Panasonic",
        description: "Segment Most Affordable",
        price: 150,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZ6IH_8eyHigEi2UFtcqNfs12Dc83Uci5AQ&s",
      },
      {
        id: 6,
        name: "Samsung 653l",
        description: "Side by Side door Refrigarator",
        price: 170,
        image:
          "https://www.lg.com/content/dam/channel/wcms/in/magazine/wish-to-get-the-best-refrigerator-for-your-home-look-out-for-these-four-features/blog-01v1.jpg",
      },
      {
        id: 7,
        name: "LG 655l",
        description: "401l Frost Free Double Door",
        price: 180,
        image:
          "https://www.whirlpool.com/is/image/content/dam/business-unit/whirlpoolv2/en-us/marketing-content/site-assets/page-content/oc-articles/types-of-refrigerators/types-of-refrigerators_Mobile_2.jpg?fmt=png-alpha&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&scl=1&constrain=fit,1",
      },
      {
        id: 8,
        name: "Haier wifi",
        description: "Frost Free And Convertible",
        price: 130,
        image:
          "https://kitchenaid-h.assetsadobe.com/is/image/content/dam/global/whirlpool/refrigeration/freestanding-refrigerator/images/hero-WRB322DMHV.tif?&fmt=png-alpha&resMode=sharp2&wid=850&hei=850",
      },
      {
        id: 9,
        name: "Llyod",
        description: "Comes With 180l capacity",
        price: 109,
        image:
          "https://images.livemint.com/img/2024/08/02/600x338/refrigerator_1722596788297_1722596805972.png",
      },
      {
        id: 10,
        name: "Toshiba",
        description: "Frost Free Double Door",
        price: 110,
        image:
          "https://www.whirlpool.com/is/image/content/dam/business-unit/whirlpoolv2/en-us/marketing-content/site-assets/page-content/oc-articles/types-of-refrigerators/types-of-refrigerators_Thumbnail.jpg?wid=1200&fmt=webp",
      },
      {
        id: 11,
        name: "Voltas",
        description: "Direct cooling System ",
        price: 290,
        image:
          "https://img.etimg.com/thumb/width-420,height-315,imgsize-116140,resizemode-75,msid-110999283/top-trending-products/news/12-best-selling-refrigerators-in-india-june-2024/refrigerator.jpg",
      },
      {
        id: 12,
        name: "IFB",
        description: "5 Star Double Door",
        price: 300,
        image:
          "https://www.hindustantimes.com/ht-img/img/2023/09/18/550x309/hgjngh_1695038166488_1695038178583.jpg",
      },
      {
        id: 13,
        name: "BOSCH",
        description: "Convertible in Nature ",
        price: 219,
        image:
          "https://www.lg.com/content/dam/channel/wcms/in/magazine/frost-free-fridge-freezer/frost-free-fridge-freezer-02.jpg",
      },
      {
        id: 14,
        name: "Hisense",
        description: "Comes With Dual Freezer",
        price: 199,
        image:
          "https://www.hindustantimes.com/ht-img/img/2023/12/04/1600x900/fridge_1701672459244_1701672459623.jpg",
      },
      {
        id: 15,
        name: "MarQ",
        description: "Great Cooling In Segment ",
        price: 189,
        image:
          "https://i2.wp.com/techau.com.au/wp-content/uploads/2019/03/Fridge-black.jpg?fit=893%2C606&ssl=1",
      },
    ],
    WashingMachine: [
      {
        id: 1,
        name: "LG",
        description:
          "Consider the types of wash cycles available, such as fast spin cycles",
        price: 100,
        image:
          "https://static.toiimg.com/thumb/msid-109640969,imgsize-42852,width-400,resizemode-4/109640969.jpg",
      },
      {
        id: 2,
        name: "Samsung",
        description: "adjustable temperatures, and steam and sanitize cycles",
        price: 140,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3J1GA2kQuYBSRb5uURLMF_kapCfkXhOYzg&s",
      },
      {
        id: 3,
        name: "Whirpool",
        description:
          "Front load washing machines are more energy efficient than older models, using less water and electricity",
        price: 200,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6he1SVEdkTza_HAizfJYZDPSeVVKct5hGQ&s",
      },
      {
        id: 4,
        name: "IFB",
        description: " Consider the material of the drum ",
        price: 160,
        image:
          "https://media3.bsh-group.com/Product_Shots/5120x/19753969_WGG04409GB_STP_def.webp",
      },
      {
        id: 5,
        name: "Godrej",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 150,
        image:
          "https://img.etimg.com/thumb/width-1200,height-900,imgsize-43118,resizemode-75,msid-116993427/top-trending-products/major-appliances/washing-machine/best-godrej-washing-machine-in-india-for-fresh-clean-laundry.jpg",
      },
      {
        id: 6,
        name: "BOSCH",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 170,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4MgLjT0gAwH7xZJvZMSEDrqTMtKZ9cO77pA&s",
      },
      {
        id: 7,
        name: "Toshiba",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 180,
        image:
          "https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2024/01/Washing-Machine-1024x512.jpg",
      },
      {
        id: 8,
        name: "Haier",
        description:
          "Front load washing machines are more energy efficient than older models, using less water and electricity",
        price: 130,
        image:
          "https://www.livemint.com/lm-img/img/2024/08/16/1600x900/washing_machine_1723800674554_1723800688433.png",
      },
      {
        id: 9,
        name: "ElectroLux",
        description: " Consider the material of the drum ",
        price: 109,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSA_UdXpfHVor4MqGceSl3_Io1byyHc0qUpw&s",
      },
      {
        id: 10,
        name: "Croma",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 110,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0Ne2CZmDEoWtZDJLEm5e7dl2F_77OUaBcg&s",
      },
      {
        id: 11,
        name: "Llyod",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 290,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq4196rlEdwQ96S7jeFAupiIoMpfaO_Fu3A&s",
      },
      {
        id: 12,
        name: "Kelvinator",
        description: " Consider the material of the drum ",
        price: 300,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG-qiimF1W41KvKH2KnA7S777PYYOzphP4Yw&s",
      },
      {
        id: 13,
        name: "ONIDA",
        description:
          "Front load washing machines are more energy efficient than older models, using less water and electricity",
        price: 219,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdP5kSt0quw-o9EgjMGIiHrzi6fipWC8b2Sw&s",
      },
      {
        id: 14,
        name: "MicroMax",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 199,
        image:
          "https://5.imimg.com/data5/ECOM/Default/2024/8/447170480/OE/AJ/TR/5593817/in-ww6000d-ww12dg6b24astl-542991331-500x500.jpg",
      },
      {
        id: 15,
        name: "MarQ",
        description:
          "Washing clothes is as easy as shoving all clothes inside the washing machine",
        price: 189,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4fKytj0TBBLwc4TE25nZ-vMsnqM11dd93xA&s",
      },
    ],
  },
};

app.get("/api", (req, res) => {
  res.json(data);
});

app.get("/api/:category", (req, res) => {
  const { category } = req.params;
  const categoryData = data[category];

  if (!categoryData) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.json(categoryData);
});

// ✅ Route to get specific item by ID from any category
app.get("/api/:category/:id", (req, res) => {
  const { category, id } = req.params;
  const categoryData = data[category];

  if (!categoryData) {
    return res.status(404).json({ message: "Category not found" });
  }

  const item = categoryData.find((product) => product.id == id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json(item);
});

app.get("/api/:category/:brand/:id", (req, res) => {
  const { category, brand, id } = req.params;

  if (!data[category]) {
    return res.status(404).json({ message: `Category '${category}' not found` });
  }

  const brandData = data[category][brand]; // Access brand data

  if (!brandData) {
    return res.status(404).json({ message: `Brand '${brand}' not found in category '${category}'` });
  }

  const item = brandData.find((entry) => entry.id == id); // Find item by ID

  if (!item) {
    return res.status(404).json({ message: `Item with ID '${id}' not found in '${brand}' under '${category}'` });
  }

  res.json(item);
});


app.listen(3500);
