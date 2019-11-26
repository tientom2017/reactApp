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
                    <div className="row">
                        <button className="btn btn-primary"><span class="fa fa-plus mr-5"></span>Thêm công việc</button>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" id="txtSearch" />
                            <div className="input-group-btn">
                                <button className="btn btn-primary" type="submit">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="dropdown open">
                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" /></button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a role="button" className="sort_selected"><span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span></a></li>
                                <li><a role="button" className><span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span></a></li>
                                <li role="separator" className="divider" /><li><a role="button" className>Trạng Thái Kích Hoạt</a></li>
                                <li><a role="button" className>Trạng Thái Ẩn</a></li>
                            </ul>
                        </div>
                    </div>
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
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
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