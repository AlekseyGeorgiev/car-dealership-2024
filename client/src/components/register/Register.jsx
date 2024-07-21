export default function Register() {
    return (
        
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 className="title">Registration Form</h2>
                        <form method="POST">
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">username</label>
                                        <input className="input--style-4" type="text" name="username"/>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">password</label>
                                        <input className="input--style-4" type="text" name="password"/>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Repeat password</label>
                                        <input className="input--style-4" type="text" name="rePass"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Email</label>
                                        <input className="input--style-4" type="email" name="email"/>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="p-t-15">
                                <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}