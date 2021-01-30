import { __spreadArrays } from 'tslib';
import {parse, parseAllDocuments} from 'yaml'
export class YamlToEnv {
    static convertToEnvList(value: string): string[]{
        if(!value.includes(':')){
            return [];
        }
        let jsons = parseAllDocuments(value)
            .map(o=>o.toJSON());
        let uniqueValues = jsons.map(o=> this.parseObject(o))
            .reduce((a,b)=> a.concat(b) , [])
            .reduce((a,b)=> a.add(b), new Set<string>());
         return Array.from(uniqueValues);   
    }

    private static parseObject(parsed: any): string[] {
        return Object.keys(parsed)
            .map(o => this.getPath(o, parsed))
            .reduce((a, b) => a.concat(b), []);
    }

    static getPath(o: string, obj: any): string[] {
        if(typeof obj[o] === 'object' && !Array.isArray(obj[o]) && obj[o] != undefined && obj[o] != null)
        {
            return Object.keys(obj[o])
                .map(k=> this.getPath(k , obj[o]))
                .reduce((a,b)=>a.concat(b),[])
                .map(i=> o+"_"+i)
                .map(i=> YamlToEnv.normalize(i));

        }else{
            return [YamlToEnv.normalize(o)];
        }
    }

    private static normalize(name: string): string {
        return name.toUpperCase()
            .split('.')
            .join('_')
            .split('-')
            .join("");
    }
}
