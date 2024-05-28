import AsyncStorage from "@react-native-async-storage/async-storage"
import config from "./myProjectBackend/config/config";
import axios from "axios";
import { IP_PRODUCT, IP_USER } from './myProjectBackend/config/config'

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${IP_USER}/login`, {
            email,
            password
        })
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message)
        } else {
            throw new Error(error.message)
        }
    }
}

export const registerUser = async (name, email, password, phone) => {
    try {
        const response = await axios.post(`${IP_USER}/register`, {
            name,
            email,
            phone,
            password,
        })
        return response.data;
    } catch (error) {
        console.log(error);
        if (error.response) {
            throw new Error(error.response.data.message)
        } else {
            throw new Error(error.message)
        }

    }
}


export const resetPassword = async (email, newpassword, confirmpassword) => {
    try {
        const response = await axios.post(`${IP_USER}/reset_password`, {
            email,
            newpassword,
            confirmpassword
        })
        return response.data
    } catch (error) {
        console.log(error);
        if (error.response) {
            throw new Error(error.response.data.message)
        } else {
            throw new Error(error.message)
        }

    }
}
export const getAllProducts = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(`${IP_PRODUCT}/getAllProducts`, {
            header: {
                Authorization: `Bearer ${token}`
            }
        });
        // console.log('lỗi ở đây')
        //console.log(response.data)
        return response.data

    } catch (error) {
        console.log('lỗi')
        console.log(error);
        if (error.response) {
            console.log('lỗi 1')
            throw new Error(error.response.data.message)
        } else {
            console.log('lỗi 2')
            throw new Error(error.message)
        }
    }
}

export const getProducts = async () => {
    try {
        const token = await AsyncStorage.getItem('token')
        const response = await axios.get(`${IP_PRODUCT}/getProducts`, {
            header: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data
    } catch (error) {
        console.log(error);
        if (error.response) {
            throw new Error(error.response.data.message)
        } else {
            throw new Error(error.message)
        }

    }
}