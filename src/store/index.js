import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        women: [
            {
                title: "Ribbed jersey dress with cut-out detail",
                img: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1676313997/747763_XJFIR_1000_001_100_0000_Light-Ribbed-jersey-dress-with-cut-out-detail.jpg",
                price: 999,
                description:
                    "Sparkling elements illuminate a selection of ready-to-wear pieces for the Spring Summer 2023 collection, reminiscent of 90s party wear. This striking jersey dress reveals sculptural cut-out details, further enriched with leather straps and a glimmering crystal G square.",
                color: "Black",
                brand: "Gucci",
                type: "Dress",
                gender: "women",
                id: 1,
            },

            {
                title: "Ribbed jersey dress with cut-out detail",
                img: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1666176358/731269_ZHS57_6490_001_100_0000_Light-Silk-chiffon-dress.jpg",
                price: 809,
                description:
                    "This tiered dress recalls vintage gowns, while an off-the shoulder neckline adds a contemporary feel. Presented in a whimsical shade of red, the piece is presented in silk with ruffle details. Emblematic details from different eras appear throughout the Gucci universe, highlighting the Houses fascination with other times and places.",
                color: "Red",
                brand: "Gucci",
                type: "Dress",
                gender: "women",
                id: 2,
            },
            {
                title: "Silk chiffon dress",
                img: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1671474616/731267_ZHS78_3224_001_100_0000_Light-Silk-chiffon-dress.jpg",
                price: 699,
                description:
                    "Capturing the spirit of vintage glamor, this silk chiffon dress is an ode to the House's romantic narrative.",
                color: "Green",
                brand: "Gucci",
                type: "Dress",
                gender: "women",
                id: 3,
                isFavorite: false,
            },
            {
                title: "Silk dress with ruffles",
                img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1674257438/705358_ZAKCF_9205_001_100_0000_Light-Silk-dress-with-ruffles.jpg",
                price: 799,
                description:
                    "Refined details enrich traditional silhouettes. Crafted from ivory silk, this dress is decorated with a gathered motif and ruffles at the front. A back zip closure completes the design.",
                color: "Yellow",
                brand: " Gucci",
                type: "Dress",
                gender: "women",
                id: 4,
            },
            {
                title: "Renaissance Dress",
                img: "https://media.gucci.com/style/HEXE8F1E3_Center_0_0_800x800/1671210904/714320_Z8BAR_3907_001_100_0000_Light-Silk-georgette-dress.jpg",
                price: 499,
                description:
                    "In celebration of the Year of the Rabbit, as well as the arrival of Spring, the House presents a wide-ranging selection of colourful ready-to-wear pieces and accessories featuring various renditions of the wistful creature.",
                color: "Green",
                brand: "Gucci",
                type: "Dress",
                gender: "women",
                id: 5,
            },
            {
                title: "Rhombus tile print silk dress",
                img: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1676074656/731327_ZAL7G_9285_001_100_0000_Light-Rhombus-tile-print-silk-dress.jpg",
                price: 499,
                description:
                    "Creating a visual impact, optical prints and motifs are seen throughout the House's collections.",
                color: "Multicolor",
                brand: "Gucci",
                type: "Dress",
                gender: "women",
                id: 6,
            },
            {
                title: "Silk georgette dress",
                img: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1674671523/731333_ZHS04_5988_001_100_0000_Light-Silk-georgette-dress.jpg",
                price: 799,
                description:
                    "Imbued with a romantic feel, the pink silk georgette long dress plays with volumes. Soft ruffles and a silk scarf bring new layers to the silhouette, adding soft movement with every step. A mix of colors and fluidity redefine the concept of femininity.",
                color: "Pink",
                brand: "Gucci",
                type: "Dress",
                gender: "women",
                id: 7,
            },
            {
                title: "adidas x Gucci GG Trefoil stripe dress",
                img: "https://media.gucci.com/style/HEXE0E8E5_Center_0_0_800x800/1672703226/723471_ZALGG_9304_001_100_0000_Light-adidas-x-Gucci-GG-Trefoil-stripe-dress.jpg",
                price: 799,
                description:
                    "A second chapter in the adidas and Gucci collection, where the Web continues to juxtapose with the three white stripes and the GG monogram combines with the Trefoil. Inspired by the '80s and '90s, emblematic House’s motifs mix with those of the historic sportswear brand adidas resulting in a series of hybrid looks. ",
                color: "Multicolor",
                brand: "Gucci",
                type: "Dress",
                gender: "women",
                id: 8,
            },
            {
                title: "KIM DOLCE&GABBANA ",
                img: "https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dw2b77df84/images/zoom/F6BHPTHU7OC_R0365_0.jpg?sw=640&sh=816&sm=fit",
                price: 349,
                description: "Terrycloth minidress",
                color: "Red",
                brand: "Dolce & Gabbana",
                type: "Dress",
                gender: "women",
                id: 9,
            },
            {
                title: "KIM DOLCE&GABBANA",
                img: "https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dwe473701e/images/zoom/F6WV5TFUMNT_F0600_0.jpg?sw=640&sh=816&sm=fit",
                price: 829,
                description: "KIM DOLCE&GABBANA Marquisette calf-length dress",
                color: "Beige",
                brand: "Dolce & Gabbana",
                type: "Dress",
                gender: "women",
                id: 10,
            },
            {
                title: "KIM DOLCE&GABBANA ",
                img: "https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dw92728f52/images/zoom/F6BFDTFUAA1_N0495_0.jpg?sw=640&sh=816&sm=fit",
                price: 499,
                description: "KIM DOLCE&GABBANA Long silk georgette dress",
                color: "Grey",
                brand: "Dolce & Gabbana",
                type: "Dress",
                gender: "women",
                id: 11,
            },
            {
                title: "KIM DOLCE&GABBANA ",
                img: "https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dw90145ffc/images/zoom/F6CLMTFURHM_W0800_0.jpg?sw=640&sh=816&sm=fit",
                price: 299,
                description: "Stretch satin minidress",
                color: "White",
                brand: "Dolce & Gabbana",
                type: "Dress",
                gender: "women",
                id: 12,
            },
            {
                title: "Floral jacquard midi dress",
                img: "https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dw288db8d3/images/zoom/F6ARYTHJMOK_W3789_0.jpg?sw=640&sh=816&sm=fit",
                price: 899,
                description: "Floral jacquard midi dress",
                color: "White",
                brand: "Dolce & Gabbana",
                type: "Dress",
                gender: "women",
                id: 13,
            },
            {
                title: "LONG DRESS IN COTTON GUIPURE LACE",
                img: "https://www.valentino.com/variants/images/1647597301222269/F/w750.jpg",
                price: 499,
                description: "Mini Bandana long dress in cotton guipure lace",
                color: "Gold",
                brand: "Valentino",
                type: "Dress",
                gender: "women",
                id: 14,
            },

            {
                title: "Mini Dress",
                img: "https://cdna.lystit.com/400/500/tr/photos/cettire/fd386e8c/prada-Pink-Sleeveless-Flared-Mini-Dress.jpeg",
                price: 867,
                description: "Pink Leather Mini Dress - Pink",
                color: "Pink",
                brand: "Prada",
                type: "Dress",
                gender: "women",
                id: 15,
            },
            {
                title: "Abito - Pink",
                img: "https://cdna.lystit.com/400/500/tr/photos/cettire/818e251a/prada-Pink-Bow-Tie-Detail-Midi-Dress.jpeg",
                price: 789,
                description: " Prada Bow Tie Detail Midi Dress ",
                color: "Pink",
                brand: "Prada",
                type: "Dress",
                gender: "women",
                id: 16,
            },

            {
                title: "ATIN CAMISOLE DRESS ",
                img: "https://static.massimodutti.net/3/photos//2023/V/0/1/p/9251/952/808/9251952808_2_5_16.jpg?t=1674475217147&impolicy=massimodutti-itxmediumhigh&imwidth=500&imformat=chrome",
                price: 333,
                description: "ATIN CAMISOLE DRESS - STUDIO",
                color: "Grey",
                brand: "Massimo Dutti",
                type: "Dress",
                gender: "women",
                id: 17,
            },
            {
                title: "LONG SLEEVELESS BLENDED PRINT DRESS ",
                img: "https://static.massimodutti.net/3/photos//2023/V/0/1/p/6606/820/800/6606820800_2_5_16.jpg?t=1676453757725&impolicy=massimodutti-itxmediumhigh&imwidth=600&imformat=chrome",
                price: 649,
                description: "LONG SLEEVELESS BLENDED PRINT DRESS",
                color: "Multicolor",
                brand: "Massimo Dutti",
                type: "Dress",
                gender: "women",
                id: 18,
            },
            {
                title: "CREPE BOX PLEAT MIDI DRESS",
                img: "https://static.massimodutti.net/3/photos//2023/V/0/1/p/6666/714/712/05/6666714712_2_5_16.jpg?t=1676286429142&impolicy=massimodutti-itxmediumhigh&imwidth=700&imformat=chrome",
                price: 649,
                description: "CREPE BOX PLEAT MIDI DRESS",
                color: "White",
                brand: "Massimo Dutti",
                type: "Dress",
                gender: "women",
                id: 19,
            },
            {
                title: "Long black ribbed V-neck dress",
                img: "https://static.massimodutti.net/3/photos//2023/V/0/1/p/6656/544/800/11/6656544800_2_6_16.jpg?t=1676903479720&impolicy=massimodutti-itxmediumhigh&imwidth=700&imformat=chrome",
                price: 995,
                description: "Long black ribbed V-neck dress",
                color: "Black",
                brand: "Massimo Dutti",
                type: "Dress",
                gender: "women",
                id: 20,
            },
            {
                title: "MEDUSA MIDI DRESS",
                img: "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw04a159a7/original/90_1008745-1A00572_1V940_15_MedusaMidiDress-Dresses-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit",
                price: 799,
                description:
                    "Crafted in a slim-fitting silhouette, this crêpe mini dress has a sleeveless design with Medusa hardware on the shoulder straps with a draped cowl neckline.",
                color: "Blue",
                brand: "Versace",
                type: "Dress",
                gender: "women",
                id: 21,
            },
            {
                title: "Logo Orchid Midi Shirt Dress",
                img: "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwedf9f8d9/original/90_1009149-1A06641_5B100_16_LogoOrchidMidiShirtDress-Dresses-versace-online-store_1_0.jpg?sw=748&sh=1050&sm=fit",
                price: 299,
                description:
                    "This sleeveless sheer chiffon shirt dress features an all-over Logo Orchid print. The button-down style is detailed with a scarf-tie collar and pleats along the handkerchief-style skirt. Side slits allow for versatile styling.",
                color: "Multicolor",
                brand: "Versace",
                type: "Dress",
                gender: "women",
                id: 22,
            },
            {
                title: "COWL LONG DRESS",
                img: "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwb40b385f/original/90_1010011-1A07319_1PM60_16_CowlLongDress-Dresses-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit",
                price: 499,
                description:
                    "A sleeveless midi dress featuring a draped cowl backline and back slit",
                color: "Pink",
                brand: "Versace",
                type: "Dress",
                gender: "women",
                id: 23,
            },
            {
                title: "BAROCCO SILK MIDI SHIRT DRESS",
                img: "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw746b9521/original/90_1000933-1A04236_5B000_16_BaroccoSilkMidiShirtDress-Dresses-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit",
                price: 999,
                description:
                    "This midi shirt dress features Versace's signature Barocco print throughout - a recurring brand motif with architectural baroque patterns. ",
                color: "Multicolor",
                brand: "Versace",
                type: "Dress",
                gender: "women",
                id: 24,
            },
        ],
        men: [
            {
                title: "SILK FAILLE JACKET WITH ALL-OVER TOILE ICONOGRAPHE PRINT",
                img: "https://www.valentino.com/variants/images/1647597307779311/F/w750.jpg",
                price: 899,
                description: "Silk faille jacket with all-over Toile Iconographe print",
                color: "Brown",
                brand: "Valentino",
                type: "Jacket",
                gender: "men",
                id: 25,
            },
            {
                title: "CARGO TROUSERS IN SILK FAILLE",
                img: "https://www.valentino.com/variants/images/1647597307781092/F/w750.jpg",
                price: 499,
                description:
                    "Silk faille cargo trousers with all-over Toile Iconographe print",
                color: "Brown",
                brand: "Valentino",
                type: "Trousers",
                gender: "men",
                id: 26,
            },
            {
                title: "SILK TWILL BOWLING SHIRT ",
                img: "https://www.valentino.com/variants/images/1647597301226155/F/w750.jpg",
                price: 799,
                description:
                    "Bowling shirt in silk twill with Valentino Bandana Flower print",
                color: "Multicolor",
                brand: "Valentino",
                type: "Shirt",
                gender: "men",
                id: 27,
            },
            {
                title: "COTTON SHIRT JACKET",
                img: "https://www.valentino.com/variants/images/1647597301226173/F/w750.jpg",
                price: 899,
                description:
                    "Cotton shirt jacket with embossed VLogo Signature leather pocket",
                color: "Beige",
                brand: "Valentino",
                type: "Jacket",
                gender: "men",
                id: 28,
            },
            {
                title: "Skull cashmere sweater",
                img: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/fe/P00745722.jpg",
                price: 949,
                description:
                    "A subtle skull motif decorates the chest of this Alexander McQueen sweater, making it a brand signature. Knitted from pure cashmere, this style has a regular fit and ribbed-knit trims on the collar, cuffs, and hem.",
                color: "Pink",
                brand: "Alexander Mqueen",
                type: "Sweater",
                gender: "men",
                id: 29,
            },
            {
                title: "Stripe sweatpants",
                img: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/60/P00739367.jpg",
                price: 359,
                description:
                    "These Burberry's sweatpants are crafted from a technical fabric and offer a fresh take on sports luxe. ",
                color: "Black",
                brand: "BURBERRY",
                type: "Trousers",
                gender: "men",
                id: 30,
            },
            {
                title: "Logo long-sleeved shirt",
                img: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/87/P00739352.jpg",
                price: 439,
                description:
                    "Burberry's formal long-sleeved shirt is made from a stretch cotton-blend in white, featuring a curved hem, a metal TB logo at the chest pocket, and a slim-fitting silhouette.",
                color: "White",
                brand: "BURBERRY",
                type: "Shirt",
                gender: "men",
                id: 31,
            },
            {
                title: "Camden car coat",
                img: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/e6/P00739348.jpg",
                price: 279,
                description:
                    "The Camden car coat from Burberry is made from the brand's signature crease-resistant cotton gabardine. The classic style features raglan sleeves and concealed button closures with a Vintage check lining.",
                color: "Beige",
                brand: "BURBERRY",
                type: "Overcoat",
                gender: "men",
                id: 32,
            },
            {
                title: "Wool gabardine formal jacket\n",
                img: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1677282376/736770_ZAMII_1401_001_100_0000_Light-Wool-gabardine-formal-jacket.jpg",
                price: 499,
                description:
                    "Further exploring formalwear with an unconventional approach, the Spring Summer 2023 collection looks at the concept of tailoring with a new lens. The House reinterprets classic silhouettes, for an innovative update of the wardrobe. ",
                color: "Grey",
                brand: "Gucci",
                type: "Jacket",
                gender: "men",
                id: 33,
            },
            {
                title: "Gucci HA HA HA herringbone jacket",
                img: "https://media.gucci.com/style/HEXEEEFEC_Center_0_0_800x800/1670349603/671980_ZAG95_2240_001_100_0000_Light-Gucci-HA-HA-HA-herringbone-jacket.jpg",
                price: 799,
                description:
                    "Gucci HA HA HA expresses the friendship between Gucci’s Creative Director, Alessandro Michele, and the British singer-songwriter and actor, Harry Styles. Featuring whimsical motifs and vibrant colors, the special collection of ready-to-wear, shoes and accessories represents the landing place of an inventive two-person journey. ",
                color: "Beige",
                brand: "Gucci",
                type: "Jacket",
                gender: "men",
                id: 34,
            },
            {
                title: "Wool linen herringbone formal jacket",
                img: "https://media.gucci.com/style/HEXE0E8E5_Center_0_0_800x800/1670869803/705281_ZAFT8_6509_001_100_0000_Light-Wool-linen-herringbone-formal-jacket.jpg",
                price: 599,
                description:
                    "Classics reinterpreted with a contemporary attitude help shape the concept behind Gucci's latest collection. This red herringbone wool linen jacket is finished with gold-toned metal buttons and strong shoulders.",
                color: "Red",
                brand: "Gucci",
                type: "Jacket",
                gender: "men",
                id: 35,
            },
            {
                title: "adidas x Gucci nylon down jacket\n",
                img: "https://media.gucci.com/style/HEXE0E8E5_Center_0_0_800x800/1670976089/722513_ZALC8_7470_001_100_0000_Light-adidas-x-Gucci-nylon-down-jacket.jpg",
                price: 599,
                description:
                    "A second chapter in the adidas and Gucci collection, where the Web continues to juxtapose with the three white stripes and the GG monogram combines with the Trefoil. ",
                color: "Yellow",
                brand: "Gucci",
                type: "Jacket",
                gender: "men",
                id: 36,
            },
            {
                title: "Printed cotton poplin shirt",
                img: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/53/P00768832.jpg",
                price: 999,
                description:
                    "Freshen up your everyday wardrobe with this striking shirt from Alexander McQueen. Crafted from cotton poplin, the short-sleeve style has an all-over brushstroke print, boxy fit, and a patch pocket on the chest.",
                color: "Multicolor",
                brand: "Alexander Mqueen",
                type: "Shirt",
                gender: "men",
                id: 37,
            },
        ],
        user: {
            genre: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isLogged: false,
            cart: [],
            favorites: [],
            addresses: [
                {
                    city: 'Cluj-Napoca',
                    country: 'Romania',
                    street: 'V. Bologa',
                    number: '7',
                    blockStaircase: '',
                    postcode: '400567',
                },
            ],
            billingAddresses: [
                {
                    address: 'Romania',
                    town: 'Baia-Mare',
                    postcode: '447221',
                }, {
                    address: 'Romania',
                    town: 'Cluj-Napoca',
                    postcode: '123543',
                }
            ],
            cards: {
                cardholderName: '',
                cardNumber: '',
                expirationDate: '',
                cvv: '',
            }
        },
    },
    getters: {
        getCart: (state) => state.user.cart,
        getCartTotalPrice: (state) => {
            let total = 0;
            state.user.cart.forEach((item) => {
                total += item.product.price * item.quantity;
            });
            return total.toLocaleString('pt-BR', {maximumFractionDigits: 2})
        },
        getIsLogged: (state) => {
            return state.user.isLogged
        },
        getCartItemCount: (state) => {
            let total = 0;
            state.user.cart.forEach((item) => {
                total += item.quantity;
            });
            return total
        },
        getUserEmail: (state) => {
            return state.user
        }
    },
    mutations: {
        INIT_STORE(state) {
            const storedState = JSON.parse(localStorage.getItem("state"));
            if (storedState) {
                state.women = storedState.women || [];
                state.men = storedState.men || [];
                state.user = storedState.user || [];
            } else {
                this.commit("UPDATE_STORE");
            }
        },
        UPDATE_STORE(state) {
            localStorage.setItem("state", JSON.stringify(state));
        },
        ADD_TO_CART(state, item) {
            let itemCart = state.user.cart.find((i) => i.product.id === item.product.id && item.size === i.size);
            if (itemCart) {
                itemCart.quantity += item.quantity;
                itemCart.quantityPrice += item.quantityPrice;
                itemCart.quantityPrice = itemCart.quantityPrice.toFixed(2);
            } else {
                state.user.cart.push(item);
            }
        },
        REMOVE_FROM_CART(state, product) {
            let index = state.user.cart.indexOf(product);
            state.user.cart.splice(index, 1);
        },
        ADD_TO_FAVORITES(state, product) {
            if (!state.user.favorites.includes(product) && state.user.isLogged === true) {
                state.user.favorites.push(product);
            }
        },
        REMOVE_FROM_FAVORITES(state, product) {
            let index = state.user.favorites.indexOf(product);
            state.user.favorites.splice(index, 1);
        },
        INCREASE_QUANTITY(state, item) {
            let itemCart = state.user.cart.find((i) => i.product.id === item.product.id && item.size === i.size);
            if (itemCart) {
                itemCart.quantity++;
                itemCart.quantityPrice = itemCart.quantity * item.product.price;
                itemCart.quantityPrice = parseFloat(itemCart.quantityPrice).toLocaleString('pt-BR', {maximumFractionDigits: 2});
            }
        },
        DECREASE_QUANTITY(state, item) {
            let itemCart = state.user.cart.find((i) => i.product.id === item.product.id && item.size === i.size);
            if (itemCart.quantity > 1) {
                itemCart.quantity--;
                itemCart.quantityPrice = itemCart.quantity * item.product.price;
                itemCart.quantityPrice = parseFloat(itemCart.quantityPrice).toLocaleString('pt-BR', {maximumFractionDigits: 2});
            }
        },
        SIGN_IN(state, email, password) {
            state.user = {
                email: email,
                password: password,
                isLogged: true,
                cart: [],
                favorites: [],
            };
        },
        UPDATE_USER_INFORMATION(state, newFirstname, newLastname, newEmail) {
            state.user = {
                firstName: newFirstname,
                lastName: newLastname,
                email: newEmail,
                password: state.user.password,
                isLogged: true,
                cart: [],
                favorites: [],
            };
        },
        CHANGE_PASSWORD(state, newPassword) {
            state.user.password = newPassword
        },
        REMOVE_ADDRESS(state, index) {
            state.user.addresses.splice(index)
        },
        REMOVE_BILLING_ADDRESS(state, index) {
            state.user.billingAddresses.splice(index)
        },
        // SET_CART_TOTAL_PRICE(state, couponCode, showCouponCodeAlert, cartTotalPrice) {
        //    let total = 0;
        //     if (couponCode === '') {
        //         total = cartTotalPrice;
        //     } else if (couponCode === 'MED') {
        //         total = (cartTotalPrice * 0.9).toFixed(3);
        //         showCouponCodeAlert = false;
        //     } else {
        //         // eslint-disable-next-line no-unused-vars
        //         total = cartTotalPrice;
        //         showCouponCodeAlert = true;
        //     }
        //     // state.cartTotalPrice = total;
        // },
        // SELECT_PAYMENT_METHOD(state, {isCheckboxAlipayChecked,isCheckboxCreditCardChecked,isCheckboxAmazonPayChecked}) {
        //     if (isCheckboxAlipayChecked) {
        //         isCheckboxAlipayChecked = !isCheckboxAlipayChecked
        //         isCheckboxCreditCardChecked = false;
        //         isCheckboxAmazonPayChecked = false;
        //     } else if (isCheckboxCreditCardChecked) {
        //         isCheckboxCreditCardChecked = !isCheckboxCreditCardChecked;
        //         isCheckboxAmazonPayChecked = false;
        //         isCheckboxAlipayChecked = false
        //     } else if (isCheckboxAmazonPayChecked) {
        //         isCheckboxAmazonPayChecked = !isCheckboxAmazonPayChecked;
        //         isCheckboxCreditCardChecked = false;
        //         isCheckboxAlipayChecked = false
        //     }
        // }
        SAVE_ADDRESS(state, address) {
            state.user.addresses.push(address)
        },
        SAVE_BILLING_ADDRESS(state, address) {
            state.user.billingAddresses.push(address)
        },
        // UPDATE_ADDRESS(state, address, index) {
        //     state.user.addresses[index] = {
        //         city: address.city,
        //         country: address.country,
        //         street: address.street,
        //         number: address.number,
        //         blockStaircase: address.blockStaircase,
        //         postcode: address.postcode,
        //     }
        // }
        UPDATE_ADDRESS(state,  { address, index }) {
            state.user.addresses[index] = address;
        },
    },
    actions: {
        addToCart(context, item) {
            context.commit("ADD_TO_CART", item);
            context.commit("UPDATE_STORE");
        },
        removeProductFromCart(context, product) {
            context.commit("REMOVE_FROM_CART", product);
            context.commit("UPDATE_STORE");
        },
        addToFavorites(context, product) {
            context.commit("ADD_TO_FAVORITES", product);
            context.commit("UPDATE_STORE");
        },
        removeFromFavorites(context, product) {
            context.commit("REMOVE_FROM_FAVORITES", product);
            context.commit("UPDATE_STORE");
        },
        increaseQuantity(context, item) {
            context.commit("INCREASE_QUANTITY", item);
            context.commit("UPDATE_STORE");
        },
        decreaseQuantity(context, item) {
            context.commit("DECREASE_QUANTITY", item);
            context.commit("UPDATE_STORE");
        },
        signIn(context, email, password) {
            context.commit("SIGN_IN", email, password);
            context.commit("SIGN_IN");
        },
        updateUserInformation(context, newFirstname, newLastname, newEmail) {
            context.commit("UPDATE_USER_INFORMATION", {newFirstname, newLastname, newEmail});
            context.commit("UPDATE_USER_INFORMATION");
        },
        changePassword(context, newPassword) {
            context.commit("CHANGE_PASSWORD", newPassword);
            context.commit("CHANGE_PASSWORD");
        },
        removeAddress(context, index) {
            context.commit("REMOVE_ADDRESS", index);
            context.commit("REMOVE_ADDRESS");
        },
        removeBillingAddress(context, index) {
            context.commit("REMOVE_BILLING_ADDRESS", index);
            context.commit("REMOVE_BILLING_ADDRESS");
        },
        // saveAddress(context, {index, country, city, street, number, blockStaircase, postcode}) {
        //     context.commit("SAVE_ADDRESS", {index, country, city, street, number, blockStaircase, postcode});
        //     context.commit("SAVE_ADDRESS");
        // },
        saveAddress(context, address) {
            context.commit("SAVE_ADDRESS", address);
            context.commit("SAVE_ADDRESS");
        }, saveBillingAddress(context, address) {
            context.commit("SAVE_BILLING_ADDRESS", address);
            context.commit("SAVE_BILLING_ADDRESS");
        },
        // updateAddress(context, address, index) {
        //     context.commit("UPDATE_ADDRESS", address, index);
        //     context.commit("UPDATE_ADDRESS");
        // }
        updateBillingAddress(context,  { billingAddress, index }) {
            context.commit("UPDATE_BILLING_ADDRESS", { address: billingAddress, index });
            context.commit("UPDATE_BILLING_ADDRESS");
        },updateAddress(context,  { deliveryAddress, index }) {
            context.commit("UPDATE_ADDRESS", { address: deliveryAddress, index });
            context.commit("UPDATE_ADDRESS");
        }
        // setCartTotalPrice(context, { couponCode, showCouponCodeAlert,cartTotalPrice}) {
        //     context.commit("SET_CART_TOTAL_PRICE", { couponCode, showCouponCodeAlert,cartTotalPrice});
        //     context.commit("SET_CART_TOTAL_PRICE");
        // },
        // selectPaymentMethod(context, {isCheckboxAlipayChecked,isCheckboxCreditCardChecked,isCheckboxAmazonPayChecked}) {
        //     context.commit("SELECT_PAYMENT_METHOD", {isCheckboxAlipayChecked,isCheckboxCreditCardChecked,isCheckboxAmazonPayChecked});
        //     context.commit("SELECT_PAYMENT_METHOD");
        // }
    },
    modules: {},
})
;
