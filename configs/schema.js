import { integer } from 'drizzle-orm/pg-core';
import { pgTable, serial, varchar, json } from 'drizzle-orm/pg-core';

export const CarListing=pgTable('car_listings',{
    id:serial('id').primaryKey(),             // Primary key with column name 'id'
    listingTitle:varchar('listingTitle').notNull(),
    tagline:varchar('tagline'),
    originalPrice:varchar('originalPrice'),
    sellingPrice:varchar('sellingPrice').notNull(),
    category:varchar('category').notNull(),
    condition:varchar('condition').notNull(),
    make:varchar('make').notNull(),
    model:varchar('model').notNull(),
    year:varchar('year').notNull(),
    driveType:varchar('driveType').notNull(),
    transmission:varchar('transmission').notNull(),
    fuelType:varchar('fuelType').notNull(),
    mileage:varchar('mileage').notNull(),
    engineSize:varchar('engineSize').notNull(),
    cylinders:varchar('cylinders'),
    color:varchar('color').notNull(),
    doors:varchar('doors').notNull(),
    vin:varchar('vin'),
    offerType:varchar('offerType').notNull(),
    listingDescription:varchar('listingDescription').notNull(),
    features:json('features'),
    createdBy:varchar('createdBy').notNull(),
    userName:varchar('userName').notNull().default('harshil'),
    userImageUrl:varchar('userImageUrl').notNull().default('https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18zMW1LZEZKc0o3QVhJazhuV2tvUEY3YWdaNGgifQ'),
    postedOn:varchar('postedOn'),


})

export const CarImages=pgTable('car_images',{
    id:serial('id').primaryKey(),
    carListingId:integer('carListingId').notNull().references(()=>CarListing.id),
    imageUrl:varchar('imageUrl').notNull(),
})

export const SavedCars=pgTable('saved_cars',{
    id:serial('id').primaryKey(),
    userId:varchar('userId').notNull(),
    carListingId:integer('carListingId').notNull().references(()=>CarListing.id),
})
