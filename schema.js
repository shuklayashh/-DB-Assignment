import mongoose from 'mongoose';


const ProductSchema = new mongoose.Schema({
  name: String,
  desc: String,
  SKU: String,
  category_id: Number,
  inventor_id: Number,
  price: Number,
  discount_id: Number,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date
});


// Create a schema for Product_inventor
const ProductCategorySchema = new mongoose.Schema({
  name: String,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date
});
const ProductInventorSchema = new mongoose.Schema({
  quality: Number,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date
});

// Create a schema for Discount
const DiscountSchema = new mongoose.Schema({
  name: String,
  desc: String,
  discount_percent: Number,
  active: Boolean,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date
});

// Define and export models based on the schemas
const Product = mongoose.model('Product', ProductSchema);
const ProductInventor = mongoose.model('ProductInventor', ProductInventorSchema);
const ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema);

const Discount = mongoose.model('Discount', DiscountSchema);

// Export models
export { Product, ProductInventor, ProductCategory,Discount };
