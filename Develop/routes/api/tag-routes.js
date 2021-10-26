const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [Category, 
      {
        model: Product,
        through: ProductTag
      }
    ]
  }).then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(400).json(err)
  }) 
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [Category, 
      {
        model: Product,
        through: ProductTag
      }
    ]
  }).then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(400).json(err)
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(400).json(err)
  }) 
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(400).json(err)
  }) 
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(400).json(err)
  }) 
});

module.exports = router;
