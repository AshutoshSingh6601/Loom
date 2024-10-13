import ProductContext from "./ProductContext";

import Men1 from "../assets/Images/Men1.jpeg";
import Men2 from "../assets/Images/Men2.jpeg";
import Men3 from "../assets/Images/Men3.jpeg";
import Men4 from "../assets/Images/Men4.jpeg";
import Men5 from "../assets/Images/Men5.jpeg";
import Men6 from "../assets/Images/Men6.jpeg";
import Men7 from "../assets/Images/Men7.jpeg";
import Men8 from "../assets/Images/Men8.jpeg";
import Men9 from "../assets/Images/Men9.jpeg";
import Men10 from "../assets/Images/Men10.jpeg";
import Men11 from "../assets/Images/Men11.jpeg";
import Men12 from "../assets/Images/Men12.jpeg";
import Men13 from "../assets/Images/Men13.jpeg";

import Girl1 from "../assets/Images/Girl1.jpeg";
import Girl2 from "../assets/Images/Girl2.jpeg";
import Girl3 from "../assets/Images/Girl3.jpeg";
import Girl4 from "../assets/Images/Girl4.jpeg";
import Girl5 from "../assets/Images/Girl5.jpeg";
import Girl6 from "../assets/Images/Girl6.jpeg";
import Girl7 from "../assets/Images/Girl7.jpeg";
import Girl8 from "../assets/Images/Girl8.jpeg";
import Girl9 from "../assets/Images/Girl9.jpeg";
import Girl10 from "../assets/Images/Girl10.jpeg";

import BabyGirl1 from "../assets/Images/BabyGirl1.jpeg";
import BabyGirl2 from "../assets/Images/BabyGirl2.jpeg";
import BabyGirl3 from "../assets/Images/BabyGirl3.jpeg";
import BabyGirl4 from "../assets/Images/BabyGirl4.jpeg";
import BabyGirl5 from "../assets/Images/BabyGirl5.jpeg";
import BabyGirl6 from "../assets/Images/BabyGirl6.jpeg";

import BabyBoy1 from "../assets/Images/BabyBoy1.jpeg";
import BabyBoy2 from "../assets/Images/BabyBoy2.jpeg";
import BabyBoy3 from "../assets/Images/BabyBoy3.jpeg";
import BabyBoy4 from "../assets/Images/BabyBoy4.jpeg";
import BabyBoy5 from "../assets/Images/BabyBoy5.jpeg";
import { useState } from "react";


const ProductState = (props) => {

    const vendorDetails = [
        {
          Image: Girl1,
          name: "Kurti Set",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'aurat',
        },
        {
          Image: Girl2,
          name: "Sharara Set ",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'aurat',
        },
        {
          Image: Girl3,
          name: "Gown ",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'aurat',
        },
        {
          Image: Girl4,
          name: "Short Kurti",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'aurat',
        },
        {
          Image: Girl5,
          name: "Styled Lehenga ",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'aurat',
        },
        {
          Image: Girl6,
          name: "Red sharara",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'aurat',
        },
        {
          Image: Girl7,
          name: "Red gown full",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'aurat',
        },
        {
          Image: Girl8,
          name: "Women cloths",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'aurat',
        },
        {
          Image: Girl9,
          name: "One piece full Gown",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'aurat',
        },
        {
          Image: Girl10,
          name: "Red Indian Co-ord set ",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'aurat',
        },
        {
          Image: Men1,
          name: "Golden styled Kurta Set",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'Admin',
        },
        {
          Image: Men2,
          name: "Mens Formal Set",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'Admin',
        },
        {
          Image: Men3,
          name: "Wedding attire Black Blazer",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'Admin',
        },
        {
          Image: Men4,
          name: "Kurta with jacket ",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'Admin',
        },
        {
          Image: Men5,
          name: "Sherwani ",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'Admin',
        },
        {
          Image: Men6,
          name: "Mens casual Full shirt",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'Admin',
        },
        {
          Image: Men7,
          name: "Mens Formal",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'Admin',
        },
        {
          Image: Men8,
          name: "Mens Co-ord set",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'Admin',
        },
        {
          Image: Men9,
          name: "Mens casual kurta",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'Admin',
        },
        {
          Image: Men10,
          name: "Mens Genz fashion ",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'Admin',
        },
        {
          Image: Men11,
          name: "Mens wedding sherwani with shawl",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'Admin',
        },
        {
          Image: Men12,
          name: "Mens kurta",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'Admin',
        },
        {
          Image: Men13,
          name: "Mens Formal and Casual Blazer",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'Admin',
        },
        {
          Image: BabyGirl1,
          name: "Kids Lehenga",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'bache',
        },
        {
          Image: BabyGirl2,
          name: "Kids Two Piece Set",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'bache',
        },
        {
          Image: BabyGirl3,
          name: "Kids Party Wear",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'bache',
        },
        {
          Image: BabyGirl4,
          name: "Kida Traditional Kurta Set",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'bache',
        },
        {
          Image: BabyGirl5,
          name: "Kids Net Gown",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'bache',
        },
        {
          Image: BabyGirl6,
          name: "Kids Frock",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'bache',
        },
        {
          Image: BabyBoy1,
          name: "Kids Sherwani ",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'bache',
        },
        {
          Image: BabyBoy2,
          name: "Kids Formal Set",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'bache',
        },
        {
          Image: BabyBoy3,
          name: "Kids Casual Shirt",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'bache',
        },
        {
          Image: BabyBoy4,
          name: "Kids Traditional Kurta Set",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'bache',
        },
        {
          Image: BabyBoy5,
          name: "Kids Blazer",
          ProductDetail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
          uni: 'bache',
        },
      ];

      const [cartData, setCartData] = useState([])

    return(
        <ProductContext.Provider value={{vendorDetails, setCartData, cartData }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState