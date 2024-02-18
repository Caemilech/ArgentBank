import { Link } from 'react-router-dom'
import './index.css'

function Error () {
    return (
        <div className="error-page">
            <main>
                <section className="error">
                    <h2 className="sr-only">Error 404</h2>
                    <p className="text-error">The requested page doesn't exist...</p>
                    <p className="text-error">Please return to homepage</p>
                    < Link to="/">
                        <button className="button-404">Back to the homepage</button>
                    </Link>
                </section>
            </main>
        </div>
    )
}

export default Error