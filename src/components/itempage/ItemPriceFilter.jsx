import React from 'react'

const ItemPriceFilter = ({priceFilter, setPriceFilter}) => {
    return (
        <>
            <p className="text-muted mx-2 mb-0"> Price Filter</p>
            <label className="mx-2"> Max </label>
            <input style={{
                width: '8rem',
                background: 'rgba(250,250,250)',
                display:'inline'
            }}
            className="form-control" 
            type="number" 
            placeholder="Max price"
            value={priceFilter.max}
            onChange={(e)=> setPriceFilter({max: e.target.value, min: priceFilter.min})}
            data-testid = "Max"
            />
            <label className="mx-2"> Min </label>
            <input  style={{
                width: '8rem',
                background: 'rgba(250,250,250)',
                display:'inline'
            }}
            className="form-control" 
            type="number" 
            placeholder="Min price"
            value={priceFilter.min}
            onChange={(e)=> setPriceFilter({min: e.target.value, max: priceFilter.max})}
            data-testid = "Min"
            />
        </>
    )
}

export default ItemPriceFilter
