let data = [
  // {
  //   card: {
  //     card: {
  //       "@type":
  //         "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
  //       collectionId: "80445",
  //       title: "Juice",
  //       description:
  //         "Sip on these delicious and healthy juices to refresh your day.",
  //       imageId:
  //         "COLLECTIONS/IMAGES/MERCH/2024/7/1/6163d3fc-6b0f-4ca6-886d-6cdcc8314a95_pic",
  //       aspectRatio: "3.44",
  //       cta: {
  //         link: "swiggy://collectionV2?collection_id=80445&tags=layout_Juices_Contextual,juice",
  //         type: "collectionv2",
  //       },
  //       type: "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
  //       count: "11 restaurants",
  //       navBarConfig: {},
  //     },
  //   },
  // },
  // {
  //   card: {
  //     card: {
  //       "@type":
  //         "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
  //       sortConfigs: [
  //         {
  //           key: "relevance",
  //           title: "Relevance (Default)",
  //           selected: true,
  //           defaultSelection: true,
  //         },
  //         {
  //           key: "deliveryTimeAsc",
  //           title: "Delivery Time",
  //         },
  //         {
  //           key: "modelBasedRatingDesc",
  //           title: "Rating",
  //         },
  //         {
  //           key: "costForTwoAsc",
  //           title: "Cost: Low to High",
  //         },
  //         {
  //           key: "costForTwoDesc",
  //           title: "Cost: High to Low",
  //         },
  //       ],
  //       restaurantCount: 11,
  //       facetList: [
  //         {
  //           label: "10 Mins Delivery",
  //           id: "isRestaurantBolt",
  //           selection: "SELECT_TYPE_SINGLESELECT",
  //           facetInfo: [
  //             {
  //               label: "10 Mins Delivery",
  //               id: "isRestaurantBoltfacetquery0",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //           ],
  //           viewType: "VIEW_TYPE_FLATTENED",
  //           subLabel: "Filter by",
  //           icon: "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
  //           selectedIcon:
  //             "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
  //         },
  //         {
  //           label: "Veg/Non-Veg",
  //           id: "isVeg",
  //           selection: "SELECT_TYPE_MULTISELECT",
  //           facetInfo: [
  //             {
  //               label: "Non Veg",
  //               id: "isVegfacetquery0",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //             {
  //               label: "Pure Veg",
  //               id: "isVegfacetquery1",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //           ],
  //           viewType: "VIEW_TYPE_HALF_CARD",
  //           subLabel: "Filter by",
  //           openFilter: true,
  //         },
  //         {
  //           label: "Ratings",
  //           id: "rating",
  //           selection: "SELECT_TYPE_MULTISELECT",
  //           facetInfo: [
  //             {
  //               label: "Ratings",
  //               id: "ratingfacetquery0",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //             {
  //               label: "Ratings 4.0+",
  //               id: "ratingfacetquery1",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //             {
  //               label: "Ratings 4.5+",
  //               id: "ratingfacetquery2",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //           ],
  //           viewType: "VIEW_TYPE_HALF_CARD",
  //           subLabel: "Filter by",
  //           openFilter: true,
  //         },
  //         {
  //           label: "Delivery Time",
  //           id: "deliveryTime",
  //           selection: "SELECT_TYPE_MULTISELECT",
  //           facetInfo: [
  //             {
  //               label: "Less than 45 mins",
  //               id: "deliveryTimefacetquery1",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //           ],
  //           viewType: "VIEW_TYPE_HALF_CARD",
  //           subLabel: "Filter by",
  //           openFilter: true,
  //         },
  //         {
  //           label: "Cost For Two",
  //           id: "costForTwo",
  //           selection: "SELECT_TYPE_MULTISELECT",
  //           facetInfo: [
  //             {
  //               label: "Less than Rs. 300",
  //               id: "costForTwofacetquery0",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //             {
  //               label: "Rs.300 - Rs.600",
  //               id: "costForTwofacetquery1",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //             {
  //               label: "Greater than Rs. 600",
  //               id: "costForTwofacetquery2",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //           ],
  //           viewType: "VIEW_TYPE_HALF_CARD",
  //           subLabel: "Filter by",
  //           openFilter: true,
  //         },
  //       ],
  //       widgetId: "inlineFacetFilter",
  //     },
  //   },
  // },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        layout: {
          rows: 1,
          widgetPadding: {
            left: 16,
            top: 12,
            right: 16,
          },
          widgetTheme: {
            defaultMode: {
              backgroundColour: "#FFFFFF",
              theme: "THEME_TYPE_LIGHT",
            },
            darkMode: {
              backgroundColour: "#1B3028",
              theme: "THEME_TYPE_DARK",
            },
          },
        },
        id: "restaurantCountWidget",
        gridElements: {
          infoWithStyle: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "Restaurants to explore",
            headerStyling: {
              textSize: 15,
              textColor: "text_color_highest_emphasis",
              textFontName: "FONT_NAME_HEADER_H5",
              maxLines: 1,
            },
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "304640",
          name: "Saladspoint",
          cloudinaryImageId: "6116a2736e177c4a872d11a9d077584a",
          locality: "Village Samaspur",
          areaName: "Sector 50",
          costForTwo: "₹600 for two",
          cuisines: ["Salads", "Healthy food", "Juices", "Beverages"],
          avgRating: 4.6,
          parentId: "8786",
          avgRatingString: "4.6",
          totalRatingsString: "3.8K+",
          promoted: true,
          adTrackingId:
            "cid=fa4504e8-d4ad-4439-8b2f-0baf50b8b693~p=0~adgrpid=fa4504e8-d4ad-4439-8b2f-0baf50b8b693#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=304640~plpr=COLLECTION~eid=a35c8a3b-1b05-44cc-ab15-fc0a768a0a5e~srvts=1769227960493~collid=80445",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 6.9,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "6.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 03:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "High%20Protein/rx%20tag%205.png",
                description: "High Protein",
              },
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "High%20Protein/rx%20tag%205.png",
                      description: "High Protein",
                    },
                  },
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
            logoCtx: {
              text: "BENEFITS",
            },
            footerText: "3 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              maxDuration: "3000",
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "fa4504e8-d4ad-4439-8b2f-0baf50b8b693",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=304640&source=collection&query=Juices",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_Contextual",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "57039",
          name: "Blue Tokai Coffee Roasters",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/5/e30f4592-afda-4e15-a67c-81434ce3aab4_57039.JPG",
          locality: "DLF Phase - 4",
          areaName: "DLF Phase - 4",
          costForTwo: "₹600 for two",
          cuisines: ["Cafe", "Coffee", "Beverages"],
          avgRating: 4.7,
          parentId: "2682",
          avgRatingString: "4.7",
          totalRatingsString: "3.1K+",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            slaString: "30-40 mins",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹75 OFF",
            subHeader: "ABOVE ₹349",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              maxDuration: "3000",
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.4",
              ratingCount: "753",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=57039&source=collection&query=Juices",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_Contextual",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "25763",
          name: "Falhari - A Fruitful Habit",
          cloudinaryImageId: "irqp9yxmgbnslcreowc7",
          locality: "DLF Phase - 5",
          areaName: "New DLF Phase 4",
          costForTwo: "₹250 for two",
          cuisines: [
            "Healthy Food",
            "Beverages",
            "Salads",
            "Desserts",
            "Ice Cream",
          ],
          avgRating: 4.5,
          veg: true,
          parentId: "13818",
          avgRatingString: "4.5",
          totalRatingsString: "13K+",
          promoted: true,
          adTrackingId:
            "cid=4b7a4ab4-23e5-45dd-9873-40edbbb13f4f~p=3~adgrpid=4b7a4ab4-23e5-45dd-9873-40edbbb13f4f#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=25763~plpr=COLLECTION~eid=3c8d4a03-ed39-4774-b239-946eeb6dab58~srvts=1769227960494~collid=80445",
          sla: {
            deliveryTime: 40,
            lastMileTravel: 7.6,
            serviceability: "SERVICEABLE",
            slaString: "40-50 mins",
            lastMileTravelString: "7.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 03:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹29",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              maxDuration: "3000",
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "4b7a4ab4-23e5-45dd-9873-40edbbb13f4f",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=25763&source=collection&query=Juices",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_Contextual",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "502455",
          name: "Suchali's Artisan Bakehouse",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/5/ee944c84-52f8-45fc-822e-e6ec5f0e4a34_502455.JPG",
          locality: "Galleria Unit 2",
          areaName: "Galleria Unit 2",
          costForTwo: "₹600 for two",
          cuisines: ["Bakery", "Desserts", "Beverages"],
          avgRating: 4.8,
          parentId: "196351",
          avgRatingString: "4.8",
          totalRatingsString: "909",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            slaString: "30-40 mins",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹75 OFF",
            subHeader: "ABOVE ₹349",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              maxDuration: "3000",
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=502455&source=collection&query=Juices",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_Contextual",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "617838",
          name: "Healthy Gym Diet",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/3/11/8bd443de-dde5-4317-b8ae-dcb7972bec78_64eef042-5e99-4158-a818-726d241119c3.webp",
          locality: "Shamshpur",
          areaName: "Jalvayu Towers",
          costForTwo: "₹499 for two",
          cuisines: ["Healthy Food", "Salad", "Indian", "Beverages"],
          avgRating: 4.4,
          parentId: "368221",
          avgRatingString: "4.4",
          totalRatingsString: "343",
          sla: {
            deliveryTime: 39,
            lastMileTravel: 7,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "7.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "High%20Protein/rx%20tag%205.png",
                description: "High Protein",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "High%20Protein/rx%20tag%205.png",
                      description: "High Protein",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              maxDuration: "3000",
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=617838&source=collection&query=Juices",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_Contextual",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "152827",
          name: "Lord Of The Juices",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/8/27/0842b662-4c65-4bc1-ba3e-5163766ed4c4_29e28e42-89d3-4310-9495-35dd86d78787.jpg",
          locality: "Vyapar Kendra",
          areaName: "Sushant Lok",
          costForTwo: "₹300 for two",
          cuisines: [
            "Juices",
            "Beverages",
            "Salads",
            "Pastas",
            "Chinese",
            "Healthy Food",
          ],
          avgRating: 4.5,
          parentId: "126047",
          avgRatingString: "4.5",
          totalRatingsString: "2.1K+",
          sla: {
            deliveryTime: 38,
            lastMileTravel: 9,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "9.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹300 OFF",
            subHeader: "ABOVE ₹799",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              maxDuration: "3000",
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "124",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=152827&source=collection&query=Juices",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_Contextual",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "451009",
          name: "Healthy Buy",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2026/1/19/a98b745d-5603-4a3d-89af-af553b769cc2_f9a6847b-40a5-41b4-bb2b-c643e1d098dc.jpg",
          locality: "Sector 7",
          areaName: " Krishna colony",
          costForTwo: "₹500 for two",
          cuisines: ["Beverages", "Salads", "Snacks"],
          avgRating: 4.4,
          parentId: "273193",
          avgRatingString: "4.4",
          totalRatingsString: "39",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 1.7,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "1.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 12:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              maxDuration: "3000",
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "5.0",
              ratingCount: "299",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=451009&source=collection&query=Juices",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_Contextual",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "317612",
          name: "Crudo Juicery & Salad Bar ",
          cloudinaryImageId: "3e5813d655697be45732df942a402328",
          locality: "DLF Galleria",
          areaName: "DLF Phase 4",
          costForTwo: "₹500 for two",
          cuisines: ["Salads", "Juices", "Continental", "Beverages"],
          avgRating: 4.7,
          parentId: "11898",
          avgRatingString: "4.7",
          totalRatingsString: "714",
          sla: {
            deliveryTime: 43,
            lastMileTravel: 7.9,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "7.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              maxDuration: "3000",
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=317612&source=collection&query=Juices",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_Contextual",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "573494",
          name: "Juice Shot",
          cloudinaryImageId: "dz8ohawzp1e4rmwhnqcp",
          locality: "DLF phase -4",
          areaName: "DLF Phase 4",
          costForTwo: "₹300 for two",
          cuisines: ["Juices", "Beverages"],
          avgRating: 4,
          parentId: "248215",
          avgRatingString: "4.0",
          totalRatingsString: "33",
          sla: {
            deliveryTime: 39,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹115",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              maxDuration: "3000",
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=573494&source=collection&query=Juices",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_Contextual",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "309375",
          name: "Saladify",
          cloudinaryImageId: "iyca9zvxvd2j98bhbpl4",
          locality: "DLF phase -4",
          areaName: "New DLF Phase 4",
          costForTwo: "₹300 for two",
          cuisines: ["Salads"],
          avgRating: 4.1,
          parentId: "11646",
          avgRatingString: "4.1",
          totalRatingsString: "43",
          sla: {
            deliveryTime: 38,
            lastMileTravel: 7.1,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "7.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "High%20Protein/rx%20tag%205.png",
                description: "High Protein",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "High%20Protein/rx%20tag%205.png",
                      description: "High Protein",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹115",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              maxDuration: "3000",
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=309375&source=collection&query=Juices",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_Contextual",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];
