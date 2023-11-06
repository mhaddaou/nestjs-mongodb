import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum Category{
    ADVENTURE = "adventure",
    CLASSICS = "classics",
    CRIME = "crime",
    FANTASY = "fantasy",
    HORROR = "horror",
    MUSIC = "music",
    MYSTERY = "mystery",
    ROMANCE = "romance",
}

@Schema({
    timestamps: true
})
export class Book{

    @Prop()
    title : string;

    @Prop()
    description : string;

    @Prop()
    author : string;

    @Prop()
    price : number;

    @Prop()
    category : Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);