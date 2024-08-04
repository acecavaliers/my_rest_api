const Product = require('../db/models/product');
const Component = require('../db/models/component');
const productComponent  = require('../db/models/productComponent');

exports.createProduct = async (req, res) => {
    const {name, quantity_on_hand, components  } =req.body;
  try {
    const newProduct = await Product.create({
        name:name,
        quantity_on_hand:quantity_on_hand,
    });

    if(!newProduct){
        return res.status(400).json({
            status:'fail',
            message: 'Failed to create product'
        });
    }

    const productId = newProduct.id;
    // Add components to the productcomponents table
    if (components && components.length > 0) {
      components.forEach(async componentId => {
        await productComponent.create({
          productId: productId,
          componentId: componentId,
        });
      });
    }
    

    const result = newProduct.toJSON();           

    return res.status(201).json({
        status:'success',
        data: result,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get all
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      // include: [{ model: Component, through: 'ProductComponent' }]
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Update 
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, quantity_on_hand } = req.body;
  try {
    const prod = await Product.findByPk(id);

    if (!prod) {
      return res.status(404).json({
        status: 'fail',
        message: 'Product not found'
      });
    }

    prod.name = name;
    prod.quantity_on_hand = quantity_on_hand;
    await prod.save();

    const result = prod.toJSON();

    return res.status(200).json({
      status: 'success',
      data: result
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Delete
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const prod = await Product.findByPk(id);

    if (!prod) {
      return res.status(404).json({
        status: 'fail',
        message: 'Product not found'
      });
    }

    await prod.destroy();

    return res.status(200).json({
      status: 'success',
      message: 'Product deleted successfully'
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
