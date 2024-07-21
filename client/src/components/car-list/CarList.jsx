import { useEffect, useState } from 'react'
import * as carsAPI from '../../api/cars-api'
import CarListItem from './car-list-item/CarListItem'

export default function CarList() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        carsAPI.getAll()
        .then(result => setCars(result))
    }, [])
    return (
       
        <section id="catalog-page">
        <h1>All Car Offers</h1>
        {cars.map(car => <CarListItem key={car._id}{...car}/>)}
        
        
        
        
        {/* <h3 className="no-articles">No articles yet</h3> */}
    </section>
    )
}