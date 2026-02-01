import { useEffect } from "react";

// let data = {
//   card: {
//     card: {
//       "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//       info: {
//         id: "313818",
//         name: "Bombay Meri Jaan",
//         city: "Gurgaon",
//         slugs: {
//           restaurant: "chao-mao-asia-huda-city-huda-city",
//           city: "gurgaon",
//         },
//         uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
//         cloudinaryImageId: "mljvxbaidfj6eklj6wvk",
//         locality: "Jharsa Village",
//         areaName: "Huda City",
//         costForTwo: "30000",
//         costForTwoMessage: "₹300 for two",
//         cuisines: ["Maharashtrian", "Snacks"],
//         avgRating: 4.4,
//         veg: true,
//         feeDetails: {
//           restaurantId: "313818",
//           fees: [{}],
//         },
//         parentId: "14231",
//         avgRatingString: "4.4",
//         totalRatingsString: "4.6K+ ratings",
//         sla: {
//           restaurantId: "313818",
//           deliveryTime: 32,
//           minDeliveryTime: 30,
//           maxDeliveryTime: 35,
//           lastMileTravel: 4.5,
//           serviceability: "SERVICEABLE",
//           stressFactor: 1,
//           rainMode: "RAIN_MODE_NONE",
//           longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
//           zoneId: 18,
//           slaString: "30-35 MINS",
//           lastMileTravelString: "4.5 km",
//           iconType: "ICON_TYPE_EMPTY",
//         },
//         availability: {
//           nextCloseTime: "2026-02-01 23:59:00",
//           visibility: true,
//           opened: true,
//           restaurantClosedMeta: {},
//         },
//         aggregatedDiscountInfo: {
//           header: "Flat ₹50 off",
//           shortDescriptionList: [
//             {
//               meta: "Flat ₹50 off on orders above ₹299",
//               discountType: "Flat",
//               operationType: "RESTAURANT",
//             },
//             {
//               meta: "Flat ₹75 off on orders above ₹399",
//               discountType: "Flat",
//               operationType: "RESTAURANT",
//             },
//           ],
//           descriptionList: [
//             {
//               meta: "Flat ₹50 off on orders above ₹299 | Use code FLAT50",
//               discountType: "Flat",
//               operationType: "RESTAURANT",
//             },
//             {
//               meta: "Flat ₹75 off on orders above ₹399 | Use code FLAT75",
//               discountType: "Flat",
//               operationType: "RESTAURANT",
//             },
//           ],
//           visible: true,
//         },
//         badges: {},
//         slugString: "chao-mao-asia-huda-city-huda-city",
//         multiOutlet: true,
//         isOpen: true,
//         labels: [
//           {
//             title: "Timings",
//             message: "null",
//           },
//           {
//             title: "Address",
//             message: "Shop no. 4, 7, 8, Jharsa Village, Sector 40, Gurgaon",
//           },
//           {
//             title: "Cuisines",
//             message: "Maharashtrian,Snacks",
//           },
//         ],
//         totalRatings: 4600,
//         aggregatedDiscountInfoV2: {
//           header: "Flat ₹50 off",
//           shortDescriptionList: [
//             {
//               meta: "Flat ₹50 off on orders above ₹299",
//               discountType: "Flat",
//               operationType: "RESTAURANT",
//             },
//             {
//               meta: "Flat ₹75 off on orders above ₹399",
//               discountType: "Flat",
//               operationType: "RESTAURANT",
//             },
//           ],
//           descriptionList: [
//             {
//               meta: "Flat ₹50 off on orders above ₹299 | Use code FLAT50",
//               discountType: "Flat",
//               operationType: "RESTAURANT",
//             },
//             {
//               meta: "Flat ₹75 off on orders above ₹399 | Use code FLAT75",
//               discountType: "Flat",
//               operationType: "RESTAURANT",
//             },
//           ],
//           couponDetailsCta: "View coupon details",
//         },
//         type: "F",
//         nudgeBanners: [
//           {
//             minValue: 209,
//             maxValue: 299,
//             priority: 1,
//             couponCode: "FLAT50",
//             discountInfo: {
//               discountType: "Flat",
//               value: 50,
//             },
//             lockedMessage:
//               "Add items worth ₹<amount> to save ₹50 | Code FLAT50",
//             unlockedMessage: "FLAT50 Coupon Unlocked! Use it to save ₹50",
//             logoCtx: {},
//             movComputationType: "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE",
//           },
//           {
//             minValue: 384,
//             maxValue: 549,
//             priority: 3,
//             couponCode: "FLAT100",
//             discountInfo: {
//               discountType: "Flat",
//               value: 100,
//             },
//             lockedMessage:
//               "Add items worth ₹<amount> to save ₹100 | Code FLAT100",
//             unlockedMessage: "FLAT100 Coupon Unlocked! Use it to save ₹100",
//             logoCtx: {},
//             movComputationType: "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE",
//           },
//           {
//             minValue: 559,
//             maxValue: 799,
//             priority: 9,
//             couponCode: "FLAT150",
//             discountInfo: {
//               discountType: "Flat",
//               value: 150,
//             },
//             lockedMessage:
//               "Add items worth ₹<amount> to save ₹150 | Code FLAT150",
//             unlockedMessage: "FLAT150 Coupon Unlocked! Use it to save ₹150",
//             logoCtx: {},
//             movComputationType: "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE",
//           },
//         ],
//         headerBanner: {
//           url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/313818",
//         },
//         loyaltyDiscoverPresentationInfo: {
//           logoCtx: {
//             logo: "v1634558776/swiggy_one/OneLogo_3x.png",
//           },
//           freedelMessage: "Free delivery on orders above ₹199",
//         },
//         ratingSlab: "RATING_SLAB_5",
//         orderabilityCommunication: {
//           title: {},
//           subTitle: {},
//           message: {},
//           customIcon: {},
//           commsStyling: {},
//         },
//         hasBestsellerItems: true,
//         cartOrderabilityNudgeBanner: {
//           parameters: {},
//           presentation: {},
//         },
//         latLong: "28.452660,77.057631",
//         backgroundImageOverlayInfo: {},
//         featuredSectionInfo: {},
//       },
//       analytics: {},
//     },
//     relevance: {
//       type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_AND_SHOW_MENU_OFFER_NUDGE",
//       sectionId: "MENU_ITEM_CART_UPDATE_POP_CROUTON",
//     },
//   },
// };

const RestaurantMenu = () => {
  useEffect(() => {
    // fetchMenu();
  }, []);

//  const fetchMenu = async () => {
//     try {
//       const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER";
      
//       const res = await fetch(url)

//       const json = await res.json();
//       console.log(json);
      
//     } catch (error) {
//       console.error("Error fetching menu:", error);
//     }
//   };


  
  return (
    <>
      <h1>Retaurant Menu</h1>
    </>
  );
};

export default RestaurantMenu;
