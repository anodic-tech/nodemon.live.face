import { FormEvent, useState } from "react"

export const SubscribeForm = () => {

    const [formResponse, setFormResponse] = useState({error: false, message: ''})

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement);
        const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/contact`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.get("email")
            })
        })
        const error = res.status === 500
        const message = await res.text()
        setFormResponse({error, message})
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">Email:</label><br/>
            <input type="email" id="email" name="email"/><br/>
            <input type="submit" value="Submit"/>
            <span
                id="form-response" 
                className={formResponse.error ? 'error' : ''}>
                    {formResponse.message}
            </span>
        </form>
    )
}