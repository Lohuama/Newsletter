import Input from "../Input/Input"

const Form = ({onSubmit}) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[0].value
        onSubmit({name, email})
    }
    return <form onSubmit={safeSubmit} className="flex flex-col items-center justify-center h-full -mt-20 gap-10 mx-5">
        <Input 
            type="text" 
            required 
            placeholder="Insira seu nome" 
       
        />
        <Input 
            type="email" 
            required
            placeholder="Insisra seu e-mail" 
        />
        <button type="submit" className="bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 py-1 px-5 uppercase outline-non  w-full max-w-sm">Seguir</button>
    </form>
}

export default Form;