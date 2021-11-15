import { Schema } from 'mongoose'

/*
  Creacion de interface para un usuario
*/
interface User {

  admin: boolean;
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
  phone: string;
  adress: string;

}

/*
  Creacion de schema para poder subir la informacion del usuario
*/
const schema = new Schema<User>({

  admin: { type: Boolean, default: false, required: false },
  firstName: { type: String, required: true, validate: {
    validator: function (value: string) {
      const re =/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

      if(!re.test(value)){
        return false
      }
      return true
    }
  }},
  lastName: { type: String, required: true, validate: {
    validator: function (value: string) {
      const re =/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

      if(!re.test(value)){
        return false
      }
      return true
    }
  } },
  mail: { type: String, required: true,  validate: {
    validator: function (value: string) {
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!re.test(value)) {
            return false;
        }
        return true;
    }
  } },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  adress: { type: String, required: true }

})

export default schema