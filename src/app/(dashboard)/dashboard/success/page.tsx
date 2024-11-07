"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import Link from "next/link";
import { ArrowLeftCircleIcon } from "lucide-react";
import { BellAlertIcon } from "@heroicons/react/20/solid";

const Success = () => {
  const [loading, setLoading] = useState(false);

  // Simulate invoice download as a text file (alternative to PDF)
  const downloadInvoiceText = () => {
    setLoading(true);

    // Example invoice text data
    const invoiceData = `Invoice for 10 Gram 22k Gold\nSubtotal: ₹120000\nFee: ₹5000\nVAT: ₹18000\nTotal: ₹135000`;

    // Generate the file and download
    const blob = new Blob([invoiceData], { type: "text/plain" });
    saveAs(blob, "Invoice_Transaction.txt");

    setLoading(false);
  };

  // Simulate invoice download as PDF (using jsPDF)
  const downloadInvoicePDF = () => {
    setLoading(true);

    // Create PDF with jsPDF
    const doc = new jsPDF();

    // Add text to the PDF
    doc.text("Invoice for 10 Gram 22k Gold", 20, 20);
    doc.text(`Subtotal: ₹120000`, 20, 30);
    doc.text(`Fee: ₹5000`, 20, 40);
    doc.text(`VAT: ₹18000`, 20, 50);
    doc.text(`Total: ₹135000`, 20, 60);

    // Save PDF file
    doc.save("Invoice_Transaction.pdf");

    setLoading(false);
  };

  return (
    <section className="container mx-auto p-6">
      <div className="mb-4 flex items-center justify-between">
        <Link href={"/dashboard"}>
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-yellow-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            <ArrowLeftCircleIcon
              aria-hidden="true"
              className="-ml-0.5 h-5 w-5"
            />
            Back
          </button>
        </Link>

        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-md bg-yellow-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        >
          <BellAlertIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
        </button>
      </div>
      <div className="rounded-lg bg-green-100 p-6 text-center shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-green-800">
          Transaction Successful!
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          Your payment has been successfully processed. Thank you for your
          purchase!
        </p>

        {/* Invoice download buttons */}
        <div className="mt-6">
          <Button
            className="rounded-lg bg-yellow-600 px-6 py-2 text-white hover:bg-yellow-500"
            onClick={downloadInvoicePDF}
            disabled={loading}
          >
            {loading ? "Generating..." : "Download Invoice (PDF)"}
          </Button>
        </div>

        {/* Alternative: Text file download */}
        <div className="mt-4">
          <Button
            className="rounded-lg bg-yellow-600 px-6 py-2 text-white hover:bg-yellow-500"
            onClick={downloadInvoiceText}
            disabled={loading}
          >
            {loading ? "Generating..." : "Download Invoice (Text File)"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Success;
