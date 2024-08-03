const component = require('../db/models/component');

exports.createComponent = async (req, res) => {
    const { name, description } =req.body;
  try {
    const newComponent = await component.create({
        name:name,
        description:description,
    });

    if(!newComponent){
        return res.status(400).json({
            status:'fail',
            message: 'Failed to create component'
        });
    }
    const result = newComponent.toJSON();           

    return res.status(201).json({
        status:'success',
        data: result,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllComponents = async (req, res) => {
  try {
    const components = await component.findAll();
    res.json(components);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

