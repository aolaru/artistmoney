import { readFile } from "node:fs/promises";
import vm from "node:vm";

function stripTypeDeclarations(source) {
  return source.replace(/export type[\s\S]*?\n};\n/g, "");
}

function convertExportedConst(source, exportName) {
  const pattern = new RegExp(`export const\\s+${exportName}\\s*:[^=]+=`,"m");
  if (pattern.test(source)) {
    return source.replace(pattern, `const ${exportName} =`);
  }

  return source.replace(new RegExp(`export const\\s+${exportName}\\s*=`,"m"), `const ${exportName} =`);
}

export async function loadExportedDataModule(filePath, exportName) {
  const source = await readFile(filePath, "utf8");
  const transformed = [
    stripTypeDeclarations(source)
      .replace(/\sas const;/g, ";")
      .replace(/\sas const\s*$/gm, "")
      .replace(/\r\n/g, "\n"),
    ""
  ].join("");

  const prepared = `${convertExportedConst(transformed, exportName)}\nmodule.exports = ${exportName};\n`;
  const context = {
    module: { exports: {} },
    exports: {}
  };

  vm.runInNewContext(prepared, context, { filename: filePath });
  return context.module.exports;
}
