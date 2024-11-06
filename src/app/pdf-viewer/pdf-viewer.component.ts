import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {
  @ViewChild('foxitIframe', { static: true })
  foxitIframe!: ElementRef<HTMLIFrameElement>;

  private pdfBuffer: ArrayBuffer | null = null; // To store PDF data until iframe is ready

  ngOnInit(): void {
    this.foxitIframe.nativeElement.addEventListener('load', () => {
      console.log('Iframe loaded');
      // Send PDF data if it's already available
      if (this.pdfBuffer) {
        this.sendPDFToIframe(this.pdfBuffer);
      }
    });
  }

  onFileUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];

    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const buffer = e.target?.result;

        if (buffer instanceof ArrayBuffer) {
          console.log('PDF buffer ready to send to iframe:', buffer);
          this.pdfBuffer = buffer; // Store the buffer

          // Send the buffer if the iframe is already loaded
          if (this.foxitIframe.nativeElement.contentWindow) {
            this.sendPDFToIframe(buffer);
          }
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  }

  private sendPDFToIframe(buffer: ArrayBuffer): void {
    this.foxitIframe.nativeElement.contentWindow?.postMessage(buffer, '*');
    console.log('PDF buffer sent to iframe');
  }
}
