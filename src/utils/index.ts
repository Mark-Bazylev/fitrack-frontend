export function sleep(ms: number, fail?: boolean) {
  return new Promise((resolve, reject) => {
    setTimeout(fail ? reject : resolve, ms);
  });
}
