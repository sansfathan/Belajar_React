import React from "react";
export default function Product({ data }) {
    return (
        <React.Fragment>
            <h1>Data Produk Di Indonesia</h1>
            {data?.map((item, index) => {
                return (
                    <React.Fragment>
                        <div key={index} >
                            <h1>Data: {index + 1}</h1>
                            <h3>jenis: {item.jenis}</h3>
                            <h3>Produk: {item.Product}</h3>
                        </div>
                        <h2>Tipe</h2>
                        <div>
                            {item?.brand?.map((value, index2) => {
                                return (
                                    <div key={index2}>
                                        <p>{value.nama}</p>
                                        <p>{value.harga}</p>
                                        <p></p>

                                    </div>
                                )
                            }
                            )}
                        </div>
                    </React.Fragment>
                )
            }
            )}
        </React.Fragment>
    )
}

