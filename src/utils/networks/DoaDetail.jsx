import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DoaDetail = () => {
    const [doaDetail, setDoaDetail] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
                const response = await axios.get('https://islamic-api-zhirrr.vercel.app/api/doaharian/');
                setDoaDetail(response.data.data);
        };

        fetchData();
    }, []);

    return (
        <DoaDetailStyle>
            <Link to="/doa" className="tombol-kembali">
                Kembali
            </Link>

            <h1>Detail</h1>
            <br></br>
            <div className="doa-container">
                {doaDetail.map((doa) => (
                    <div className="doa-verse">
                        <h2 className="doa-verse-text kiri">{doa.title}</h2>
                        <p className="doa-verse-text">{doa.arabic}</p>
                        <p className="doa-verse-text kiri">{doa.latin}</p>
                        <p className="doa-verse-text kiri">{doa.translation}</p>
                        <audio type="mp" />
                    </div>
                ))}
            </div>
        </DoaDetailStyle>
    );
};

const DoaDetailStyle = styled.div`

    * {
        margin: 10px;
        justify-content: center;
    }

    .doa-container {
    border: 1px solid #ccc;
    padding: 10px;
    }

    h1 {
        color: teal;
    }

    .doa-verse {
    border-bottom: 1px solid #ccc;
    padding: 10px;
    }


    .doa-verse-text {
    font-size: 16px;
    line-height: 1.6;
    text-align: right;
    padding: 10px;
    }

    .kiri {
        text-align: left;
        padding: 10px;
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

export default DoaDetail;
