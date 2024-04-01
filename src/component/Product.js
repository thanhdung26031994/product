import {Component} from "react";

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProduct: [
                {
                    id: 1,
                    code: 'P01',
                    name: 'Sữa',
                    price: 18.99
                },
                {
                    id: 2,
                    code: 'P02',
                    name: 'Bánh Tráng',
                    price: 2.88
                }

            ],
            inpId: "",
            inpCode: "",
            inpName: "",
            inpPrice: ""
        }
    }

    addProduct = () => {
        this.setState((addPro) => {
            return {
                listProduct: [...addPro.listProduct,
                    {
                        id: addPro.inpId,
                        code: addPro.inpCode,
                        name: addPro.inpName,
                        price: addPro.inpPrice
                    }],
                inpId: "",
                inpCode: "",
                inpName: "",
                inpPrice: ""
            }
        })
    }
    deleteProduct = (productId) => {
        const updateList = this.state.listProduct.filter(product => product.id != productId);
        this.setState({listProduct: updateList});
    }

    render() {
        return (
            <>
                <h3>Add Product</h3>
                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input type="number" className="form-control" name={'inpId'} value={this.state.inpId}
                           onChange={(e) => {
                               this.setState({
                                   ...this.state,
                                   inpId: e.target.value
                               })
                           }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="code">Code</label>
                    <input type="text" className="form-control" name={'inpCode'} value={this.state.inpCode}
                           onChange={(e) => {
                               this.setState({
                                   ...this.state,
                                   inpCode: e.target.value
                               })
                           }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name={'inpName'} value={this.state.inpName}
                           onChange={(e) => {
                               this.setState({
                                   ...this.state,
                                   inpName: e.target.value
                               })
                           }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" className="form-control" name={'inpPrice'} value={this.state.inpPrice}
                           onChange={(e) => {
                               this.setState({
                                   ...this.state,
                                   inpPrice: e.target.value
                               })
                           }}/>
                </div>
                <div className="form-group mt-2">
                    <button className="btn btn-success" onClick={this.addProduct}>Add new</button>
                </div>

                <h1>List Product</h1>

                <form>

                </form>

                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th>STT</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.listProduct.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.code}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => this.deleteProduct(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </>
        )
    }
}

