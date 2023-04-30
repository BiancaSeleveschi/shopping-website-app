import Vue from "vue";
import Vuex from "vuex";
import {v4 as uuid} from 'uuid';
import firebase from "../firebaseInit.js";

const db = firebase.firestore();

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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
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
                size: ['XS', 'S', 'M', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
            },
            {
                title: "WOOL GABARDINE SHIRT JACKET",
                img: "https://valentino-cdn.thron.com/delivery/public/image/valentino/8067cfbc-2dfa-42d3-9a3c-2ef92b3a0832/ihqstx/std/2000x0/WOOL-GABARDINE-SHIRT-JACKET-WITH-VLOGO-SIGNATURE-PATCH?quality=80&size=35&format=auto",
                price: 799,
                description:
                    "Wool gabardine shirt jacket with VLogo Signature patch",
                color: "Beige",
                brand: "Valentino",
                type: "Shirt",
                gender: "men",
                size: ['XS', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['S', 'M', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['S', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                id: uuid(),
            },
            {
                title: "adidas x Gucci nylon down jacket",
                img: "https://media.gucci.com/style/HEXE0E8E5_Center_0_0_800x800/1670976089/722513_ZALC8_7470_001_100_0000_Light-adidas-x-Gucci-nylon-down-jacket.jpg",
                price: 599,
                description:
                    "A second chapter in the adidas and Gucci collection, where the Web continues to juxtapose with the three white stripes and the GG monogram combines with the Trefoil. ",
                color: "Yellow",
                brand: "Gucci",
                type: "Jacket",
                gender: "men",
                size: ['XS', 'S', 'M', 'L', 'XXL'],
                id: uuid(),
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
                size: ['XS', 'S', 'M', 'L', 'XL'],
                id: uuid(),
            },
        ],
        user: {
            id: uuid(),
            genre: '',
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: '',
            isLoggedIn: false,
            cart: [],
            favorites: [],
            deliveryAddresses: [
                {
                    city: 'Baia-Mare',
                    country: 'Romania',
                    street: 'V. Bologa',
                    number: '7',
                    blockStaircase: '',
                    postcode: '3333',
                    id: uuid(),
                },
                {
                    city: 'Baia-Mare',
                    country: 'Romania',
                    street: 'V. Bologa',
                    number: '7',
                    blockStaircase: '',
                    postcode: '3333',
                    id: uuid(),
                },
            ],
            billingAddresses: [
                {
                    city: 'Baia-Mare',
                    country: 'Romania',
                    street: 'V. Bologa',
                    number: '7',
                    blockStaircase: '',
                    postcode: '3333',
                    id: uuid(),
                },
                {
                    city: 'Cluj-Napoca',
                    country: 'Romania',
                    street: 'V. Bologa',
                    number: '7',
                    blockStaircase: '',
                    postcode: '400567',
                    id: uuid(),
                },
            ],
            cards: []
        },
        deliveryAddresses: [],
        billingAddresses: [],
        isAccountCreated: false,
    },
    getters: {
        getCart: (state) => state.user.cart,
        getAllProducts: (state) => state.women.concat(state.men),
        getCartTotalPrice: (state) => {
            let total = 0;
            if (state.user.cart) {
                state.user.cart.forEach((item) => {
                    total += item.product.price * item.quantity;
                });
            }
            return total.toLocaleString('pt-BR', {maximumFractionDigits: 2})
        },
        getIsLogged: (state) => {
            return state.user.isLoggedIn
        },
        getCartItemCount: (state) => {
            let total = 0;
            if (state.user.cart) {
                state.user.cart.forEach((item) => {
                    total += item.quantity;
                });
            }
            return total
        },
        getUserEmail: (state) => {
            return state.user
        },
        getUserCardCount: (state) => {
            return state.user.cards.length
        },
        getProductById: (state) => (productId) => {
            return state.user.favorites.find((product) => product.id === productId);
        },
        getCurrentDeliveryAddressesIndex: (state) => {
            if (state.user.isLoggedIn) {
                return state.user.deliveryAddresses.length
            }
            return state.deliveryAddresses.length
        },
        getCurrentBillingAddressesIndex: (state) => {
            if (state.user.isLoggedIn) {
                return state.user.billingAddresses.length
            }
            return state.billingAddresses.length
        },
    },
    mutations: {
        INIT_STORE(state) {
            const storedState = JSON.parse(localStorage.getItem("state"));
            if (storedState) {
                state.women = storedState.women || [];
                state.men = storedState.men || [];
                // state.user = storedState.user || [];
            } else {
                this.commit("UPDATE_STORE");
            }
        },
        UPDATE_STORE(state) {
            localStorage.setItem("state", JSON.stringify(state));
        },
        ADD_PRODUCT_AS_ADMIN(state, item) {
            console.log("item:", item)
            if (item.gender === 'women') {
                state.women.push(item)
            } else if (item.gender === 'men') {
                state.men.push(item)
            }
            this.commit("UPDATE_STORE");
        },
        REMOVE_PRODUCT(state, product) {
            let index;
            if (product.gender === 'women') {
                index = state.women.findIndex((p) => p.id === product.id)
                state.women.splice(index, 1)
            } else if (product.gender === 'men') {
                index = state.men.findIndex((p) => p.id === product.id)
                state.men.splice(index, 1)
            }
        },
        UPDATE_PRODUCT(state, product) {
            if (product.gender === 'women') {
                let index = state.women.findIndex((p) => p.id === product.id)
                state.women[index] = {
                    title: product.title,
                    img: product.img,
                    price: 999,
                    description: product.description,
                    color: product.color,
                    brand: product.brand,
                    type: product.type,
                    id: uuid(),
                }
            } else if (product.gender === 'men') {
                let index = state.men.findIndex((p) => p.id === product.id)
                state.men[index] = {
                    title: product.title,
                    img: product.img,
                    price: 999,
                    description: product.description,
                    color: product.color,
                    brand: product.brand,
                    type: product.type,
                    id: uuid(),
                }
            }
        },
        ADD_TO_CART(state, item) {
            let itemCart = state.user.cart.find((i) => i.product.id === item.product.id && item.size === i.size);
            if (itemCart) {
                itemCart.quantity++;
                itemCart.quantityPrice = itemCart.quantity * item.product.price;
                itemCart.quantityPrice = parseFloat(itemCart.quantityPrice).toLocaleString('pt-BR', {maximumFractionDigits: 2});
            } else {
                state.user.cart.push(item);
            }
        },
        REMOVE_FROM_CART(state, item) {
            let index = state.user.cart.indexOf(item);
            state.user.cart.splice(index, 1);
        },
        SET_PRODUCTS(state) {
            state.women.concat(state.men).forEach(product => {
                state.$set(product, 'isFavorite', false);
            })
        },
        SET_PRODUCTS_IS_FAVORITE(state, {productId, isFavorite}) {
            const product = state.women.find(p => p.id === productId) || state.men.find(p => p.id === productId);
            if (product) {
                product.isFavorite = isFavorite;
            }
        },
        UPDATE_PRODUCTS(state) {
            const allProducts = [...state.women, ...state.men];
            allProducts.forEach(product => {
                const isFavorite = localStorage.getItem(`favorite_${product.id}`) === 'true';
                product.isFavorite = isFavorite;
            });
        },
        ADD_TO_FAVORITES(state, product) {
            state.user.favorites.push(product);
        },
        REMOVE_FROM_FAVORITES(state, productId) {
            let index = state.user.favorites.findIndex((p) => p.id === productId);
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
        SIGN_IN(state, emailAddress, password) {
            state.user = {
                firstName: state.user.firstName,
                lastName: state.user.lastName,
                emailAddress: emailAddress,
                password: password,
                isLoggedIn: true,
                cart: state.user.cart,
                favorites: state.user.favorites,
                deliveryAddresses: state.user.deliveryAddresses,
                billingAddresses: state.user.billingAddresses,
                cards: state.user.cards,
            };
        },
        UPDATE_USER_INFORMATION(state, user) {
            state.user = {
                firstName: user.firstName,
                lastName: user.lastName,
                emailAddress: user.emailAddress,
                password: state.user.password,
                isLoggedIn: true,
                cart: state.user.cart,
                favorites: state.user.favorites,
                deliveryAddresses: state.user.deliveryAddresses,
                billingAddresses: state.user.billingAddresses,
                cards: state.user.cards,
            };
        },
        CHANGE_PASSWORD(state, newPassword) {
            state.user.password = newPassword
        },
        REMOVE_CARD(state, index) {
            state.user.cards.splice(index, 1)
        },
        REMOVE_DELIVERY_ADDRESS(state, index) {
            state.user.deliveryAddresses.splice(index, 1)
        },
        REMOVE_BILLING_ADDRESS(state, index) {
            state.user.billingAddresses.splice(index, 1)
        },
        SAVE_CARD(state, card) {
            state.user.cards.push(card)
        },
        SAVE_DELIVERY_ADDRESS(state, address) {
            if (state.user.isLoggedIn) {
                state.user.deliveryAddresses.push(address)
            }
            state.deliveryAddresses.push(address)
        },
        SAVE_BILLING_ADDRESS(state, address) {
            if (state.user.isLoggedIn) {
                state.user.billingAddresses.push(address)
            } else {
                state.billingAddresses.push(address)
            }
        },
        UPDATE_BILLING_ADDRESS(state, {address, index}) {
            state.user.billingAddresses[index] = address;
        },
        UPDATE_DELIVERY_ADDRESS(state, {address, index}) {
            state.user.deliveryAddresses[index] = address;
        },
        UPDATE_LOGIN_STATUS(state) {
            state.user.isLoggedIn = true;
        },
        SET_ACCOUNT_CREATED(state, user) {
            state.isAccountCreated = true;
            state.user = {
                title: user.title,
                firstName: user.firstName,
                lastName: user.lastName,
                emailAddress: user.emailAddress,
                password: user.password,
                isLoggedIn: true,
                cart: state.user.cart,
                favorites: state.user.favorites,
                deliveryAddresses: state.user.deliveryAddresses,
                billingAddresses: state.user.billingAddresses,
                cards: state.user.cards,
            };
        },
        LOGOUT(state) {
            state.user.isLoggedIn = false;
        }
    },
    actions: {
        addProductAsAdmin(context, item) {
            db.collection("products")
                .add(item)
                .then((docRef) => {
                    console.log("success", docRef)
                    item.id = docRef.id
                    context.commit("ADD_PRODUCT_AS_ADMIN", item);
                })


        },
        removeProduct(context, product) {
            context.commit("REMOVE_PRODUCT", product);
            context.commit("UPDATE_STORE");
        },
        updateProduct(context, product) {
            context.commit("UPDATE_PRODUCT", product);
            context.commit("UPDATE_STORE");
        },
        addToCart(context, item) {
            context.commit("ADD_TO_CART", item);
            context.commit("UPDATE_STORE");
        },
        removeProductFromCart(context, item) {
            context.commit("REMOVE_FROM_CART", item);
            context.commit("UPDATE_STORE");
        },
        setProductsIsFavorite(context) {
            context.commit("UPDATE_PRODUCTS");
            context.commit("UPDATE_STORE");
        },
        toggleFavorite(context, productId) {
            let isFavorite = localStorage.getItem(`favorite_${productId}`) === 'true';
            localStorage.setItem(`favorite_${productId}`, String(!isFavorite));
            context.commit('SET_PRODUCTS_IS_FAVORITE', {productId, isFavorite: !isFavorite});
            context.commit("UPDATE_STORE");
        },
        addToFavorites(context, product) {
            context.commit("ADD_TO_FAVORITES", product);
            context.commit("UPDATE_STORE");
        },
        removeFromFavorites(context, productId) {
            context.commit("REMOVE_FROM_FAVORITES", productId);
            context.commit("UPDATE_STORE");
        },
        setProducts(context, products) {
            context.commit("SET_PRODUCTS", products);
            context.commit("UPDATE_STORE");
        },
        updateProductsIsFavorite(context) {
            context.commit("UPDATE_PRODUCT_IS_FAVORITE");
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
        signIn(context, emailAddress, password) {
            context.commit("SIGN_IN", emailAddress, password);
            context.commit("UPDATE_STORE");
        },
        logout(context) {
            context.commit("LOGOUT");
            context.commit("UPDATE_STORE");
        },
        updateUserInformation(context, user) {
            context.commit("UPDATE_USER_INFORMATION", user);
            context.commit("UPDATE_STORE");
        },
        changePassword(context, newPassword) {
            context.commit("CHANGE_PASSWORD", newPassword);
            context.commit("UPDATE_STORE");
        },
        removeDeliveryAddress(context, index) {
            context.commit("REMOVE_DELIVERY_ADDRESS", index);
            context.commit("UPDATE_STORE");
        },
        removeCard(context, index) {
            context.commit("REMOVE_CARD", index);
            context.commit("UPDATE_STORE");
        },
        removeBillingAddress(context, index) {
            context.commit("REMOVE_BILLING_ADDRESS", index);
            context.commit("UPDATE_STORE");
        },
        saveCard(context, card) {
            context.commit("SAVE_CARD", card);
            context.commit("UPDATE_STORE");
        },
        saveDeliveryAddress(context, address) {
            context.commit("SAVE_DELIVERY_ADDRESS", address);
            context.commit("UPDATE_STORE");
        },
        saveBillingAddress(context, address) {
            context.commit("SAVE_BILLING_ADDRESS", address);
            context.commit("UPDATE_STORE");
        },
        updateBillingAddress(context, {billingAddress, index}) {
            context.commit("UPDATE_BILLING_ADDRESS", {address: billingAddress, index});
            context.commit("UPDATE_STORE");
        },
        updateDeliveryAddress(context, {deliveryAddress, index}) {
            context.commit("UPDATE_DELIVERY_ADDRESS", {address: deliveryAddress, index});
            context.commit("UPDATE_STORE");
        },
        updateLoginStatus(context) {
            context.commit("UPDATE_LOGIN_STATUS");
            context.commit("UPDATE_STORE");
        },
        setAccountCreated(context, user) {
            context.commit("SET_ACCOUNT_CREATED", user);
            context.commit("UPDATE_STORE");
        }
        // selectPaymentMethod(context, {isCheckboxAlipayChecked,isCheckboxCreditCardChecked,isCheckboxAmazonPayChecked}) {
        //     context.commit("SELECT_PAYMENT_METHOD", {isCheckboxAlipayChecked,isCheckboxCreditCardChecked,isCheckboxAmazonPayChecked});
        //     context.commit("SELECT_PAYMENT_METHOD");
        // }
    },
    modules: {}
    ,
})
;
