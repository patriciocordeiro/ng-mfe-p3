declare const require: any;

const moduleMap: any = {};

export function loadModule(umdFileURL: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {

    if (moduleMap[umdFileURL]) {
      resolve(window);
      return;
    }

    const script = document.createElement('script');
    script.src = umdFileURL;

    script.onerror = reject;

    script.onload = () => {
      moduleMap[umdFileURL] = true;
      resolve(window);
    };

    document.body.append(script);
  });
}

