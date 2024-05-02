import './Orders.css';


const Orders = () => {
    return(
        <div id="orders-container">
            <h2 id="orders-heading">Your Orders</h2>


            <div>
                <div className="order-container">
                    <div className="order-details-container">
                        <p>Order Placed:</p>
                        <p>Total Price:</p>
                        <p>Order #</p>
                    </div>


                    <div className="order-logistics-container">
                        <div className="order-delivery-info-container">
                            <p>Delivered on:</p>
                            <p>Item Name</p>
                           
                        </div>
                       
                        <div className="order-options-container">
                            <button>View Live Map</button>
                            <button>Return or Replace Item</button>
                            <button>Write a Product Review</button>
                            <button>Contact Customer Support</button>
                        </div>
                    </div>
                </div>






            </div>
        </div>
    )
}


export default Orders;