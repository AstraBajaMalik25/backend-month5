import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts
} from '../controllers/product.controller';

import { 
  validate, 
  createProductValidation, 
  getProductByIdValidation 
} from '../middlewares/product.validation';

import { upload } from '../middlewares/upload.middleware';

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/search', searchProducts);
router.get('/products/:id', validate(getProductByIdValidation), getProductById);

router.post(
  '/products',
  upload.single('image'),            // 1️⃣ PARSE FORM-DATA
  createProductValidation,           // 2️⃣ RULE
  validate(createProductValidation), // 3️⃣ EXECUTE
  createProduct                      // 4️⃣ CONTROLLER
);

router.put(
  '/products/:id',
  validate(createProductValidation),
  updateProduct
);

router.delete(
  '/products/:id',
  validate(getProductByIdValidation),
  deleteProduct
);

export default router;
