const bookActions={
    addBookToReadingList: 'addBookToReadingList',
    removeBookFromReadingList: 'removeBookFromReadingList',
    clearReadingList: 'clearReadingList'
};

function bookReducer(listOfBooks, {type, book}){
    switch(type){
        case bookActions.addBookToReadingList:
            return [...listOfBooks, book];
        
        case bookActions.removeBookFromReadingList:
            let newList = listOfBooks.slice();
            for (let bookToDelete of newList){
                if (bookToDelete === book.id){
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