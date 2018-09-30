const keys = require('../config/key');
const stripe = require('stripe')(keys.stripeSecretKey);
const { User } = require('../models/User');
const { authenticate } = require('../middleware/authenticate');

module.exports = app => {
  app.post('/api/stripe', authenticate, async (req, res) => {
    const charge = stripe.charges.create({
      amount: 500,
      currency: 'usd',
      source: req.body.id,
      description: '$5 for 5 credits'
    });
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $inc: { credits: 5 } },
      { new: true }
    );
    res.send(user);
  });
};
