// src/app/generate-pdf/page.js
'use client';

import { useState } from 'react';
import axios from 'axios';

export default function GeneratePdfPage() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePdf = async () => {
    setIsGenerating(true);
    try {
      // Ganti URL dengan endpoint API yang sesuai
      const response = await axios.get('/api/generate-pdf', {
        responseType: 'blob',
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'generated-laporan.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className='flex items-center justify-center flex-col h-screen gap-3'>
      <h1 className='text-2xl'>GENERATE PDF</h1>
      <button onClick={handleGeneratePdf} disabled={isGenerating} className='bg-blue-500 p-2 rounded-md hover:bg-blue-100 hover:text-black'>
        {isGenerating ? 'Generating...' : 'Generate PDF'}
      </button>
    </div>
  );
}
