const mongoose = require('mongoose');
const {getMongoConnection} = require('./mongo')
const {REDIS_CONFIG} = require('../config')

const offerMetadataSchema = new mongoose.Schema({
    offerId: {type: String, required: true},
    id: {type: String, required: true},
    serviceEndpoint: {type: String, required: true},
    jwt: {type: String, required: true},
    createdAt: {
        type: Date,
        default: Date.now,
        expires: `${REDIS_CONFIG.SESSION_TTL_IN_SECS}s`// in seconds
      }
});

const getModel = async () =>{
    const db = await getMongoConnection();
    return db.model('OfferMetadata', offerMetadataSchema);

}

const storeOffersMetadata = (offersMeta) => {
    return Promise.all(
        offersMeta.map(offer => {
            return storeOfferMetadata(offer.offerId,offer.endpoint)
        })
    );
}
const storeOfferMetadata = async (offerId, endpoint) =>{
    let OfferMetadata = await getModel();
    let {id,serviceEndpoint,jwt}=endpoint;
    let record = new OfferMetadata({offerId:offerId, id:id, serviceEndpoint:serviceEndpoint, jwt:jwt})
    return await record.save();
}

const getOfferMetadata = async (offerId) =>{
    let OfferMetadata = await getModel();
    return await OfferMetadata.findOne({offerId: offerId}).exec();
}



module.exports =  {
    storeOffersMetadata,getOfferMetadata
};
