import { create } from "zustand";
import { v4 as uuid4 } from "uuid";
import { DraftPatient, Patient } from "./types";
type PatientState = {
    patients:Patient[]
    addPatient:(data:DraftPatient)=>void
}
const createPatient = (patient:DraftPatient):Patient =>{
    return {...patient,id: uuid4()}
}/*siempre se crea una funcion para pasar de un tipo draf a completo con id */
export const usePatientStore = create<PatientState>((set)=>({
    patients:[],
    addPatient:(data)=>{
        const newPAtient=createPatient(data)
        set((state)=>({
            patients:[...state.patients,newPAtient]
        }))
        
    }
}))