import React from "react";

export default function Identitas({nama ='siswa', kelas ='X', nilai ='0' }) {
    return (
        <div className="Identitas">
            <p>Nama : {nama}</p>
            <p>Kelas : {kelas}</p>
            <p>Nilai: {nilai}</p>
        </div>

    )
}