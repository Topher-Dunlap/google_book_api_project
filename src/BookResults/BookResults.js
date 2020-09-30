import React, { Component } from 'react';
import BookItem from '../BookItem/BookItem';

class BookResults extends Component {

    bookResultsGenerator = () => {
        console.dir("bookResults Prop: " + this.props.bookData);
        return (
            <div className="bookItem">
                {this.props.bookData.map((book, idx) =>
                <BookItem
                    bookTitle={book.volumeInfo.title}
                    bookAuthor={book.volumeInfo.authors}
                    bookPrice={book.saleInfo.saleability === "NOT_FOR_SALE" || book.saleInfo.saleability === "FREE" ? book.saleInfo.saleability : "$" + book.saleInfo.listPrice.amount}
                    bookDescription={book.volumeInfo.description}
                    bookImage={book.volumeInfo.imageLinks.smallThumbnail}
                    bookPreview={book.volumeInfo.previewLink} />
                )}
            </div>
        )
    }
    render() {
        const bookResultsGenerator = this.bookResultsGenerator
        return (
            bookResultsGenerator()
        );
    }
}

export default BookResults;