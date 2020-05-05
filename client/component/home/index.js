import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { getAllProduct } from "../../store/actions/allProductAction";
import OneSection from "./oneSection";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          name: "Book",
          image:
            "https://collegeinfogeek.com/wp-content/uploads/2018/11/Essential-Books.jpg",
        },
        {
          name: "Furniture",
          image:
            "https://aarsunwoods.com/wp-content/uploads/2020/03/Royal-Design-Wooden-Sofa-set-for-Living-room-Furniture-UH-SF-0017.jpg",
        },
        {
          name: "Electronic",
          image:
            "https://stdevelopers.info/wp-content/uploads/2018/04/gearship-portfolio-1.jpg",
        },
      ],
    };
  }

  componentDidMount() {
    this.props.dispatch(getAllProduct());
  }
  render() {
    return (
      <div className="jumbotron">
        <h3 className="mb-3 font-weight-bold">Categories</h3>
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3">
          {this.state.categories.map((category) => {
            return (
              <div className="col" key={uuid()}>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row no-gutters">
                    <div className="col-md-5">
                      <img
                        src={category.image}
                        className="card-img"
                        alt="category image"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body font-weight-bold">
                        <p>
                          {" "}
                          {category.name} <br />
                          <Link to={`/${category.name}`}>Show All</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* display single type of product */}

        <OneSection categories={this.state.categories} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allProduct: state.AllProduct.allProduct,
  };
}

export default connect(mapStateToProps)(Home);
