export const getFtmBalance = (address, apiKey) =>
  `https://api.ftmscan.com/api?module=account&action=balance&address=${address}&apikey=${apiKey}`;

export const getNormalTransactionsFtm = (address, apiKey) =>
  `https://api.ftmscan.com/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${apiKey}`;
