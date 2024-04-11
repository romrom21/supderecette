import IngredientForm from "@/components/forms/IngredientForm"
import Image from "next/image"

const IngredientCard = () => {

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="card-actions justify-end">
                    <button type={"button"} className="btn btn-square btn-sm">
                        <Image src={"/delete.svg"} alt={"Delete ingredient"} width={24} height={24}/>
                    </button>
                </div>
                <IngredientForm/>
            </div>
        </div>
    )
}

export default IngredientCard