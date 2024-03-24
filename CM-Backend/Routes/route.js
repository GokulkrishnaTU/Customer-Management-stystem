// customerRouter.js

const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

/**
 * @route   GET /customers
 * @desc    Get all customers
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @route   POST /customers
 * @desc    Create a new customer
 * @access  Public
 */
router.post('/', async (req, res) => {
  const customer = new Customer({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });
  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @route   PUT /customers/:id
 * @desc    Update a customer
 * @access  Public
 */
router.put('/:id', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @route   DELETE /customers/:id
 * @desc    Delete a customer
 * @access  Public
 */
router.delete('/:id', async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Customer deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
