import { Schema } from "mongoose";



interface Food{
    name: string;
    description: string;
}




const schema = new Schema<Food>({
    name: { type: String, required: true, validate: {
        validator: function (value: string) {
            const re = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

            if (!re.test(value)) {
                return false
            }
            return true
        }
    }},
    description: { type: String, required: false }

});


export default schema;