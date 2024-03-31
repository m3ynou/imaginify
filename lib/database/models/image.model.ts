import { Schema,models,model } from "mongoose";
export interface IImage extends Document {
    title: string;
    tranformationType: string;
    publicId: string;
    secureUrl: URL;
    width?: number;
    height?: number;
    config?: object;
    tranformationUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: Schema.Types.ObjectId;
    CreatedAt?: Date;
    UpdatedAt?: Date;
}


const ImageSchema = new Schema({
    title:{ type:String, required: true },
    tranformationType:{ type:String, required: true },
    publicId:{ type:String, required: true },
    secureUrl:{ type:URL, required: true },
    width:{type: Number},
    height:{type: Number},
    config:{type: Object},
    tranformationUrl:{ type : URL},
    aspectRatio:{type : String},
    color : {type: String},
    prompt:{type :String},
    author:{type : Schema.Types.ObjectId,ref:'User'},
    CreatedAt:{type:Date ,default: Date.now},
    UpdatedAt:{type:Date ,default: Date.now}
});

const Image =models?.Image || model('Image',ImageSchema);

export default Image;