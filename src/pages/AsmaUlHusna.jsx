// QuranList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const AsmaUlhusna = () => {
    const [quranData, setQuranData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
                const response = await axios.get('https://asmaul-husna-api.vercel.app/api/all');
                setQuranData(response.data.data);
        };

        fetchData();
    }, []);

    return (
        <QuranListStyle>
            <Link to="/" className="tombol-kembali">
                Kembali
            </Link>
            <h1>Asmaul Husna</h1>
            <div className="surat-list-container">
                {quranData.map((surah, index) => (
                    <Link className="surat-card">
                        <p className="surat-title">{surah.arab}</p>
                        <p className="surat-number">{surah.urutan}. {surah.latin}</p>
                        <p className="surat-number">{surah.arti}</p>
                    </Link>
                ))}
            </div>
        </QuranListStyle>
    );
};

const QuranListStyle = styled.div`
    

    * {
        margin: 10px;
        align-items: center;
        justify-content: center;
    }

    h1 {
        color: teal;
        text-align: center;
    }

    .surat-list-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 10px;
        align-items: center;
    }
    
    .surat-card {
        text-decoration: none;
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 8px;
        width: 200px;
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
    
    .surat-number {
        font-size: 14px;
        color: #555;
    }

    .surat-numbers {
        font-size: 14px;
        color: #555;
        text-align: right;
        padding: 5px;
    }

    .surat-numberr {
        font-size: 14px;
        color: #555;
        text-align: left;
        padding: 5px;
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

export default AsmaUlhusna;
