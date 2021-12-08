import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  orderItems: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      itemTotal: { type: String, required: true },
      sku: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  shippingAddress: {
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
  paymentMethod: {
    type: String,
    // required: true,
  },
  paymentResult: {
    id: { type: String },
    status: { type: String, default: 'pending' },
    update_time: { type: String },
    email_address: { type: String },
  },
  totalPrice: {
    type: Number,
    // required: true,
    default: 0.0,
  },
})

const Order = mongoose.model('Order', orderSchema)

export default Order
