import React from "react";

export default function DataSiswa({ data, nilai }) {
    return (
        <React.Fragment>
            ini komponen data

            {data?.map(function (item, index) {
                return (
                    <React.Fragment>

                        <div className="Identitas">
                            <p>Nama : {item.nama}</p>
                            <p>Kelas : {item.kelas}</p>
                            <p>Nilai: {item.nilai}</p>
                        </div>


                    </React.Fragment>
                );
            })};

            <div>
                <p>nama : {nilai.nama}</p>
                <p>kelas : {nilai.kelas}</p>
            </div>

            <div>Nilai adalah
                {nilai.nilai.map((item) => {
                    return <p>{item}</p>
                }
                )}
            </div>

        </React.Fragment>

    )


}