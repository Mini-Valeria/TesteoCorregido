//COMO Y EL DONDE SE GUARDAN LOS DATOS
import { Schema, model } from "mongoose";

const Esquema = new Schema({
    name: {
        type: String
    },
    Edad: {
        type: Number
    }
})
export const Modelo = new model("Tabla de alumnos", Esquema)