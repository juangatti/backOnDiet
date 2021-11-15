import { Schema } from "mongoose";



interface Food{
    Name: string;
    Description: string;
}




const schema = new Schema<Food>({
    Name: { type: String, required: true, validate: {
        validator: function (value: string) {
            const re = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

            if (!re.test(value)) {
                return false
            }
            return true
        }
    }},
    Description: { type: String, required: false }

});


export default schema;