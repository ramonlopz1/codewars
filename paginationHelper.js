// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1

class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;

    }
    itemCount() {
        return this.collection.length;
    }
    pageCount() {
        return Math.round(this.collection.length / this.itemsPerPage)
    }
    pageItemCount(pageIndex) {
        const aux = []
        for(let i = 0; i < this.pageCount() +1; i++) {
            let count = 0
            if(aux.length !== 0) {
                if(aux.length <= 1) {
                    aux.push(this.collection.slice(aux[0]?.length, aux[0]?.length + this.itemsPerPage))
                } else {
                    aux.push(this.collection.slice(aux[++count]?.length + 4, ))
                }
                
            } else {
                aux.push(this.collection.slice(0, this.itemsPerPage))
            }
        }

        return aux
    }

    pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
    }
}

const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o"], 4)

