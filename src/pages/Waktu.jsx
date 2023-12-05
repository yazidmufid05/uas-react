import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Waktu = () => {
    const [doaList, setDoaList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
                const response = await fetch('https://api.myquran.com/v1/sholat/kota/cari/kab');
                const data = await response.json();
                setDoaList(data.data);
        };

        fetchData();
    }, []);

    return (
        <WaktuStyle>
            <Link to="/" className="tombol-kembali">
                Kembali
            </Link>
            <h1>Jadwal Sholat</h1>
                   <div className="surat-list-container">
                   {doaList.map((jadwal, index) => (
                       <Link className="surat-card">
                        <p className="surat-title">{jadwal.lokasi}</p>
                       </Link>
                       ))}
               </div>
        </WaktuStyle>
    );
};


const WaktuStyle = styled.div`

    *{
        margin: 10px;
        justify-content: center;
    }

    .surat-list-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 10px;
        justify-content: center;
    }

    h1 {
        color: teal;
        text-align: center;
    }
    
    .surat-card {
        text-decoration: none;
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 8px;
        width: 300px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease;
    }
    
    .surat-card:hover {
        background-color: #e0e0e0;
    }
    
    .surat-title {
        padding: 2.5px;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 8px;
        text-align: left;
        color: teal;
    }

    .tombol-kembali {
        display: block;
        width: 60px;
        margin-top: 10px;
        text-decoration: none;
        background-color: darkcyan;
        color: white;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
    }

    .tombol-kembali:hover {
        background-color: teal;
    }
`

export default Waktu;
