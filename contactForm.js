import submitForm from './submitForm';


export default function App() {
    return (
        <form
            onSubmit = {submitForm}
            action =""
            method ="POST">

            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>

            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
            </div>

            <input type="submit" value="Send" />

        </form>

    )
}