import APIConnector from "@/services/APIConnector";

const connector = new APIConnector();

export const searchConfig = {
  apiConnector: connector,

  // initialState: {
  //   resultsPerPage: 3, // ✅ VERY IMPORTANT
  // },

  searchQuery: {

    search_fields: {
      name: {},
      description: {},
    },

    result_fields: {
      name: { raw: {} },
      description: { raw: {} },
      type: { raw: {} },
      category: { raw: {} },
      price: { raw: {} },
      images: { raw: {} },
      available: { raw: {} },
    },

    facets: {
      price: {
        type: "range",
        ranges: [
          { from: 0, to: 5000 },
          { from: 5000, to: 10000 },
          { from: 10000, to: 20000 },
        ],
      },
    },
  },
};