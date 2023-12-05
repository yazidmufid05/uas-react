import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Doa = () => {
    const [doaList, setDoaList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
                const response = await fetch('https://islamic-api-zhirrr.vercel.app/api/doaharian');
                const data = await response.json();
                setDoaList(data.data);
        };

        fetchData();
    }, []);

    return (
        <DoaStyle>
            <Link to="/" className="tombol-kembali">
                Kembali
            </Link>
            <h1>List Doa Harian</h1>
                   <div className="doa-list-container">
                   {doaList.map((doa, index) => (
                       <Link to={'/detail'} className="doa-card">
                           <p className="doa-title">{doa.title}</p>
                           <p className="doa-numbers">{doa.arabic}</p>
                           <p className="doa-numberr">{doa.latin}</p>
                           <p className="doa-numberr">{doa.translation}</p>
                       </Link>
                       ))}
               </div>
        </DoaStyle>
    );
};
 
const DoaStyle = styled.div`

    *{
        margin: 10px;
        justify-content: center;
    }

    .doa-list-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 10px;
        
    }

    h1 {
        color: teal;
        text-align: center;
    }
    
    .doa-card {
        text-decoration: none;
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 8px;
        width: 600px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease;
    }
    
    .doa-card:hover {
        background-color: #e0e0e0;
    }
    
    .doa-title {
        padding: 2.5px;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 8px;
        text-align: left;
        color: teal;
    }
    
    .doa-number {
        font-size: 14px;
        color: #555;
    }

    .doa-numbers {
        font-size: 14px;
        color: #555;
        text-align: right;
        padding: 5px;
    }

    .doa-numberr {
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

export default Doa;
