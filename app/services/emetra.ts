import { parse } from 'node-html-parser';

const EMETRA = 'http://consulta.muniguate.com/emetra/despliega.php';

export const getEmetraInfo = async (type: string, number: string) => {
  const plate = new FormData();
  plate.append('tplaca', type);
  plate.append('nplaca', number);
  const emetraRequest = await fetch(EMETRA, {
    method: 'POST',
    body: plate,
  });
  const htmlString = await emetraRequest.text();

  const plateString = `${type}-${number}`.toUpperCase();

  const html = parse(htmlString);
  const tables = html.querySelectorAll('table');
  const infoTable = tables[0].querySelector('tbody');
  const multasTable = html
    .getElementById('transito')
    ?.querySelectorAll('tbody');
  const info = infoTable?.innerText
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .replace(/\s+/g, ' ')
    .replace(/No Disponible/gm, '')
    .replace(plateString, '')
    .trim();
  const multas = multasTable?.map((multa) => {
    return multa.innerText
      .replace(/(\r\n|\n|\r)/gm, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  });

  return {
    info,
    tieneMultas: multasTable?.length > 0 ? true : false,
    multas: multas?.filter((multa) => multa) ?? 'No tiene multas pendientes.',
  };
};
