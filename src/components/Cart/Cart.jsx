import React, { useContext } from "react";
import { Store } from "../../contexts/Store";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../TotalOrder/TotalOrder.scss";
import { Link } from "react-router-dom";

function Cart() {
  // render and update cart items  in the store
  const {
    decreaseProduct,
    productItems,
    increaseProduct,
    removeProduct,
  } = useContext(Store);

  return (
    <div>
      <Container>
        <Row>
          <Col className="title p-4 mb-4 mt-4 " xs="12">
            <h2>Product view</h2>
          </Col>
          {productItems.length === 0 && (
            <Col className="d-flex px-2 py-4 align-items-center justify-content-center">
              No item
            </Col>
          )}

          {productItems.map((product, index) => {
            return (
              <Col
                xs="12"
                className="d-flex onepdt px-2 justify-items-space-between align-items-center py-4 shopping-cart"
                key={index}
              >
                <Col className="image" xs="2">
                  <img src={product.img} alt="" />
                </Col>

                <Col className="description" xs="2">
                  <h4>{product.name}</h4>
                  <span>{product.cat}</span>
                  <Link to={`/product/${product.id}`}>View Product</Link>
                </Col>

                <Col
                  className="quantity d-flex  justify-content-space-around align-items-center"
                  xs="4"
                >
                  <div className="d-flex flex-column justify-content center align-items-center">
                    <button
                      className="plus-btn"
                      onClick={() => increaseProduct(product)}
                    >
                      <img
                        src="https://designmodo.com/demo/shopping-cart/plus.svg"
                        alt=""
                      />
                    </button>
                    <button
                      className="minus-btn"
                      onClick={() => decreaseProduct(product)}
                    >
                      <img
                        src="https://designmodo.com/demo/shopping-cart/minus.svg"
                        alt=""
                      />
                    </button>
                  </div>
                  <input
                    type="number"
                    name="name"
                    value={product.quantity}
                    placeholder="1"
                    disabled
                  />
                </Col>

                <Col className="  " xs="3">
                  <span>Total {product.price * product.quantity}</span>

                  <Button
                    variant="danger"
                    className="ml-2"
                    onClick={() => removeProduct(product)}
                  >
                    <span className="delete-btn "></span>
                  </Button>
                </Col>
              </Col>
            );
          })}
          {productItems.length > 0 && (
            <Col className="d-flex px-2 py-4 shopping-cart align-items-center justify-content-center">
              <Link className="btn" to="/order">
                Review order
              </Link>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}
export default Cart;
