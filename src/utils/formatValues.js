export function formatDate(string) {
  if (!string) return '';

  const timestamp = Date.parse(string);

  if (Number.isNaN(timestamp)) {
    return '';
  }

  const ano = string.getFullYear();
  const mes = (string.getMonth() + 1).toString().padStart(2, '0');
  const dia = string.getDate().toString().padStart(2, '0');

  return `${dia}/${mes}/${ano}`;
}

export function formatDateWithTime(string) {
  if (!string) return '';
  const timestamp = Date.parse(string);

  if (Number.isNaN(timestamp)) {
    return '';
  }

  try {
    const date = string.split('T')[0];
    const time = string.split('T')[1].split('.')[0];

    return `${date.split('-').reverse().join('/')} ${time}`;
  } catch {
    return string;
  }
}
