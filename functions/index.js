const functions=require('firebase-functions');const admin=require('firebase-admin');admin.initializeApp();
exports.likeOrder=functions.https.onCall(async(data)=>{return {status:'connect-like-api-here',uid:data.uid};});
exports.bohudurVerify=functions.https.onRequest(async(req,res)=>{res.json({status:'implement-bohudur-callback'});});
