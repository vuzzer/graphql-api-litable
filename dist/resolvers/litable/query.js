import Litable from "../../models/litable.js";
export const queries = {
    getAllLitable: async () => {
        // Store response data
        let data;
        // Get all litable data
        let litablesData = await Litable.find();
        // Fetch data and pagination info
        if (litablesData.length > 0) {
            // Get number of documents
            let countDocuments = await Litable.countDocuments();
            // metadata pagination include defaut page, number of items by page and number page
            let currentPage = 1;
            let itemsByPage = 3;
            // Make simple division
            let numberPages = Math.floor(countDocuments / itemsByPage);
            numberPages += countDocuments % itemsByPage === 0 ? 0 : 1;
            let litables = litablesData.map((litable) => {
                return { id: litable.id, street: litable.street, rent: litable.rent, imageUrl: litable.imageUrl, city: litable.city };
            });
            // Data type to return
            data = { litable: litables, metadata: { currentPage: currentPage, itemsByPage: itemsByPage, numberPage: numberPages } };
        }
        return data;
    },
    getLitableById: async (_, { id }) => {
        const data = await Litable.findById({ _id: Object(id) });
        // Store response data to return
        let litable = {};
        // If litable exist, assign value to litable variable
        if (data) {
            litable = { id: data.id, street: data.street, rent: data.rent.toString(), imageUrl: data.imageUrl, city: data.city };
        }
        return litable;
    }
};
//# sourceMappingURL=query.js.map