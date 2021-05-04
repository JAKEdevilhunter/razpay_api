// expected an object containing payment_id amount currency 
async function payment (params){
    var params;
    var payment_id=params.payment_id;
    var amount=params.amount;
    var currency=params.currency;
    // mention the api credentials
    var razor_pay_api_key =`${api_key}`
    var YOUR_KEY_SECRET= `${YOUR_KEY_SECRET}`
    // var payment_id='${payment_id}'
    
    

await request({
method: 'POST',
url: `https://${razor_pay_api_key}:${YOUR_KEY_SECRET}@api.razorpay.com/v1/payments/${payment_id}/capture`,
form: {
amount,
currency
}
}, function (error, response, body) {
console.log('Status:', response.statusCode);
console.log('Headers:', JSON.stringify(response.headers));
console.log('Response:', body);
});

}
module.exports=payment;

