export default function LoginForm({
    handleSubmit,
    email, 
    setEmail, 
    password, 
    setPassword
}) {
  return (
    <form onSubmit={handleSubmit} className="mt-3">
        
        <div className="form-group mb-3">
            <label className="form-label">Email Adress</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.currentTarget.value)}
            />
        </div>
        <div className="form-group mb-3">
            <label className="form-label">Your Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.currentTarget.value)}
            />
        </div>
        <button disabled={!email||!password} className="btn btn-primary" type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
}
