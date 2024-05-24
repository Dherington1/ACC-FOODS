const Cart = require('../models/Carts');
const CartItem = require('../models/CartItems');
const Product = require('../models/Products');
const catchAsync = require('../utilities/catchAsync');

exports.addToCart = catchAsync(async (req, res, next) => {
    const { product_id, quantity } = req.body;
    const user_id = req.user.id;

    console.log('Request body:', req.body); // Add this line to log the request body
    console.log('User ID:', user_id); // Log the user ID

    try {
        // Find the product to ensure it exists
        const product = await Product.findByPk(product_id);
        if (!product) {
            console.log('Product not found for ID:', product_id);
            return res.status(404).json({ message: 'Product not found' });
        }

        console.log('Product found:', product);

        // Find the cart for the user or create a new cart if it doesn't exist
        let cart = await Cart.findOne({ where: { user_id } });
        if (!cart) {
            console.log('Creating new cart for user ID:', user_id);
            cart = await Cart.create({ user_id });
        }

        console.log('Cart found/created:', cart);

        // Check if the product is already in the cart
        let cartItem = await CartItem.findOne({ where: { cart_id: cart.carts_id, product_id } });
        if (cartItem) {
            // Update the quantity of the product in the cart
            cartItem.quantity += quantity;
            await cartItem.save();
        } else {
            // Add the product to the cart
            await CartItem.create({
                cart_id: cart.carts_id,
                product_id,
                quantity,
                price: product.price // Store the current price of the product
            });
        }

        console.log('Product added to cart');

        res.status(200).json({ message: 'Product added to cart successfully' });
    } catch (error) {
        console.error('Error in addToCart:', error);
        res.status(500).json({ error: error.message });
    }
});

exports.getCartItems = catchAsync(async (req, res, next) => {
    const user_id = req.user.id;

    console.log('User ID:', user_id); // Log the user ID

    try {
        // Find the cart for the user
        const cart = await Cart.findOne({ 
            where: { user_id },
            include: {
                model: CartItem,
                include: [Product] // Include associated Product details
            }
        });

        if (!cart) {
            console.log('Cart not found for user ID:', user_id);
            return res.status(404).json({ message: 'Cart not found' });
        }

        console.log('Cart found:', cart);

        // Respond with the cart items
        res.status(200).json(cart.CartItems);
    } catch (error) {
        console.error('Error in getCartItems:', error);
        res.status(500).json({ error: error.message });
    }
});
