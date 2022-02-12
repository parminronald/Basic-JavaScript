//Type data string menggunakan Petik "xx" atau 'xx'
// Menggabungkan string atau string concate menggunakan + (Plus) {string1+string2}

document.writeln("Ronald Suparmin");
document.writeln(<br></br>);
document.writeln("Belajar JavaScript");
document.writeln(<br></br>);
document.writeln("Ronald Suparmin" + "Belajar JavaScript");
document.writeln(<br></br>);
// Escape Sequence
// \n	--> enter
// \t	--> TAB
// \'	--> ' petik satu
// \"	--> " petik dua
// \\	--> \ backslash
document.writeln("<textarea cols='100' row='10'>");
document.write("Alex \nRonald \nSuparmin");
document.write("Belajar\tJavaScript\\Sendiri");
document.write("\' ini Petik 1");
document.write("\" ini Petik 2");
document.write("\\ ini Backslash");
document.writeln("</textarea>");