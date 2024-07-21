export default function CreateOffer() {
    return (
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 className="title">Create Car Offer</h2>
                        <form method="POST">
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">brand</label>
                                        <input className="input--style-4" type="text" name="brand" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">model</label>
                                        <input className="input--style-4" type="text" name="model" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">year</label>
                                        <input className="input--style-4" type="text" name="year" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">mileage</label>
                                        <input className="input--style-4" type="text" name="mileage" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">price</label>
                                        <input className="input--style-4" type="text" name="price" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">mileage</label>
                                        <input className="input--style-4" type="text" name="mileage" />
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