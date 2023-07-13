import validator from 'is_js';

import phone_validator from "bd-phone-number-validator"
const { validate, operator } = phone_validator;
const checkEmpty = (val, key) => {
    if (validator.empty(val.trim())) {
        return `${key}`;
    } else {
        return '';
    }
}

const checkMinLength = (val, minLength, key) => {
    if (val.trim().length < minLength) {
        return `${key} অবশ্যই ${minLength} ক্যারেক্টার হতে হবে।`
    } else {
        return '';
    }
}










export const signupValidation = (data)=>{
    const { name,email,password,confirmPassword,status} = data

    

    if(name!==undefined){
        let emptyValidationText = checkEmpty(name, 'আপনার পূর্ণ নাম টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        }

    }
   

    if (email !== undefined) {
        let emptyValidationText = checkEmpty(email, 'আপনার ইমেইল লিখুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            if (!validator.email(email)) {
                return 'ইমেইল ফরম্যাট সঠিক নয়।'
            }
        }
    }

    

    if (password !== undefined) {
        let emptyValidationText = checkEmpty(password, 'আপনার পাসওয়ার্ড টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(password, 6, 'পাসওয়ার্ড')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (confirmPassword !== undefined) {
        let emptyValidationText = checkEmpty(confirmPassword, 'কনফার্ম পাসওয়ার্ড টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

            let minLengthValidation = checkMinLength(confirmPassword, 6, 'কনফার্ম পাসওয়ার্ড')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }

            if(confirmPassword!==password){
                return 'পাসওয়ার্ড ও কনফার্ম পাসওয়ার্ড ম্যাচ করেনি।'
            }
       
    }

    if(status!==undefined){
        let emptyValidationText = checkEmpty(status, 'স্ট্যাটাস পাওয়া যায়নি।')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        }

    }

}











export const loginValidation = (data)=>{

   
    const { email,password} = data

    

   
   

    if (email !== undefined) {
        let emptyValidationText = checkEmpty(email, 'আপনার ইমেইল লিখুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            if (!validator.email(email)) {
                return 'ইমেইল ফরম্যাট সঠিক নয়।'
            }
        }
    }

    

    if (password !== undefined) {
        let emptyValidationText = checkEmpty(password, 'আপনার পাসওয়ার্ড টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(password, 6, 'পাসওয়ার্ড')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

   

 

}



export const editBalanceValidation = (data)=>{

   
    const { email,balance} = data

    

   
   

    if (email !== undefined) {
        let emptyValidationText = checkEmpty(email,  'ইমেইল লিখুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            if (!validator.email(email)) {
                return 'ইমেইল ফরম্যাট সঠিক নয়।'
            }
        }
    }

    

    if (balance !== undefined) {
        let emptyValidationText = checkEmpty(balance, 'এমাউন্ট টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 
    }
}


export const editFirstPaymentValidation = (data)=>{

   
    const { payment_method_1} = data

    

   
   

    if (payment_method_1 !== undefined) {
        let emptyValidationText = checkEmpty(payment_method_1,  'পেমেন্ট মেথড টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

        if(!validate(payment_method_1)){
            return `দয়া করে একটি ভ্যালিড নাম্বার টাইপ করুন`
    
        }
    }

    

  
}





export const editSecondPaymentValidation = (data)=>{

   
    const { payment_method_2} = data

    

   
   

    if (payment_method_2 !== undefined) {
        let emptyValidationText = checkEmpty(payment_method_2,  'পেমেন্ট মেথড টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

        if(!validate(payment_method_2)){
            return `দয়া করে একটি ভ্যালিড নাম্বার টাইপ করুন`
    
        }
    }

    

  
}




export const editThirdPaymentValidation = (data)=>{

   
    const { payment_method_3} = data

    

   
   

    if (payment_method_3 !== undefined) {
        let emptyValidationText = checkEmpty(payment_method_3,  'পেমেন্ট মেথড টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

        if(!validate(payment_method_3)){
            return `দয়া করে একটি ভ্যালিড নাম্বার টাইপ করুন`
    
        }
    }

    

  
}


export const editCommissionValidation = (data)=>{

   
    const { mobile_banking_rate, drive_offer_rate,bank_transfer_rate,recharge_rate,bill_pay_rate} = data

    

   
   

    if (mobile_banking_rate !== undefined) {
        let emptyValidationText = checkEmpty(mobile_banking_rate,  'মোবাইল ব্যাংকিং রেট টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }
    if (drive_offer_rate !== undefined) {
        let emptyValidationText = checkEmpty(drive_offer_rate,  'ড্রাইভ অফার রেট টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }

    if (bank_transfer_rate !== undefined) {
        let emptyValidationText = checkEmpty(bank_transfer_rate,  'ব্যাংক ট্রান্সফার রেট টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }

    if (recharge_rate !== undefined) {
        let emptyValidationText = checkEmpty(recharge_rate,  'রিচার্জ রেট টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }

    if (bill_pay_rate !== undefined) {
        let emptyValidationText = checkEmpty(bill_pay_rate,  'বিল পে রেট টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }


    

  
}
   


export const editSliderValidation = (data)=>{

   
    const {image_1,image_2,image_3} = data

    

   
   

    if (image_1 !== undefined) {
        let emptyValidationText = checkEmpty(image_1,  '১ম ইমেজ লিংক টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }
    if (image_2 !== undefined) {
        let emptyValidationText = checkEmpty(image_2,  '২য় ইমেজ লিংক টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }

    if (image_3 !== undefined) {
        let emptyValidationText = checkEmpty(image_3,  '৩য় ইমেজ লিংক টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }

  


    

  
}



export const addOfferValidation = (data)=>{

   
    const {operator,offer_type,name,validity,price} = data

    

   
   

    if (operator !== undefined) {
        let emptyValidationText = checkEmpty(operator,  'অপারেটর সিলেক্ট করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }
    if (offer_type !== undefined) {
        let emptyValidationText = checkEmpty(offer_type,  'অফার টাইপ সিলেক্ট করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }

    if (name !== undefined) {
        let emptyValidationText = checkEmpty(name,  'অফার নেম টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }

    if (validity !== undefined) {
        let emptyValidationText = checkEmpty(validity,  'ভ্যালিডিটি টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }

    if (price !== undefined) {
        let emptyValidationText = checkEmpty(price,  'াফার প্রাইস টাইপ করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }

  


    

  
}



export const addNotificationValidation = (data)=>{

   
    const {title,message} = data

    

   
   

    if (title !== undefined) {
        let emptyValidationText = checkEmpty(title,  'টাইটেল সিলেক্ট করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }
    if (message !== undefined) {
        let emptyValidationText = checkEmpty(message,  'মেসেজ সিলেক্ট করুন')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } 

      
    }

   
  


    

  
}





   



