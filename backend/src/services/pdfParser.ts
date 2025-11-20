import pdfParse from "pdf-parse";

export async function parsePdf(bufferOrText: string | Buffer): Promise<string> {
  // If a Buffer is passed, pdf-parse expects Buffer; if a string, it will treat as text
  const data = await pdfParse(Buffer.isBuffer(bufferOrText) ? bufferOrText : Buffer.from(bufferOrText));
  return data.text;
}
