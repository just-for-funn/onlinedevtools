import {parse} from 'yaml'
export class YamlToEnv {
    static convertToEnvList(value: string): string[]{
        let parsed = parse(value);
        return Object.keys(parsed)
            .map(o=> this.getPath(o , parsed))
            .reduce((a,b)=>a.concat(b),[]);
    }

    static getPath(o: string, obj: any): string[] {
        if(typeof obj[o] === 'object' && !Array.isArray(obj[o]))
        {
            return Object.keys(obj[o])
                .map(k=> this.getPath(k , obj[o]))
                .reduce((a,b)=>a.concat(b),[])
                .map(i=> o+"_"+i)
                .map(i=> i.toUpperCase());

        }else{
            return [YamlToEnv.normalize(o)];
        }
    }

    private static normalize(name: string): string {
        return name.toUpperCase().split('.').join('_');
    }
}
