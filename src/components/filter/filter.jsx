import React, { Component } from 'react'
import "./filter.css"
export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <label className="filter__sort">
                  <span> Order by</span>
                    <select className="sort__selector" value={this.props.sort}
                    onChange={this.props.handleChangeSort}>
                        <option value="">Select</option>
                        <option value="lowest">Lowest to highest</option>
                        <option value="highest">Highest to lowest </option>
                    </select>
                </label>
                <label className="filter__category">
                     <span>Category:</span>
                    <select className="category__selector" value={this.props.category}
                    onChange={this.props.handleChangeCategory}>
                        <option value="">All</option>
                        <option value="fruit">Fruit</option>
                        <option value="meat">Meat</option>
                        <option value="vegetable">Vegetables</option>
                    </select>
                </label>
            </div>
        )
    }
}
