import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Home() {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              <h1 className="card-title mb-4">Welcome to Ecommerces</h1>
              {user ? (
                <div>
                  <div className="card bg-light mb-3">
                    <div className="card-body">
                      <h4 className="card-title">Hello, {user.name}!</h4>
                      <p className="card-text"><strong>Email:</strong> {user.email}</p>
                      {user.phone && <p className="card-text"><strong>Phone:</strong> {user.phone}</p>}
                      {user.address && <p className="card-text"><strong>Address:</strong> {user.address}</p>}
                      <p className="card-text">
                        <span className="badge bg-primary">Role: {user.role === 1 ? 'Admin' : 'User'}</span>
                      </p>
                    </div>
                  </div>
                  <Link 
                    to={user.role === 1 ? '/admin/dashboard' : '/dashboard'} 
                    className="btn btn-primary"
                  >
                    Go to Dashboard
                  </Link>
                </div>
              ) : (
                <div>
                  <p className="lead mb-3">Please login to see your details</p>
                  <Link to="/login" className="btn btn-primary me-2">Login</Link>
                  <Link to="/register" className="btn btn-secondary">Register</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
