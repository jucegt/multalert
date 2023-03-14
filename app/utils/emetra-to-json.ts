import { HTMLElement } from 'node-html-parser';

const finesToJson = (table: HTMLElement) => {
  const tableHTML = table as unknown as HTMLTableElement;

  const fineList: string[][] = [];

  const headTh =
    tableHTML
      .querySelector('thead')
      ?.querySelector('tr')
      ?.querySelectorAll('th') || [];
  const finesHeader = Array.from(headTh).map((td) =>
    td.innerText.trim().toLowerCase()
  );

  const tBodys = tableHTML.querySelectorAll('tbody');
  Array.from(tBodys).map((tBody) => {
    const tRows = tBody.querySelectorAll('tr');
    Array.from(tRows).map((row) => {
      const tDatas = row.querySelectorAll('td');
      const fines = Array.from(tDatas).map((data) =>
        data.innerText
          .replace(/(\r\n|\n|\r)/gm, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      );
      if (fines.length) fineList.push(fines);
    });
  });

  var fine = fineList.map((multa) =>
    multa.reduce((finesObject: { [key: string]: string }, value, index) => {
      if (index === 0) {
        finesObject[finesHeader[index]] = value.replace(/-/g, '/');
      } else if (index === 1) {
        finesObject[finesHeader[index]] = value.replace(/_/g, ' ');
      } else {
        finesObject[finesHeader[index]] = value;
      }
      return finesObject;
    }, {})
  );

  return fine;
};

export default finesToJson;
