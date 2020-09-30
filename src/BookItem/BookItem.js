import React, { Component } from 'react';
import './BookItem.css'

class BookItem extends Component {
    render() {
        return (
            <div className="book_inner_container">
                <h1>{this.props.bookTitle}</h1>
                <a href={this.props.bookPreview} target="_blank">
                    <img src={this.props.bookImage} alt="book" />
                </a>
                <p>{this.props.bookAuthor}</p>
                <p>{this.props.bookPrice}</p>
                <p>{this.props.bookDescription}</p>
            </div>
        );
    }
}

export default BookItem;

            // results need to include:
            // const bookTitle = object[i].items.volumeInfo.title
            // const bookAuthor = object[i].items.volumeInfo.authors[i] 
            // const bookPrice = object[i].saleInfo.listPrice.amount 
            // const bookDescription = object[i].items.volumeInfo.description
            // const bookImage = object[i].items.volumeInfo.imageLinks.smallThumbnail