import APIConnector from '@/services/APIConnector'

const connector = new APIConnector()

export const searchConfig = {
  apiConnector: connector,

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
      },

    facets: {
        type: { type: 'value', size: 10 },
      price: {
        type: 'range',
        ranges: [
          { from: 0, to: 100 },
          { from: 100, to: 500 },
          { from: 500 },
        ],
      },
    },
  },
}