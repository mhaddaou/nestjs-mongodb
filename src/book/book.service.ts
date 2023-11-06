import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name) private BookModule : Model<Book>
    ){}

    async find() : Promise<Book[]>{
        const books = this.BookModule.find();
        return books;
    }

    async create(book : Book) : Promise<Book>{
        const newBook = await this.BookModule.create(book)
        return newBook;
    }
}
