const bookActions={
    addBookToReadingList: 'addBookToReadingList',
    removeBookFromReadingList: 'removeBookFromReadingList',
    clearReadingList: 'clearReadingList'
};

function bookReducer(listOfBooks, {type, books}){
    switch(type){
        case bookActions.addBookToReadingList:
            return [...listOfBooks, books];
        
        case bookActions.removeBookFromReadingList:
            let newList = listOfBooks.slice();
            for (let bookToDelete of newList){
                if (bookToDelete === books.id){
                    newList.splice(newList.indexOf(bookToDelete), 1)
                    return newList
                }
            }
            return newList
        case bookActions.clearReadingList:
            return []
    };
};

export {
    bookReducer,
    bookActions
};