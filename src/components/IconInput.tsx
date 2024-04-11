import Image from 'next/image'

interface IconInputProps {
    icon: string
    placeholder: string
    name: string
    type: string
    required: boolean
    defaultValue?: string
    register: any
}

const IconInput = (props: IconInputProps) => {
    const {icon, placeholder, type, required, name, defaultValue, register} = props

    return (
        <label className="input input-bordered flex items-center gap-2">
            <Image
                src={icon}
                alt={placeholder + " Logo"}
                width={24}
                height={24}
            />
            <input type={type}
                   className="grow"
                   required={required}
                   placeholder={placeholder}
                   defaultValue={defaultValue} {...register(name)} />
        </label>
    )
}

export default IconInput