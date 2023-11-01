export default function Login( {handleLogin} ){

        const handleSubmit = (e) =>{
            e.preventDefault()
            //e.stopPropogation()

            const {email} = e.target.elements
            handleLogin(email.value)
            alert('worked') 
        }
    

    return (
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="e.g.naruto@gmail.com" />
            <input type="submit" value="Login" />
        </form>
        </>
    )
}