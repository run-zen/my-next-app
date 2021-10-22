import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import {
    printPlugin,
    PrintIcon,
    PrintPluginProps,
} from '@react-pdf-viewer/print';
import { PDFWorker } from 'pdfjs-dist';
import axios from 'axios';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Home() {
    const printPluginInstance = printPlugin(PrintPluginProps);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <div className="d-flex justify-content-center">
                    <h1 className="p-3">PDF VIEWER</h1>
                </div>
                <div>
                    <Worker workerUrl="/pdf.worker.min.js">
                        <div style={{ height: '750px' }}>
                            <Viewer
                                theme="dark"
                                fileUrl="https://firebasestorage.googleapis.com/v0/b/runzenimagestore.appspot.com/o/newsLetter%2F1914058-1633764446432.pdf?alt=media&token=d402f57b-d379-40a5-b4c0-1de0cce42e11"
                                plugins={[defaultLayoutPluginInstance]}
                            />
                        </div>
                    </Worker>
                </div>
            </div>
        </>
    );
}
