const supplier = require('../db/models/supplier');

exports.createSupplier = async (req, res) => {
    const { name } =req.body;
  try {
    const newSupplier = await supplier.create({
        name:name,
    });

    if(!newSupplier){
        return res.status(400).json({
            status:'fail',
            message: 'Failed to create supplier'
        });
    }
    const result = newSupplier.toJSON();           

    return res.status(201).json({
        status:'success',
        data: result,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await supplier.findAll();
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
