import fs from "fs";
import path from "path";

function textStream(lines) {
  const body = lines.map((l) => l).join("\n");
  return `<< /Length ${body.length} >>\nstream\n${body}\nendstream`;
}

const page1Content = textStream([
  "BT /F1 26 Tf 72 700 Td (UI Library - Sample PDF) Tj ET",
  "BT /F2 13 Tf 72 665 Td (This file is used to demo the PDF Viewer element.) Tj ET",
  "BT /F2 13 Tf 72 645 Td (Page 1 of 3) Tj ET",
]);

const page2Content = textStream([
  "BT /F1 26 Tf 72 700 Td (Second Page) Tj ET",
  "BT /F2 13 Tf 72 665 Td (Scroll or paginate to see this page render.) Tj ET",
  "BT /F2 13 Tf 72 645 Td (Page 2 of 3) Tj ET",
]);

const page3Content = textStream([
  "BT /F1 26 Tf 72 700 Td (Third Page) Tj ET",
  "BT /F2 13 Tf 72 665 Td (Real PDF rendering, powered by react-pdf.) Tj ET",
  "BT /F2 13 Tf 72 645 Td (Page 3 of 3) Tj ET",
]);

const objects = [
  null, // 0 is unused
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R 4 0 R 5 0 R] /Count 3 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 6 0 R /F2 7 0 R >> >> /Contents 8 0 R >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 6 0 R /F2 7 0 R >> >> /Contents 9 0 R >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 6 0 R /F2 7 0 R >> >> /Contents 10 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  page1Content,
  page2Content,
  page3Content,
];

let pdf = "%PDF-1.4\n";
const offsets = [0];

for (let i = 1; i < objects.length; i++) {
  offsets.push(Buffer.byteLength(pdf, "latin1"));
  pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
}

const xrefOffset = Buffer.byteLength(pdf, "latin1");
const count = objects.length;

pdf += `xref\n0 ${count}\n`;
pdf += "0000000000 65535 f \n";
for (let i = 1; i < count; i++) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${count} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

const outPath = path.join(process.cwd(), "public", "sample.pdf");
fs.writeFileSync(outPath, pdf, "latin1");
console.log("Wrote", outPath, `(${Buffer.byteLength(pdf, "latin1")} bytes)`);
