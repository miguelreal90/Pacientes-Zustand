import { usePatientStore } from "../store"

export default function PatientsList() {
    const patients = usePatientStore(state=>state.patients)
    console.log(patients);
    
    return (
        <div className=" md:w-1/2 lg:h-3/5">

        </div>
    )
}
