import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ADD_NEW_NOTIFICATION, ADD_NEW_OFFER, CANCEL_BALANCE_REQUEST, CONFIRM_BALANCE_REQUEST, DELETE_AN_OFFER, DELETE_NOTIFICATION, DELETE_USER, EDIT_BALANCE, EDIT_COMMISSION, EDIT_FIRST_PAYMENT, EDIT_SECOND_PAYMENT, EDIT_SLIDER, EDIT_THIRD_PAYMENT, FETCH_BANKING_TRANSACTION, FETCH_BILL_PAY_TRANSACTION, FETCH_MOBILE_BANKING_TRANSACTION, FETCH_OFFER_PACKAGE_TRANSACTION, FETCH_RECHARGE_TRANSACTION, GET_ALL_NOTIFICATION, GET_ALL_OFFER, GET_ALL_USERS, GET_BALANCE_REQUEST_LIST, GET_COMMISSION_LIST, GET_SINGLE_USER, LOGIN,PERFORM_TRANSACTION,SIGNUP } from '../config/urls';
import { showError, showSuccess } from './helperFunction';


export async function getHeaders() {
	let adminData = await AsyncStorage.getItem('adminData');
	if (adminData) {
		adminData = JSON.parse(adminData);
		
		
			return {
				authorization: `${adminData.token}`,
			};

		
	}
	return {};
}


//signup api

export async function signup(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})
      

        if(result.data.success && endPoint==SIGNUP){
			
            return 'signup-success'
        
    }else if(!result.data.success && endPoint==SIGNUP){
        
        return result.data.message
    
}
        
    } catch (error) {
        showError(error)
        
    }

}


export async function login(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
       

        if(result.data.success && endPoint==LOGIN){
            showError(result.data.admin.name)
			
            return ['login-success',result.data]
        
    }else if(!result.data.success && endPoint==LOGIN){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}




export async function getBalanceRequestList(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===GET_BALANCE_REQUEST_LIST){
         
            return ['balance-fetch-success',result.data.result]
        
    }else if(!result.data.success && endPoint===GET_BALANCE_REQUEST_LIST){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}


export async function cancelBalanceRequest(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===CANCEL_BALANCE_REQUEST){
         
            return ['balance-request-remove-success',result.data.result]
        
    }else if(!result.data.success && endPoint===CANCEL_BALANCE_REQUEST){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}






export async function confirmBalanceRequest(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===CONFIRM_BALANCE_REQUEST){
         
            return ['balance-request-confirm-success',result.data.result]
        
    }else if(!result.data.success && endPoint===CONFIRM_BALANCE_REQUEST){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}



export async function editBalance(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===EDIT_BALANCE){
         
            return ['edit-balance-success',result.data.result]
        
    }else if(!result.data.success && endPoint===EDIT_BALANCE){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}


export async function editFirstPayment(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===EDIT_FIRST_PAYMENT){
         
            return ['edit-first-payment-success',result.data.result]
        
    }else if(!result.data.success && endPoint===EDIT_FIRST_PAYMENT){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}



export async function editFSecondPayment(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===EDIT_SECOND_PAYMENT){
         
            return ['edit-second-payment-success',result.data.result]
        
    }else if(!result.data.success && endPoint===EDIT_SECOND_PAYMENT){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}


export async function editThirdPayment(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===EDIT_THIRD_PAYMENT){
         
            return ['edit-third-payment-success',result.data.result]
        
    }else if(!result.data.success && endPoint===EDIT_THIRD_PAYMENT){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}



export async function getCommissionList(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===GET_COMMISSION_LIST){
         
            return ['commission-fetch-success',result.data.result[0].commission]
        
    }else if(!result.data.success && endPoint===GET_COMMISSION_LIST){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}


export async function editCommission(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===EDIT_COMMISSION){
         
            return ['commission-edit-success']
        
    }else if(!result.data.success && endPoint===EDIT_COMMISSION){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}



export async function editSlider(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===EDIT_SLIDER){
         
            return ['slider-edit-success']
        
    }else if(!result.data.success && endPoint===EDIT_SLIDER){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}








export async function getAllUsers(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===GET_ALL_USERS){
         
            return ['users-fetch-success',result.data.result]
        
    }else if(!result.data.success && endPoint===GET_ALL_USERS){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}









export async function getSingleUser(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===GET_SINGLE_USER){
         
            return ['single-user-fetch-success',result.data.result]
        
    }else if(!result.data.success && endPoint===GET_SINGLE_USER){

        
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}



export async function deleteUser(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===DELETE_USER){
         
            return ['users-delete-success',result.data.result]
        
    }else if(!result.data.success && endPoint===DELETE_USER){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}







export async function getMobileBankingOrder(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===FETCH_MOBILE_BANKING_TRANSACTION){
         
            return ['mobile-banking-order-fetch-success',result.data.result]
        
    }else if(!result.data.success && endPoint===FETCH_MOBILE_BANKING_TRANSACTION){

        
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)

        
        
    }

}



