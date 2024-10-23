import { Page } from "playwright/types/test";
import PropertiesReader from "properties-reader";

import * as path from 'path';
let filePath: string = './DataFolder/Login/'
export default class FileUtils {


    constructor(private page: Page) {
        this.page = page;

    }
    /**
     * 
     * @param fileName Name of the property file required
     * @param keyValue required key for which value has to be extracted
     * @returns 
     */

    public static async setPropertyValue(fileName: string, keyValue: string, value: string): Promise<any> {
        const propertiesPath = filePath + fileName + '.properties'
        const writer = PropertiesReader(propertiesPath);
        writer.set(keyValue, value)
        writer.save(propertiesPath, function then(err, data) {
            if (err) {
                console.log("error in write a properties file")
            }
            console.log("saved data to properties file")
        })
    }

    public static async getPropertyValue(fileName: string, keyValue: string): Promise<string> {
        const properties = PropertiesReader(filePath + fileName + '.properties', 'utf-8', { allowDuplicateSections: true })
        // console.log(process.env.ENV_PATH  + fileName + '.properties')
        var name: string
        try {
            name = properties.get(keyValue) as string
            return name
        } catch (Error) {
            return ("KeyValue not found")

        }
    }
    public static async getPropertyFile(fileName: string): Promise<any> {
        const properties = PropertiesReader(filePath + fileName + '.properties', 'utf-8', { allowDuplicateSections: true })

        return properties
    }
}