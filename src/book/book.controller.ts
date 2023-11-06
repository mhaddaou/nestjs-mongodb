import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';

@Controller('book')
export class BookController {
    constructor(
        private readonly bookService : BookService
    ){}

    @Get()
    async findAll() : Promise<Book[]> {
        return this.bookService.find()
    }

    @Post()
    async createBook(@Body() book : Book) : Promise<Book>{
        return this.bookService.create(book);
    }
}
