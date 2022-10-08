Vue.component('product-item', {
  props: ['item'],
  template: `
  <div id="item">
    <div id="product-image">
      <img :src="item.src">
    </div>
    <div id="product-details">
      <h2>{{item.name}}</h2>
      <p>{{item.des}}</p>
    </div>
    <h1 id="theprice">{{item.price}}</h1>
    <button @click="$emit('add',item.id)" id="cart-button">Add to cart</button>
    <button @click="$emit('remove',item.id)" id="cart-remove">Remove from cart</button>
  </div>`
})


var app = new Vue({
  el: '#app',
  data: {
    company: 'CS TAX ACCOUNTANTS',
    ph: '+61 1234567890',
    email: 'maniksingla@abc.edu.au',
    isproduct: true,
    isabout: false,
    iscontact: false,
    isfeedback: false,
    islogin: false,
    isitr: true,
    isgst: false,
    isasic: false,
    isbundles: false,
    iscart: false,
    cart: [],
    finalcart: [],
    products: [{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/ONE_Campaign.svg/1200px-ONE_Campaign.svg.png", name: "Single ITR", price: "$150", type: "itr", id: "A1", qty: 1 },
    { src: "https://e7.pngegg.com/pngimages/33/502/png-clipart-number-2-image-file-formats-text-thumbnail.png", name: "TWO ITRs", price: "$250", type: "itr", id: "A2", qty: 1 },
    { src: "https://www.investopedia.com/thmb/LcJ3fGKZLroWg33NndMv4H64fF0=/500x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/company_defintion_final-3d7a02aafce7421c80d8152a1b25d666.png", name: "ITR for company", price: "$500", type: "itr", id: "A3", qty: 1 },
    { src: "https://pbs.twimg.com/profile_images/1278336817767612417/MBfM1Pui_400x400.png", name: "ABN ITR", price: "$200", type: "itr", id: "A4", qty: 1 },
    { src: "https://www.drupal.org/files/project-images/bundle_0.jpg", name: "Deal with ITR for company and 2 individuals", price: "$650", type: "itr", id: "A5", qty: 1 },

    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/ONE_Campaign.svg/1200px-ONE_Campaign.svg.png", name: "Single Quarterly GST", price: "$100", type: "gst", id: "B1", qty: 1 },
    { src: "https://numerograph.files.wordpress.com/2020/02/numerology-number-4-lucky-colors.jpg?w=600", name: "Four Quarterly GST", price: "$350", type: "gst", id: "B2", qty: 1 },
    { src: "https://www.bluefrontier.co.uk/images/blog/News/1year/1-year-anniversary.webp", name: "Yearly GST", price: "$200", type: "gst", id: "B3", qty: 1 },
    { src: "https://www.swotaccountants.com.au/wp-content/uploads/2020/05/Trust.jpeg", name: "GST for trusts", price: "$500", type: "gst", id: "B4", qty: 1 },
    { src: "https://englishlive.ef.com/blog/wp-content/uploads/sites/2/2015/05/how-to-give-advice-in-english.jpg",name: "Advice by accountants", price: "$100", type: "gst", id: "B5", qty: 1 },

    { src: "https://whistleblowing.com.au/wp-content/uploads/2020/10/NnOn0fgT_400x400.jpg", name: "362V001 form", price: "$50", type: "asic", id: "C1", qty: 1 },
    { src: "https://moneymanagement-prod.s3-ap-southeast-2.amazonaws.com/s3fs-public/field/image/asic300.jpg", name: "484V002 Form", price: "$100", type: "asic", id: "C2", qty: 1 },
    { src: "https://live-production.wcms.abc-cdn.net.au/ab7aaf7c7897dc76c1b7cbdf4bf7ded7?impolicy=wcms_crop_resize&cropH=540&cropW=959&xPos=0&yPos=0&width=862&height=485", name: "484V002 and 362V001 form", price: "$140", type: "asic", id: "C3", qty: 1 },
    { src: "https://g.foolcdn.com/editorial/images/703303/stock-chart-crash-correction-plunge-bounce-bear-market-bar-trend-invest-crypto-getty.jpg", name: "stocks transfer documents", price: "$200", type: "asic", id: "C4", qty: 1 },
    { src: "https://alcivar.com/wp-content/uploads/address.jpg", name: "address change form", price: "$70", type: "asic", id: "C5", qty: 1 },

    { name: "Individuals ITRs and company ITRs", price: "$1000", type: "bundles", id: "D1", qty: 1 },
    { name: "Individual Financials", price: "$500", type: "bundles", id: "D2", qty: 1 },
    { name: "Company Financials", price: "$1200", type: "bundles", id: "D3", qty: 1 },
    { name: "Setup for trust", price: "$1500", type: "bundles", id: "D4", qty: 1 },
    { name: "Setup for company", price: "$700", type: "bundles", id: "D5", qty: 1 }]
  },
  methods: {
    toogleproduct: function () {
      this.isproduct = true;
      this.isabout = false;
      this.iscontact = false;
      this.isfeedback = false;
      this.islogin = false;
    },
    toogleabout: function () {
      this.isproduct = false;
      this.isabout = true;
      this.iscontact = false;
      this.isfeedback = false;
      this.islogin = false;
    },
    tooglecontact: function () {
      this.isproduct = false;
      this.isabout = false;
      this.iscontact = true;
      this.isfeedback = false;
      this.islogin = false;
    },
    tooglefeedback: function () {
      this.isproduct = false;
      this.isabout = false;
      this.iscontact = false;
      this.isfeedback = true;
      this.islogin = false;
    },
    tooglelogin: function () {
      this.isproduct = false;
      this.isabout = false;
      this.iscontact = false;
      this.isfeedback = false;
      this.islogin = true;
    },
    toogleproduct: function () {
      this.isproduct = true;
      this.isabout = false;
      this.iscontact = false;
      this.isfeedback = false;
      this.islogin = false;
    },
    toogleitr: function () {
      this.isitr = true;
      this.isasic = false;
      this.isgst = false;
      this.isbundles = false;
    },
    toogleasic: function () {
      this.isitr = false;
      this.isasic = true;
      this.isgst = false;
      this.isbundles = false;
    },
    tooglegst: function () {
      this.isitr = false;
      this.isasic = false;
      this.isgst = true;
      this.isbundles = false;
    },
    tooglebundles: function () {
      this.isitr = false;
      this.isasic = false;
      this.isgst = false;
      this.isbundles = true;
    },
    contains: function (obj, list) {
      var i;
      for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
          return true;
        }
      }
      return false;
    },

    mounted() {
      const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = () => {
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      };
      loginBtn.onclick = () => {
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      };
      signupLink.onclick = () => {
        signupBtn.click();
        return false;
      };
      // login1.onclick = () => {
      //    @click="toogleproduct";
      // }
    },

    add: function (id) {
      for (let i = 0; i < this.products.length; i++) {
        var qty = 0;

        if (this.products[i].id == id) {
          if (this.contains(this.products[i], this.cart)) {
            for (let j = 0; j < this.cart.length; j++) {
              if (this.cart[j].id == id) {
                this.cart[j].qty += 1;
              }
            }

            console.log("alreay there");
          }
          else {
            this.cart.push(this.products[i]);
          }
        }
      }
    },
    remove: function (id) {
      for (let i = 0; i < this.products.length; i++) {
        var qty = 0;

        if (this.products[i].id == id) {
          if (this.contains(this.products[i], this.cart)) {
            for (let j = 0; j < this.cart.length; j++) {
              if ((this.cart[j].id == id) && (this.cart[j].qty >= 1)) {
                this.cart[j].qty -= 1;
                if (this.cart[j].qty == 0) {
                  this.cart.pop(this.products[j]);
                }
              }
            }
          }
          else {
            // this.cart.push(this.products[i]);
          }
        }
      }
    },
    myfunc: function() {
      alert("Your service have been purchased.");
    }
  }
})
