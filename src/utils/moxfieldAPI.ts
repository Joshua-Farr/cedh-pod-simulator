const myHeaders = new Headers();
myHeaders.append("accept", "application/json, text/plain, */*");
myHeaders.append(
  "accept-language",
  "en-US,en;q=0.9,es-US;q=0.8,es;q=0.7,ja-JP;q=0.6,ja;q=0.5"
);
myHeaders.append(
  "authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtb2xvdG92Y2F0dGFpbCIsImp0aSI6IjEzOWM3NDQ4LTUwZGEtNDg2MC04NmMwLWQ1MDU2YmE1NjJkMCIsImh0dHA6Ly93d3cubW94ZmllbGQuY29tL3dzLzIwMTYvMDgvaWRlbnRpdHkvY2xhaW1zL1VzZXJJZCI6IjQwODI0NCIsImh0dHA6Ly93d3cubW94ZmllbGQuY29tL3dzLzIwMTYvMDgvaWRlbnRpdHkvY2xhaW1zL0VtYWlsQ29uZmlybWVkIjoiVHJ1ZSIsImFkdWx0IjoiYWFjMTA3MGMtNzRlZi00ZGFiLTk1ZTktNTc3MmYxODcyNTMzIiwiZXhwIjoxNzE2NTEwNDE1LCJpc3MiOiJodHRwczovL21veGZpZWxkLWFwaS5henVyZXdlYnNpdGVzLm5ldC8iLCJhdWQiOiJ1c3IifQ.dqUvmgI0qzwCDG5jsEQwXe22FlD0zbY0jEojt0RjpJk"
);
myHeaders.append(
  "cookie",
  "_ga=GA1.1.1122750768.1715535303; ncmp.domain=moxfield.com; _sharedid=3235f8cc-6f64-4cb1-893c-24a762b7aa70; _cc_id=535ef4eaa5f83b30d134bee8118352bd; panoramaId_expiry=1716772881920; panoramaId=96dc7a7c8ae589aef226a40ee6d1185ca02c24af21fefb5a05b42e351122b054; panoramaIdType=panoDevice; logged_in=true; _ga_BW2XPQDNK2=GS1.1.1716509189.32.1.1716509453.0.0.0; refresh_token=0b8ba98f-8273-483a-9d15-e116658d1119; cto_bundle=x8gP019tQXg0TU85VzZWcWE4Skt5JTJGdmclMkZBTkNHTGJCUzBqUzFaUTc0TUIwZGs4RHVpYlFmN09SUmF6JTJGUGp5RjBYNGF1Tlo3SlE2SnRJSlpSYlBsSFg4c1U1ZElma0dSS2ZGJTJGOW9JTFJVQlElMkJNamMxMTJXNEZEa0ZrdyUyRmR6bDFhck82Vw; cto_bidid=LVwbeF9ZWDZ4NkRrWXBsd2JpVm9OaEI0MFNhOTd3dDJGOFl4V0tKQkZ1JTJGZzg5UWlROUhiWWpZY1JMbG94Z3F6RVNodHY4UjNQR1NRQ2JOeWtTM3lXNXZ5VURBJTNEJTNE"
);
myHeaders.append("origin", "https://www.moxfield.com");
myHeaders.append("priority", "u=1, i");
myHeaders.append("referer", "https://www.moxfield.com/");
myHeaders.append(
  "sec-ch-ua",
  '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"'
);
myHeaders.append("sec-ch-ua-mobile", "?1");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-site", "same-site");
myHeaders.append(
  "user-agent",
  "Mozilla/5.0 (Linux; Android 8.0.0; SM-G965U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36"
);
myHeaders.append("x-moxfield-version", "2024.05.23.3");

export const moxFieldApi = async (deckID: string) => {
  const requestOptions: RequestInit = {
    mode: "cors",
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const response = await fetch(
    `https://api2.moxfield.com/v3/decks/all/${deckID}`,
    requestOptions
  );

  const deckInfo = await response.json();

  console.log(deckInfo);
};
