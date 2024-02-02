const Form = ({onSubmit}) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[0].value
        onSubmit({name, email})
    }
    return <form onSubmit={safeSubmit} className="flex flex-col items-center justify-center h-full -mt-20 gap-10 mx-5">
        <input
            className="alura-input" 
            type="text" 
            required 
            placeholder="Insira seu nome" 
             
        />
        <input
            className="alura-input" 
            type="email" 
            required
            placeholder="Insisra seu e-mail"
        />
        <button type="submit" className="alura-button">Seguir</button>
    </form>
}

export default Form;