export async function getBankingOrder(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===FETCH_BANKING_TRANSACTION){
         
            return ['banking-order-fetch-success',result.data.result]
        
    }else if(!result.data.success && endPoint===FETCH_BANKING_TRANSACTION){

        
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)

        
        
    }

}



export async function getBillPayOrder(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===FETCH_BILL_PAY_TRANSACTION){
         
            return ['bill-pay-order-fetch-success',result.data.result]
        
    }else if(!result.data.success && endPoint===FETCH_BILL_PAY_TRANSACTION){

        
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)

        
        
    }

}



export async function getRechargeOrder(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===FETCH_RECHARGE_TRANSACTION){
         
            return ['recharge-order-fetch-success',result.data.result]
        
    }else if(!result.data.success && endPoint===FETCH_RECHARGE_TRANSACTION){

        
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)

        
        
    }

}


export async function getOfferOrder(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===FETCH_OFFER_PACKAGE_TRANSACTION){
         
            return ['offer-order-fetch-success',result.data.result]
        
    }else if(!result.data.success && endPoint===FETCH_OFFER_PACKAGE_TRANSACTION){

        
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)

        
        
    }

}




export async function performTransaction(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
       
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===PERFORM_TRANSACTION){
         
            return ['perform-transaction-success',result.data.result]
        
    }else if(!result.data.success && endPoint===PERFORM_TRANSACTION){

        
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)

        
        
    }

}



export async function addNewOffer(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===ADD_NEW_OFFER){
         
            return ['add-new-offer-success',result.data.result]
        
    }else if(!result.data.success && endPoint===ADD_NEW_OFFER){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}



export async function getAllOffer(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===GET_ALL_OFFER){
         
            return ['offer-fetch-success',result.data.result]
        
    }else if(!result.data.success && endPoint===GET_ALL_OFFER){

        
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)

        
        
    }

}








export async function deleteAnOffer(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===DELETE_AN_OFFER){
         
            return ['delete-offer-success',result.data.result]
        
    }else if(!result.data.success && endPoint===DELETE_AN_OFFER){

        
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)

        
        
    }

}






export async function addNewNotification(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===ADD_NEW_NOTIFICATION){
         
            return ['add-new-notification-success',result.data.result]
        
    }else if(!result.data.success && endPoint===ADD_NEW_NOTIFICATION){
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)
        
    }

}






export async function getAllNotification(endPoint,data,headers){
    const getTokenHeader = await getHeaders();


 
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===GET_ALL_NOTIFICATION){
         
            return ['notification-fetch-success',result.data.result]
        
    }else if(!result.data.success && endPoint===GET_ALL_NOTIFICATION){

        
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)

        
        
    }

}




export async function deleteNotification(endPoint,data,headers){
    const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};

    try {
        const result = await axios({method:'post',url:endPoint,headers:headers,data:data})

	
        

        if(result.data.success && endPoint===DELETE_NOTIFICATION){
         
            return ['delete-notification-success',result.data.result]
        
    }else if(!result.data.success && endPoint===DELETE_NOTIFICATION){

        
        
        
        return [result.data.message]
    
}
        
    } catch (error) {
        showError(error)

        
        
    }

}










