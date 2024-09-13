const mongoose = require('mongoose');
const Product = mongoose.model('Produto');

exports.get = async () => {
    const result = await Product.find({
        active: true
    });
    return result;
}

exports.create = async (data) => {
    let produto = Product(data);
    await produto.save();
}

exports.update = async (id, data) => {
    await Product.findByIdAndUpdate(id, {
        Sset: {
            title: data.title,
            description: data.description,
            price: data.price,
            category: data.category
        }
    });
}