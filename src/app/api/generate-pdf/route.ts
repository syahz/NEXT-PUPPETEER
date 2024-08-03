import generatePdf from '@/app/utils/generatePdf';


const generateHTML = (): string => {

  return `
    <html lang="id">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Detail Laporan</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style type="text/tailwindcss">
          @layer utilities {
            .content-auto {
              content-visibility: auto;
            }
          }
          html,
          body,
          #header {
            margin: 0 !important;
            padding: 0 !important;
          }
        </style>
        <style>
          body {
            font-size: 12px;
          }
          h2, h3, h4 {
            margin: 0px;
          }
          p {
            margin: 0 !important;
          }
          .container-xl {
            margin-right: 1em;
            margin-left: 1em;
          }
          @page {
            margin: 20px 20px;
          }
          @media print {
            hr {
              width: 100%;
              height: 0;
              border-top: 1px solid #000;
            }
            body {
              margin: 0;
              padding: 0;
              font-family: Calibri, 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
            }
            tr {
              page-break-inside: avoid;
            }
            .container-xl {
              page-break-after: always;
            }
          }
        </style>
      </head>
      <body class="p-4">
        <div class="header flex items-center justify-between gap-2">
          <img src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-0.png" alt="Logo" class="h-24 w-24" />
          <div class="flex flex-col items-center justify-center">
            <h2 class="m-0 text-lg font-bold">FORMULA ONE ACADEMY RACING SERIES EXAMPLE</h2>
            <h3 class="m-0 text-base font-bold">OFFICE HEAD FORMULA ONE ACADEMY RACING SERIES EXAMPLE</h3>
            <h4 class="m-0 text-sm font-bold">Formula One Academy Example</h4>
            <h4 class="text-sm">Example Gate, London, England</h4>
            <p>Telepon/Faksimili +27-82-467-8450</p>
            <div class="flex gap-2 text-sm font-medium">
              <p>
                Website: <a href="https://www.formula1.com/" target="_blank"><span class="text-blue-500 underline"> formula1.com</span></a>
              </p>
              <p>
                Email: <a href="mailto:mtsn-tambakberas@kemenag.go.id"><span class="text-blue-500 underline"> office@formula1.com</span></a>
              </p>
            </div>
          </div>
          <div></div>
        </div>

        <div>
          <hr class="mt-4 border-b border-black" />
        </div>
        
        <div class="container-xl">

        <div class="m-2">
            <table class="w-[300px] border-0 text-left text-sm">
            <tr>
              <th>Name</th>
              <th>:</th>
              <th>Lewis Hemilton</th>
            </tr>
            <tr>
              <th>NIP</th>
              <th>:</th>
              <th>1999201290</th>
            </tr>
          </table>

          <table class="min-w-full border-collapse border border-black">
            <thead>
              <tr>
                <th style="width: 15%" class="text-sm border border-black px-4">Tanggal</th>
                <th style="width: 15%" class="text-sm border border-black px-4">Keterangan</th>
                <th style="width: 60%" class="text-sm border border-black px-4">service</th>
              </tr>
            </thead>
            <tbody>
              
                  <tr>
                    <td class="text-sm  border border-black px-4 text-center" style="width: 15%">Date</td>
                    <td class="text-sm border border-black px-4 text-center" style="width: 15%">Information</td>
                    <td class="text-sm border border-black px-4 text-center" style="width: 60%">service</td>
                    
                  </tr>
            </tbody>
          </table>
          </div>
        </div>
      </body>
    </html>
  `;
};
export async function GET() {
  try {
    const htmlContent = generateHTML();
    const pdfBuffer = await generatePdf(htmlContent);

    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=generated-laporan.pdf',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to generate PDF' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
