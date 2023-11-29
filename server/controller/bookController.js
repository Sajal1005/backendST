import Book from "../model/bookModel.js";

export const create = async(req, res)=>{
    try {

        const bookData = new Book(req.body);

        if(!bookData){
            return res.status(404).json({msg: "Book data not found"});
        }

        await bookData.save();
        res.status(200).json({msg: "Book created successfully"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getAll = async(req, res) =>{
    try {
        const categoryFilter = req.query.category;
        const sortBooks = req.query.sort;

        // console.log(categoryFilter+" "+sortBooks)
        let bookData;
        if (categoryFilter) {
            // If category is specified, filter by category
            bookData = await Book.find({ category: categoryFilter });
        } else {
            // If no category specified, get all books
            bookData = await Book.find();
        }

        if(!bookData){
            return res.status(404).json({msg:"Book data not found"});
        }

        if (sortBooks) {
            // If sorting is requested, sort the bookData by price
            if(sortBooks=="price")
            bookData.sort((a, b) => a.price - b.price);
            else
            bookData.sort((a, b) => a.name.localeCompare(b.name));
        }else{
            bookData = await Book.find();
        }

        res.status(200).json(bookData);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getOne = async(req, res) =>{
    try {

        const id = req.params.id;
        const bookExist = await Book.findById(id);
        if(!bookExist){
            return res.status(404).json({msg: "Book not found"});
        }
        res.status(200).json(bookExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const update = async(req, res) =>{
    try {

        const id = req.params.id;
        const bookExist = await Book.findById(id);
        if(!bookExist){
            return res.status(401).json({msg:"Book not found"});
        }

        const updatedData = await Book.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "Book updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const deleteBook = async(req, res) =>{
    try {

        const id = req.params.id;
        const bookExist = await Book.findById(id);
        if(!bookExist){
            return res.status(404).json({msg: "Book not exist"});
        }
        await Book.findByIdAndDelete(id);
        res.status(200).json({msg: "Book deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}