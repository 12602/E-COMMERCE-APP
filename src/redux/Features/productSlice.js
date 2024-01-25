import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit'
const URL = "http://localhost:5000/api/products";

//get all the products
export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/products`);
        console.log(data)
        return data;

    } catch (error) {
        console.log(error);
        return error;
    }

});


//get detail of specific product
export const detailProduct = createAsyncThunk("products/getOneProduct", async ({ id }) => {
    const { data } = await axios.get(`${URL}/${id}`);
    console.log(data)
    return data;
});

//get all ordered products
export const getOrderProducts = createAsyncThunk("products/getOrderProduct", async ({ user }) => {

    const { data } = await axios.get(`http://localhost:5000/api/orders/myorders`, {
        headers: {
            "Content-Type": "Application/Json",
            "auth-token": user.token
        }
    });
    console.log(data);

    return data;
});

//ordered new procuts
export const orderProducts = createAsyncThunk("products/orderProducts", async ({ formValue, cart, navigate, toast, token, totalPrice }) => {

    //let re = { formValue, cart };
    let shippingAddress = { ...formValue };
    let orderItems = cart;

    try {


        const { data } = await axios.post(`http://localhost:5000/api/orders`, {
            shippingAddress,
            orderItems,
            totalPrice
        }, {
            headers: {
                "Content-Type": "Application/Json",
                "auth-token": token
            }
        });
        navigate("/");
        toast.success("Order Place Sucesfully!!!")
        return data.orderItems;
    } catch (error) {
        console.log(error);
        toast.error("Order Not  Place !!!")
        return error;
    }

});


////////////////////////////////////////////////////////////////////////////////////////
//creating reducer
const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        product: {},
        loading: true,
        error: '',
        categories: [],
        cart: [],
        orderItems: [],
    },


    reducers: 
    {
        addToCart: (state, action) => 
        {
            state.cart.push(action.payload);
        },
        logoutHandler: (state) => 
        {
            state.cart = [];

        },


    },
    extraReducers: 
     {

        [getAllProducts.pending]: (state, action) => {
            state.loading = true;
        },

        [getAllProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload
        },
        [getAllProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload

        }
        ,
        [detailProduct.pending]: (state, action) => {
            state.loading = true;
        },

        [detailProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.product = action.payload;
        },
        [detailProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload


        },
        [orderProducts.pending]: (state, action) => {
            state.loading = true;
        },

        [orderProducts.fulfilled]: (state, action) => {
            state.loading = false;

            state.cart = [];

        },
        [orderProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
         },
        [getOrderProducts.pending]: (state, action) => {
            state.loading = true;
        },

        [getOrderProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.orderItems = action.payload;
            state.cart = [];

        },
        [getOrderProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload


        },




    }
})


/////////////////////////////////////////////////////////////////////////////////////////

export const { addToCart, logoutHandler, getAllCategories } = productSlice.actions
export default productSlice.reducer;
