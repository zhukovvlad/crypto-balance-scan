export const getFtmBalance = (address, apiKey) =>
  `https://api.ftmscan.com/api?module=account&action=balance&address=${address}&apikey=${apiKey}`;
