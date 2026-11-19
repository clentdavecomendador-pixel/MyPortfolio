import { useState, type FormEvent } from "react"
import { ContactStyled } from "./contact.styled"
import { getSupabaseClient } from "../../lib/supabaseClient"

export const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (isSubmitting) return

        setIsSubmitting(true)
        setStatus("Sending your message...")

        try {
            const { error } = await getSupabaseClient()
                .from("contact_messages")
                .insert({ name, email, message })

            if (error) {
                console.error("Could not submit contact message:", error)
                setStatus("Sorry, your message could not be sent. Please try again.")
                return
            }

            setName("")
            setEmail("")
            setMessage("")
            setStatus("Thanks! Your message has been sent.")
        } catch (error) {
            console.error("Could not submit contact message:", error)
            setStatus("Sorry, the contact form is temporarily unavailable.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <ContactStyled>
            <div className="contact-content">
                <div className="contact-intro">
                    <p className="eyebrow">GET IN TOUCH</p>
                    <h1>Contact me</h1>
                    <p>Have a question or want to work together? Send me a message.</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="contact-name">Name</label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />

                    <label htmlFor="contact-email">Email</label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    <label htmlFor="contact-message">Message</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        rows={6}
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        required
                    />

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send message"}
                    </button>
                    <p className="form-status" role="status" aria-live="polite">
                        {status}
                    </p>
                </form>
            </div>
        </ContactStyled>
    )
}