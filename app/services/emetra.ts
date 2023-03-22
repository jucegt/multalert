import { parse } from 'node-html-parser';

import emetraToJson from '~/utils/emetra-to-json';
import { sLow } from '~/utils/plate-format';

const EMETRA = process.env.EMETRA_URL;

export const getEmetraInfo = async (type: string, number: string) => {
  const url = new URL(EMETRA || '');
  const plate = new FormData();
  plate.append('tplaca', type);
  plate.append('nplaca', number);
  const emetraRequest = await fetch(url, {
    method: 'POST',
    body: plate,
  });
  const htmlString = await emetraRequest.text();

  const plateString = `${type}-${number}`.toUpperCase();

  const html = parse(htmlString);
  const tables = html.querySelectorAll('table');
  const infoTable = tables[0].querySelector('tbody');
  const info = infoTable?.innerText
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .replace(/\s+/g, ' ')
    .replace(/No Disponible/gm, '')
    .replace(plateString, '')
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
    .trim();

  const finesTable = html.getElementById('transito');
  const fines = finesTable ? emetraToJson(finesTable) : [];

  return {
    type: sLow(type),
    number: sLow(number),
    info,
    message:
      fines.length > 0
        ? `Tienes ${fines.length} ${
            fines.length > 1 ? 'multas pendientes' : 'multa pendiente'
          }`
        : 'No tienes multas pendientes',
    total: fines.length,
    fines,
  };
};
