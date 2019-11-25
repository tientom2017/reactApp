import React from 'react';
import PickerColor from './PickerColorComp/PickerColor';
import Result from './ResultComp/Result';
import SizeControl from './SizeControlComp/SizeControl';
import Reset from './ResetComp/Reset';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // color: 'red',
            // fontSize: 22,

            txtEmail: '',
            txtPassword: '',
            txtDesc: '',
            sex: 1,
            cklang: true,
            rdlang: 'Hg'
        }
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onReceiveColor = (colorParam) => {
        this.setState({
            color: colorParam,
        })
    }

    onReceiveFontSize = (fontSizeParam) => {
        this.setState({
            fontSize: fontSizeParam
        })
    }

    onResetHandle = (colorPar, fontSizePar) => {
        this.setState({
            fontSize: fontSizePar,
            color: colorPar
        })
    }
    
    onHandleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }

    onHandleChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="text-center"><h1>QUẢN LÝ CÔNG VIỆC</h1></div>
                    <hr/>
                    <br/>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div class="panel panel-primary">
                                <div class="panel-heading">Thêm công việc</div>
                                <div class="panel-body">
                                    <div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Nội dung</label>
                                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="text" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Trạng thái</label>
                                            <div className="dropdown">
                                                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    Trạng thái <span className="caret" />
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                    <li><a href="#">Kích hoạt</a></li>
                                                    <li><a href="#">Ẩn</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary">Lưu lại</button>
                                        <button className="btn btn-danger">Hủy bỏ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <span className="btn btn-primary">Thêm công việc <span className="glyphicon glyphicon-plus" /></span>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <br/>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" id="txtSearch" />
                                            <div className="input-group-btn">
                                                <button className="btn btn-primary" type="submit">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <br/>
                                        <div className="dropdown">
                                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Sắp Xếp <span className="caret" /> </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                <li><a role="button" className="sort_selected"><span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span></a></li>
                                                <li><a role="button" className><span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span></a></li>
                                                <li role="separator" className="divider" /><li><a role="button" className>Trạng Thái Kích Hoạt</a></li>
                                                <li><a role="button" className>Trạng Thái Ẩn</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>

                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên</th>
                                        <th scope="col">Trạng thái</th>
                                        <th scope="col">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="@,a,..." id="txtSearch" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    Trạng thái <span className="caret" />
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                    <li><a href="#">Kích hoạt</a></li>
                                                    <li><a href="#">Ẩn</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <button className="btn btn-primary">Sửa</button>
                                                <button className="btn btn-danger">Xóa</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

{/* <div>
                    <PickerColor 
                        color={ this.state.color } 
                        onReceiveColor={ this.onReceiveColor }
                    />
                </div>
                <div>
                    <SizeControl 
                        fontSize={ this.state.fontSize }
                        onReceiveFontSize={ this.onReceiveFontSize } 
                    />
                </div>
                <div>
                    <Result 
                        resultColor={ this.state.color } 
                        resultFontSize={ this.state.fontSize }
                    />
                </div>
                <div>
                    <Reset resetAction={ this.onResetHandle } />
                </div> */}

                // <div className="col-md-5">
                //     <div className="panel panel-success">
                //         <div className="panel-heading"> <h3 className="panel-title">Form Data</h3> </div>
                //         <div className="panel-body">
                //         <form onSubmit={ this.onHandleSubmit }>

                //             <div className="form-group">
                //                 <label htmlFor="exampleInputEmail1">Email address</label>
                //                 <input 
                //                     type="text" 
                //                     className="form-control" 
                //                     id="exampleInputEmail1"
                //                     name="txtEmail"
                //                     onChange={ this.onHandleChange }
                //                 />
                //             </div>

                //             <div className="form-group">
                //                 <label htmlFor="exampleInputPassword1">Password</label>
                //                 <input 
                //                     type="password" 
                //                     className="form-control" 
                //                     id="exampleInputPassword1" 
                //                     name="txtPassword"
                //                     onChange={ this.onHandleChange }
                //                 />
                //             </div>

                //             <div className="form-group">
                //                 <label htmlFor="exampleInputPassword1">Description</label>
                //                 <textarea 
                //                     type="text" 
                //                     className="form-control" 
                //                     name="txtDesc"
                //                     onChange={ this.onHandleChange }
                //                 />
                //             </div>

                //             <div className="form-group">
                //                 <label htmlFor="exampleInputPassword1">Sex:</label>
                //                 <select 
                //                     className="form-control" 
                //                     name="sex"
                //                     onChange={ this.onHandleChange }
                //                     value={ this.state.sex }
                //                 >
                //                     <option value={1}>Nam</option>
                //                     <option value={0}>Nữ</option>
                //                 </select>
                //             </div>

                //             <div className="form-group">
                //                 <label htmlFor="exampleInputPassword1">Language</label>
                //                 <div>
                //                     <label>
                //                         <input type="checkbox" name="cklang" onChange={ this.onHandleChange } value={true} checked={this.state.cklang} />
                //                         VN
                //                     </label>
                //                     <br/>
                //                 </div>
                //             </div>

                //             <div className="form-group">
                //                 <label htmlFor="exampleInputPassword1">Choose Marie</label>
                //                 <div>
                //                     <label>
                //                         <input type="radio" name="rdlang" checked={this.state.rdlang === "Hg"} onChange={ this.onHandleChange } value="Hg" />
                //                         Hg
                //                     </label>
                //                     <br/>
                //                     <label>
                //                         <input type="radio" name="rdlang" checked={this.state.rdlang === "M.A"} onChange={ this.onHandleChange } value="M.A" />
                //                         M.A
                //                     </label>
                //                     <br/>
                //                     <label>
                //                         <input type="radio" name="rdlang" checked={this.state.rdlang === "Hieu"} onChange={ this.onHandleChange } value="Hieu" />
                //                         Hieu
                //                     </label>
                //                 </div>
                //             </div>

                //             <button type="submit" className="btn btn-primary">Submit</button>

                //         </form>
                //         </div>
                //     </div>
                // </div>