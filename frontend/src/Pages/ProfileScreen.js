import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import OrderContext from '../context/orders/orderContext'
import UserContext from '../context/user/UserContext'

const ProfileScreen = () => {
  // for product context
  const uContext = useContext(UserContext)
  const { readProfile, user, editProfile } = uContext
  // for order context
  const oContext = useContext(OrderContext)
  const { myOrders, getMyOrders } = oContext

  useEffect(() => {
    getMyOrders()
    //eslint-disable-next-line
  }, [])

  const handleChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    editProfile(userInfo.name, userInfo.email)
  }

  const [userInfo, setUserInfo] = useState({
    name: user.name,
    email: user.email,
  })

  return (
    <>
      {/* ACTIONS */}
      <section id="actions" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Link to="/" className="btn btn-light btn-block">
                <i className="fas fa-arrow-left" /> Back to Home
              </Link>
            </div>
            <div className="col-md-4">
              <button disabled className="btn btn-success btn-block">
                <i className="fas fa-lock" /> Change Password
              </button>
            </div>
            <div className="col-md-4">
              <button disabled className="btn btn-danger btn-block">
                <i className="fas fa-trash" /> Delete Account
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* PROFILE */}
      <section id="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  <h4>Edit Profile</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        className="form-control"
                        value={userInfo.name}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        value={userInfo.email}
                      />
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor="bio">Bio</label>
                      <textarea
                      className="form-control"
                      name="editor1"
                      defaultValue={
                          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid '
                        }
                        />
                    </div> */}
                    <div className="form-group">
                      <input
                        value="save changes"
                        type="submit"
                        className="btn btn-dark btn-block"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Your Avatar</h3>
              <img
                src="img/avatar.png"
                alt=""
                className="d-block img-fluid mb-3"
              />
              <button className="btn btn-primary btn-block">Edit Image</button>
              <button className="btn btn-danger btn-block">Delete Image</button>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>My Orders</h4>
              </div>
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>Order Id</th>
                    <th>Order Items</th>
                    <th>Order Price</th>
                    <th>Order Date</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {myOrders.length > 0
                    ? myOrders.map(order => (
                        <tr key={order._id}>
                          <td>{order._id}</td>
                          <td>{order.orderItems.length} item(s)</td>
                          <td>{order.totalPrice}</td>
                          <td>
                            {new Date(order.createdAt).toLocaleDateString()}
                          </td>
                          <td>
                            <a href="/" className="btn btn-secondary">
                              <i className="fas fa-angle-double-right" />{' '}
                              Details
                            </a>
                          </td>
                        </tr>
                      ))
                    : 'no orders'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfileScreen
